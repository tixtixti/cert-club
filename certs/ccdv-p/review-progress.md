# Claude Certified Developer – Professional review record

Standing record of how this bank was built and reviewed, and of the judgement
calls a future author should not have to rediscover. Chronology lives in git;
this file holds the reasons.

Scaffolded on 2026-11-18 via `scripts/scaffold-cert.mjs` during an `assess-new-cert`
recon based on the Claude Certified Developer – Professional Exam Guide v1.0
(Effective November 2026, Exam code: CCDV-P). Bank authored, adversarially
evaluated, difficulty-hardened, and grounded across November 18–19, 2026.

## Bank status: `draft`

`manifest.status` is `draft`. The bank contains 140 questions (all 140 `status: "reviewed"`, 0 `draft`), achieving exactly 2× the 70-question exam baseline proportionally distributed across all eight domains with zero delta. All 140 questions have undergone adversarial correctness evaluation (`evaluate-questions`), difficulty calibration (`harden-domain-questions`), and source re-grounding. All quality, balance, and anti-bias guards pass cleanly. Promotion to `stable` is human-gated (per `certs/ADDING-A-CERT.md` § Bank status) and awaits explicit maintainer confirmation.

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

Audited against the 140-question bank (post-hardening and evaluation):

- **Distribution**: Proportional across all 8 domains (24 / 28 / 17 / 14 / 17 / 11 / 15 / 14), with zero delta against 2× blueprint targets.
- **Item formats**: 116 single-select, 24 multi-select (17.1% multi-response; all select-TWO, avoiding leading runs).
- **Status breakdown**: 140 reviewed, 0 draft (100% adversarial cold evaluation verified).
- **Sourcing**: 44 distinct vendor documentation pages cited and verified across Anthropic platforms (`platform.claude.com`, `code.claude.com`, `anthropic.com/engineering`), MCP specifications (`modelcontextprotocol.io`), OWASP, and NIST.
- **Single-select position distribution**: 29 A / 30 B / 30 C / 27 D (max 25.9%, ceiling 50%).
- **Option length delta**: Mean correct-option length minus distractor length is +1.77 characters (median +2.00 characters, within [-10, 10]).
- **Longest option as key share**: 33 of 116 single-select items (28.4%), well below the 45% ceiling.
- **Heuristic baselines**: 0 items uniquely guessable by eliminating absolute qualifiers.
- **Distractor notes coverage**: 100% (all 140 items carry detailed rationale for every distractor).
- **Bias guards**: All pass cleanly (`positionBias`, `lengthBiasMeanDelta`, `longestOptionIsKey`).

### Known coverage limits and deliberate boundaries

- _Domain 1 (Advanced Agent Architecture and Orchestration)_: Covers canonical Anthropic workflow patterns (prompt chaining, routing, parallel sectioning, orchestrator-workers, evaluator-optimizer), durable checkpointing (`SessionStore`, file checkpointing `rewindFiles()`), and subagent context isolation. Excludes third-party multi-agent frameworks (LangGraph, AutoGen, CrewAI).
- _Domain 2 (Production Integration, Reliability, and Knowledge Grounding)_: Focuses on Messages API error semantics (HTTP 529 exponential backoff with full jitter, mid-stream SSE errors), ramp limits vs throughput limits, Streamable HTTP vs stdio MCP transports (legacy HTTP+SSE deprecated), MCP tool search deferral (`alwaysLoad`), Citations API, Voyage AI embeddings (Anthropic does not offer proprietary embeddings), and Contextual Retrieval. Excludes WebSocket MCP transports and cloud-provider IAM wrappers.
- _Domain 3 (Observability and Production Monitoring)_: Focuses on OpenTelemetry instrumentation, Agent SDK stdout IPC isolation, GenAI semantic conventions, HTTP 200 refusal monitoring, token deduplication across SDK client and API spans, Prometheus metric cardinality controls, and distributed trace propagation (`CLAUDE_CODE_PROPAGATE_TRACEPARENT`, `TRACEPARENT`).
- _Domain 4 (Advanced Debugging and Incident Response)_: Focuses on `stop_reason` diagnostics (`refusal` as HTTP 200, `max_tokens` incomplete JSON recovery, `pause_turn` iteration protocol), empty `end_turn` responses from trailing user text blocks, client-side tool execution timeouts vs HTTP 504 `timeout_error`, and transient 429 vs spend cap 429 (`retry-after` header presence).
- _Domain 5 (Evaluation Engineering and Quality Assurance)_: Focuses on deterministic code-based grading vs LLM-as-judge, synthetic evaluation suite blind spots, `pass@k` multi-step stochastic evaluation, test contamination hygiene, pairwise position bias mitigation (bidirectional swapping), verbosity bias mitigation, Cohen's kappa on imbalanced datasets, and shadow evaluation. Excludes third-party evaluation libraries (Ragas, TruLens).
- _Domain 6 (Cost and Latency Optimization at Scale)_: Focuses on prompt caching prefix hierarchy (`tools` > `system` > `messages`), Message Batches API 50% discount and 1-hour cache stacking, SSE streaming TTFT reduction, and cache lookback window mechanics (20-block window).
- _Domain 7 (Runtime Guardrails and Production Security)_: Focuses on `PreToolUse` hook precedence (`deny` > `defer` > `ask` > `allow`), argument rewriting via `updatedInput`, OS-level Bash sandbox boundaries, indirect prompt injection defense via `tool_result` encapsulation, OWASP LLM06 Excessive Agency controls, subprocess environment credential scrubbing (`CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1`), and enterprise managed settings locking.
- _Domain 8 (Agent Fleet Operations for Software Delivery)_: Focuses on `.worktreeinclude` for ignored files in isolated worktrees, GitHub Code Review service (`REVIEW.md` branch protection preconditions and path exclusions) vs local `/code-review`, headless CI execution (`claude -p` with `--allowedTools` and `--permission-prompts none`), `--max-budget-usd` spend ceilings, Channels MCP plugins for event-driven workflows, and settings precedence hierarchy.

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

Standing technical rulings and non-obvious groundings that future authors must not rediscover:

- **D1 Sourcing re-grounding**: Items `008`–`011` were re-grounded from high-level engineering prose to authoritative first-party SDK and hooks documentation:
  - `008`: Custom MCP tool error handling via `isError: true` (`code.claude.com/docs/en/agent-sdk/custom-tools`).
  - `009`: Durable session persistence across ephemeral container restarts via `SessionStore` `append`/`load` (`code.claude.com/docs/en/agent-sdk/session-storage`).
  - `010`: Multi-turn state rollback via file checkpointing `rewindFiles()` with context preservation (`code.claude.com/docs/en/agent-sdk/file-checkpointing`).
  - `011`: Unbounded human-in-the-loop approvals via `PreToolUse` hook `defer` decision (`code.claude.com/docs/en/hooks`).
  - `003` & `012`: Refined to align strictly with documented definitions in `building-effective-agents` (orchestrator-workers dynamic decomposition and synthesis; workflows vs agents predefined code paths).
- **D4 Continuation & stop reasons**: Item `006` tests the documented Messages API `pause_turn` stop reason and resumption protocol (`handling-stop-reasons`), replacing an ungrounded claim regarding automatic tool loop detection in `troubleshooting`.
- **D2 Retrieval & RAG grounding**: Item `027` citation pinned to authoritative Anthropic engineering post (`anthropic.com/engineering/contextual-retrieval`).
- **Difficulty hardening & distractor repairs**:
  - `cost-and-latency-optimization-at-scale-009`: Replaced fabricated SSE event names with authentic `text_delta` near-miss inside `content_block_delta` and padded distractors.
  - `agent-fleet-operations-for-software-delivery-005`: Replaced synthetic third-party scanner distractor with authentic operational near-miss (`Code Review suspends automated check runs on unprotected branches`).
  - `advanced-debugging-and-incident-response-004`: Tightened distractor `b` to remove editorializing phrasing into a plausible near-miss action.
  - `production-integration-reliability-and-knowledge-grounding-020`: Replaced implausible UDP socket with legacy HTTP+SSE GET endpoint near-miss.
  - `production-integration-reliability-and-knowledge-grounding-021`: Replaced cartoon security anti-patterns with application-layer encryption, privileged root containers, and transport read-only near-misses.
  - `production-integration-reliability-and-knowledge-grounding-025`: Replaced naive alphanumeric stripping distractor with HyDE near-miss.
  - `production-integration-reliability-and-knowledge-grounding-027`: Replaced facepalm hallucination tell with section header metadata filtering near-miss.
  - `production-integration-reliability-and-knowledge-grounding-028`: Replaced anti-grounding tells with persona prompting, fine-tuning, and external web search near-misses.
  - `advanced-agent-architecture-and-orchestration-014`: Replaced crude definition errors with architectural near-misses on dynamic replanning, multi-model deployment, and programmatic validation.
  - `advanced-agent-architecture-and-orchestration-019`: Replaced implausible platform claims with validation tool capability, evaluator-optimizer, and cache utilization near-misses.
  - `advanced-agent-architecture-and-orchestration-024`: Replaced facepalm subagent swarm and punctuation stripping with sectioning summarization and parametric fine-tuning near-misses.

## Maintenance audits

### Bank authoring, calibration, and cold evaluation (2026-11-18)

Initial pipeline authoring across all 8 domains to reach 2× baseline (140 questions):

- **Adversarial cold evaluation**: 140 / 140 answer sets independently cold-derived against live vendor documentation; 139 confirmed intact, 1 unsourced claim (`advanced-debugging-and-incident-response-006`) rewritten and verified. All 140 items promoted to `status: "reviewed"`.
- **Difficulty calibration (`harden-domain-questions`)**: 129 items confirmed calibrated at or above guide sample difficulty without change; 11 items hardened across D1 (3), D2 (5), D4 (1), D6 (1), and D8 (1) by replacing weak distractors with technical near-misses.
- **Stage D Reconciliation**: Zero blueprint delta; all bias guards pass cleanly (position distribution max 25.9%, key length delta +1.77, longest option key 28.4%, 0 absolute qualifier tells, 100% distractor notes).

### Code review validation and grounding fixes (2026-11-19)

Validated external review findings on `feat/ccdv-p-cert` and applied grounding fixes:

- **Domain 1 grounding**: Items `008`–`011` re-sourced to first-party Agent SDK and hooks documentation; `003` and `012` aligned with `building-effective-agents`.
- **Vendor profiles**: Updated `certs/VENDORS.md` to document CCDV-P exam guide CDN host (`cc.sj-cdn.net`), add `nvlpubs.nist.gov` to NIST citable sources, and document citation traps.
- **Manifest date sync**: Synced `manifest.updatedAt` to `2026-11-19`. Full validation suite (`npm run check`) green.
