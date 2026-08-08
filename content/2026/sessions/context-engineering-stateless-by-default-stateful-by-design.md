+++
title = "Context Engineering: Stateless by Default, Stateful by Design"
date = 2026-06-13
draft = false

[params]
speakers = ["giorgio-galassi"]
language = "English"
topic = "AI Agents & Generative AI"
+++

Every time you start a new AI-assisted session, your agents start blind. No memory of last week's architectural decision. No knowledge of why you chose that pattern three projects ago. No awareness that the session ended before you finished. So you explain everything from scratch.

Context engineering is the discipline of fixing that: deciding what your agents know, when they know it, and how that knowledge survives session boundaries and tool switches. It's distinct from prompt engineering, and arguably the higher-leverage skill when building with AI agents.

This talk covers the techniques behind persistent AI memory: index-first loading, anchored iterative summarization, phase-based context loading. The architectural decisions that shaped them. And why the right answer turned out to be simpler than you'd expect.
