+++
title = "But can you really run your app on 2 clouds at the same time?"
date = 2025-09-10
draft = false

[params]
rooms = ["chiesa"]
speakers = ["natalie-godec"]
starts = 2025-10-04T15:00:00
ends = 2025-10-04T15:45:00
slidesURL = ""
warning = ""
+++
We've all heard about this concept - you should run your app in more than one zone, more than one region, more than one... cloud? But how can this be done, without a major re-architecture of every component of every system?
Let me take you through a real world implementation, where the 2 clouds were AWS and GCP, and the app - a major platform that has to deal with images. We'll look into the infra, networking and DNS setup, how to configure data availability and consistency, and what happened when we actually switched dual run in production.
Whether you need multi-cloud for resilience, for serving customers with different requirements, or you just want to see who's mad enough to implement this - this talk is for you.
