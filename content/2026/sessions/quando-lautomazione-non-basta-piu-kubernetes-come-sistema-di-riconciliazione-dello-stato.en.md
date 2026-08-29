+++
title = "When Automation Is No Longer Enough: Kubernetes as a State Reconciliation Engine"
date = 2026-06-13
draft = false

[params]
rooms = ["chiesa"]
starts = 2026-10-04T11:00:00
ends = 2026-10-04T11:30:00
speakers = ["fabio-trigari"]
language = "Italiano"
topic = "Cloud & Platform Engineering"
+++

All of us have written simple automations:
in the beginning, the workflow is linear and everything seems under control. Then the process grows: smart retries are needed, manual pauses, service coordination, partial failure handling, and processes that run for hours or days.

And that's where something interesting happens: we are no longer just automating commands, but managing processes that begin to require state, coordination, and resilience over time.

In this talk, we will see how Kubernetes can be used not only to run containers, but as a platform to model state-based processes.

Starting from a baseline case, we will explore why many traditional automations become brittle over time and how Kubernetes' reconciliation loop enables tackling much more complex problems.

The goal is not to learn how to build operators, but to look at Kubernetes from a different perspective: not as a mere orchestrator, but as an extensible distributed framework.
