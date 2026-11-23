# Claude Certified Associate – Foundations review record

Standing record of how this bank was built and reviewed, and of the judgement
calls a future author should not have to rediscover. Chronology lives in git;
this file holds the reasons.

Scaffolded on 2026-11-21 based on the Claude Certified Associate –
Foundations Exam Guide v1.1 (Effective December 7, 2026, Exam code: CCAO-F).

## Bank status: `draft`

`manifest.status` is `draft`. All 140 questions are `reviewed` and each domain meets
its 2× allocation. The next decision is the human coverage and promotion review;
item review does not promote the bank.

Promote to `stable` only when coverage is genuinely proportional across all domains,
judged per domain against the manifest weights rather than by total question count.
With 70 total exam items (60 scored, 10 unscored), the standard 2x bank authoring target
is 140 questions proportionally distributed across all six domains.

## Recon verdict: `GO-WITH-CONSTRAINTS`

The certification assessment reached a **GO-WITH-CONSTRAINTS** verdict:

- The official exam guide is publicly accessible without credentials or registration on Anthropic's Skilljar instructor CDN.
- Domain weights are explicitly defined integers that sum to exactly 100%.
- Public, authoritative vendor documentation covers every objective across all six domains (`support.claude.com`, `platform.claude.com`, `academy.claude.com`, and `www.anthropic.com/legal/aup`).
- Question format is standard scenario-based multiple-choice, requiring no schema extensions.
- **Constraints:**
  - _Low sample count:_ The official exam guide includes only 3 sample questions (compared to 12 in `ccar-f`), limiting vendor-published calibration items. Authoring must anchor difficulty on the blueprint's detailed task statements and the AI Fluency Framework parameters rather than relying on a rich sample inventory.
  - _Strict calibration firewall:_ No external third-party question sets were supplied; seeds and future batches must derive strictly from public technical documentation rather than sample item rewrites.

## Blueprint and weights

The guide publishes exact domain weights in Section 5. Domain weights sum to 100% with no rounding needed:

| Domain                                         | Slug                                             |   Weight | Target (2× of 70) | Bank Questions |
| ---------------------------------------------- | ------------------------------------------------ | -------: | ----------------: | -------------: |
| Task Definition and Prompting                  | `task-definition-and-prompting`                  |      15% |                21 |             21 |
| Output Evaluation and Quality Control          | `output-evaluation-and-quality-control`          |      20% |                28 |             28 |
| Capability, Model, and Context Selection       | `capability-model-and-context-selection`         |      15% |                21 |             21 |
| Workflow Design and Integration                | `workflow-design-and-integration`                |      18% |                25 |             25 |
| Configuration and Knowledge Management         | `configuration-and-knowledge-management`         |      15% |                21 |             21 |
| Responsible Use, Data Protection, & Governance | `responsible-use-data-protection-and-governance` |      17% |                24 |             24 |
| **Total**                                      |                                                  | **100%** |           **140** |        **140** |

Exam specs from blueprint:

- Total items: 70 questions (60 scored, 10 unscored)
- Duration: 120 minutes
- Passing standard: 720 scaled score (scale 100–1,000)
- Format: Scenario-based multiple-choice items; each item states how many responses to select

### Skill breakdown

Section 5 of the exam guide outlines 21 skill areas across the six content domains:

- Domain 1: Prompt Construction; Task Decomposition and Sequencing; Prompt Diagnosis and Iteration
- Domain 2: Output Evaluation and Fitness for Purpose; Hallucination Detection and Verification; Review Depth and Escalation; Output Adaptation and Format Selection
- Domain 3: Capability Selection; Model and Effort Selection; Context and Memory Management
- Domain 4: End-to-End Deliverable Workflows; Delegation and Workflow Redesign; Repeatable Workflow Design; Capability Communication
- Domain 5: Project Configuration; Connector and Knowledge Management; Persistent-Instruction Design; Configuration Lifecycle and Degradation
- Domain 6: Use-Case Appropriateness; Data Protection in Practice; Policy, Ethics, and Diligence

The guide publishes no percentage weights for individual skills, so manifest domain entries do not declare `skills`, matching the pattern in `ccar-f`, `az-900`, and `aws-clf-c02`.

## Composition and coverage audit

Audited against the 140-question bank:

- **Distribution**: Proportional across all 6 domains matching 2× exam targets (21 / 28 / 21 / 25 / 21 / 24, 0 delta).
- **Item formats**: 108 single-select, 32 multi-select (31 select-two, 1 select-three).
- **Difficulty breakdown**: 1 easy (single), 108 medium (91 single, 17 multi), 31 hard (16 single, 15 multi).
- **Sourcing**: 51 distinct authoritative pages across `support.claude.com`, `platform.claude.com`, `academy.claude.com`, `anthropic.com/legal/aup`, `anthropic.com/legal/commercial-terms`, and the official exam guide PDF. Five Domain 6 items still cite only the exam guide (`responsible-...-009`, `-010`, `-016`, `-017`, `-018`); they test organizational-policy reasoning that no product page owns, and are the first candidates for re-citation if a fitting first-party page appears.
- **Single-select position distribution**: 24 A / 30 B / 25 C / 29 D (max 27.8%, well within 50% ceiling).
- **Option length delta**: Correct options average 1.47 characters shorter than distractors (median -0.33 chars), within the ±10 character limit.
- **Longest option as key share**: 17 of 108 single-select items (15.7%), well below the 45% ceiling.
- **Distractor notes coverage**: 100% of options across all 140 questions carry complete distractor notes.
- **Bias guards**: All three pass cleanly (`positionBias`, `lengthBiasMeanDelta`, `longestOptionIsKey`).

### Known coverage limits

- **Skill area granularity**: The guide's 21 skill areas carry no published percentage weights, so coverage is verified at domain level only. A manual skill mapping on 2026-11-23 found every skill carrying at least five items.
- **Multi-symptom degradation**: Sample 2's two-layer shape is under-represented in Domain 5; `configuration-...-022` adds a live-sync knowledge-layer case, but a two-symptom item is still a gap worth one future slot.
- **Appropriateness classification**: Domain 6 now exercises all three verdicts — inappropriate (`responsible-...-001`, `-026`), appropriate (`-025`, `-002`) — but "appropriate with safeguards" is still tested only indirectly (`-003`).
- **Cowork-sourced Domain 4 items**: `workflow-...-008`, `-029` and others rely on Cowork help pages and tutorials. Cowork is not named in the guide's candidate profile, but its approval and scope guidance is the only first-party statement of the delegation principles the skill tests; recorded as intent, not drift.

## Source classification

Evaluated against the repository's two non-negotiable tests (Gate and Authority):

| Candidate Source                                             | Gate | Authority | Disposition       | Notes                                                                                                                  |
| ------------------------------------------------------------ | ---- | --------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Official Exam Guide PDF (`cc.sj-cdn.net`)                    | Pass | Pass      | **Citable**       | Canonical vendor blueprint hosted on official Skilljar instructor CDN.                                                 |
| Claude Help Center (`support.claude.com/en/articles/*`)      | Pass | Pass      | **Citable**       | Authoritative user reference for Projects, Artifacts, Connectors, Skills, Memory, and Incognito mode.                  |
| Claude Platform Documentation (`platform.claude.com/docs/*`) | Pass | Pass      | **Citable**       | Authoritative reference for prompt engineering techniques, model tiers, and reasoning parameters. Accessible as `.md`. |
| Claude Academy Tutorials (`academy.claude.com/tutorials/*`)  | Pass | Pass      | **Citable**       | Official public education tutorials, including the AI Fluency Index report defining the four competencies.             |
| Anthropic Usage Policy (`www.anthropic.com/legal/aup`)       | Pass | Pass      | **Citable**       | Canonical vendor policy governing appropriate use cases, high-risk requirements, and data protection boundaries.       |
| Anthropic Partner Academy courses                            | Fail | Pass      | **Excluded**      | Gated behind partner/user login. The test is registration, not price.                                                  |
| Course landing pages / marketing syllabi                     | Pass | Pass      | **Readable only** | Evidence of curriculum scope only; never cite for technical facts.                                                     |
| Third-party dumps, GitHub mirrors, unofficial guides         | Pass | Fail      | **Excluded**      | Unverified third-party copies fail authority test.                                                                     |

## Official sample question inventory

Section 7 of the exam guide carries three official sample items (one each in Domains 2, 5, and 6), establishing the cognitive-level anchor for the bank. Re-read against v1.1 on 2026-11-23 — an earlier summary here described the v1.0 samples, and the guide's changelog records that v1.1 revised them. Parameters only:

1. **Sample 1** (Domain 2, Hallucination Detection): an external deliverable containing precise, attributed specifics the practitioner has not yet checked. Tested judgement: independent verification against sources before external use. Distractor shapes: trust the presence of citations; self-verification by the model; over-correction that discards everything.
2. **Sample 2** (Domain 5, Configuration Lifecycle): a long-stable configuration whose output shifted, with **two symptoms pointing to two different layers** while other layers are stated as unchanged. Tested judgement: attribute each symptom to its layer. Distractor shapes: fix an unchanged layer; remove a component; escalate model/effort.
3. **Sample 3** (Domain 6, Data Protection): a policy that permits analysis only on transformed data. Tested judgement: transform before upload, including a non-obvious identifier source. Distractor shapes: retention controls mistaken for disclosure controls; access restriction; transform after upload.

All three are single-select, four options, stems of roughly 60–80 words, and each turns on a stated constraint that makes one plausible action correct. Unsampled domains (Domains 1, 3, and 4) use this identical decision depth by analogy. This is a format and cognitive depth anchor, not a source of scenarios or tested facts.

## Calibration principles and deliberate headroom

- **Sample anchor**: Cognitive level, scenario shape, and workplace decision depth anchor directly on the official guide's 3 scenario samples and candidate profile (business analysts, project managers, marketing/operations leads).
- **Standing calibration firewall**: No external third-party question sets were used. Calibration informs depth, question style, and scenario shape, never tested facts or scenarios.
- **Low sample count constraint**: With only 3 official samples, difficulty calibration leans on the guide's detailed Section 5 task statements and the public AI Fluency Framework (Delegation, Description, Discernment, Diligence) as an objective baseline.
- **Deliberate headroom**: Output Evaluation (Domain 2) and Governance (Domain 6) sit deliberately above the sample anchor overall. Harder decisions combine multiple constraints (e.g., privacy vs test usefulness, multi-layer verification checks, or approval-time vs post-approval evidence). Distractors require evaluating subtle workplace trade-offs rather than transparent elimination.

## Architectural and sourcing adjudications

- **Guide-level vs product-level sourcing**: The exam guide is used for blueprint-level judgements, not sample scenarios. Product behavior is sourced to Help Center and Platform docs; applied practices to public Anthropic tutorials and research; policy obligations to Usage Policy and Commercial Terms:
  - _Review depth grounding_ (`output-...-001`): Grounds review depth in Anthropic's diligence tutorial (`academy.claude.com`) rather than the Artifacts help page.
  - _Handoff decision grounding_ (`workflow-...-001`): Grounds escalation handoffs in platform customer-support guidance rather than blueprint objective text.
- **Key conceptual and boundary adjudications**:
  - _Prompt engineering & XML boundaries_ (`task-...-020`): Prompt revisions are judged on an unused, labeled mix rather than the example used while editing. (`task-...-001`, the XML-delimiting item, was retired 2026-11-23 as answerable from the stem.)
  - _Prompt chaining & surface boundaries_ (`task-...-024`): Resolved draft-vs-refine ambiguity in prompt chaining by specifying claude.ai workflow context.
  - _Integration & surface scope_ (`workflow-...-031`): Stated web application action requires integration/connector when browser/computer-use surfaces are explicitly excluded.
  - _Output evaluation & calculation checks_ (`output-...-005`, `-012`, `-016`, `-021`, `-025`): Distinguished detecting discrepancies from locating them; allowed for zero downtime; confined order risk to non-returnable stock; separated calculation checks so errors cannot mask each other.
  - _Capability, context & memory isolation_ (`capability-...-001`, `-005`, `-008`, `-020`): Strictly distinguished conversation history from memory, chat image attachments from project knowledge files, search previews from retrieved pages, and project instructions from project memory.
  - _Workflow integration & evidence boundaries_ (`workflow-...-003`, `-005`, `-010`, `-014`, `-018`, `-019`, `-022`): Distinguished web from connected evidence, blanks from missing records, and handoffs from error-free outcomes. Tightened checkpoint, permission, and Skill selection/release alternatives.
  - _Project configuration & freshness_ (`configuration-...-003`, `-004`, `-006`, `-007`, `-009`, `-015`, `-017`): Explicit project scope, separation, freshness, and onboarding constraints; narrowed notes on Gmail retrieval, Drive images, and project content management.
  - _Governance & data protection scoping_ (`responsible-...-001`, `-006`, `-010`): Scoped policy claims to actual product recommendation; distinguished indirect identification from direct name removal.

## Maintenance audits

### Initial authoring, calibration, and cold evaluation (2026-11-21)

- **Scope**: Expanded 6 initial seeds to 140 original questions across all 6 domains in proportion to blueprint weights (21 / 28 / 21 / 25 / 21 / 24).
- **Adversarial cold evaluation**: 140/140 answer sets independently cold-derived against live vendor documentation; 108 confirmed intact, 32 refined for technical precision across D1 (2), D2 (5), D3 (4), D4 (8), D5 (9), and D6 (4) with identical keys reconfirmed. 100% key accuracy (0 miskeys).
- **Difficulty calibration**: 121 items confirmed calibrated without change; 19 items hardened across D1 (5), D3 (7), D4 (3), and D5 (4) to remove subtle role cues and tighten boundaries. D2 and D6 confirmed naturally above sample depth. All 19 re-solved cold and reconfirmed.
- **Source verification**: All 54 distinct documentation pages and exam guide PDF verified live (HTTP 200).
- **Balance and bias reconciliation**: Zero blueprint delta; all bias guards pass cleanly (`positionBias` 29/28/24/27, `lengthBiasMeanDelta` -1.43 chars, `longestOptionIsKey` 18.5%, 100% distractor notes).

### Duplicate and weak-item fix pass (2026-11-23)

- **Scope**: Net-zero replacement batch resolving 9 duplicate clusters and retiring 9 weak stems. Bank maintained at 140/140 reviewed items (21 / 28 / 21 / 25 / 21 / 24).
- **Retired items (20)**:
  - _Duplicates (11 items, 1 survivor kept per cluster)_: `task-...-006` (kept `output-...-024`); `task-...-011`, `capability-...-017` (kept `configuration-...-004`); `configuration-...-005` (kept `workflow-...-014`); `configuration-...-016` (kept `workflow-...-019`); `configuration-...-018` (kept `capability-...-019`); `workflow-...-011` (kept `output-...-017`); `workflow-...-012` (kept `output-...-020`); `workflow-...-017` (kept `configuration-...-020`); `output-...-019`, `workflow-...-025` (kept `responsible-...-019`, `-023`).
  - _Weak stems / transparent keys (9 items)_: `task-...-001`, `configuration-...-001` (stem giveaways); `output-...-022` (trivial format item); `workflow-...-021`, `-023`, `responsible-...-022` (generic verification); `responsible-...-008`, `-011`, `-014` (key restates stem constraints).
- **Authored items (20)**:
  - Domain 1 (`022`–`024`): Missing default context, instruction rationale, approval checkpoints.
  - Domain 2 (`029`–`030`): Hallucinated capability claims, doc snapshot vs live dashboard.
  - Domain 3 (`022`): Extended thinking vs Research.
  - Domain 4 (`026`–`031`): Recent information, automation ownership boundaries, research → code analysis, manual approval checkpoints, Skill ownership handoff, connector dependencies.
  - Domain 5 (`022`–`025`): Live-synced Docs degradation, instruction vs knowledge vs Skill placement, Project isolation, organization instruction precedence.
  - Domain 6 (`025`–`028`): Fixed-formula exclusion from high-risk requirements, prohibited trustworthiness scoring, memory-off vs incognito, dedicated working folder for local file access.
  - _New sources_: Usage Policy exclusions / Universal Usage Standards, Artifacts collaboration tutorial, Cowork safety, Skills sharing, Projects, organization instructions, Google Workspace connectors, and hallucinated capabilities guide.
- **Re-citations**: `responsible-...-020` re-cited from exam guide to Anthropic bias tutorial (paired-prompt testing, language disparities).
- **Cold evaluation**: 20/20 answer sets verified cold against vendor docs (0 miskeys). 5 items refined for distractor quality and key precision before final confirmation (`configuration-...-025`, `responsible-...-025`, `task-...-022`, `task-...-024`, `workflow-...-031`). All 140 bank items confirmed `status: "reviewed"`.
- **Standing notes**: Minor stem-to-key echoes noted for future hardening pass in `configuration-...-022`–`025`, `output-...-029`, `task-...-022`, `-024`, and `workflow-...-026`, `-031`.
