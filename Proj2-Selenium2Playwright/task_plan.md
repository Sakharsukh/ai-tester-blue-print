# Task Plan - Proj2-Selenium2Playwright

## 🟢 Protocol 0: Initialization
- [x] Initialize Project Memory (task_plan.md, findings.md, progress.md, gemini.md)
- [x] Answer Discovery Questions

## 🏗️ Phase 1: Blueprint (Vision & Logic)
- [x] Define North Star: Web UI application to convert Selenium tests to Playwright (JS) and view diffs.
- [x] Define Integrations: GitHub.
- [x] Define Source of Truth: Folder of test scripts created with different inputs.
- [x] Define Delivery Payload: Display in Web UI & Write to a new folder.
- [x] Define Behavioral Rules: Use JS Playwright, Include comments.
- [ ] Define Data Schema in gemini.md
- [ ] Research existing tools/libraries


## ⚡ Phase 2: Link (Connectivity)
- [x] Verify Local LLM (Ollama) Connection (http://127.0.0.1:11434)
- [x] Handshake Script (`tools/check_llm.py`)

## ⚙️ Phase 3: Architect (The 3-Layer Build)
- [x] Create Architecture SOP (`architecture/conversion_flow.md`)
- [x] Build Tool: File Reader (`tools/read_source.py`)
- [x] Build Tool: LLM Converter (`tools/convert_code.py`)
- [x] Build Backend: FastAPI/Flask wrapper
- [x] Build Frontend: React/Vite UI


## ✨ Phase 4: Stylize (Refinement & UI)
- [x] Refine Payload (Diff Viewer, Demo Data Button)
- [x] Build/Refine UI (Working React App)

## 🛰️ Phase 5: Trigger (Deployment)
- [x] Cloud Transfer / Production Setup (Localhost Running)
- [x] Documentation (Plan & Progress Updated)
