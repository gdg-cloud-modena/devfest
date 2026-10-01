+++
title = "The New Assembly Line: Designing AI Agents That Work Like Ford's Factory"
date = 2026-06-13
draft = false

[params]
rooms = ["demontis"]
starts = 2026-10-04T12:00:00
ends = 2026-10-04T12:30:00
speakers = ["zelda-ailine-luconi"]
language = "English"
topic = "AI & Machine Intelligence"
+++

After its debut at Coderful 2026 in Catania — where it was met with great enthusiasm and strong technical engagement — this talk now brings its mission to the GDG Modena community: a full immersion into the world of AI Design Architecture applied to multi-agent systems.
Ford didn't know it, but he was inventing the future of artificial intelligence.

The idea that transformed industrial production — breaking a complex process into specialized stations, connected by precise handoffs — is today the most powerful paradigm for building AI systems that actually work in production.
A single monolithic agent suffers from the same pathologies as an assembly line run by a single worker: context dilution, lack of specialization, inability to parallelize, confirmation bias. The result? A one-way ticket to the AI project graveyard — that silent cemetery of ambitious pilots that never made it to production.
The answer is the digital assembly line: a multi-agent architecture where each station receives the output of its predecessor, applies its specific function, and passes the transformed artifact to the next station — with typed schemas, clean handoffs, and full technological heterogeneity across stations.
In this talk we will explore the three pillars of the assembly line applied to AI:

Structured workflow — Graph workflows and multi-agent orchestration with Google ADK: when to use a deterministic approach and when to leave room for autonomy.
Technological heterogeneity — Sub-agents, Tools, MCP, and the A2A (Agent-to-Agent) protocol: how to equip agents with tools and enable them to interact with data sources or with each other.
Structured handoffs — how to eliminate structural hallucinations and make the pipeline robust and self-corrective using input/output schemas with Pydantic.

All of this through a concrete, narrative use case — built live, slide after slide, line of code after line of code with Google ADK — all the way to the complete final architecture.
