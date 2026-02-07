# Chapter 3: Essential AI Tools Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

## Overview

This chapter covers the setup and configuration of essential AI tools for QA professionals. You'll learn to install, configure, and validate cloud-based AI assistants, desktop applications, local AI tools, and AI-powered coding assistants.

> **Tip:** Use the [RICE POT Framework](../chapter_02_prompt_engineering/core_concepts/ch_02_rice_pot_framework.md) from Chapter 2 when working with any of these tools.

---

## Contents

### ☁️ Cloud AI Tools (`cloud_ai_tools/`)

- [Claude Setup](cloud_ai_tools/ch_03_claude_setup.md) - ⭐ PRIMARY - Anthropic Claude setup & tiers
- [ChatGPT Setup](cloud_ai_tools/ch_03_chatgpt_setup.md) - OpenAI ChatGPT configuration
- [Gemini Setup](cloud_ai_tools/ch_03_gemini_setup.md) - Google Gemini & AI Studio
- [Kimi K2 Setup](cloud_ai_tools/ch_03_kimi_k2_setup.md) - Moonshot Kimi K2 with 128K context

### 🖥️ Desktop AI Tools (`desktop_ai_tools/`)

- [Claude Desktop Setup](desktop_ai_tools/ch_03_claude_desktop_setup.md) - Claude Desktop app + MCP servers
- [LM Studio Setup](desktop_ai_tools/ch_03_lm_studio_setup.md) - Run local models with GUI
- [Blackbox AI Setup](desktop_ai_tools/ch_03_blackbox_ai_setup.md) - Blackbox AI assistant

### 🏠 Local AI Tools (`local_ai_tools/`)

- [Ollama Advanced Setup](local_ai_tools/ch_03_ollama_advanced_setup.md) - Advanced Ollama configuration
- [Local Models Comparison](local_ai_tools/ch_03_local_models_comparison.md) - Best models for QA tasks

### 💻 AI Coding Assistants (`ai_coding_assistants/`)

- [Anti Gravity Setup](ai_coding_assistants/ch_03_antigravity_setup.md) - ⭐ PRIMARY - Google Anti Gravity tool
- [Kimi Code Setup](ai_coding_assistants/ch_03_kimi_code_setup.md) - Kimi Code extension
- [GitHub Copilot Setup](ai_coding_assistants/ch_03_github_copilot_setup.md) - ⭐ PRIMARY - GitHub Copilot
- [Cursor for Testers](ai_coding_assistants/ch_03_cursor_for_testers.md) - Cursor IDE for QA workflows

### 🔌 IDE Integrations (`ide_integrations/`)

- [VS Code AI Setup](ide_integrations/ch_03_vscode_ai_setup.md) - ⭐ PRIMARY - VS Code AI configuration
- [Augment Setup](ide_integrations/ch_03_augment_setup.md) - Augment Code assistant
- [Amazon Q Setup](ide_integrations/ch_03_amazon_q_setup.md) - Amazon Q Developer
- [IntelliJ AI Setup](ide_integrations/ch_03_intellij_ai_setup.md) - IntelliJ AI Assistant
- [Claude Code Setup](ide_integrations/ch_03_claude_code_setup.md) - Claude Code CLI

### 🔒 Security Best Practices (`security_best_practices/`)

- [AI Tools Security](security_best_practices/ch_03_ai_tools_security.md) - API keys, privacy, enterprise safety

### 📝 Learning & Practice (`learning_practice/`)

- [Exercises](learning_practice/ch_03_exercises.md) - Hands-on setup exercises
- [Exercises - Solutions](learning_practice/ch_03_exercises_solutions.md) - Answer key

### ✅ Checklists (`checklists/`)

- [AI Tools Setup Validation](checklists/ch_03_ai_tools_setup_validation.md) - Complete validation checklist with test prompts

---

## Directory Structure

```text
chapter_03_essential_ai_tools_setup/
├── ch_03_essential_ai_tools_setup.md           # This file (main overview)
│
├── cloud_ai_tools/
│   ├── ch_03_claude_setup.md                   # ⭐ PRIMARY
│   ├── ch_03_chatgpt_setup.md
│   ├── ch_03_gemini_setup.md
│   └── ch_03_kimi_k2_setup.md
│
├── desktop_ai_tools/
│   ├── ch_03_claude_desktop_setup.md
│   ├── ch_03_lm_studio_setup.md
│   └── ch_03_blackbox_ai_setup.md
│
├── local_ai_tools/
│   ├── ch_03_ollama_advanced_setup.md
│   └── ch_03_local_models_comparison.md
│
├── ai_coding_assistants/
│   ├── ch_03_antigravity_setup.md              # ⭐ PRIMARY
│   ├── ch_03_kimi_code_setup.md
│   ├── ch_03_github_copilot_setup.md           # ⭐ PRIMARY
│   └── ch_03_cursor_for_testers.md
│
├── ide_integrations/
│   ├── ch_03_vscode_ai_setup.md                # ⭐ PRIMARY
│   ├── ch_03_augment_setup.md
│   ├── ch_03_amazon_q_setup.md
│   ├── ch_03_intellij_ai_setup.md
│   └── ch_03_claude_code_setup.md
│
├── security_best_practices/
│   └── ch_03_ai_tools_security.md
│
├── learning_practice/
│   ├── ch_03_exercises.md
│   └── ch_03_exercises_solutions.md
│
└── checklists/
    └── ch_03_ai_tools_setup_validation.md
```

---

## Key Takeaway

> **Right tools + Right setup = Productive QA with AI.**
> Having properly configured AI tools is the foundation for applying prompt engineering skills effectively.

---

## Prerequisites

Before starting this chapter, ensure you have completed:
- [Chapter 1: Foundation Model](../chapter_01_foundation_model/ch_01_foundation_model.md) - Core AI concepts
- [Chapter 2: Prompt Engineering](../chapter_02_prompt_engineering/ch_02_prompt_engineering.md) - RICE POT framework

---

## Recommended Learning Path

| Step | Section | Focus |
|------|---------|-------|
| 1 | Cloud AI Tools | Set up at least one cloud AI (Claude recommended) |
| 2 | AI Coding Assistants | Install Anti Gravity + GitHub Copilot |
| 3 | IDE Integrations | Configure VS Code with AI extensions |
| 4 | Desktop/Local Tools | Optional - for privacy or offline use |
| 5 | Security | Review best practices for API keys |
| 6 | Validation | Run checklist to verify all tools |

---

## Tool Comparison Summary

| Tool | Type | Cost | Best For |
|------|------|------|----------|
| **Claude** ⭐ | Cloud | Free/Pro | Complex reasoning, test analysis |
| **Anti Gravity** ⭐ | Coding Assistant | Free | Test script generation |
| **GitHub Copilot** ⭐ | Coding Assistant | $10/mo | Code completion, test writing |
| **VS Code** ⭐ | IDE | Free | Primary development environment |
| ChatGPT | Cloud | Free/Plus | General QA tasks |
| Gemini | Cloud | Free/Pro | Multimodal testing |
| Kimi K2 | Cloud | Free | Large context (128K) analysis |
| Cursor | IDE | Free/Pro | AI-first coding |
| Ollama | Local | Free | Private/offline testing |

