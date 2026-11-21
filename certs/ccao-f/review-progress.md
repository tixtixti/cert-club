# Claude Certified Associate – Foundations review record

Standing record of how this bank was built and reviewed, and of the judgement
calls a future author should not have to rediscover. Chronology lives in git;
this file holds the reasons.

Recon completed and scaffolded on 2026-11-21 based on the Claude Certified Associate –
Foundations Exam Guide v1.1 (Effective December 7, 2026, Exam code: CCAO-F).

## Bank status: `draft`

`manifest.status` is `draft`. The bank holds 6 initial seed questions (1 per domain,
all `status: "draft"`), serving as the smoke test of the sourcing plan.

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

| Domain | Slug | Weight | Target (1x: 70) | Target (2x: 140) | Bank Questions |
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

Section 7 of the exam guide provides 3 official scenario-based sample questions, establishing the cognitive-level anchor for the bank:

1. **Sample 1** (Domain 2 – Output Evaluation and Quality Control): Marketing manager receives Claude draft of competitive brief with market-share percentages and a CEO quotation. Key: check cited figures and quotation against source documents or authoritative sources before external distribution.
2. **Sample 2** (Domain 5 – Configuration and Knowledge Management): Client Proposals Project starts citing a retired pricing schedule and terminology from an unrelated client engagement. Key: replace the retired pricing document in Project knowledge and delete cross-client memories.
3. **Sample 3** (Domain 6 – Responsible Use, Data Protection, and Governance): HR partner uses Claude code execution to analyze employee exit spreadsheet with employee names, home addresses, salaries, performance ratings, and free-text comments. Key: de-identify export before uploading (remove names/IDs, screen comments) and set memory controls.

## Calibration record

- External calibration sets: None.
- Calibration firewall: Affirmed. Cognitive level, question style, and scenario depth are anchored directly on the official guide's 3 scenario samples and candidate profile (business analysts, project managers, marketing/operations leads).
- Low sample count constraint: The guide publishes only 3 sample items (compared to 12 in `ccar-f`), so authors should lean on the detailed task statements in Section 5 and the AI Fluency Framework parameters for difficulty calibration.

## Initial seed smoke test

One draft question per domain was seeded on 2026-11-21 to verify the sourcing plan across all six domains:

- `ccao-f-task-definition-and-prompting-001`: Prompt structuring with XML tags to separate instructions from raw user feedback and prevent injection (`platform.claude.com`).
- `ccao-f-output-evaluation-and-quality-control-001`: Differentiating review depth and human accountability between internal brainstorming drafts and external regulatory filings (`support.claude.com`).
- `ccao-f-capability-model-and-context-selection-001`: Incognito chat to prevent history retention and memory updates during sensitive exploratory scenarios (`support.claude.com`).
- `ccao-f-workflow-design-and-integration-001`: Evaluating customer dispute workflow steps under Delegation criteria to retain high-stakes, low-reversibility empathetic steps for human staff (`cc.sj-cdn.net`).
- `ccao-f-configuration-and-knowledge-management-001`: Project configuration division of labor between persistent behavioral instructions and dynamic reference knowledge (`support.claude.com`).
- `ccao-f-responsible-use-data-protection-and-governance-001`: Anthropic Usage Policy high-risk requirements for meaningful human oversight in automated employment decision pipelines (`anthropic.com/legal/aup`).
