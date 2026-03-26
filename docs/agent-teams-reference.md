# Agent Teams Master Reference Guide

> Source: https://code.claude.com/docs/en/agent-teams
> Claude Code v2.1.32+ required | Feature flag: `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`

---

## 1. What Are Agent Teams?

Agent teams coordinate multiple Claude Code instances working together. One session is the **team lead** — it creates the team, spawns teammates, assigns tasks, and synthesizes results. Each **teammate** is a fully independent Claude Code session with its own context window.

Unlike subagents (which only report back to the main agent), teammates can **message each other directly** and self-coordinate through a **shared task list**.

---

## 2. When to Use Agent Teams vs. Subagents

| Criterion | Use Subagents | Use Agent Teams |
|:---|:---|:---|
| Workers need to talk to each other | No | Yes |
| Tasks are sequential | Yes | No |
| Multiple files edited simultaneously | No (risk) | Yes (separate owners) |
| Result matters but not process | Yes | No |
| Parallel exploration adds value | Sometimes | Yes |
| Token budget is tight | Yes | No |
| Work spans frontend/backend/tests | No | Yes |

### Architecture Comparison

**Subagents**: Main agent → spawns workers → workers report back only to main agent.

**Agent Teams**: Lead ↔ Shared task list ↔ Teammates (can message each other directly).

---

## 3. Enabling Agent Teams

### Project-level (settings.local.json)
```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

### Shell environment
```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
```

---

## 4. Starting a Team

Tell Claude in natural language. Describe the task and desired team structure:

```text
I'm designing a CLI tool that helps developers track TODO comments across
their codebase. Create an agent team to explore this from different angles: one
teammate on UX, one on technical architecture, one playing devil's advocate.
```

Claude will:
1. Create the team with a shared task list
2. Spawn teammates for each role
3. Coordinate exploration
4. Synthesize findings
5. Attempt cleanup when finished

---

## 5. Display Modes

| Mode | How It Works | Requirements |
|:---|:---|:---|
| `auto` (default) | Split panes if inside tmux, otherwise in-process | — |
| `in-process` | All teammates inside main terminal; Shift+Down cycles | Any terminal |
| `tmux` | Each teammate gets its own pane | tmux or iTerm2 |

### Override for a session
```bash
claude --teammate-mode in-process
```

### Override in settings.json
```json
{
  "teammateMode": "in-process"
}
```

### In-process keyboard shortcuts
| Shortcut | Action |
|:---|:---|
| Shift+Down | Cycle through teammates |
| Enter | View a teammate's session |
| Escape | Interrupt current turn |
| Ctrl+T | Toggle task list |

---

## 6. Controlling the Team

### Specify teammates and models
```text
Create a team with 4 teammates to refactor these modules in parallel.
Use Sonnet for each teammate.
```

### Require plan approval before implementation
```text
Spawn an architect teammate to refactor the authentication module.
Require plan approval before they make any changes.
```
- Teammate works in read-only plan mode until the lead approves
- Lead can approve or reject with feedback
- Rejected plans stay in plan mode, revise, and resubmit
- Influence lead judgment: "only approve plans that include test coverage"

### Keep the lead from doing work itself
```text
Wait for your teammates to complete their tasks before proceeding
```

### Shut down a specific teammate
```text
Ask the researcher teammate to shut down
```

### Clean up the entire team
```text
Clean up the team
```
**Always use the lead to clean up.** Teammates should never run cleanup (their team context may not resolve correctly).

---

## 7. Task System

- Tasks have three states: **pending → in progress → completed**
- Tasks can have **dependencies** — blocked tasks auto-unblock when dependencies complete
- Task claiming uses **file locking** to prevent race conditions
- **Lead assigns** tasks explicitly, or **teammates self-claim** the next available task

### Storage locations
| Resource | Path |
|:---|:---|
| Team config | `~/.claude/teams/{team-name}/config.json` |
| Task list | `~/.claude/tasks/{team-name}/` |

---

## 8. Context and Communication

### What teammates inherit at spawn
- Same project CLAUDE.md files
- Same MCP servers and skills
- The spawn prompt from the lead

### What teammates do NOT inherit
- Lead's conversation history
- Per-teammate permission modes (set at spawn from lead's mode)

### Messaging types
| Type | Use |
|:---|:---|
| `message` | Send to one specific teammate |
| `broadcast` | Send to all teammates (use sparingly — costs scale with team size) |

### Automatic behaviors
- Messages are delivered automatically (lead doesn't need to poll)
- When a teammate finishes, it automatically notifies the lead
- All agents share visibility into task status

---

## 9. Permissions

- All teammates start with the **lead's permission settings**
- If lead uses `--dangerously-skip-permissions`, all teammates do too
- Per-teammate modes can be changed **after spawning**, but not at spawn time
- Too many permission prompts: pre-approve common operations in permission settings before spawning

---

## 10. Hooks for Quality Gates

| Hook | Trigger | Use |
|:---|:---|:---|
| `TeammateIdle` | Teammate about to go idle | Exit code 2 to send feedback and keep working |
| `TaskCompleted` | Task being marked complete | Exit code 2 to prevent completion and send feedback |

---

## 11. Best Practices

### Team size
- **Start with 3–5 teammates** for most workflows
- **5–6 tasks per teammate** keeps everyone productive without excessive context switching
- Scale up only when work genuinely benefits from simultaneous parallel effort
- 3 focused teammates often outperform 5 scattered ones

### Task sizing
| Size | Problem |
|:---|:---|
| Too small | Coordination overhead exceeds the benefit |
| Too large | Long stretches without check-ins, wasted effort risk |
| Just right | Self-contained unit with a clear deliverable (a function, a test file, a review) |

If the lead isn't creating enough tasks: *"Split the work into smaller pieces."*

### Context in spawn prompts
Teammates don't inherit conversation history. Include everything they need:
```text
Spawn a security reviewer teammate with the prompt: "Review the authentication module
at src/auth/ for security vulnerabilities. Focus on token handling, session
management, and input validation. The app uses JWT tokens stored in httpOnly cookies.
Report any issues with severity ratings."
```

### File ownership
- Never have two teammates edit the same file — leads to overwrites
- Assign each teammate a distinct set of files to own

### Monitoring
- Check in on teammates' progress regularly
- Redirect approaches that aren't working early
- Don't let teams run fully unattended for long periods

### Ramp-up strategy
Start with research/review tasks (clear boundaries, no code writing) before moving to parallel implementation. Good first uses:
- PR review (different reviewers for security, performance, test coverage)
- Library research from multiple angles
- Bug investigation with competing hypotheses

---

## 12. Power Prompt Patterns

### Parallel code review
```text
Create an agent team to review PR #142. Spawn three reviewers:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.
```

### Competing hypothesis debugging
```text
Users report [bug description]. Spawn 5 agent teammates to investigate different
hypotheses. Have them talk to each other to try to disprove each other's theories,
like a scientific debate. Update the findings doc with whatever consensus emerges.
```

### Parallel feature implementation
```text
Create a team with 4 teammates to refactor these modules in parallel.
Use Sonnet for each teammate.
```

### Multi-angle exploration
```text
Create an agent team to explore [topic] from different angles: one teammate on
[angle A], one on [angle B], one playing devil's advocate.
```

---

## 13. Troubleshooting

| Problem | Fix |
|:---|:---|
| Teammates not appearing | Press Shift+Down; task may not be complex enough; check `which tmux` |
| Too many permission prompts | Pre-approve operations in permission settings before spawning |
| Teammate stopped on error | Check output with Shift+Down, give direct instructions or spawn replacement |
| Lead shuts down early | Tell it to keep going / wait for teammates to finish |
| Orphaned tmux sessions | `tmux ls` → `tmux kill-session -t <session-name>` |
| Task stuck / not completing | Check if work is done, update status manually or ask lead to nudge |

---

## 14. Known Limitations

| Limitation | Detail |
|:---|:---|
| No session resumption with in-process teammates | `/resume` and `/rewind` don't restore in-process teammates |
| Task status can lag | Teammates sometimes don't mark tasks complete; monitor manually |
| Slow shutdown | Teammates finish current request before stopping |
| One team per session | Clean up before starting a new team |
| No nested teams | Only the lead can spawn or manage teammates |
| Lead is fixed | Can't transfer leadership to a teammate |
| Permissions set at spawn | Can change after spawn, not per-teammate at spawn time |
| Split panes limited | Doesn't work in VS Code terminal, Windows Terminal, or Ghostty |

---

## 15. Token Cost Guidance

- Token cost scales **linearly** with number of active teammates
- Each teammate = separate Claude instance = separate context window
- Best ROI: research, review, new modules, multi-layer changes
- Worst ROI: routine tasks, sequential work, same-file edits
- See: `https://code.claude.com/docs/en/costs#agent-team-token-costs`

---

## 16. Decision Checklist — Should I Use an Agent Team?

```
[ ] Do teammates need to communicate with each other?
[ ] Can tasks run in parallel without file conflicts?
[ ] Is the work genuinely complex enough to justify coordination overhead?
[ ] Are there 3+ independent work streams?
[ ] Is token cost acceptable for this task?
[ ] Have I defined clear file/domain ownership for each teammate?
[ ] Have I prepared context-rich spawn prompts?
[ ] Am I prepared to monitor and steer the team?
```

If most answers are YES → agent team is the right tool.
If most answers are NO → use a single session or subagents.

---

## 17. Related Features

| Feature | When to Use |
|:---|:---|
| [Subagents](/en/sub-agents) | Lightweight delegation within a single session; workers don't need to talk to each other |
| [Git worktrees](/en/common-workflows#run-parallel-claude-code-sessions-with-git-worktrees) | Manual parallel sessions without automated team coordination |
| [Hooks](/en/hooks) | Enforce quality gates on teammate idle and task completion |
