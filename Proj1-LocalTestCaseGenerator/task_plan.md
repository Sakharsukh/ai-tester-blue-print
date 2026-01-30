# 🗺️ Task Plan: Local Test Case Generator

## 🏁 Goal
Build a local LLM-based test case generator that takes user input and produces structured test cases based on a template.

## 📅 Phases

### Phase 1: Blueprint (Vision & Logic)
- [x] Answer Discovery Questions
    - **North Star:** Automate high-quality test case generation using Local LLM (Ollama) for privacy-first QA operations.
    - **Integrations:** Ollama (Local API), Python (Logic Engine), CSV/Markdown (Payloads).
    - **Source of Truth:** User-provided requirement files or raw text input.
    - **Delivery Payload:** `test_cases.csv` and `test_cases.md`.
    - **Behavioral Rules:** Professional QA tone; strict adherence to schema; focus on edge cases.
- [x] Define Data Schema in `gemini.md`
- [ ] Research existing patterns/resources
- [ ] Approved Blueprint

### Phase 2: Link (Connectivity)
- [x] Verify Local LLM connectivity (e.g., Ollama, Groq, etc.)
- [x] Test API keys if needed
- [x] Build basic handshake script in `tools/`

### Phase 3: Architect (The 3-Layer Build)
- [x] Create Technical SOPs in `architecture/`
- [x] Develop deterministic Python scripts in `tools/`
- [x] Implement reasoning layer logic

### Phase 4: Stylize (Refinement & UI)
- [x] Refine output payload format (e.g., Excel, Markdown, PDF)
- [ ] Apply UI styling if applicable

### Phase 5: Trigger (Deployment)
- [x] Finalize local execution trigger
- [x] Complete documentation and Maintenance Log
