# Plan: Update CCDV-F and CCAR-P to the December 2026 exam guides (v1.1)

Status: DRAFT 2026-11-21. Decisions D1–D6 below are OPEN. Phase 1 cannot
start until they are answered.

Implement with `implement-phase` conventions. Complete phases in order, and
mark a phase `COMPLETE` only once its acceptance criteria pass. Run
`npm run check` before marking any phase complete. Every phase must also
follow the existing skills in `skills/`: `audit-sources`, `author-questions`,
`evaluate-questions`, `harden-domain-questions`, `audit-coverage`,
`orchestrate-bank` and `condense-review-progress`. This plan says _what_ to
change and in what order. Those skills and `CONTRIBUTING.md` say _how_. Where
they disagree, they win.

Sourcing assumption: Anthropic published these objectives alongside its own
documentation, so authoring sessions are expected to find citable public
sources for every new objective. This plan does not pre-verify sources per
topic. That remains each authoring session's job under the normal rules.

Companion files, in `plans/claude-guides-v1.1-update/`:

- `ccdv-f-mapping.csv`: all 106 CCDV-F items. Columns: `id, old_domain,
old_subdomain, new_domain, new_skill, disposition, reason`.
- `ccar-p-mapping.csv`: all 126 CCAR-P items. Columns: `id, old_domain,
new_domain, new_skill, disposition, reason`.

A single reviewer produced these classifications on 2026-11-21, reading each
stem and key against the v1.1 objectives. They are a starting worklist, not
verdicts. Phase 2 re-reads every item before acting on its row.

---

## Background

### Source documents

| Guide  | Version                       | URL                                                                                                                                                   | Role                       |
| ------ | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| CCDV-F | 1.0, July 2026                | current `manifest.examUrl` (Everpath S3)                                                                                                              | What the bank was built on |
| CCDV-F | 1.1, Effective November 2026  | `https://cc.sj-cdn.net/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1794946716/Claude_Certified_Developer_-_Foundations_Exam_Guide.pdf`                | Same objectives as 1.0     |
| CCDV-F | **1.1, Effective Dec 7 2026** | `https://cc.sj-cdn.net/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1794946771/Claude_Certified_Developer_-_Foundations_Exam_Guide_Updated_Dec_7.pdf`  | **Target**                 |
| CCAR-P | 1.0, July 2026                | current `manifest.examUrl` (Everpath S3)                                                                                                              | What the bank was built on |
| CCAR-P | 1.1, Effective November 2026  | `https://cc.sj-cdn.net/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1794946331/Claude_Certified_Architect_-_Professional_Exam_Guide.pdf`               | Same objectives as 1.0     |
| CCAR-P | **1.1, Effective Dec 7 2026** | `https://cc.sj-cdn.net/instructor/6nizmqk8tpzpfjvt6qmmav7rh/public/1794946420/Claude_Certified_Architect_-_Professional_Exam_Guide_Updated_Dec_7.pdf` | **Target**                 |

**Trap: two different guides are both labelled "Version 1.1".** The November
guides changed only §9–§15: registration, rescheduling, ID and support, plus a
document-control row reading "1.1 Registration, identification, and support
updates". Their objectives match v1.0 word for word, checked by word diff on
2026-11-21. The Dec 7 guides also call themselves "1.1", with the
document-control row "Revised objectives, descriptions, and sample items", and
they replace the blueprint. Tell the two apart by the effective date in the
version block and by the `_Updated_Dec_7` filename. Never rely on the version
number alone.

### What changed: CCDV-F

| Field   | v1.0                                                     | v1.1 Dec 7                                                                    |
| ------- | -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Items   | 53                                                       | 70 (60 scored + 10 unscored, unidentified)                                    |
| Format  | Multiple-choice and multiple-response; each states count | Scenario-based multiple-choice; each item states how many responses to select |
| Skills  | 25, each with a published exam-share weight              | 22, **no weights published**                                                  |
| D8 name | Tools and MCPs                                           | Tools and MCP                                                                 |

| #   | Domain (slug unchanged)            | v1.0 |   v1.1 |
| --- | ---------------------------------- | ---: | -----: |
| 1   | `agents-and-workflows`             | 14.7 | **17** |
| 2   | `applications-and-integration`     | 33.1 | **20** |
| 3   | `claude-code`                      |  3.1 |  **8** |
| 4   | `eval-testing-and-debugging`       |  2.6 | **10** |
| 5   | `model-selection-and-optimization` | 16.8 | **12** |
| 6   | `prompt-and-context-engineering`   | 11.0 | **15** |
| 7   | `security-and-safety`              |  8.1 |      8 |
| 8   | `tools-and-mcps`                   | 10.6 |     10 |

The v1.1 skills, with the slugs this plan uses in `subdomain`:

- **D1:** `architecture-and-runtime-selection`, `agent-sdk-construction-and-hooks`, `agent-pattern-diagnosis`
- **D2:** `messages-api-mechanics`, `application-boundary-and-surface-behavior`, `configuration-and-sdlc-integration`, `integration-resilience`
- **D3:** `claude-code-operation`, `claude-code-customization-and-extension`
- **D4:** `evaluation-design`, `failure-mode-diagnosis`
- **D5:** `generation-mechanics-and-model-options`, `model-tier-selection-and-release-planning`, `cost-diagnosis-and-optimization`
- **D6:** `context-management-for-long-running-sessions`, `prompt-revision`, `structured-output-and-defensive-parsing`, `grounding-and-source-citation`
- **D7:** `prompt-injection-and-jailbreak-defense`, `deterministic-guardrails-and-least-privilege`, `api-key-and-credential-handling`
- **D8:** `tool-design-and-response-shaping`, `mcp-server-development-and-integration`, `capability-mechanism-selection`

Dropped outright:

- D2: Understanding Requirements, Systems Life Cycle, and Software Engineering
  Foundations (REST, JSON, async, version control, code review, refactoring).
- D5: Technical Fundamentals (SDKs wrapping REST, websockets).
- D1: the named third-party frameworks (Strands, LangGraph, PydanticAI).
- D5: fast mode, which is no longer named.

Moved: fundamental prompting techniques (zero-, single- and multi-shot) go
from D5 to D6 Prompt Revision.

### What changed: CCAR-P

| Field      | v1.0                                  | v1.1 Dec 7                                                                    |
| ---------- | ------------------------------------- | ----------------------------------------------------------------------------- |
| Items      | 63                                    | 70 (60 scored + 10 unscored)                                                  |
| Format     | Multiple-choice and multiple-response | Scenario-based multiple-choice; each item states how many responses to select |
| Objectives | 37 bullet tasks                       | 39 named, scenario-shaped skills, no weights                                  |
| Names      | `&` in domain names                   | `and` (slugs already use `and`, so they are unchanged)                        |

| #   | Domain (slug unchanged)                              | v1.0 |   v1.1 |
| --- | ---------------------------------------------------- | ---: | -----: |
| 1   | `solution-design-and-architecture`                   |   17 |     18 |
| 2   | `claude-models-prompting-and-context-engineering`    |   13 |     13 |
| 3   | `integration`                                        |   19 | **21** |
| 4   | `evaluation-testing-and-optimization`                |   16 |     17 |
| 5   | `governance-safety-and-risk-management`              |   14 | **16** |
| 6   | `stakeholder-communication-and-lifecycle-management` |   14 |  **7** |
| 7   | `developer-productivity-and-operational-enablement`  |    7 |      8 |

The v1.1 skills, with the slugs this plan uses in `subdomain`:

- **D1:** `task-delegation-between-claude-and-humans`, `end-to-end-architecture-evaluation`, `pattern-selection`, `orchestrator-subagent-decomposition`, `value-based-architectural-decisions`, `deployment-surface-and-agent-runtime`
- **D2:** `model-tier-selection`, `system-prompt-diagnosis-and-revision`, `prompting-technique-selection`, `context-composition-and-token-economics`, `cache-breakpoints-and-reusable-packaging`, `reasoning-effort-and-context-lifecycle`
- **D3:** `least-privilege-tool-configuration`, `authentication-and-authorization-posture`, `relieving-binding-performance-constraint`, `instrumentation-and-monitoring-gaps`, `retrieval-architecture-selection`, `connection-mechanism-selection`, `progressive-discovery-vs-monolithic`, `production-reliability-controls`
- **D4:** `evaluation-coverage-gaps`, `deriving-evaluations-from-business-processes`, `llm-as-judge-design-and-bias`, `experimental-design-for-configuration-comparison`, `root-cause-isolation`, `cost-and-latency-optimization`, `model-version-migration`
- **D5:** `guardrail-placement`, `prompt-injection-surface-and-controls`, `risk-assessment-and-ranking`, `human-in-the-loop-checkpoints`, `architectural-controls-for-compliance`, `bias-source-identification-and-mitigation`
- **D6:** `unsupportable-commitments`, `architecture-decision-records`, `operational-handoff-completeness`
- **D7:** `packaging-and-distributing-workflows`, `agent-sdk-and-claude-code-configuration`, `accountability-for-ai-generated-code`

Dropped outright:

- D6: structured discovery, stakeholder feedback loops, and lifecycle-phase
  support (monitoring, iteration).
- D7: debugging and operational issue resolution.
- D5: the named regulations (GDPR, HIPAA, FedRAMP), replaced by architectural
  controls that evidence an obligation.
- D2: chain-of-thought as a named technique, replaced by "prompted reasoning
  versus native thinking".

### Calibration parameters from the v1.1 samples

These are parameters only. Under the calibration firewall in `AGENTS.md`, no
sample text may be recorded here or in the banks, and no bank item may be an
analogue of a sample. That rule covers the vendor's own samples too.

| Set                     |                Stem words (mean) | Option words (mean) | Shape                                                                                                                                                           |
| ----------------------- | -------------------------------: | ------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CCDV-F v1.0 samples     |                       34 (32–37) |                  14 | Short scenario plus constraint; "which approach best fits"; transparently eliminable distractors                                                                |
| **CCDV-F v1.1 samples** |                   **66 (61–76)** |            **24.5** | Concrete artifact (event handling, cache layout, tool schema) + observed evidence; "which change most directly fixes"; every distractor a plausible partial fix |
| CCDV-F bank today       | 38 (easy 36, medium 40, hard 37) |                20.3 | Length does not track difficulty                                                                                                                                |
| CCAR-P v1.0 samples     |                               33 |                  10 | Short scenario                                                                                                                                                  |
| **CCAR-P v1.1 samples** |                           **84** |              **24** | Multi-constraint scenario; options name the binding constraint and the trade-off accepted; steps or traces given                                                |
| CCAR-P bank today       |          58 (medium 57, hard 59) |                21.6 | Options already close to the v1.1 length                                                                                                                        |

All six v1.1 samples are 4-option single-select. The format line still allows
multiple-response items, so the banks keep their multi-select share.

What follows:

- In CCDV-F, all 17 `easy` items sit below the new sample floor. No easy stem
  reaches the shortest v1.1 sample (61 words), and only 3 of the 106 stems do.
- The bank records three items as direct analogues of the v1.0 samples:
  `applications-and-integration-008`, `security-and-safety-003`/`-004` and
  `tools-and-mcps-012` (see `certs/ccdv-f/review-progress.md` § Official
  sample question inventory). That is a firewall concern in its own right.
  The v1.1 refresh is the moment to rework them away from the sample angle.
- CCAR-P needs longer, artifact-bearing stems more than it needs new facts.

### App behaviour that needs no change

`src/components/QuizQuestion.tsx` already renders "Select N answer(s)" for
every item. The new format line ("each item states how many responses to
select") is therefore met without editing any stems. Leave the existing stem
conventions as they are.

---

## Decisions

Status: OPEN. Each decision has a recommendation. Record the answer inline,
then flip this section to `RESOLVED`.

**D1. Bank size.** Choose 2× the 70 total items (**140**, recommended) or
2× the 60 scored items (120). `ADDING-A-CERT.md` defines the target as
`2 * examQuestionCount`, and CCAO-F set the precedent of 70 → 140 for a guide
with unscored items. Setting `examQuestionCount: 70` makes
`npm run balance -- --2x` report 140 with no tooling change. Every quota
below assumes 140.

**D2. CCDV-F skill weights.** v1.1 publishes none, and `skillSchema` requires
a positive `weight`.

- (a) **Recommended.** Remove `skills` from the CCDV-F manifest. `subdomain`
  stays on every item as a free-form label holding the v1.1 skill slug. That
  is how every other bank already works.
- (b) Split each domain's weight equally across its skills. This invents a
  blueprint fact the guide does not state, which conflicts with "never invent
  fields" in spirit.

With (a), the per-skill quotas in this plan become authoring guidance, and the
per-skill floors are checked by hand in Phase 6 rather than by
`balance --strict`.

**D3. Bank status during the transition.** Recommended: flip both banks to
`manifest.status: "draft"` in Phase 1 and back to `stable` in Phase 6, after
`audit-coverage`. Against v1.1, coverage is not in place until then
(`ADDING-A-CERT.md` § Bank status). The README table must change in the same
commit, because `test/readme-parity.test.mjs` enforces it.

**D4. Question IDs when an item changes domain.** About 26 CCDV-F items and 31
CCAR-P items move to a different domain file.

- (a) **Recommended.** Rename each moved item to
  `<slug>-<new-domain>-NNN`, using the next free number in the target file.
  Record an old → new ID table in `review-progress.md`. This keeps the
  one-file-one-prefix convention that every authoring skill and reader relies
  on. The cost is that learners' bookmarks, missed lists and attempt history
  for moved items stop resolving. The app already handles that case
  gracefully: `ResultsPage` shows "no longer in the question bank".
- (b) Keep IDs stable. Learner history survives, but files hold
  foreign-prefixed IDs.

Under either option, rewritten items keep their IDs, retired IDs are never
reused, and new items take the next free number.

**D5. Retirements.** The audit-sources workflow requires approval for every
retirement. The 12 candidates are listed in Phase 2. Approve the list as a
whole or strike individual items. The trims in Phase 6 also need approval and
are listed there.

**D6. Release timing.** v1.0 is the live exam until December 7, 2026.
Recommended: do all the work on branch `content/claude-guides-v1.1` and merge
on or just after December 7, so learners preparing for a v1.0 sitting are not
moved early. If the work finishes late, merging Phases 1–2 alone with both
banks in `draft` is an acceptable interim, provided D3 is accepted.

---

## Phase 1: Blueprint metadata, vendor record and tests

Status: PENDING (blocked on Decisions)

Purely structural. No question text changes.

### Changes

- `certs/ccdv-f/manifest.json`:
  - Set `examUrl` to the Dec 7 CCDV-F URL and `examQuestionCount` to `70`.
  - Set domain weights to 17/20/8/10/12/15/8/10.
  - Rename D8 to "Tools and MCP" and keep the slug.
  - Apply D2. Under (a), delete every `skills` array.
  - Apply D3 to `status`.
- `certs/ccar-p/manifest.json`:
  - Set `examUrl` to the Dec 7 CCAR-P URL and `examQuestionCount` to `70`.
  - Set domain weights to 18/13/21/17/16/7/8.
  - Change domain names from `&` to `and`, matching the guide text exactly.
  - Apply D3 to `status`.
- `README.md`: update the Certifications table status if D3 is accepted.
- `certs/VENDORS.md` § Anthropic:
  - Add the two-guides-labelled-1.1 trap, with both URL pairs and the way to
    tell them apart.
  - Record that the Dec 7 guides add Claude Managed Agents and Microsoft
    Foundry to the stated platform scope.
  - Note that the v1.0 Everpath copies remain live and are now superseded.
  - Re-date the section.
- `certs/ccdv-f/review-progress.md` and `certs/ccar-p/review-progress.md`:
  - Replace the "Blueprint and weights" section with the v1.1 table: weights,
    70 items, and the 140 target from D1.
  - Add a dated "Blueprint revision v1.1 (Dec 7 2026)" entry under Maintenance
    audits that points at this plan.
  - Update the bank-status paragraph if D3 is accepted.
  - Replace the official sample inventory with the v1.1 parameters from the
    calibration table above, as parameters and keys only. Do not paraphrase
    item content beyond what the existing inventories already do.
- `test/quiz.test.mjs`, the test "allocates the real ccdv-f blueprint exactly,
  at both levels, on every run" (around line 307):
  - It reads `domain.skills` and samples `examQuestionCount` items from the
    real bank. Both break: under D2(a) `skills` is gone, and 70 draws exceed
    the 3 Eval items available until Phase 3 lands.
  - Re-point it at a synthetic bank built in the test from an inline manifest
    that declares skills. Keep both assertions: exact two-level allocation and
    remainder variance.
  - No shipped bank will declare skills after this change, so the real-bank
    coupling is the part to drop. The unit tests at around lines 565, 610 and
    658 already cover skill weighting.
- `test/bank-metrics.test.mjs`, "reproduces ccdv-f's hand-computed adversarial
  baselines": no change in Phase 1, because the item pool is untouched. Every
  later phase that changes the CCDV-F single-select pool must update these
  pinned figures together with the matching `review-progress.md` figures, as
  the test's own comment requires.

### Acceptance

- `npm run check` is green. `npm run balance -- --2x ccdv-f ccar-p` reports
  target 140 with the new domain targets.
- `npm run check-sources -- ccdv-f` and `-- ccar-p` show both `examUrl`
  values live.
- The domain names and weights in both manifests match the Dec 7 guides
  character for character.

---

## Phase 2: Re-home, retag, retire

Status: PENDING

This phase changes structure only: moves, `subdomain` labels and deletions.
No stem, option or key changes. Re-read every item before acting on its CSV
row. Where a re-read disagrees with the row, follow the evidence and record
the corrected disposition.

### Changes

- **Labels.**
  - Set `subdomain` on every item in both banks to its v1.1 skill slug from
    the CSV. Today CCAR-P items carry no `subdomain`, and CCDV-F items carry
    v1.0 skill slugs.
  - Items marked `rewrite` get their target skill now. Their text changes in
    Phases 3–4.
- **Moves.** Move every item whose `new_domain` differs from its
  `old_domain` into that domain's file, applying the ID policy from D4. Both
  CSVs list the moves.
  - CCDV-F: 26 items, mostly out of `applications-and-integration`.
  - CCAR-P: 31 items, including 15 of the 18 Stakeholder items.
  - Correction already folded into `ccar-p-mapping.csv`:
    `integration-021` and `-024`, both about cache layout, stay in
    `integration` under `relieving-binding-performance-constraint`. That
    skill names caching as a lever, and the move would only have created
    surplus in D2.
- **Retirements** (subject to D5). These topics left the blueprint and cannot
  honestly be re-homed:

  | Bank   | ID                                                      | Why                                                                           |
  | ------ | ------------------------------------------------------- | ----------------------------------------------------------------------------- |
  | CCDV-F | `applications-and-integration-039`                      | Large-scale refactoring; Software Engineering Foundations dropped             |
  | CCDV-F | `applications-and-integration-042`                      | Debugging your own code with Claude; no v1.1 objective                        |
  | CCDV-F | `applications-and-integration-043`                      | Claude's test-writing behaviour; SE Foundations dropped                       |
  | CCDV-F | `applications-and-integration-052`                      | Functional vs non-functional requirements; Understanding Requirements dropped |
  | CCDV-F | `eval-testing-and-debugging-006`                        | Claude Code OpenTelemetry setup; no v1.1 objective                            |
  | CCAR-P | `integration-006`                                       | `disable_parallel_tool_use` flag recall; no v1.1 skill                        |
  | CCAR-P | `integration-012`                                       | `tool_result` message assembly mechanics; no v1.1 skill                       |
  | CCAR-P | `integration-016`                                       | Eager input streaming parameter recall; no v1.1 skill                         |
  | CCAR-P | `governance-safety-and-risk-management-013`             | Enterprise spend-override workflow; billing admin                             |
  | CCAR-P | `governance-safety-and-risk-management-017`             | SCIM group-membership procedure; admin procedure                              |
  | CCAR-P | `developer-productivity-and-operational-enablement-007` | `--safe-mode` startup debugging; debugging objective dropped                  |
  | CCAR-P | `developer-productivity-and-operational-enablement-009` | MCP stdio pollution debugging; debugging objective dropped                    |

- **Records.** In each `review-progress.md`, under the Phase 1 dated entry:
  - Add the disposition counts, the retire list with reasons, and the
    old → new ID table if D4(a) applies.
  - Remove or rewrite standing adjudications that cite retired IDs. Update
    ID references to moved items.

### Acceptance

- `npm run check` is green. Run `npm run sync-dates` if `updatedAt` needs
  bumping.
- Every item in both banks has a `subdomain` from this plan's v1.1 slug lists.
  Check it with a one-off script; do not add tooling.
- After the phase, CCDV-F holds 101 items and CCAR-P holds 119 (only the 12
  approved retirements are gone).
- The pinned CCDV-F metrics test is updated together with the review-record
  figures.

---

## Phase 3: CCDV-F rewrites, new items, cold evaluation

Status: PENDING

Follow `skills/orchestrate-bank` Stages 1–4 for this bank: one authoring
subagent per domain, then a fresh evaluation subagent per domain, then the
demotion loop. All rewritten and new items land as `draft` and become
`reviewed` only through `evaluate-questions`. Author every item at or above
the v1.1 sample floor:

- Give the candidate an artifact plus observed evidence.
- Ask for the change or decision that addresses the cause.
- Make every distractor a plausible partial fix.
- Target stems of roughly 60–80 words and options of roughly 20–25 words.
- Never write an analogue of any official sample, v1.0 or v1.1.

### 3a. Rewrites (18 items, IDs kept)

Each item keeps its tested fact and changes its angle to match the v1.1
objective verb (analyze, diagnose, evaluate, correct):

- **D1:** `agents-and-workflows-001` (loop termination from a trace), `-004`,
  `-005`, `-020`, `-022`, `-024`, `-025` (choosing an architecture against
  error-tolerance or audit constraints instead of naming a pattern), and
  `-009` (correcting an agent definition).
- **D2:** `applications-and-integration-005` (a mishandled stream). Avoid the
  angle of v1.1 sample 1, which already tests terminal-event handling.
- **D3:** `applications-and-integration-041` (refocus on plan mode).
- **D5:**
  - `applications-and-integration-009`, `model-selection-and-optimization-007`
    and `-008` are three overlapping caching-principle recall items. Rewrite
    at most one or two into usage-data diagnosis. The rest are Phase 6 trim
    candidates.
  - `applications-and-integration-015` (release planning), and
    `model-selection-and-optimization-014` (explaining an observed latency).
- **D4:** `eval-testing-and-debugging-003` (diagnose from a trace).
- **D6:** `prompt-and-context-engineering-002` (grounding with citation and
  "not found"), and `-016` (revising a prompt to close an eval gap).
- Also rework the three v1.0-sample analogues named under Background so they
  stop sitting at the sample angle.

### 3b. New items: about 43

Quotas are per domain, with per-skill guidance. Skill floors use the
repository's `MINIMUM_SKILL_TARGET = 2`, existing items are kept, and the
remainder fills the thinnest skill first. Authoring sessions may move ±1
between skills within a domain if the sources make that more natural. The
domain totals are firm.

| Domain                             | After Phase 2 |  Target |     New |   Trim | Per skill (now → target)                                                                                                                              |
| ---------------------------------- | ------------: | ------: | ------: | -----: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agents-and-workflows`             |            17 |      24 |      +7 |      0 | architecture-and-runtime-selection 11→11; agent-sdk-construction-and-hooks 3→7; agent-pattern-diagnosis 3→6                                           |
| `applications-and-integration`     |            15 |      28 |     +13 |      0 | messages-api-mechanics 8→8; application-boundary-and-surface-behavior 1→7; configuration-and-sdlc-integration 2→7; integration-resilience 4→6         |
| `claude-code`                      |             8 |      11 |      +3 |      0 | claude-code-operation 5→6; claude-code-customization-and-extension 3→5                                                                                |
| `eval-testing-and-debugging`       |             5 |      14 |      +9 |      0 | evaluation-design 3→7; failure-mode-diagnosis 2→7                                                                                                     |
| `model-selection-and-optimization` |            20 |      17 |       0 |     −3 | generation-mechanics-and-model-options 7→6; model-tier-selection-and-release-planning 8→6; cost-diagnosis-and-optimization 5→5                        |
| `prompt-and-context-engineering`   |            13 |      21 |      +8 |      0 | context-management-for-long-running-sessions 5→6; prompt-revision 4→5; structured-output-and-defensive-parsing 3→5; grounding-and-source-citation 1→5 |
| `security-and-safety`              |            12 |      11 |       0 |     −1 | prompt-injection-and-jailbreak-defense 4→4; deterministic-guardrails-and-least-privilege 5→4; api-key-and-credential-handling 3→3                     |
| `tools-and-mcps`                   |            11 |      14 |      +3 |      0 | tool-design-and-response-shaping 6→6; mcp-server-development-and-integration 2→4; capability-mechanism-selection 3→4                                  |
| **Total**                          |       **101** | **140** | **+43** | **−4** |                                                                                                                                                       |

Authoring briefs: the v1.1 sub-topics with no coverage today. Cover these
first within each skill's quota.

- **D1:**
  - Self-hosted harness vs a managed, sandboxed runtime (Claude Managed
    Agents).
  - Error tolerance and audit constraints as decision inputs.
  - Correcting a broken Agent SDK definition or hook so a required action runs
    deterministically.
  - Diagnosing a pattern from an agent trace: loop termination, subagent
    isolation, memory, context window.
- **D2:**
  - Files API multi-format ingestion faults.
  - Retry and fallback logic that distinguishes rate limit, overloaded,
    invalid request and timeout.
  - Streaming terminal-event and stop-reason handling (not the sample's
    angle).
  - Prompt versioning, plugin dependencies, CI integration, and how one
    configuration change plays out per environment.
  - How instructions are interpreted on different surfaces, what crosses the
    application boundary, and session decisions.
- **D3:**
  - The desktop, IDE, web and mobile surfaces.
  - Session management, built-in commands, streaming mode.
  - Choosing between Skill, plugin, Rules file, hook, subagent and slash
    command for a team workflow.
  - Authoring and packaging that extension for distribution.
- **D4:**
  - An LLM-as-judge calibrated against human labels; golden sets; regression
    and behavioral checks; choosing defensible metrics.
  - Diagnosing hallucination, refusal, under-acting, context loss, format
    drift and inconsistency from a trace.
  - Integration layer vs model output, and treating the cause rather than the
    symptom.
- **D5:**
  - Adaptive thinking and effort levels used to control an observed behaviour.
  - Layered and rolling cache breakpoints, and checkpoint placement (not the
    sample's angle).
  - Quantifying an optimization's impact from usage data; batch processing as
    a cost lever.
- **D6:**
  - Grounding: citing the source and answering "not found"; full context vs
    retrieval by corpus size, cost and freshness.
  - Tool-output pruning; when to start a fresh session.
  - Prompt revision driven by regression evals; input sanitization.
  - Defensive parsing of free-text fallbacks.
- **D7:**
  - Workspace-scoped keys vs admin keys.
  - Server-side proxying vs embedding a key in the client.
  - Environment separation, rotation, access monitoring.
- **D8:**
  - Choosing the execution side; approval patterns; response shaping.
  - MCP transport choice and authentication; deploying an MCP server.
  - Choosing a mechanism by where the capability lives, who maintains it, and
    how Claude discovers it.

### Acceptance

- All 18 rewrites and the new items in all eight domains are `reviewed` after
  cold evaluation, with nothing left `draft`.
- The bank holds about 144 items. The four trims happen in Phase 6.
- Every v1.1 skill has at least 2 items.
- `npm run check` is green. `npm run metrics -- ccdv-f` passes all three bias
  guards.
- The pinned metrics test and the review-record figures are updated together.
- The authoring and evaluation notes are appended to
  `certs/ccdv-f/review-progress.md` by the coordinator, following the
  `orchestrate-bank` rules.

---

## Phase 4: CCAR-P rewrites, new items, cold evaluation

Status: PENDING

Same procedure and authoring floor as Phase 3. The CCAR-P stem target is
roughly 70–90 words, with options that name the binding constraint and the
trade-off accepted.

### 4a. Rewrites (8 items, IDs kept)

- `claude-models-prompting-and-context-engineering-015`: reframe as choosing a
  grounding technique.
- `integration-019`: subscription mechanics; reframe around the statefulness
  constraint in connection mechanism selection.
- `integration-020`: error-boundary recall; reframe as choosing a reliability
  control from a trace.
- `evaluation-testing-and-optimization-007`: method-sequencing recall; reframe
  as an experimental design that separates the configuration effect from
  run-to-run variance.
- `governance-safety-and-risk-management-011`: admin deletion procedure;
  reframe as choosing a retention control.
- `stakeholder-communication-and-lifecycle-management-006`: feasibility
  experiment; reframe as spotting an unmeetable commitment.
- `solution-design-and-architecture-010` → D4 `root-cause-isolation`: a
  tool-definition fix, reframed as a diagnosis from traces.
- `developer-productivity-and-operational-enablement-005` → D2
  `reasoning-effort-and-context-lifecycle`: the troubleshooting angle is
  gone; compaction survives.
- Also lighten the HIPAA framing in
  `governance-safety-and-risk-management-001`. v1.1 tests architectural
  controls, not named regulations.

### 4b. New items: about 28

| Domain                                               | After Phase 2 |  Target |     New |   Trim | Per skill (now → target)                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------- | ------------: | ------: | ------: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `solution-design-and-architecture`                   |            23 |      25 |      +2 |      0 | task-delegation-between-claude-and-humans 0→2; end-to-end-architecture-evaluation 2; pattern-selection 10; orchestrator-subagent-decomposition 6; value-based-architectural-decisions 3; deployment-surface-and-agent-runtime 2                                                                                           |
| `claude-models-prompting-and-context-engineering`    |            22 |      18 |      +1 |     −5 | model-tier-selection 1→2; system-prompt-diagnosis-and-revision 2; prompting-technique-selection 9→4; context-composition-and-token-economics 2; cache-breakpoints-and-reusable-packaging 4; reasoning-effort-and-context-lifecycle 4                                                                                      |
| `integration`                                        |            26 |      29 |      +3 |      0 | least-privilege-tool-configuration 2→3; authentication-and-authorization-posture 6; relieving-binding-performance-constraint 3; instrumentation-and-monitoring-gaps 2→3; retrieval-architecture-selection 3; connection-mechanism-selection 4; progressive-discovery-vs-monolithic 2→3; production-reliability-controls 4 |
| `evaluation-testing-and-optimization`                |            23 |      24 |      +3 |     −2 | evaluation-coverage-gaps 2; deriving-evaluations-from-business-processes 10→8; llm-as-judge-design-and-bias 2; experimental-design-for-configuration-comparison 1→2; root-cause-isolation 2; cost-and-latency-optimization 6; model-version-migration 0→2                                                                 |
| `governance-safety-and-risk-management`              |            14 |      23 |      +9 |      0 | guardrail-placement 2→4; prompt-injection-surface-and-controls 3→4; risk-assessment-and-ranking 0→3; human-in-the-loop-checkpoints 3; architectural-controls-for-compliance 6; bias-source-identification-and-mitigation 0→3                                                                                              |
| `stakeholder-communication-and-lifecycle-management` |             3 |      10 |      +7 |      0 | unsupportable-commitments 3→4; architecture-decision-records 0→3; operational-handoff-completeness 0→3                                                                                                                                                                                                                    |
| `developer-productivity-and-operational-enablement`  |             8 |      11 |      +3 |      0 | packaging-and-distributing-workflows 1→2; agent-sdk-and-claude-code-configuration 7; accountability-for-ai-generated-code 0→2                                                                                                                                                                                             |
| **Total**                                            |       **119** | **140** | **+28** | **−7** |                                                                                                                                                                                                                                                                                                                           |

Several skills sit at exactly the floor of 2, among them task delegation,
deployment surface, LLM-as-judge, experimental design and model migration.
These are fully new objectives at the centre of the v1.1 rewrite. Where they
are thin, prefer authoring a third item over keeping a surplus item in an
over-supplied skill such as `pattern-selection` or
`deriving-evaluations-from-business-processes`, and balance it with an extra
Phase 6 trim.

Authoring briefs: the v1.1 sub-topics with no coverage today.

- **D1:**
  - Assigning steps to Claude, humans, or both by reversibility, stakes and
    accountability.
  - Choosing a surface: Anthropic API, Bedrock, Vertex AI or Foundry, under
    residency and model availability, with feature lag as the cost.
  - Choosing a runtime: Messages API loop, self-hosted Agent SDK or headless
    Claude Code, or Managed Agents, by session state, sandboxing and data
    custody.
  - The component that fails first under a stated load or trust condition.
- **D2:**
  - Prompted reasoning vs native thinking as an explicit choice.
  - The memory tool.
  - Allocating reasoning effort for a long-running agent.
- **D3:**
  - Idempotency for side-effecting tools (not the sample's angle).
  - Fallback routing; overloaded vs rate-limit handling.
  - Agent-to-agent handoff as a connection mechanism.
  - Pre-built RAG vs agentic search vs full corpus, with the retrieval
    fallback configuration.
- **D4:**
  - Position, self-preference and drift bias in an LLM judge (verbosity bias
    is already covered).
  - Trials per case vs run-to-run variance.
  - Choosing between pin, re-tune, re-baseline and defer against a
    deprecation timeline.
  - The safety and security metric dimensions.
- **D5:**
  - Ranking risks by exposure, including token and quota exhaustion and
    dependency or supply-chain risk.
  - Data bias vs prompt-framing bias vs evaluation-design bias.
  - PII detection and redaction; tenant isolation.
  - Injection through MCP server responses and third-party Skills.
- **D6:**
  - Unmeetable commitments in discovery notes as well as in SLAs.
  - Revising an ADR to state the trade-off and residual risk without
    overstating model certainty.
  - Missing assumptions, dependencies or runbook elements in a handoff
    package.
- **D7:**
  - Plugin contents and marketplace distribution; what to enforce centrally
    vs leave to teams.
  - The permission modes (`default`, `acceptEdits`, `plan`, `auto`, `dontAsk`,
    `bypassPermissions`) as configuration choices.
  - The control that preserves human ownership of AI-generated code.

### Acceptance

- All rewrites and new items are `reviewed` after cold evaluation.
- The bank holds about 147 items. The trims happen in Phase 6.
- Every v1.1 skill has at least 2 items.
- `npm run check` is green, and `npm run metrics -- ccar-p` passes the guards.
- The coordinator has appended the notes to `certs/ccar-p/review-progress.md`.

---

## Phase 5: Calibrate to the v1.1 floor (both banks)

Status: PENDING

Run `skills/harden-domain-questions` per domain, using the v1.1 sample
parameters above as the anchor, then follow `orchestrate-bank` Stage 7 and
re-evaluate cold only the item IDs the hardening notes list as edited. The
default outcome per item is still "no change". The parts most likely to need
work are:

- **CCDV-F:** the 17 `easy` items, and the carried-over items whose stems are
  under about 45 words with no artifact. Each one is either lifted to the
  floor or keeps `easy` with a recorded reason.
- **CCAR-P:** carried-over items far below the v1.1 stem length that state a
  conclusion instead of giving the evidence.
- **Difficulty labels:** after hardening, stem length and difficulty should
  stop moving in opposite directions. Re-label honestly; do not pad to fit a
  label.

Option hints (`add-option-hints`) are **out of scope**. Neither bank uses
`hintText` today, and `plans/hint-text-feature.md` defers those migrations.

### Acceptance

- Every domain in both banks has a recorded hardening disposition, and every
  edited item has been re-evaluated cold and is `reviewed`.
- The calibration parameters before and after (mean stem and option words, by
  difficulty) are recorded in each `review-progress.md`.
- `npm run check` is green.

---

## Phase 6: Reconcile, trim, audit, promote

Status: PENDING

### Changes

- **Trims** (each one needs approval under D5). Retire near-duplicates until
  each domain is within ±1 of its 140-scale target. Prefer the weaker item of
  each pair:
  - **CCDV-F `model-selection-and-optimization` (−3):** whichever of
    `applications-and-integration-009`, `model-selection-and-optimization-007`
    and `-008` were not rewritten into cost diagnosis in Phase 3, then one
    more from the most over-supplied skill.
  - **CCDV-F `security-and-safety` (−1):** the "memory guides, hook enforces"
    fact is tested four times: `applications-and-integration-031`, `-051`,
    `security-and-safety-006` and `agents-and-workflows-017`. Keep the two
    strongest bank-wide; trim one from security.
  - **CCAR-P `claude-models-prompting-and-context-engineering` (−5):** from
    `prompting-technique-selection` (9 items) and from items moved in from D4
    that duplicate D2 items. `evaluation-testing-and-optimization-011`
    duplicates `prompting-010`, and the `eval-019` / `prompting-011` pair
    tests cache TTL twice.
  - **CCAR-P `evaluation-testing-and-optimization` (−2):** from
    `deriving-evaluations-from-business-processes` (10 items, several moved in
    from D6 at the same angle); `eval-016` overlaps `sda-019`.
  - **CCAR-P `solution-design-and-architecture`:** `stake-013` duplicates
    `sda-005`. Trim it if D1 lands above target.
- Run `skills/audit-coverage` for both banks, judging per domain against the
  v1.1 weights, with each skill at ≥ 2. Under D3, flip
  `manifest.status` back to `stable` only if the audit supports it, and
  update the README table in the same commit.
- Run `npm run sync-dates`, `npm run check` and
  `npm run metrics -- <slug> --markdown` for both banks.
- Rewrite the composition section in each `review-progress.md`: counts,
  formats, difficulty, sources, position, length and baselines. Run
  `skills/condense-review-progress` on both files so the transition narrative
  is condensed and the standing decisions survive.
- Update the pinned CCDV-F metrics test to the final figures.
- Fill in the `Status:` lines of this plan, and record any decision answers
  that changed along the way.

### Acceptance

- Both banks hold 140 items (±2), all `reviewed`. Every domain is within ±1 of
  its target, and every v1.1 skill has ≥ 2 items.
- `npm run check` is green. `npm run check-sources -- ccdv-f` and
  `-- ccar-p` show no dead URLs.
- The `audit-coverage` reasoning is recorded, and `manifest.status` matches
  it.

---

## Phase 7: Cut-over

Status: PENDING

- Merge `content/claude-guides-v1.1` on or after **December 7, 2026**, as D6
  decides. Before merging, re-fetch both Dec 7 guide URLs and confirm the
  version blocks and objectives have not moved since 2026-11-21. If they
  have, re-run Phase 1's diff before merging.
- After the merge, the next `audit-sources` pass for both banks should treat
  the Dec 7 guide as the baseline.

---

## Risks

- **The mapping CSVs are one reviewer's judgement.** Expect a handful of
  rows to change on re-read in Phase 2. Domain totals may move by 1–2, which
  only changes how many new items a domain needs.
- **Vendor docs drift under the rewrite.** The model lineup, forced
  `tool_choice`, the Task → Agent rename and grep/glob platform defaults all
  have recorded drift in `certs/VENDORS.md`. Authors must read that section
  before writing D2, D5, D7 and D8 items.
- **Learner history (D4a).** Renamed IDs drop bookmarks and missed-question
  flags for moved items, which is accepted and handled by the app. The
  release note or commit message should say so.
- **Branch staleness.** CCAO-F authoring is in flight in the same repository
  (uncommitted `certs/ccao-f/*` on `main` as of 2026-11-21). It touches none
  of these files. The only shared surface is `certs/VENDORS.md`, so rebase
  before Phase 1's VENDORS edit.

## Out of scope

- Option hints for either bank.
- Renaming any domain slug. The slugs stay as they are, including
  `tools-and-mcps` against the new "Tools and MCP" name.
- Any schema, sampler or UI change. The only code-adjacent change is the
  Phase 1 test re-point.
- CCAR-F, which has no announced Dec 7 revision as of 2026-11-21. Check
  before assuming that holds.
