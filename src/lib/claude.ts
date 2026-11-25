import type { Question } from "../types";

/**
 * "Work with Claude" helpers. The app has no backend and never calls an API:
 * everything here builds plain text the learner copies or hands to claude.ai
 * themselves. Option letters follow the order the question was shown in, so
 * the text matches what the learner saw on screen.
 */

export const CLAUDE_NEW_CHAT_URL = "https://claude.ai/new";

/* Same lettering as getOptionLabel in quiz.ts. Kept local so this module has
 * no runtime imports, which is what lets the Node test runner load it. */
const getOptionLabel = (index: number) => String.fromCharCode(65 + index);

export interface MissedQuestion {
  question: Question;
  selectedOptionIds: readonly string[];
  domainName?: string;
}

function labelsFor(question: Question, optionIds: readonly string[]): string {
  const labels = question.options
    .map((option, index) =>
      optionIds.includes(option.id) ? getOptionLabel(index) : null,
    )
    .filter((label): label is string => label !== null);
  return labels.length > 0 ? labels.join(", ") : "(no answer)";
}

export function formatQuestionForClaude(
  question: Question,
  selectedOptionIds: readonly string[],
  domainName?: string,
): string {
  const lines: string[] = [];
  lines.push(
    `Domain: ${domainName ?? question.domain} · Difficulty: ${question.difficulty}`,
    "",
    question.stem,
    "",
  );
  question.options.forEach((option, index) => {
    lines.push(`${getOptionLabel(index)}. ${option.text}`);
  });
  lines.push(
    "",
    `My answer: ${labelsFor(question, selectedOptionIds)}`,
    `Correct answer: ${labelsFor(question, question.correct)}`,
    "",
    `Bank explanation: ${question.explanation}`,
  );

  const notes = question.options
    .map((option, index) => {
      const note = question.distractorNotes?.[option.id];
      return note ? `- ${getOptionLabel(index)}: ${note}` : null;
    })
    .filter((note): note is string => note !== null);
  if (notes.length > 0) {
    lines.push("", "Why the other options are wrong:", ...notes);
  }

  lines.push("", `Source: ${question.sourceNote} — ${question.sourceUrl}`);
  return lines.join("\n");
}

export function buildMissedQuestionsExport(
  certName: string,
  missed: readonly MissedQuestion[],
  totalQuestions: number,
): string {
  const count = missed.length;
  const header = [
    `I just finished a ${certName} practice session and missed ${count} of ${totalQuestions} question${totalQuestions === 1 ? "" : "s"}. They are listed below with my answer, the correct answer, the question bank's explanation and its public source.`,
    "",
    "Act as my study coach:",
    "1. Group the misses by underlying concept and tell me which weak spots they reveal.",
    "2. For each concept, explain it briefly and say what I most likely misunderstood.",
    "3. Then quiz me with new questions on those concepts, one at a time, waiting for my answer before moving on.",
    "",
    "Treat the cited sources as the authority; if you are unsure about a detail, say so rather than guess.",
  ];
  const body = missed.flatMap((item, index) => [
    "",
    "---",
    `## Question ${index + 1} of ${count}`,
    "",
    formatQuestionForClaude(
      item.question,
      item.selectedOptionIds,
      item.domainName,
    ),
  ]);
  return [...header, ...body].join("\n");
}
