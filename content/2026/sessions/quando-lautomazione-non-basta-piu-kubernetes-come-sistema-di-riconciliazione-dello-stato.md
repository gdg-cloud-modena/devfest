+++
title = "Quando l’automazione non basta più: Kubernetes come sistema di riconciliazione dello stato"
date = 2026-06-13
draft = false

[params]
speakers = ["fabio-trigari"]
language = "Italiano"
topic = "Cloud & Platform Engineering"
+++

Tutti noi abbiamo scritto automazioni semplici:
all' inizio il workflow è lineare e tutto sembra essere sotto controllo. Poi il processo cresce: servono retry intelligenti, pause manuali, coordinazione tra servizi, gestione di errori parziali, processi che durano ore o giorni.

Ed è lì che succede qualcosa di interessante: non stiamo più automatizzando comandi, ma gestendo processi che iniziano a richiedere stato, coordinazione e resilienza nel tempo.

In questo talk vedremo come Kubernetes possa essere usato non solo per eseguire container, ma come piattaforma per modellare processi basati sullo stato.

Partendo da un caso base, esploreremo perché molte automazioni tradizionali diventano fragili nel tempo e come il reconciliation loop di Kubernetes permetta di affrontare problemi molto più complessi.

L’obiettivo non è imparare a sviluppare operator, ma osservare Kubernetes da una prospettiva diversa: non come semplice orchestratore, ma come framework distribuito estendibile.
