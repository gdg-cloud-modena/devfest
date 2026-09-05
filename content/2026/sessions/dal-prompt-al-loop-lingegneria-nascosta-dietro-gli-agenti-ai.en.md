+++
title = "From Prompt to Loop: The Hidden Engineering Behind AI Agents"
date = 2026-06-13
draft = false

[params]
rooms = ["demontis"]
starts = 2026-10-03T14:45:00
ends = 2026-10-03T15:15:00
speakers = ["mattia-notari"]
language = "Italiano"
topic = "AI & Machine Intelligence"
+++

There is immense talk about agents, coding agents, and autonomous software, often surrounded by an almost magical aura. The reality, however, is deeply rooted in software engineering. Behind every agent lies a simple and powerful idea: the language model is placed inside a control loop that observes, decides, acts, evaluates the result, and repeats. It all starts with a concrete distinction: writing prompts vs. designing loops, which illustrates the true architectural leap in applied AI. The prompt is direct interaction with the model; the loop is the process that invokes it multiple times, updates state, interprets responses, executes actions through external tools, and decides whether to proceed. The value shifts from the single prompt to the feedback loop. We will explore why this changes the software engineer's role, how much an agent can cost in terms of tokens and API calls, and how a well-designed hybrid architecture uses LLMs only where needed—interpretation and planning—while delegating orchestration, validation, and testing to deterministic code. Understanding this foundation, including cost models and human oversight, is the first step toward conscious and responsible AI adoption.
