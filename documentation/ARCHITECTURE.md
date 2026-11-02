# Architecture and Design

ELAS is a prompt framework organized into a core instruction set and optional analytical modules.

## Core layer
`prompts/ELAS_MASTER_PROMPT.md` defines role, operating principles, fact gathering, jurisdiction handling, legal analysis, source requirements, response structure, safety boundaries, and activation.

## Extension layer
`prompts/ELAS_ADVANCED_MODULES.md` defines optional workflows such as decision matrices, jurisdiction comparison, risk scanning, evidence matrices, timelines, and case-file summaries.

## Onboarding layer
`prompts/ELAS_QUICK_START.md` explains how to install and invoke the framework.

## Documentation layer
The documentation folder describes methodology, research, limitations, modes, versioning, and common questions.

## Design constraints
- The framework does not itself contain a current legal database.
- The framework does not execute code or independently verify law.
- Tool availability depends on the host AI product.
- Prompt compliance cannot guarantee factual or legal correctness.
- Users remain responsible for seeking qualified advice for high-stakes matters.
