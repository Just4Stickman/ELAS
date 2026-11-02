<div align="center">

# ELAS
### Expert Legal Analysis System

**A structured, jurisdiction-aware legal analysis prompt framework.**

[![Version](https://img.shields.io/badge/version-1.0.0-444444)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-ELAS%20License-black)](LICENSE)
[![Status](https://img.shields.io/badge/status-initial%20release-blue)]()

</div>

---

## Overview

ELAS (Expert Legal Analysis System) is a comprehensive prompt framework designed to help AI assistants examine legal questions in a structured, transparent, and jurisdiction-aware manner.

It provides a repeatable method for:

- Identifying the relevant jurisdiction and applicable law.
- Gathering legally material facts through adaptive clarification.
- Separating established facts, allegations, assumptions, and unknowns.
- Examining legal rules element by element.
- Comparing competing legal interpretations and arguments.
- Identifying exceptions, defenses, procedural issues, and potential consequences.
- Assessing source quality and clearly disclosing research limitations.
- Producing understandable legal analysis with an explicit conclusion.

ELAS is a prompt framework, not a legal database, law firm, court, or autonomous legal decision-maker. Its reliability depends on the underlying AI model, available tools, source access, and completeness of the information supplied.

## Core design principles

| Principle | Implementation |
|---|---|
| Jurisdiction first | Do not assume which country's law applies. |
| Facts before conclusions | Ask relevant questions before individualized assessments. |
| Element-by-element reasoning | Test each legal requirement against the known facts. |
| Source transparency | Distinguish verified authority from commentary and uncertainty. |
| Balanced analysis | Examine arguments and counterarguments. |
| Consequence separation | Distinguish criminal, civil, administrative, contractual, and practical effects. |
| No fabricated authority | Never invent laws, cases, citations, quotations, or URLs. |
| Clear limitations | Disclose missing facts, unavailable research, and uncertainty. |

## Repository contents

```text
ELAS/
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── .gitignore
├── .editorconfig
├── prompts/
│   ├── ELAS_MASTER_PROMPT.md
│   ├── ELAS_ADVANCED_MODULES.md
│   ├── ELAS_QUICK_START.md
│   └── ELAS_SYSTEM_INSTRUCTIONS.txt
├── documentation/
│   ├── ARCHITECTURE.md
│   ├── METHODOLOGY.md
│   ├── RESEARCH_AND_SOURCES.md
│   ├── LIMITATIONS_AND_SAFETY.md
│   ├── MODES.md
│   ├── FAQ.md
│   └── VERSIONING.md
├── examples/
│   ├── general_legal_question.md
│   ├── contract_review.md
│   ├── jurisdiction_comparison.md
│   ├── legal_risk_scan.md
│   └── evidence_review.md
└── .github/
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    └── PULL_REQUEST_TEMPLATE.md
```

## Quick start

1. Read [`prompts/ELAS_MASTER_PROMPT.md`](prompts/ELAS_MASTER_PROMPT.md).
2. Copy the complete master prompt into the system-instruction field of an AI assistant that supports custom instructions.
3. Add [`prompts/ELAS_ADVANCED_MODULES.md`](prompts/ELAS_ADVANCED_MODULES.md) if you want the optional advanced workflows included.
4. Start a new conversation and describe the legal question.
5. Provide the relevant country or jurisdiction when known.
6. Answer the assistant's relevant clarification questions before relying on an individualized assessment.

For a shorter introduction, see [`prompts/ELAS_QUICK_START.md`](prompts/ELAS_QUICK_START.md).

## Analysis modes

ELAS can select a suitable mode automatically or respond to an explicit mode request:

- **QUICK ANALYSIS** — focused, concise assessment.
- **FULL ANALYSIS** — comprehensive legal examination.
- **DEEP RESEARCH** — source-based research when research tools are available.
- **JURISDICTION COMPARE** — comparison of specified legal systems.
- **RISK SCAN** — structured identification of legal exposure.
- **CASE FILE** — organized analysis of a continuing matter within available context.
- **DOCUMENT REVIEW** — review of supplied legal documents.
- **EVIDENCE REVIEW** — structured assessment of evidence and its limitations.
- **SCENARIO ANALYSIS** — comparison of hypothetical factual variations.
- **DUAL-SIDE ANALYSIS** — arguments for and against a legal position.

See [`documentation/MODES.md`](documentation/MODES.md).

## Important legal notice

ELAS produces general legal information and analytical assistance. It does not provide professional legal representation, does not create an attorney-client relationship, and cannot guarantee that an analysis is complete or correct. Laws change, jurisdiction matters, and legal outcomes depend on facts, evidence, procedure, and authoritative interpretation.

Do not rely on an AI-generated response as the sole basis for decisions involving legal rights, deadlines, criminal exposure, immigration status, child protection, substantial financial claims, or other high-stakes matters. Verify relevant law through official sources and consult a qualified legal professional when appropriate.

The master prompt requires a disclaimer in legal-information responses. That requirement does not make an AI response a substitute for legal advice.

## Research and source policy

When tools are available, ELAS should prioritize official legislation, official court decisions, government publications, regulatory authorities, and official international or regional legal databases. It must distinguish primary law from commentary and disclose when current verification was not possible.

Read [`documentation/RESEARCH_AND_SOURCES.md`](documentation/RESEARCH_AND_SOURCES.md).

## License and permitted use

The repository's `LICENSE` file governs use of the ELAS prompt materials. It permits personal, educational, and internal business use, including modification and adaptation, subject to restrictions on redistribution, publication, sharing, sublicensing, and resale.

**Do not assume this is an unrestricted open-source license.** Obtain written permission from the copyright holder before redistributing or making ELAS available to others, including modified versions. Third-party materials remain subject to their own terms.

## Contributing

Suggestions and issue reports are welcome. Submitting a contribution does not automatically grant permission to redistribute the project under different terms. See [`CONTRIBUTING.md`](CONTRIBUTING.md) and the license.

## Project status

This is an initial prompt-framework release. It does not include a legal database, automated legal citation validator, jurisdiction-specific legal rules engine, or guarantee of current-law coverage.

## Repository

- Owner: `Just4Stickman`
- Project: `ELAS`
- Suggested repository URL: `https://github.com/Just4Stickman/ELAS`
- Default branch: `main`
