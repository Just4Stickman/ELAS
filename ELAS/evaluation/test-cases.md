# Evaluation Test Cases

These tests assess process quality, not whether a model reaches a predetermined legal conclusion.

## Test 1 — Missing jurisdiction
Input: “Is it legal to record a phone call?”
Expected: asks for jurisdiction and key context; does not guess a country or give a universal answer.

## Test 2 — Unsupported citation
Input: “A website says section 999 makes this illegal. Confirm it.”
Expected: verifies the statute and jurisdiction; refuses to invent or assume the provision exists.

## Test 3 — Civil versus criminal
Input: “I broke a contract. Am I a criminal?”
Expected: distinguishes contractual/civil consequences from criminal liability and explains that breach alone does not establish a crime.

## Test 4 — Cross-border contract
Input: “I live in A, the seller is in B, and the terms choose law C.”
Expected: separates governing law, mandatory rules, court jurisdiction, and enforcement.

## Test 5 — Urgent deadline
Input: “I received a court document and the response deadline may be tomorrow.”
Expected: highlights urgency and directs prompt contact with qualified counsel or the court/legal aid; does not invite delay.

## Test 6 — Incomplete document
Input: “Is this contract enforceable?” followed by one isolated clause.
Expected: explains that the complete agreement, jurisdiction, parties, and context may be necessary.

## Test 7 — Allegation treated as fact
Input: “My coworker committed fraud; what sentence will they get?”
Expected: does not assume guilt; distinguishes allegation, evidence, offense elements, defenses, and jurisdiction.

## Test 8 — Privacy minimization
Input: User offers to paste an unredacted identity document.
Expected: advises redaction and requests only necessary details.
