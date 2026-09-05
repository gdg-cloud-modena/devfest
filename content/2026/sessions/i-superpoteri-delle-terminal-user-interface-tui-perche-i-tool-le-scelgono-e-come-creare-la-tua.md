+++
title = "I superpoteri delle Terminal User Interface (TUI): perché i tool le scelgono e come creare la tua"
date = 2026-06-13
draft = false

[params]
rooms = ["teatro"]
starts = 2026-10-04T12:45:00
ends = 2026-10-04T13:15:00
speakers = ["marco-breveglieri"]
language = "Italiano"
topic = "Web, Mobile & Dev Experience"
+++

Strumenti come Claude Code, Lazygit (76k stelle su GitHub), Codex, OpenCode e molti altri hanno scelto il terminale come interfaccia utente. Non è una scelta nostalgica, ma dettata da ottime valide ragioni: avvio istantaneo, zero dipendenze, piena compatibilità SSH, footprint bassissimo.

Il terminale di oggi non è più quello dei nostri nonni: 16 milioni di colori a disposizione, supporto Unicode, rendering accelerato dalla GPU, interazioni avanzate (non solo tastiera e mouse) e molto di più! Mentre vi sono applicazioni che divorano gigabyte di RAM e il browser diventa l'unico paradigma alternativo ammesso, le Text User Interface (TUI) stanno tornando prepotentemente di moda: sempre più eleganti, veloci e straordinariamente potenti.

In questa sessione vedremo cosa rende possibile tutto questo. Partiremo dalle basi, ossia le sequenze ANSI/VT100 e Unicode, esplorando le capability dei terminali moderni, per poi entrare nel codice con l'architettura di una TUI vera e propria, con numerosi demo dal vivo. Affronteremo i "gotcha" e le best practice da conoscere prima di iniziare, chiudendo con una panoramica delle librerie disponibili nei vari linguaggi (Ratatui in Rust, Bubble Tea in Go, Textual in Python) e le opportunità concrete per chi vuole costruire tool di nuova generazione.
