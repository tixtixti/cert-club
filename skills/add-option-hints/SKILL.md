---
name: add-option-hints
description: Pedagogical refinement pass over one domain of an existing cert bank — add option-level hints (hintText) to items testing bare tools, services, APIs, or parameters, and separate embedded glosses into clean option text and hints, leaving statement-style items intact. Use after questions are authored and calibrated. Not for writing new questions (author-questions) and not for verifying correctness (evaluate-questions).
argument-hint: "<cert-slug> <domain-slug>"
allowed-tools: Read, Edit, Glob, Grep, WebSearch, WebFetch, AskUserQuestion, Bash
---

# Add option hints to a domain

`CONTRIBUTING.md` § Writing good questions, the _Bare option text and optional
`hintText`_ rule, owns everything this skill applies: what counts as bare text,
which items stay statement-style, the sourcing rule for a gloss, and the three
rules that keep a hint from answering its item. Read it there; this skill is
the order of operations for one domain and restates none of it.

A gloss is an option claim drafted by this pass. Two consequences:

- **Sourcing is the question's, not the vendor's at large.** A keyed option's
  hint must be supported by the question's own `sourceUrl`; only a distractor's
  hint may lean on another official page, and only per CONTRIBUTING's
  _Cross-page facts_. `certs/VENDORS.md` says which hosts are citable — it is
  not a licence to source a key's gloss from any of them.
- **`check-claims` is not your verifier.** It fetches only the `.md`-serving
  hosts its header names; on every other host it reports inconclusive. Read
  each cited page yourself.

## Stages

1. **Scope one domain.** Never several. Read the cert's `manifest.json`, the
   target `questions/<domain>.json`, and `review-progress.md` — earlier hint
   passes and their exceptions are recorded there.
2. **Classify every question** as _candidate_ (options are bare tools,
   services, APIs, flags, parameters or concepts), _embedded gloss_ (options
   read "Service X, because it provides Y"), or _statement-style_ (the option
   text is the answer content). Statement-style items are bypassed entirely.
3. **Split embedded glosses.** Trim `text` to the bare name as the live exam
   would show it and move the explanatory clause into `hintText`, unchanged in
   substance — this is a move, not a rewrite.
4. **Draft glosses for candidate items**, with the cited page open, applying
   CONTRIBUTING's three hint rules to the item's gloss set as a whole, not
   option by option — the tells they guard against only show up across the set.
5. **Leave `correct`, `status` and `sourceCheckedAt` alone.** This pass
   changes presentation, never the key, and it makes no review or freshness
   claim. New glosses on keyed options are unreviewed until an independent
   `evaluate-questions --diff` run reads them against the page.
6. **Check the guards.** Splitting a gloss out of `text` shortens options and
   moves the length figures. Read `npm run metrics -- <slug>`; if the split
   pushes the key into the length tell, pad distractors — never trim a key into
   inaccuracy.
7. **Iterate to green on `npm run check`.** If `sync-dates:check` fails, run
   `npm run sync-dates`.
8. **Append a dated note to `review-progress.md`** (under `orchestrate-bank`,
   return it to the coordinator instead): items hinted, options glossed, items
   deliberately left without hints and why.

## Stop and ask

- **Splitting would leave duplicate option text** — several options share a
  bare name and differ only in their clauses. Keep the distinctive wording in
  `text`, or route the item to `author-questions` for rework.
- **No neutral gloss set exists** — every attempt reveals the key. Leave the
  item unhinted and record why.
- **A key's gloss needs a fact its cited page does not state.** Leave that
  item unhinted rather than citing around it; re-sourcing is
  `author-questions` work.
- **An option or key turns out factually wrong.** Hand off to
  `evaluate-questions`; do not fix it here.

## Done when

- Every candidate item in the domain is either fully glossed or recorded as
  deliberately unhinted, and no item carries a partial gloss set.
- Statement-style items carry no `hintText`.
- `review-progress.md` carries the dated note, and `npm run check` is green.
- The batch is flagged for an independent `evaluate-questions --diff` pass.
