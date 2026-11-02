# ELAS — Expert Legal Analysis System

**A structured, jurisdiction-aware framework for legal issue spotting, legal research, document analysis, and transparent legal reasoning.**

[![Version](https://img.shields.io/badge/version-1.0.0-2026)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-ELAS%20Custom%20Use%20License-blue)](LICENSE)
[![Prompt](https://img.shields.io/badge/core-prompt%20framework-111111)](prompts/ELAS_MASTER_PROMPT.md)

ELAS is a model-independent legal-analysis prompt framework. It is designed to help users organize facts, identify legal issues, determine which jurisdiction and rules may apply, distinguish established facts from assumptions, research authoritative sources, and communicate uncertainty.

ELAS is an **informational analysis framework**, not a law firm, lawyer, court, regulator, or substitute for qualified legal advice. It does not guarantee that a conclusion is correct, complete, current, or suitable for a particular decision.

## Contents

- [What ELAS does](#what-elas-does)
- [Core principles](#core-principles)
- [Repository structure](#repository-structure)
- [Quick start](#quick-start)
- [Recommended workflow](#recommended-workflow)
- [Classification model](#classification-model)
- [Research and citations](#research-and-citations)
- [Limitations and safe use](#limitations-and-safe-use)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## What ELAS does

ELAS provides a repeatable structure for:

- **Legal issue spotting:** identify potentially relevant legal questions without assuming the user's framing is complete.
- **Jurisdiction analysis:** determine the country, state, province, territory, forum, and relevant cross-border connections.
- **Fact management:** separate supplied facts, verified facts, assumptions, disputed facts, and missing information.
- **Legal research planning:** identify primary sources and reliable secondary sources that need to be checked.
- **Rule application:** connect legal rules to specific facts and explain competing interpretations.
- **Document analysis:** review clauses, notices, policies, contracts, correspondence, and other text for legal issues.
- **Risk communication:** describe legal, procedural, financial, practical, and evidentiary risks without false precision.
- **Transparent conclusions:** explain what is known, what is uncertain, and what would change the assessment.

ELAS is a prompt-and-documentation project. It does not contain a proprietary legal database, provide live legal updates by itself, or independently verify sources unless the model or user has access to suitable research tools.

## Core principles

1. **Jurisdiction before conclusion.** Do not apply a rule until the relevant legal system and time period have been identified.
2. **Facts before labels.** Do not accept a user's description such as “fraud,” “theft,” or “breach” as a proven legal classification.
3. **Sources before certainty.** Prefer current primary legal sources and cite the exact provision, decision, or official material where possible.
4. **No invented authority.** Never fabricate statutes, sections, cases, quotations, court holdings, dates, URLs, or citations.
5. **Uncertainty is an answer.** If the facts or law are insufficient, say so and identify what is missing.
6. **Balanced reasoning.** Address arguments for and against each material conclusion.
7. **Proportionality.** Match the depth of analysis to the stakes and complexity.
8. **Human responsibility.** Users must verify important conclusions with qualified professionals.

## Repository structure

```text
ELAS/
├── README.md
├── LICENSE
├── SECURITY.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
├── CITATION.cff
├── .gitignore
├── prompts/
│   ├── ELAS_MASTER_PROMPT.md
│   ├── LEGAL_ANALYSIS.md
│   ├── JURISDICTION_ANALYSIS.md
│   ├── DOCUMENT_ANALYSIS.md
│   └── SOURCE_VERIFICATION.md
├── documentation/
│   ├── ARCHITECTURE.md
│   ├── CLASSIFICATION_STANDARD.md
│   ├── RESEARCH_STANDARD.md
│   ├── PRIVACY_AND_DATA_HANDLING.md
│   ├── LIMITATIONS.md
│   └── FAQ.md
├── examples/
│   ├── README.md
│   ├── contract-clause-review.md
│   ├── jurisdiction-ambiguity.md
│   └── insufficient-facts.md
├── evaluation/
│   ├── README.md
│   ├── quality-checklist.md
│   └── test-cases.md
└── .github/
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    ├── PULL_REQUEST_TEMPLATE.md
    └── workflows/
        └── markdown-check.yml
```

## Quick start

1. Open [`prompts/ELAS_MASTER_PROMPT.md`](prompts/ELAS_MASTER_PROMPT.md).
2. Copy the complete master prompt into the system-instruction or custom-instructions field of a compatible AI assistant, where supported.
3. Describe the situation in neutral, factual language.
4. State the jurisdiction and relevant dates if known. If unknown, ask ELAS to identify what must be clarified.
5. Provide only the documents and personal information necessary for the task. Remove unnecessary identifiers and confidential details.
6. Ask for an analysis using the output structure in the master prompt.
7. Verify every important legal source and conclusion independently.

For a narrower task, use one of the focused prompts in `prompts/`.

## Recommended workflow

| Stage | Objective | Expected result |
|---|---|---|
| 1. Intake | Understand the question and requested outcome | Neutral issue statement |
| 2. Jurisdiction | Identify applicable legal systems and dates | Jurisdiction map and gaps |
| 3. Facts | Separate established, disputed, assumed, and missing facts | Fact matrix |
| 4. Issues | Identify legal questions and elements | Issue list |
| 5. Research | Locate current authoritative sources | Source register |
| 6. Analysis | Apply rules to facts and counterarguments | Reasoned analysis |
| 7. Classification | State the best-supported assessment | Qualified classification |
| 8. Action | Identify proportionate next steps | Verification and action checklist |

## Classification model

ELAS uses qualified classifications rather than pretending every question has a binary answer:

- **Likely lawful:** the available facts and verified law support permissibility, subject to stated qualifications.
- **Likely unlawful:** the available facts and verified law support a legal violation.
- **Potentially unlawful:** material facts or legal elements could support unlawfulness, but the conclusion is not established.
- **Unclear / insufficient information:** the available information does not support a reliable classification.
- **Mixed / issue-dependent:** different parts of the conduct may receive different legal treatment.

A classification is not a court judgment and must never be presented as one.

## Research and citations

Use the hierarchy and verification process in [`documentation/RESEARCH_STANDARD.md`](documentation/RESEARCH_STANDARD.md). In general:

1. Current legislation and official consolidated legal texts.
2. Binding or otherwise authoritative court decisions in the relevant jurisdiction.
3. Official regulator, government, and court guidance.
4. Treaties and official international materials where applicable.
5. Reputable legal commentary and academic sources for context.

Always identify the jurisdiction, issuing authority, date, provision or paragraph, and source URL when available. Distinguish binding authority from persuasive material. If a source cannot be accessed or verified, label it as unverified rather than implying that it was checked.

## Limitations and safe use

- ELAS can make mistakes, omit relevant law, misunderstand facts, or produce outdated information.
- A language model may generate plausible but false citations. Verify them at the official source.
- Legal rules change. Check the law in force on the relevant date.
- Cross-border questions may involve conflict-of-laws rules, jurisdiction, recognition, enforcement, and mandatory rules.
- A short prompt cannot replace professional judgment, procedural knowledge, legal representation, or a complete review of evidence.
- Do not rely on ELAS alone for deadlines, court filings, criminal exposure, immigration status, child protection, safety, major financial decisions, or other high-stakes matters.

If a deadline or immediate danger may exist, contact the appropriate qualified professional or authority promptly.

## Customization

You may adapt the prompts to a particular jurisdiction, practice area, organization, or model. Preserve the safeguards against fabricated citations, unsupported certainty, and missing jurisdiction. Document material modifications when redistributing a modified copy.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) before opening a contribution.

## License

This repository is distributed under the **ELAS Custom Use License** in [`LICENSE`](LICENSE). It permits broad use, copying, modification, and redistribution subject to its conditions and prohibited-use clause. It is a custom source-available license and is **not an OSI-approved open-source license**.

Copyright © 2026 Just4Stickman.
