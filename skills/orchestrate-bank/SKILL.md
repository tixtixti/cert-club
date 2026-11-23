---
name: orchestrate-bank
description: Orchestrate end-to-end question authoring, cold evaluation, difficulty hardening, and option hint refinement across all domains of a cert bank using subagents. Use when populating or expanding a scaffolded bank to its 2x baseline without manually running per-domain sessions.
argument-hint: "<cert-slug>"
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Subagent, Agent, AskUserQuestion
---

# Orchestrate a bank across subagents

Chains `author-questions`, `evaluate-questions`, `harden-domain-questions` and
`add-option-hints` across every domain of one bank.
`certs/AUTHORING-A-CERT-WITH-SKILLS.md` Phases 2 and 3 own the workflow; this
skill is how a coordinating session drives it through subagents. It needs an
agent environment that can spawn isolated subagents — use whatever that
environment calls its subagent tool. Without one, run the runbook by hand.

## Coordinator rules — these make parallel runs safe

- **One writer per file.** Each subagent edits only its own
  `questions/<domain>.json`. Several skills inside one domain share that file,
  so a domain's skills run **in sequence inside one subagent**, never as
  parallel siblings.
- **The coordinator owns `review-progress.md`.** Every delegated skill ends by
  appending a note there; in parallel, that is concurrent edits to one file.
  Tell each subagent to return its note as text instead, and append the notes
  yourself between stages.
- **Subagents gate on their own domain, not the bank.** The position and length
  guards in `npm run check` are whole-bank: a subagent iterating to green would
  start padding other domains' half-finished items. Tell subagents to run
  `npm run validate` and `npm run metrics -- <slug>` and report, not to fix
  outside their file; the bank-wide gate runs at each stage boundary below.
- **Fresh context where independence matters.** Evaluation subagents get no
  prompt history from the stage that drafted or edited what they judge.

## Stages

1. **Orient and size.** Read `manifest.json` and `review-progress.md`, then run
   `npm run balance -- --2x <slug>`. Each domain's quota — and per-skill quota
   where skills are declared — is the balance output. If every delta is met,
   stop.
2. **Author** — one subagent per domain, running `author-questions` against its
   quota, one skill at a time where declared. New items land as `draft`.
   Then, as coordinator: append the returned notes, run `npm run check`, and
   resolve any whole-bank guard failure before moving on.
3. **Evaluate** — one fresh subagent per domain, running `evaluate-questions`.
4. **Close the demotion loop.** Every item left `draft` and every `unsupported`
   disposition goes back through stage 2 then stage 3 for that domain. Repeat
   until nothing is outstanding or stop-and-ask fires.
5. **Harden** — one subagent per domain, running `harden-domain-questions`.
   Default outcome is no change.
6. **Hint** — one subagent per domain, running `add-option-hints`.
7. **Re-evaluate what stages 5–6 touched.** Hardening rewrites distractors and
   hinting adds claims to keyed options, and neither pass may judge its own
   output. Run one fresh `evaluate-questions <slug> <domain-slug>` subagent per
   changed domain, scoped to the item IDs the stage 5–6 notes list as edited —
   not `--diff`, which in an uncommitted run sweeps every domain's new items.
   Route any demotion through stage 4 again.
8. **Reconcile.** Append the consolidated notes, run `npm run sync-dates`,
   `npm run check` and `npm run metrics -- <slug> --markdown`, and record a
   dated summary — authoring, evaluation, hardening, hint dispositions, and
   what remains thin — in `review-progress.md`.

## Stop and ask

- **A subagent reports a fact whose only source is gated.** Escalate; never let
  a subagent swap in a citation that does not establish the claim.
- **Evaluation demotes several items in one domain**, or the stage 4 loop
  repeats on the same items. That pattern points at the source mapping or the
  blueprint extraction, which is a human call before more drafting.
- **A whole-bank guard failure that padding distractors cannot close.**
- **Promotion.** Never flip `manifest.status`; that is `audit-coverage` and a
  human, in Phase 4.

## Done when

- Every domain and skill meets its target in `npm run balance -- --2x <slug>`.
- Every question is `status: "reviewed"`, including items stages 5–6 touched,
  each re-confirmed by an independent evaluation.
- `review-progress.md` carries the dated notes, written by the coordinator.
- `npm run check` is green.
