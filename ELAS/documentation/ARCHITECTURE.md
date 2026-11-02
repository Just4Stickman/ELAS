# ELAS Architecture

ELAS is a prompt-based analytical framework rather than a standalone legal database or automated legal decision engine.

## Components

- **Master prompt:** defines role, safeguards, workflow, classification, and output expectations.
- **Focused prompts:** provide task-specific instructions for issue analysis, jurisdiction, document review, and source verification.
- **Documentation:** describes research quality, classification, limitations, privacy, and operating principles.
- **Examples:** illustrate safe analytical structure. They are fictional and are not legal precedents.
- **Evaluation:** provides review criteria and test scenarios for assessing output quality.
- **Repository governance:** defines contribution, security reporting, and change management.

## Processing model

1. User provides a question and relevant facts.
2. The assistant identifies missing jurisdictional and factual context.
3. The assistant frames legal issues.
4. Research tools, if available, are used to inspect authoritative sources.
5. Rules are mapped to facts and counterarguments.
6. A qualified classification and limitations are communicated.
7. The user verifies sources and seeks professional advice where appropriate.

## Dependencies and capabilities

ELAS does not require a specific model or programming language. Its effectiveness depends on the model's reasoning, available context, source access, and the quality of user-provided facts. Browsing or legal database access is not implied by the prompt itself.
