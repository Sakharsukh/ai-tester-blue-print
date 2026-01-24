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

