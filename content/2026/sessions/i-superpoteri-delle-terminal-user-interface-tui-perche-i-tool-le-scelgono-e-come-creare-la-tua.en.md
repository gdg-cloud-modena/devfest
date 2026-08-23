+++
title = "The Superpowers of Terminal User Interfaces (TUI): Why Modern Tools Choose Them and How to Build Your Own"
date = 2026-06-13
draft = false

[params]
speakers = ["marco-breveglieri"]
language = "Italiano"
topic = "Web, Mobile & Dev Experience"
+++

Tools like Claude Code, Lazygit (76k stars on GitHub), Codex, OpenCode, and many others have chosen the terminal as their user interface. This is not nostalgia, but a choice backed by solid, practical reasons: instant startup, zero external dependencies, full SSH compatibility, and an ultra-low memory footprint.

Today's terminal is no longer our grandparents' terminal: 16 million colors available, full Unicode support, GPU-accelerated rendering, advanced interactions (not just keyboard, but mouse as well), and much more! While heavy applications devour gigabytes of RAM and the browser has become the only assumed alternative, Text User Interfaces (TUIs) are making a powerful comeback: increasingly elegant, fast, and extraordinarily capable.

In this session, we'll see what makes all this possible. We'll start from the fundamentals—ANSI/VT100 escape sequences and Unicode—exploring the capabilities of modern terminal emulators, and then dive right into code with the architecture of a real-world TUI, accompanied by live demos. We will address key gotchas and best practices to know before getting started, closing with an overview of available libraries across different languages (Ratatui in Rust, Bubble Tea in Go, Textual in Python) and concrete opportunities for anyone looking to build next-generation developer tooling.
