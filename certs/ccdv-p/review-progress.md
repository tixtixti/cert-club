# Claude Certified Developer – Professional review record

Standing record of how this bank was built and reviewed, and of the judgement
calls a future author should not have to rediscover. Chronology lives in git;
this file holds the reasons.

Scaffolded on 2026-11-18 via `scripts/scaffold-cert.mjs` during an `assess-new-cert`
recon based on the Claude Certified Developer – Professional Exam Guide v1.0
(Effective November 2026, Exam code: CCDV-P). Bank authored, adversarially
evaluated, difficulty-hardened, and grounded across November 18–23, 2026.

## Bank status: `draft`

`manifest.status` is `draft`. The bank contains 140 questions (all 140 `status: "reviewed"`, 0 `draft`), achieving exactly 2× the 70-question exam baseline proportionally distributed across all eight domains with zero delta. All 140 questions have undergone adversarial correctness evaluation (`evaluate-questions`) and difficulty calibration (`harden-domain-questions`). All quality, balance, and anti-bias guards pass cleanly. Promotion to `stable` is human-gated (per `certs/ADDING-A-CERT.md` § Bank status) and awaits explicit maintainer confirmation.

## Recon verdict: `GO-WITH-CONSTRAINTS`

Recorded 2026-11-18. The guide is publicly accessible without login, the blueprint extracts cleanly with exact integer weights summing to 100%, and every domain has citable vendor documentation.

**Named constraints:**

1. **No skill weights**: The guide names 2–4 skills per domain but weights only domains; the manifest declares no `skills`. Authors manually balance items across named blueprint skills.
2. **Samples cover three of eight domains**: Domains 1, 3, 4, 6, and 8 have no vendor sample. Cognitive depth is anchored by the candidate profile (§ 3, Intended Audience) and the style of the three samples.
3. **No calibration set**: Depth is anchored strictly by the three guide samples and candidate profile. No third-party practice set is recorded.
4. **Generic-ops gravity**: Observability (D3), incident response (D4), and fleet operations (D8) risk generic vendor-neutral SRE trivia. Every question must strictly key on facts documented by Anthropic.
5. **Named external frameworks**: Domain 7 names OWASP Top 10 for LLM Applications and NIST AI RMF with its GenAI Profile; `genai.owasp.org` and `nist.gov` / `nvlpubs.nist.gov` are citable for framework claims only.
6. **New guide host, version 1.0**: The guide is published on `cc.sj-cdn.net` under Anthropic's instructor path (v1.0, Initial publication, November 2026).

## Blueprint and weights

Guide: `Version 1.0 · Effective November 2026 · Exam code: CCDV-P · This guide is subject to change without notice.` Document control: `1.0 · Initial publication · November 2026`.

Exam facts: 70 items (60 scored, 10 unscored), 120 minutes, scaled pass 720 on 100–1,000, $175. (Third-party sites reported 135 minutes from a pre-publication preview; the guide specifies 120 minutes.) Item format: Scenario-based multiple-choice (single-select) and multiple-response (multi-select). Weights are exact integers summing to 100; CCDV-F scope is assumed knowledge.

|   # | Domain                                                       | Slug                                                         |   Weight | Target (1x: 70) | Target (2x: 140) | Named skills (unweighted)                                                                                                                                                                 |
| --: | ------------------------------------------------------------ | ------------------------------------------------------------ | -------: | --------------: | ---------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1 | Advanced Agent Architecture and Orchestration                | `advanced-agent-architecture-and-orchestration`              |      17% |              12 |               24 | Multi-Agent Orchestration; Durable Execution and State Management; Architecture Selection at Scale; Context and Memory Architecture                                                       |
|   2 | Production Integration, Reliability, and Knowledge Grounding | `production-integration-reliability-and-knowledge-grounding` |      20% |              14 |               28 | Reliability Engineering for Claude Services; Scale and Throughput Management; Production MCP and Change Management; Retrieval and Knowledge Grounding at Scale                            |
|   3 | Observability and Production Monitoring                      | `observability-and-production-monitoring`                    |      12% |               8 |               17 | Telemetry and Instrumentation; Production Monitoring and Alerting; Trace Analysis at Scale                                                                                                |
|   4 | Advanced Debugging and Incident Response                     | `advanced-debugging-and-incident-response`                   |      10% |               7 |               14 | Complex Failure Diagnosis; Incident Response and Learning Loops                                                                                                                           |
|   5 | Evaluation Engineering and Quality Assurance                 | `evaluation-engineering-and-quality-assurance`               |      12% |               8 |               17 | Evaluation System Design; LLM-as-Judge Engineering; Online Quality Measurement                                                                                                            |
|   6 | Cost and Latency Optimization at Scale                       | `cost-and-latency-optimization-at-scale`                     |       8% |               6 |               11 | Cost Architecture at Scale; Latency Engineering                                                                                                                                           |
|   7 | Runtime Guardrails and Production Security                   | `runtime-guardrails-and-production-security`                 |      11% |               8 |               15 | Runtime Guardrail Systems; Threat Defense and Adversarial Testing for Agentic Systems; Identity, Secrets, and Audit at Scale                                                              |
|   8 | Agent Fleet Operations for Software Delivery                 | `agent-fleet-operations-for-software-delivery`               |      10% |               7 |               14 | Parallel Agent Orchestration for Engineering Work; Verification and AI Code Review Operations; Unattended and Event-Driven Agent Operations; Organization-Wide Coding Agent Configuration |
|     | **Total**                                                    |                                                              | **100%** |          **70** |          **140** |                                                                                                                                                                                           |

## Composition and coverage audit

Re-audited 2026-11-23 after the skill-level gap-fill batch (140 questions):

- **Distribution**: Proportional across all 8 domains (24 / 28 / 17 / 14 / 17 / 11 / 15 / 14), with zero delta against 2× blueprint targets.
- **Item formats**: 112 single-select, 28 multi-select (20.0% multi-response; all select-TWO, avoiding leading runs).
- **Status breakdown**: 140 reviewed, 0 draft (100% adversarial cold evaluation verified).
- **Sourcing**: 64 distinct vendor documentation pages across Anthropic platforms (`platform.claude.com`, `code.claude.com`, `anthropic.com/research`), MCP specifications (`modelcontextprotocol.io`, pinned revision), OWASP, and NIST. Concentration: `code.claude.com/docs/en/monitoring-usage` backs 7 items (6 in D3).
- **Single-select position distribution**: 26 A / 31 B / 30 C / 25 D (max 27.7%, ceiling 50%).
- **Option length delta**: Mean correct-option length minus distractor length is +1.98 characters (median +2.00 characters, within [-10, 10]).
- **Longest option as key share**: 34 of 112 single-select items (30.4%), well below the 45% ceiling.
- **Heuristic baselines**: 0 items uniquely guessable by eliminating absolute qualifiers.
- **Distractor notes coverage**: 100% (all 140 items carry detailed rationale for every distractor).
- **Bias guards**: All pass cleanly (`positionBias`, `lengthBiasMeanDelta`, `longestOptionIsKey`).

### Known coverage limits and deliberate boundaries

Coverage is judged per named blueprint skill. The guide weights domains only, so authors balance items against the guide's § 5 skill sentences:

- _Domain 1 (Advanced Agent Architecture and Orchestration)_: Covers Anthropic workflow patterns (chaining, routing, sectioning, orchestrator-workers, evaluator-optimizer), subagent context isolation, durable execution (`SessionStore`, `rewindFiles()`, client-side memory tool with multisession progress log), Managed Agents human approval (`always_ask` override vs `auto`), context editing/compaction, and tool search. **Thin**: architecture-selection items lean on `building-effective-agents`; cache-safe mid-conversation instruction changes tested indirectly. Deliberately excludes third-party multi-agent frameworks.
- _Domain 2 (Production Integration, Reliability, and Knowledge Grounding)_: Covers error semantics, retry/backoff, throughput limits, workspace isolation, batch processing, MCP transports and tool search, cross-platform feature parity (Bedrock unsupported features), model-ID pinning with prompt/model co-versioning and staged rollback, agentic search vs RAG, hybrid search/reranking, contextual retrieval, citations, and uncertainty declaration. **Thin**: remote MCP auth in production, gateway/routing architectures, and stage-by-stage retrieval failure diagnosis.
- _Domain 3 (Observability and Production Monitoring)_: Covers Claude Code and Claude API OpenTelemetry, SDK stdout IPC, token deduplication across spans, metric cardinality, trace propagation, SLIs counting refusals and `max_tokens` stops as failures, drift on a pinned model ID, cohort analysis of sampled spans, and cache diagnostics under ZDR. **Thin**: sampling strategy selection (cohort item assumes a sample); dashboard layout untested.
- _Domain 4 (Advanced Debugging and Incident Response)_: Covers `stop_reason` diagnostics, empty `end_turn`, tool timeouts vs 504, transient vs spend-cap 429, overload thundering herd, multi-agent hand-off loss, and post-incident learning loops (failures become regression tests, monitoring replaces complaints). **Thin**: incident communication; `-012` and `-016` intentionally share the "failures become test cases" theme from distinct angles (monitoring vs suite blindness).
- _Domain 5 (Evaluation Engineering and Quality Assurance)_: Covers code vs model grading, synthetic-suite blind spots, `pass@k`, contamination, position/verbosity bias, kappa on imbalanced data, reasoning-before-verdict graders, shadow evaluation, judge re-calibration on model swaps, and capability-suite saturation. **Thin**: retrieval precision/groundedness metrics and A/B test design. Deliberately excludes third-party eval libraries.
- _Domain 6 (Cost and Latency Optimization at Scale)_: Covers prompt prefix hierarchy, batch discount stacking with caching, streaming TTFT, lookback window, tier routing, parallel tool execution for total latency, and per-conversation model routing to avoid `model_changed` cache misses. **Thin**: per-tenant budget enforcement and cost forecasting.
- _Domain 7 (Runtime Guardrails and Production Security)_: Covers hook precedence and `updatedInput`, sandbox boundaries, indirect injection defense, OWASP LLM06, subprocess env scrubbing, NIST AI RMF mapping, workload identity federation migration (residual API keys outrank federation), memory-store poisoning (`read_only` attach, write-back rollback), and MCP scope minimization with privilege escalation audits. **Thin**: PII redaction and guardrail tuning curves.
- _Domain 8 (Agent Fleet Operations for Software Delivery)_: Covers `.worktreeinclude`, subagent worktree isolation, Code Review customization/verification, gating merges on Code Review severity from CI after a comment-only calibration period, headless CI flags, `--max-budget-usd`, Channels, managed MCP allowlists (`allowManagedMcpServersOnly`), managed permission locks, and scheduled-task alerting. **Thin**: merge/conflict resolution for parallel fan-out; fleet-level telemetry triage; shared Skills governance.

## Source classification

Evaluated against the repository's two non-negotiable tests (Gate and Authority):

| Candidate source                                                                  | Gate | Authority | Disposition                         | Notes                                                                                       |
| --------------------------------------------------------------------------------- | ---- | --------- | ----------------------------------- | ------------------------------------------------------------------------------------------- |
| Exam guide PDF (`cc.sj-cdn.net/instructor/6nizmqk8tpzpfjvt6qmmav7rh/...`)         | Pass | Pass      | **Citable** (`examUrl`)             | Anthropic's instructor path on CDN host; opens without login.                               |
| Claude Platform docs (`platform.claude.com/docs/en/*`)                            | Pass | Pass      | **Citable**                         | API, rate limits, caching, context editing, stop reasons, evals. Bare URL form.             |
| Claude Code docs (`code.claude.com/docs/en/*`)                                    | Pass | Pass      | **Citable**                         | Hooks, monitoring/OTel, worktrees, settings, sandboxing, code review.                       |
| Anthropic engineering posts (`www.anthropic.com/engineering/*`)                   | Pass | Pass      | **Citable**                         | Multi-agent, contextual retrieval, evals posts.                                             |
| MCP docs & specs (`modelcontextprotocol.io/*`)                                    | Pass | Pass      | **Citable**                         | Specifications and transports (stdio, Streamable HTTP).                                     |
| OWASP GenAI (`genai.owasp.org/llm-top-10/`)                                       | Pass | Pass      | **Citable** (framework claims only) | Named by D7; owner of the OWASP LLM Top 10.                                                 |
| NIST AI RMF (`www.nist.gov/itl/ai-risk-management-framework`, `nvlpubs.nist.gov`) | Pass | Pass      | **Citable** (framework claims only) | Named by D7; owner of AI RMF 1.0 and GenAI Profile.                                         |
| Anthropic Partner Academy (`anthropic-partners.skilljar.com`)                     | Fail | Pass      | **Excluded**                        | Registration-gated. The test is registration, not price.                                    |
| Course landing pages / `preporato.com` blog posts                                 | Pass | Fail      | **Readable only**                   | Curriculum check only; never cite for technical facts (preporato's 135-min claim is wrong). |
| Legacy documentation (`docs.anthropic.com`)                                       | Pass | Fail      | **Excluded**                        | Legacy redirects per `VENDORS.md`.                                                          |
| Third-party guide mirrors and question dumps                                      | Pass | Fail      | **Excluded**                        | Fails authority; real-exam items strictly off-limits.                                       |

## Official sample question inventory

Guide § 7 provides three sample questions with answer keys and rationales, serving as the cognitive-level anchor:

| Sample | Domain                    | Tested Mechanism & Cognitive Shape                                                                    | Key |
| ------ | ------------------------- | ----------------------------------------------------------------------------------------------------- | --- |
| 1      | D2 Production Integration | Trace evidence of mixed failure classes in one retry path; pick the change that improves reliability. | B   |
| 2      | D5 Evaluation Engineering | Judge metrics show bias and low human agreement; pick the first action.                               | C   |
| 3      | D7 Runtime Guardrails     | Red-team exploit through tool chain; pick the control that closes the path.                           | A   |

**Anchor parameters**: Single- and multi-select items with 4–5 options, stems of roughly 60–90 words presenting authentic production constraints and operational evidence, options of balanced length representing plausible engineering actions, and conceptual discrimination avoiding syntax or parameter trivia.

## Calibration principles and deliberate headroom

- **Cognitive anchor**: Anchored to the three official samples across Domains 2, 5, and 7 and the Candidate Profile (§ 3, Intended Audience) for unrepresented domains (D1, D3, D4, D6, D8).
- **Calibration firewall**: No third-party practice question banks or exam-passer recollections were used. All question stems and distractors were authored cold from public documentation.
- **Scenario shape**: Stems establish an authentic architectural or operational failure state, concrete metrics, and engineering constraints. Distractors represent genuine engineering anti-patterns or adjacent mechanisms rather than implausible distractors or keyword gimmicks.
- **Deliberate headroom**: Questions consistently test production trade-offs, failure recovery, and architectural boundaries at or above sample difficulty.

## Architectural and sourcing adjudications

Standing technical rulings and non-obvious groundings:

- **D1 Sourcing and API grounding**:
  - `008`: Custom MCP tool error reporting requires `isError: true` (`code.claude.com/docs/en/agent-sdk/custom-tools`).
  - `009`: Durable session persistence across ephemeral restarts via `SessionStore` `append`/`load` (`code.claude.com/docs/en/agent-sdk/session-storage`).
  - `010`: Multi-turn state rollback via file checkpointing `rewindFiles()` with context preservation (`code.claude.com/docs/en/agent-sdk/file-checkpointing`).
  - `011`: Unbounded human-in-the-loop approvals via `PreToolUse` hook `defer` decision (`code.claude.com/docs/en/hooks`).
  - `003` & `012`: Aligned strictly with documented definitions in `building-effective-agents` (orchestrator-workers dynamic decomposition and synthesis; workflows vs agents predefined code paths).
- **D4 Continuation & stop reasons**: Item `006` tests the documented Messages API `pause_turn` stop reason and resumption protocol (`handling-stop-reasons`), replacing an ungrounded claim regarding automatic tool loop detection in `troubleshooting`.
- **D2 Retrieval & RAG grounding**: Item `027` citation pinned to authoritative Anthropic engineering post (`anthropic.com/engineering/contextual-retrieval`).
- **Model stability claims**: `model-ids-and-versions` is the sole source for model-stability claims. Keep exactly one item keyed on infrastructure drift (`019` in D3); D2 `030` uses the "evergreen pointer" myth only as a distractor. Version-specific facts appear in explanations and notes, not stems.
- **Near-duplicate adjudications**:
  - Hook exit code 1 non-blocking tested in D7 `004` (retired D4 `008`).
  - Managed OTel endpoint header stripping tested in D3 `002` (retired D7 `015`).
- **Difficulty hardening & distractor repairs**:
  - `cost-and-latency-optimization-at-scale-009`: Replaced fabricated SSE event names with authentic `text_delta` near-miss inside `content_block_delta` and padded distractors.
  - `agent-fleet-operations-for-software-delivery-005`: Replaced synthetic third-party scanner distractor with authentic operational near-miss (`Code Review suspends automated check runs on unprotected branches`).
  - `advanced-debugging-and-incident-response-004`: Tightened distractor `b` to remove editorializing phrasing into a plausible near-miss action.
  - `production-integration-reliability-and-knowledge-grounding-020`: Replaced implausible UDP socket with legacy HTTP+SSE GET endpoint near-miss.
  - `production-integration-reliability-and-knowledge-grounding-021`: Replaced cartoon security anti-patterns with application-layer encryption, privileged root containers, and transport read-only near-misses.
  - `production-integration-reliability-and-knowledge-grounding-025`: Replaced naive alphanumeric stripping distractor with HyDE near-miss.
  - `production-integration-reliability-and-knowledge-grounding-027`: Replaced facepalm hallucination tell with section header metadata filtering near-miss.
  - `production-integration-reliability-and-knowledge-grounding-028`: Replaced anti-grounding tells with persona prompting, fine-tuning, and external web search near-misses.

## Maintenance audits

### Initial authoring, calibration, and cold evaluation (2026-11-18)

- **Scope**: Initial 140 questions (2× baseline of 70) authored across all 8 domains.
- **Adversarial cold evaluation**: 140/140 answer sets independently cold-derived against live vendor documentation; 139 confirmed intact, 1 unsourced claim (`advanced-debugging-and-incident-response-006`) rewritten and verified. All 140 items promoted to `status: "reviewed"`.
- **Difficulty calibration (`harden-domain-questions`)**: 129 items confirmed calibrated at or above guide sample difficulty without change; 11 items hardened across D1 (3), D2 (5), D4 (1), D6 (1), and D8 (1) by replacing weak distractors with technical near-misses.
- **Balance and bias reconciliation**: Zero blueprint delta; all bias guards pass cleanly (position distribution max 25.9%, key length delta +1.77, longest option key 28.4%, 0 absolute qualifier tells, 100% distractor notes).

### Code review validation and grounding fixes (2026-11-19)

- **Domain 1 grounding**: Items `008`–`011` re-sourced to first-party Agent SDK and hooks documentation; `003` and `012` aligned with `building-effective-agents`.
- **Vendor profiles**: Updated `certs/VENDORS.md` to document CCDV-P exam guide CDN host (`cc.sj-cdn.net`), added `nvlpubs.nist.gov` to NIST citable sources, and documented citation traps.
- **Manifest date sync**: Synced `manifest.updatedAt` to `2026-11-19`. Full validation suite (`npm run check`) green.

### Skill-level gap-fill batch and calibration (2026-11-23)

- **Scope**: Net-zero replacement batch targeting unweighted named blueprint skills and resolving duplicate pairs. Bank maintained at 140/140 reviewed items.
- **Retired items (23)**: Retired duplicates, flag/string-recall items, and definitional stems (D1 `014`, `019`, `024`; D2 `005`, `006`, `011`, `024`; D3 `005`, `012`, `015`, `016`; D4 `008`, `014`; D5 `009`, `016`; D6 `002`, `005`; D7 `012`, `013`, `015`; D8 `002`, `006`, `012`). IDs permanently retired.
- **Authored items (23)**: Added coverage for unrepresented blueprint skills (D1 `025`–`027`, D2 `029`–`032`, D3 `018`–`021`, D4 `015`–`016`, D5 `018`–`019`, D6 `012`–`013`, D7 `016`–`018`, D8 `015`–`017`) across new documentation (Managed Agents, Workload Identity Federation, Cache Diagnostics, model IDs, OTel spans, and MCP security).
- **Difficulty calibration**: 15 items confirmed calibrated without change; 8 items hardened by replacing weak distractors or removing stem leaks:
  - D2 `030`: Replaced transparent 400s option with single-switch rollout near-miss.
  - D2 `031`: Replaced dead-ends over-claim with stale-index contextual embeddings near-miss.
  - D3 `018`: Replaced transparent `end_turn` distractor with `pause_turn` failure near-miss.
  - D3 `020`: Removed `no error.type` stem leak.
  - D4 `015`: Replaced refuted distractor with lead-agent memory hand-off near-miss.
  - D4 `016`: Replaced manual review distractor with continuous regression suite near-miss.
  - D5 `018`: Replaced sample echo with two-judge consensus near-miss; reworded key away from sample echo.
  - D7 `018`: Replaced catalog consent restatement with connect-time fine-grained scopes near-miss.
- **Adversarial cold evaluation**: All 23 items (including hardened variants) independently cold-evaluated against vendor documentation; 23 confirmed, 0 miskeys. 100% of the 140 bank items remain `status: "reviewed"`.
