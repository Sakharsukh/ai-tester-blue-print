# Claude Desktop Setup

- **Author:** Pramod Dutta
- **Role:** Principal SDET
- **Website:** [The Testing Academy](https://thetestingacademy.com/)
- **LinkedIn:** [linkedin.com/in/pramoddutta](https://www.linkedin.com/in/pramoddutta/)

---

> Claude Desktop provides native app experience with MCP (Model Context Protocol) support for local file access and tool integrations.

---

## Quick Start

1. Download from [claude.ai/download](https://claude.ai/download)
2. Install the application
3. Sign in with your Claude account
4. Start using Claude with local file access

---

## Detailed Setup Guide

### Step 1: Download Claude Desktop

#### Windows

1. Go to [claude.ai/download](https://claude.ai/download)
2. Click **"Download for Windows"**
3. Run the installer (`Claude-Setup.exe`)
4. Follow installation wizard
5. Launch Claude from Start Menu

#### Mac

1. Go to [claude.ai/download](https://claude.ai/download)
2. Click **"Download for Mac"**
3. Open the `.dmg` file
4. Drag Claude to Applications folder
5. Launch from Applications or Spotlight

#### Linux

1. Go to [claude.ai/download](https://claude.ai/download)
2. Download the `.deb` or `.AppImage` file
3. Install:
   ```bash
   # For .deb (Debian/Ubuntu)
   sudo dpkg -i claude_*.deb

   # For .AppImage
   chmod +x Claude-*.AppImage
   ./Claude-*.AppImage
   ```

### Step 2: Sign In

1. Launch Claude Desktop
2. Click **"Sign In"**
3. Browser opens for authentication
4. Complete sign-in with your Claude account
5. Return to desktop app (automatically redirects)

### Step 3: Configure Basic Settings

1. Click **Claude** menu (Mac) or **File** menu (Windows)
2. Select **Settings** or **Preferences**
3. Configure:
   - **Appearance**: Light/Dark/System
   - **Startup**: Launch on login (optional)
   - **Keyboard shortcuts**: Customize as needed

---

## MCP (Model Context Protocol) Setup

MCP allows Claude Desktop to access local tools and files securely.

### Why MCP for QA?

| Capability | QA Benefit |
|------------|------------|
| Local file access | Read test files directly |
| Database connections | Query test data |
| Git integration | Analyze code changes |
| Custom tools | Integrate test frameworks |

### Configuring MCP

#### Step 1: Locate Config File

**Mac:**
```bash
~/Library/Application Support/Claude/claude_desktop_config.json
```

**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
```

**Linux:**
```bash
~/.config/claude/claude_desktop_config.json
```

#### Step 2: Create/Edit Config

Create the config file if it doesn't exist:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/your/test/projects"
      ]
    }
  }
}
```

#### Step 3: Add QA-Specific MCP Servers

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/projects/test-automation"
      ]
    },
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git"]
    },
    "sqlite": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sqlite",
        "--db-path",
        "/path/to/test-database.db"
      ]
    }
  }
}
```

#### Step 4: Restart Claude Desktop

After editing config:
1. Quit Claude Desktop completely
2. Relaunch the application
3. MCP servers should connect automatically

---

## QA-Specific Use Cases

### 1. Local Test File Analysis
```text
Read my test files in the /tests directory and:
1. Identify test coverage gaps
2. Find duplicate tests
3. Suggest improvements to test structure
```

### 2. Git Diff Review for Tests
```text
Show me the recent changes to test files and:
1. Verify new tests are complete
2. Check if any tests were removed
3. Ensure assertions are proper
```

### 3. Database Test Data
```text
Query the test database and:
1. Show me the current test users
2. Generate SQL for new test data
3. Verify data integrity
```

### 4. Project-Wide Analysis
```text
Analyze my entire test automation project:
1. Architecture review
2. Best practices check
3. Performance optimization suggestions
4. Maintenance recommendations
```

---

## Available MCP Servers

| Server | Purpose | Installation |
|--------|---------|--------------|
| `filesystem` | Read/write local files | `@modelcontextprotocol/server-filesystem` |
| `git` | Git operations | `@modelcontextprotocol/server-git` |
| `sqlite` | SQLite database | `@modelcontextprotocol/server-sqlite` |
| `postgres` | PostgreSQL | `@modelcontextprotocol/server-postgres` |
| `puppeteer` | Browser automation | `@modelcontextprotocol/server-puppeteer` |
| `fetch` | HTTP requests | `@modelcontextprotocol/server-fetch` |

### Installing MCP Servers

```bash
# Ensure Node.js is installed
node --version

# MCP servers are installed automatically via npx
# Or install globally:
npm install -g @modelcontextprotocol/server-filesystem
```

---

## Verification Test

### Test Local File Access

1. Create a test file:
```bash
echo "Test content for Claude" > ~/test-claude-mcp.txt
```

2. Ask Claude Desktop:
```text
Can you read the file at ~/test-claude-mcp.txt and tell me its contents?
```

3. **Expected**: Claude reads and displays the file content

### Test Git Integration (if configured)

```text
Show me the last 5 commits in my project and summarize the changes to test files.
```

---

## Keyboard Shortcuts

### Mac

| Shortcut | Action |
|----------|--------|
| `Cmd + N` | New conversation |
| `Cmd + Shift + N` | New window |
| `Cmd + K` | Focus search |
| `Cmd + ,` | Settings |

### Windows

| Shortcut | Action |
|----------|--------|
| `Ctrl + N` | New conversation |
| `Ctrl + Shift + N` | New window |
| `Ctrl + K` | Focus search |
| `Ctrl + ,` | Settings |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| MCP not connecting | Check config JSON syntax, restart app |
| File access denied | Verify path in config, check permissions |
| "Server not found" | Ensure Node.js is installed |
| App crashes on start | Delete config file, reinstall |
| Sign-in loop | Clear app data, try again |

### Debug MCP Issues

1. Check Claude Desktop logs:
   - Mac: `~/Library/Logs/Claude/`
   - Windows: `%APPDATA%\Claude\logs\`

2. Validate JSON config:
```bash
cat ~/Library/Application\ Support/Claude/claude_desktop_config.json | python -m json.tool
```

---

## Security Considerations

- MCP gives Claude access to local files - configure paths carefully
- Only grant access to directories you want Claude to read
- Review MCP server permissions before installing
- See [Security Best Practices](../security_best_practices/ch_03_ai_tools_security.md)

---

## Next Steps

- Configure MCP servers for your test automation projects
- Set up [Claude Code CLI](../ide_integrations/ch_03_claude_code_setup.md) for terminal usage
- Review [Cloud Claude](../cloud_ai_tools/ch_03_claude_setup.md) for web features
