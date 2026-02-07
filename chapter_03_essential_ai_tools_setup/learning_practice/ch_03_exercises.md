# Chapter 3: Exercises

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Hands-on exercises to practice setting up and using AI tools for QA workflows.

---

## Exercise 1: Cloud AI Tool Setup

### Objective
Set up at least one cloud AI tool and verify it works for QA tasks.

### Tasks

1. **Create an account** on one of these platforms:
   - Claude (claude.ai) - Recommended
   - ChatGPT (chat.openai.com)
   - Gemini (gemini.google.com)

2. **Configure settings** for QA work:
   - Set up a QA-focused project (if available)
   - Configure custom instructions for testing

3. **Test with this prompt** (using RICE POT framework):

```text
Role: Senior QA Engineer
Intent: Generate comprehensive test cases
Context: Login form with email, password, and "Remember Me" checkbox
Expected Output: Structured test cases in table format

Generate 5 test cases including:
- Positive scenario
- Negative scenarios
- Edge cases

Parameters:
- Email: valid format required
- Password: minimum 8 characters

Output Format:
| Test ID | Type | Description | Steps | Expected Result |

Task: Create the test cases now.
```

4. **Evaluate the output:**
   - Does it follow the table format?
   - Are all test types included?
   - Are the steps clear and actionable?

### Deliverable
- Screenshot of working AI tool
- Generated test cases
- Brief evaluation (2-3 sentences)

---

## Exercise 2: VS Code AI Setup

### Objective
Configure VS Code as an AI-powered test automation IDE.

### Tasks

1. **Install VS Code** (if not already installed)

2. **Install these extensions:**
   - GitHub Copilot (or Anti Gravity)
   - GitHub Copilot Chat
   - Python extension
   - Playwright Test (optional)

3. **Create a test project:**
```bash
mkdir ai-qa-exercise
cd ai-qa-exercise
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install pytest playwright
```

4. **Create `.vscode/settings.json`:**
```json
{
  "python.testing.pytestEnabled": true,
  "github.copilot.enable": {
    "*": true,
    "python": true
  }
}
```

5. **Test AI completion:**
   - Create `test_exercise.py`
   - Type: `def test_user_login_`
   - Wait for AI suggestion
   - Accept and review the generated test

6. **Test Copilot Chat:**
   - Open Copilot Chat (Ctrl+Shift+I)
   - Ask: "Generate a Page Object for a shopping cart"

### Deliverable
- Screenshot of VS Code with AI extension active
- Generated test code from AI completion
- Page Object from Copilot Chat

---

## Exercise 3: Local AI Setup (Optional)

### Objective
Set up a local AI tool for private/offline QA work.

### Tasks

1. **Choose one:**
   - Ollama (CLI-based)
   - LM Studio (GUI-based)

2. **Install the tool:**

   **For Ollama:**
   ```bash
   # Mac/Linux
   curl -fsSL https://ollama.com/install.sh | sh

   # Windows: Download from ollama.com
   ```

   **For LM Studio:**
   - Download from lmstudio.ai

3. **Download a model:**

   **Ollama:**
   ```bash
   ollama pull llama3:8b
   ```

   **LM Studio:**
   - Go to Discover tab
   - Search and download "llama-3-8b-instruct"

4. **Test with QA prompt:**
```text
Generate 3 test cases for a password reset feature:
- User enters email
- System sends reset link (valid 24 hours)
- User sets new password (min 8 chars)

Format as table.
```

5. **Compare with cloud AI:**
   - Run same prompt on cloud AI (Claude/ChatGPT)
   - Note differences in quality, speed, format

### Deliverable
- Screenshot of local AI running
- Test cases generated locally
- Brief comparison with cloud AI (3-5 sentences)

---

## Exercise 4: Security Best Practices

### Objective
Implement secure API key management for AI tools.

### Tasks

1. **Create a test project structure:**
```
secure-ai-project/
├── .env
├── .env.example
├── .gitignore
├── tests/
│   └── test_with_ai.py
└── requirements.txt
```

2. **Set up .gitignore:**
```gitignore
# Add these lines
.env
.env.local
*.key
__pycache__/
venv/
```

3. **Create .env.example (safe to commit):**
```bash
# Copy this file to .env and fill in your values
OPENAI_API_KEY=your-key-here
ANTHROPIC_API_KEY=your-key-here
```

4. **Create .env (never commit):**
```bash
OPENAI_API_KEY=sk-your-actual-key
ANTHROPIC_API_KEY=sk-ant-your-actual-key
```

5. **Create test_with_ai.py using environment variables:**
```python
import os
from dotenv import load_dotenv

load_dotenv()

def get_ai_response(prompt):
    """Safely use AI API with environment variable."""
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("API key not found in environment")

    # Your AI API call here
    print(f"Using API key: {api_key[:10]}...")  # Only show first 10 chars
    return "Response would go here"

def test_ai_response():
    """Test that AI responds correctly."""
    response = get_ai_response("Generate a test case")
    assert response is not None
```

6. **Verify .env is ignored:**
```bash
git status  # .env should NOT appear
```

### Deliverable
- Project structure screenshot
- .gitignore content
- Code showing secure API key usage

---

## Exercise 5: AI Tool Comparison

### Objective
Compare different AI tools for a specific QA task.

### Tasks

1. **Select 3 AI tools** from:
   - Cloud: Claude, ChatGPT, Gemini, Kimi K2
   - Coding: GitHub Copilot, Anti Gravity, Cursor
   - Local: Ollama, LM Studio

2. **Use the same prompt on all 3:**
```text
You are a Senior QA Engineer. Generate a complete pytest test file for a REST API user endpoint:

API Specification:
- GET /api/users - List all users (paginated)
- GET /api/users/{id} - Get single user
- POST /api/users - Create user (name, email required)
- PUT /api/users/{id} - Update user
- DELETE /api/users/{id} - Delete user

Requirements:
- Use requests library
- Include fixtures for authentication
- Test success and error cases
- Use descriptive test names

Output the complete test file.
```

3. **Evaluate each response:**

| Criteria | Tool 1 | Tool 2 | Tool 3 |
|----------|--------|--------|--------|
| Completeness (all endpoints) | | | |
| Code quality | | | |
| Error handling | | | |
| Fixtures usage | | | |
| Assertions quality | | | |
| Response time | | | |
| **Total Score** (/30) | | | |

4. **Write your recommendation:**
   - Which tool would you recommend for API test generation?
   - Why?

### Deliverable
- Test code from each tool
- Completed comparison table
- Written recommendation (5-10 sentences)

---

## Exercise 6: Validation Checklist

### Objective
Complete the AI Tools Setup Validation checklist.

### Tasks

1. **Review the [Validation Checklist](../checklists/ch_03_ai_tools_setup_validation.md)**

2. **Set up at least:**
   - 1 Cloud AI tool
   - 1 Coding assistant (in VS Code)
   - Security configuration

3. **Complete the checklist:**
   - Test each tool with the verification prompt
   - Document any issues
   - Mark all items as complete or note what's pending

4. **Take screenshots showing:**
   - Cloud AI response to test prompt
   - VS Code with AI extension active
   - .gitignore including .env

### Deliverable
- Completed checklist (can be handwritten or digital)
- Supporting screenshots
- List of any tools you couldn't set up (with reasons)

---

## Bonus Exercise: Create a QA AI Workflow

### Objective
Design and document a complete AI-assisted QA workflow.

### Tasks

1. **Choose a testing scenario:**
   - E-commerce checkout flow
   - User authentication system
   - API integration testing
   - Mobile app feature testing

2. **Document your workflow:**

```markdown
# AI-Assisted QA Workflow: [Your Scenario]

## Step 1: Requirements Analysis
- Tool used: [e.g., Claude]
- Prompt: [Your prompt]
- Output: [Summary of analysis]

## Step 2: Test Case Generation
- Tool used: [e.g., ChatGPT]
- Prompt: [Your prompt]
- Output: [Test cases]

## Step 3: Test Code Generation
- Tool used: [e.g., GitHub Copilot]
- Approach: [How you used it]
- Output: [Code snippet]

## Step 4: Review and Refinement
- Tool used: [e.g., Claude]
- What you reviewed: [Details]
- Improvements made: [List]

## Lessons Learned
- What worked well:
- What could be improved:
- Recommended tools for this workflow:
```

3. **Include actual prompts and outputs** for each step

### Deliverable
- Complete workflow document
- All prompts used
- Sample outputs from each step
- Reflection on the workflow effectiveness

---

## Submission Guidelines

For each exercise, prepare:

1. **Documentation** - Written answers, code, screenshots
2. **Code files** - Any test files or configurations created
3. **Reflection** - What you learned, challenges faced

---

## Next Steps

After completing these exercises:
- Check your answers with [Exercises - Solutions](ch_03_exercises_solutions.md)
- Review any tools you struggled with
- Practice using AI tools in your daily QA work
