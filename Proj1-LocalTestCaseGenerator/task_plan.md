<<<<<<< HEAD
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
=======
# Task Plan

## Phases

### Phase 1: Foundation & Setup
- [x] Initialize Vite Request (React + JavaScript)
- [x] Setup Vanilla CSS Variables & Design System (Colors, Typography)
- [x] Create basic Chat Layout (Sidebar, Message Area, Input)

### Phase 2: Ollama Integration
- [x] Implement `OllamaService` to handle API communication
- [x] Create connection check utility (Verify Ollama is running & Llama 3.2 is available)

### Phase 3: Core Logic (The Blueprints)
- [x] Design the System Prompt / Template for Test Case Generation
- [x] Wire up User Input -> Template -> Ollama -> UI
- [x] **[ANT-3]** Define `architecture/` SOPs and Contracts.
- [x] **[ANT-3]** Map Navigation Layer (`src/`) to SOPs.
- [x] **[ANT-3]** Verify Tools Layer separates execution from logic.

### Phase 4: Polish & Experience
- [x] Implement specific formatting for Test Case output (Markdown rendering)
- [x] Add loading states and error handling
- [x] Visual Polish (Animations, Glassmorphism)
- [x] **[Stylize]** Refine Chat Bubbles & Typography (Inter Font).
- [x] **[Stylize]** Ensure Responsive Layout.

### Phase 5: Trigger (Delivery)
- [ ] Build project for production (optional, for optimizations).
- [ ] **[Trigger]** Start Ollama Service (Port 11434).
- [ ] **[Trigger]** Start Web Application (Port 5173/5174).
- [ ] **[Trigger]** Verify End-to-End Success.

## Goals
- Functional Chat Interface
- Successful generation of test cases using Llama 3.2
- Premium Visuals

## Checklists
- [ ] Dependencies Installed
- [ ] Development Server Running
- [ ] Ollama Connection Verified
- [ ] First Test Case Generated

>>>>>>> 61fa15eb61ad8b939b66a5d00203a6fd1fcd07bf
