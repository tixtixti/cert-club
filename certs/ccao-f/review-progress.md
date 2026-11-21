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

| Domain | Slug | Weight | Target (1x: 70) | Target (2x: 140) | Initial seeds |
| --- | --- | ---: | ---: | ---: | ---: |
| Task Definition and Prompting | `task-definition-and-prompting` | 15% | 11 | 21 | 1 |
| Output Evaluation and Quality Control | `output-evaluation-and-quality-control` | 20% | 14 | 28 | 1 |
| Capability, Model, and Context Selection | `capability-model-and-context-selection` | 15% | 10 | 21 | 1 |
| Workflow Design and Integration | `workflow-design-and-integration` | 18% | 13 | 25 | 1 |
| Configuration and Knowledge Management | `configuration-and-knowledge-management` | 15% | 10 | 21 | 1 |
| Responsible Use, Data Protection, and Governance | `responsible-use-data-protection-and-governance` | 17% | 12 | 24 | 1 |
| **Total** | | **100%** | **70** | **140** | **6** |

Exam specs from blueprint:

- Total items: 70 questions (60 scored, 10 unscored)
- Duration: 120 minutes
- Passing standard: 720 scaled score (scale 100–1,000)
- Format quote: `"Scenario-based multiple-choice items; each item states how many responses to select"`

### Skill breakdown

Section 5 of the exam guide outlines 21 skill areas across the six content domains:
- Domain 1: Prompt Construction; Task Decomposition and Sequencing; Prompt Diagnosis and Iteration
- Domain 2: Output Evaluation and Fitness for Purpose; Hallucination Detection and Verification; Review Depth and Escalation; Output Adaptation and Format Selection
- Domain 3: Capability Selection; Model and Effort Selection; Context and Memory Management
- Domain 4: End-to-End Deliverable Workflows; Delegation and Workflow Redesign; Repeatable Workflow Design; Capability Communication
- Domain 5: Project Configuration; Connector and Knowledge Management; Persistent-Instruction Design; Configuration Lifecycle and Degradation
- Domain 6: Use-Case Appropriateness; Data Protection in Practice; Policy, Ethics, and Diligence

The guide publishes no percentage weights for individual skills, so manifest domain entries do not declare `skills`, matching the pattern in `ccar-f`, `az-900`, and `aws-clf-c02`.

## Source classification

Evaluated against the repository's two non-negotiable tests (Gate and Authority):

| Candidate Source | Gate | Authority | Disposition | Notes |
| --- | --- | --- | --- | --- |
| Official Exam Guide PDF (`cc.sj-cdn.net`) | Pass | Pass | **Citable** | Canonical vendor blueprint hosted on official Skilljar instructor CDN. |
| Claude Help Center (`support.claude.com/en/articles/*`) | Pass | Pass | **Citable** | Authoritative user reference for Projects, Artifacts, Connectors, Skills, Memory, and Incognito mode. |
| Claude Platform Documentation (`platform.claude.com/docs/en/*`) | Pass | Pass | **Citable** | Authoritative reference for prompt engineering techniques, model tiers, and reasoning parameters. Accessible as `.md`. |
| Claude Academy Tutorials (`academy.claude.com/tutorials/*`) | Pass | Pass | **Citable** | Official public education tutorials, including the AI Fluency Index report defining the four competencies (Delegation, Description, Discernment, Diligence). |
| Anthropic Usage Policy (`www.anthropic.com/legal/aup`) | Pass | Pass | **Citable** | Canonical vendor policy governing appropriate use cases, high-risk requirements, and data protection boundaries. |
| Anthropic Partner Academy courses | Fail | Pass | **Excluded** | Gated behind partner/user login. The test is registration, not price. |
| Course landing pages / marketing syllabi | Pass | Pass | **Readable only** | Evidence of curriculum scope only; never cite for technical facts. |
| Third-party dumps, GitHub mirrors, unofficial guides | Pass | Fail | **Excluded** | Unverified third-party copies fail the authority test. |

## Official sample question inventory

Section 7 of the exam guide has three official samples, one each in domains 2, 5 and 6.
They ask a business practitioner to choose an action under concrete workplace constraints.
Use that decision depth for the unsampled domains too: alternatives should be plausible
in a different situation, and the stated constraint should distinguish the best response.
This is a format and difficulty anchor, not a source of scenarios or tested facts.

## Calibration record

- External calibration sets: None.
- Calibration firewall: Affirmed. Cognitive level, question style, and scenario depth are anchored directly on the official guide's 3 scenario samples and candidate profile (business analysts, project managers, marketing/operations leads).
- Low sample count constraint: The guide publishes only 3 sample items (compared to 12 in `ccar-f`), so authors should lean on the detailed task statements in Section 5 and the AI Fluency Framework parameters for difficulty calibration.

## 2× authoring and verification — 2026-11-21

Each domain began with one draft seed (001) to test the sourcing plan. Six
independent domain batches added 134 originals. The IDs below are suffixes within
each domain. The ranges map the finished batches to the skill names above **in guide
order**; they are coverage evidence, not vendor-published skill weights.

| Domain | Added | Total | IDs by blueprint skill |
| --- | ---: | ---: | --- |
| Task Definition and Prompting | 20 | 21 | 001–007; 008–014; 015–021 |
| Output Evaluation and Quality Control | 27 | 28 | 002–008; 009–015; 001 and 016–021; 022–028 |
| Capability, Model, and Context Selection | 20 | 21 | 002–008; 009–015; 001 and 016–021 |
| Workflow Design and Integration | 24 | 25 | 002–007; 001 and 008–013; 014–019; 020–025 |
| Configuration and Knowledge Management | 20 | 21 | 001–005; 006–010; 011–015; 016–021 |
| Responsible Use, Data Protection, and Governance | 23 | 24 | 001–008; 009–016; 017–024 |

Two seeds changed during authoring. Output Evaluation 001 now grounds review depth in
Anthropic's diligence tutorial rather than attributing it to the Artifacts help page.
Workflow 001 uses the platform's customer-support guidance for its handoff decision,
rather than asking a blueprint objective to substantiate product guidance. Product
behavior elsewhere is sourced to the Help Center and platform docs; applied practices
to public Anthropic tutorials and research; policy obligations to the Usage Policy and
Commercial Terms. The guide is used for blueprint-level judgments, not as a source of
sample scenarios.

### Independent cold evaluation

Reviewers recorded full answer sets from the stems, choices and public sources
before comparing stored keys or reading explanations. All 140 keys matched,
including the complete sets for all 32 multi-select items. In the table, unlisted
IDs were confirmed as written (108); listed IDs were fixed and reconfirmed against
the same key (32). No items were left unsupported or awaiting review.

| Domain | Fixed and reconfirmed | What changed |
| --- | --- | --- |
| Task Definition and Prompting | 001, 020 | XML separates feedback from instructions; it is not an injection guarantee. The pooled-count alternative uses labels actually supplied in the scenario. |
| Output Evaluation and Quality Control | 005, 012, 016, 021, 025 | Distinguished detecting discrepancies from locating them, allowed for zero actual downtime, and confined the order risk to stock that cannot be returned. Removed a distractor tell and separated two calculation checks that could mask each other's errors. |
| Capability, Model, and Context Selection | 001, 005, 008, 020 | Distinguished history from memory, attaching images to chat from adding project files, a search preview from the retrieved page, and project instructions from project memory. |
| Workflow Design and Integration | 003, 005, 010, 012, 014, 017–019, 022 | Distinguished web from connected evidence, blanks from missing records, and a handoff from an error-free outcome. Tightened the checkpoint, permission, Skill selection/release and pilot-measurement alternatives. |
| Configuration and Knowledge Management | 001, 003, 004, 006, 007, 009, 015, 017 | Made project scope, separation, freshness and onboarding constraints explicit; narrowed notes on Gmail retrieval, Drive images and project content management. |
| Responsible Use, Data Protection, and Governance | 001, 006, 010, 011 | Scoped policy claims to the actual recommendation and product; distinguished indirect identification from name removal and disabled connectors from unused ones. |

### Difficulty calibration

The comparison used the recorded workplace decision depth, directly for domains
2, 5 and 6 and by analogy for the unsampled domains. Within each row all IDs not
listed as hardened were assessed and left unchanged.

| Domain | Hardened IDs | Decision against the sample anchor |
| --- | --- | --- |
| Task Definition and Prompting | 005, 012, 016, 017, 021 | At the anchor. Removed a role cue and tightened alternatives around article boundaries, optional attendance, exception routing, and the fit between an instruction and its example. |
| Output Evaluation and Quality Control | None (001–028 calibrated) | Above the anchor overall. Separate publications need not mean independent trials, and checking a count is not the same as testing that its errors cannot cancel out. |
| Capability, Model, and Context Selection | 001, 009, 013, 014, 018, 019, 021 | At the anchor. Replaced labels that gave away privacy or model trade-offs. Alternatives now distinguish which response receives more effort, where a chat can be found, what deleting history removes, and which context to carry into a fresh chat. |
| Workflow Design and Integration | 003, 019, 020 | At the anchor. Removed cues that named the deliverable or release mechanism. Alternatives now also recognize the access limit but differ on how to obtain evidence outside it. |
| Configuration and Knowledge Management | 007, 013, 014, 016 | At the anchor. Made the decision turn on who supplied the evidence, when an example's facts were known, what an exception rule handles, or which installed Skill release changes. |
| Responsible Use, Data Protection, and Governance | None (001–024 calibrated) | Above the anchor overall. Some checks are direct, but the harder decisions combine constraints such as privacy and test usefulness, or distinguish evidence at the point of approval from evidence collected afterward. |

Fresh reviewers then solved all 19 hardened items without the stored answers.
All 19 matched, with no additional edits. The other 121 items needed no hardening.

### Bank checks

- Strict 2× balance: 140/140, zero short or surplus in every domain. The bank has
  108 single-select items, 31 select-two items and one select-three item.
- All three bias guards passed. Single-select key positions were 29/28/24/27;
  keys averaged 1.43 characters shorter than distractors and were uniquely longest
  on 20/108 single-select items (18.5%). Every distractor has a rationale.
- The strict network check resolved all 54 distinct citation pages and the exam
  guide; none were stale. The advisory claims scan had no figures, quotes or
  identifiers to check. Source support was established by the cold reads.
- `npm run check` passed (457 tests), as did the production build. Its preview
  served all six domain files with 140 reviewed items and a `draft` manifest.
