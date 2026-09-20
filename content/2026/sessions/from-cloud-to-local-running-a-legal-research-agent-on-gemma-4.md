+++
title = "From Cloud to Local: Running a Legal Research Agent on Gemma 4"
date = 2026-09-18
draft = false

[params]
rooms = ["teatro"]
speakers = ["alexander-amin"]
starts = 2026-10-04T10:15:00
ends = 2026-10-04T10:45:00
language = "English"
topic = "AI & Machine Intelligence"
slidesURL = ""
warning = ""
+++

AI agents perform best when backed by a robust architecture that minimizes the model's cognitive load. But is it possible to break free from expensive commercial LLMs for complex tasks like legal research and run the entire system on local hardware?

In this technical talk, we will walk through a practical experiment: how we took the pipeline of Marcus—an agentic RAG pilot for legal research in Latin America originally powered by Gemini and Claude—and pushed its limits by porting it to Gemma 4 using the Agent Development Kit (ADK) on a consumer gaming GPU (RTX 4070 Ti Super 16GB).

We will analyze the engineering shifts required to make an open-weights model run at a commercial-grade level: strict prompt structuring, token budget optimization, and local evaluation strategies.

You will walk away with real-world benchmark results, the formatting hurdles we faced, and a clear roadmap if you are looking to migrate your agentic prototypes to local open-weights environments.
