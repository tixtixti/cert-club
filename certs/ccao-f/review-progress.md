# Claude Certified Associate – Foundations review record

Standing record of how this bank was built and reviewed, and of the judgement
calls a future author should not have to rediscover. Chronology lives in git;
this file holds the reasons.

Recon completed and scaffolded on 2026-11-21 based on the Claude Certified Associate –
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
  - *Low sample count:* The official exam guide includes only 3 sample questions (compared to 12 in `ccar-f`), limiting vendor-published calibration items. Authoring must anchor difficulty on the blueprint's detailed task statements and the AI Fluency Framework parameters rather than relying on a rich sample inventory.
  - *Strict calibration firewall:* No external third-party question sets were supplied; seeds and future batches must derive strictly from public technical documentation rather than sample item rewrites.

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
- **Difficulty breakdown**: 2 easy (single), 107 medium (90 single, 17 multi), 31 hard (16 single, 15 multi).
- **Sourcing**: 54 distinct authoritative pages across `support.claude.com`, `platform.claude.com`, `academy.claude.com`, `anthropic.com/legal/aup`, and the official exam guide PDF.
- **Single-select position distribution**: 29 A / 28 B / 24 C / 27 D (max 26.9%, well within 50% ceiling).
- **Option length delta**: Correct options average 1.43 characters shorter than distractors (median -0.33 chars), within the ±10 character limit.
- **Longest option as key share**: 20 of 108 single-select items (18.5%), well below the 45% ceiling.
- **Distractor notes coverage**: 100% of options across all 140 questions carry complete distractor notes.
- **Bias guards**: All three pass cleanly (`positionBias`, `lengthBiasMeanDelta`, `longestOptionIsKey`).

### Known coverage limits

- **Skill area granularity**: The guide's 21 skill areas carry no published percentage weights, so coverage is verified at domain level only.

## Source classification

Evaluated against the repository's two non-negotiable tests (Gate and Authority):

| Candidate Source                                            | Gate | Authority | Disposition       | Notes                                                                                                                              |
| ----------------------------------------------------------- | ---- | --------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Official Exam Guide PDF (`cc.sj-cdn.net`)                   | Pass | Pass      | **Citable**       | Canonical vendor blueprint hosted on official Skilljar instructor CDN.                                                             |
| Claude Help Center (`support.claude.com/en/articles/*`)     | Pass | Pass      | **Citable**       | Authoritative user reference for Projects, Artifacts, Connectors, Skills, Memory, and Incognito mode.                               |
| Claude Platform Documentation (`platform.claude.com/docs/*`)| Pass | Pass      | **Citable**       | Authoritative reference for prompt engineering techniques, model tiers, and reasoning parameters. Accessible as `.md`.             |
| Claude Academy Tutorials (`academy.claude.com/tutorials/*`)| Pass | Pass      | **Citable**       | Official public education tutorials, including the AI Fluency Index report defining the four competencies (Delegation, Description, Discernment, Diligence). |
| Anthropic Usage Policy (`www.anthropic.com/legal/aup`)      | Pass | Pass      | **Citable**       | Canonical vendor policy governing appropriate use cases, high-risk requirements, and data protection boundaries.                   |
| Anthropic Partner Academy courses                           | Fail | Pass      | **Excluded**      | Gated behind partner/user login. The test is registration, not price.                                                              |
| Course landing pages / marketing syllabi                    | Pass | Pass      | **Readable only** | Evidence of curriculum scope only; never cite for technical facts.                                                                 |
| Third-party dumps, GitHub mirrors, unofficial guides        | Pass | Fail      | **Excluded**      | Unverified third-party copies fail authority test.                                                                                 |

## Official sample question inventory

Section 7 of the exam guide carries three official sample items (one each in Domains 2, 5, and 6), establishing the cognitive-level anchor for the bank:

1. **Question 1** (Domain 2: Output Evaluation): Business practitioner evaluating model discrepancies against customer-supplied data. Key: detect and pinpoint source discrepancies rather than assuming model correctness.
2. **Question 2** (Domain 5: Configuration): Managing shared project knowledge and connector freshness under team onboarding constraints. Key: project instructions and scoped file boundaries.
3. **Question 3** (Domain 6: Governance): Navigating data handling, privacy boundaries, and policy diligence for sensitive workflows. Key: combine privacy safeguards with workflow utility.

All three samples require a business practitioner to choose an action under concrete workplace constraints (alternatives plausible in other contexts, stated constraint dictating best response). Unsampled domains (Domains 1, 3, and 4) use this identical decision depth by analogy. This is a format and cognitive depth anchor, not a source of scenarios or tested facts.

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
  - _Prompt engineering & XML boundaries_ (`task-...-001`, `-020`): XML tags separate feedback from instructions, not an injection guarantee. Distractors use scenario-supplied labels.
  - _Output evaluation & calculation checks_ (`output-...-005`, `-012`, `-016`, `-021`, `-025`): Distinguished detecting discrepancies from locating them; allowed for zero downtime; confined order risk to non-returnable stock; separated calculation checks so errors cannot mask each other.
  - _Capability, context & memory isolation_ (`capability-...-001`, `-005`, `-008`, `-020`): Strictly distinguished conversation history from memory, chat image attachments from project knowledge files, search previews from retrieved pages, and project instructions from project memory.
  - _Workflow integration & evidence boundaries_ (`workflow-...-003`, `-005`, `-010`, `-012`, `-014`, `-017`–`-019`, `-022`): Distinguished web from connected evidence, blanks from missing records, and handoffs from error-free outcomes. Tightened checkpoint, permission, and Skill selection/release alternatives.
  - _Project configuration & freshness_ (`configuration-...-001`, `-003`, `-004`, `-006`, `-007`, `-009`, `-015`, `-017`): Explicit project scope, separation, freshness, and onboarding constraints; narrowed notes on Gmail retrieval, Drive images, and project content management.
  - _Governance & data protection scoping_ (`responsible-...-001`, `-006`, `-010`, `-011`): Scoped policy claims to actual product recommendation; distinguished indirect identification from direct name removal, and disabled connectors from unused ones.

## Maintenance audits

### 2× bank authoring, cold evaluation & difficulty calibration (2026-11-21)

Comprehensive initial authoring and verification pass achieving the 140-question (2×) baseline:

- **Authoring**: Expanded 6 initial seeds to 140 original questions across all 6 domains in proportion to blueprint weights (21 / 28 / 21 / 25 / 21 / 24).
- **Independent cold evaluation**: All 140 questions independently solved against stems, choices, and cited sources without viewing keys or explanations:
  - 108 items confirmed intact as written.
  - 32 items refined for technical precision and reconfirmed against identical keys (Domain 1: 2, Domain 2: 5, Domain 3: 4, Domain 4: 8, Domain 5: 9, Domain 6: 4).
  - 0 unsupported or miskeyed items (100% key accuracy).
- **Difficulty calibration & hardening**: Calibrated against official workplace decision depth:
  - 19 items hardened to remove subtle role cues or tighten alternative boundaries (Domain 1: 5, Domain 3: 7, Domain 4: 3, Domain 5: 4).
  - Domains 2 and 6 assessed as sitting naturally above the sample anchor without edits.
  - All 19 hardened items independently re-solved cold; all 19 keys reconfirmed.
- **Source verification & liveness**: All 54 distinct cited documentation pages and the exam guide PDF verified live (HTTP 200). 0 stale URLs.
- **Bias guards & bank checks**: All three bias guards pass cleanly (`positionBias` 29/28/24/27, `lengthBiasMeanDelta` -1.43 chars, `longestOptionIsKey` 18.5%). 100% distractor notes coverage. `npm run check` clean (457 tests).
