+++
title = "La nuova catena di montaggio: progettare agenti AI che lavorano come la fabbrica di Ford"
date = 2026-06-13
draft = false

[params]
rooms = ["demontis"]
starts = 2026-10-04T12:00:00
ends = 2026-10-04T12:30:00
speakers = ["zelda-ailine-luconi"]
language = "Italiano"
topic = "AI & Machine Intelligence"
+++

Dopo il debutto a Coderful 2026 a Catania — dove è stato accolto con grande entusiasmo e forte coinvolgimento tecnico — questo talk porta la sua missione alla community del GDG Modena: una full immersion nel mondo dell'AI Design Architecture applicata ai sistemi multi-agente.
Ford non lo sapeva, ma stava inventando il futuro dell'intelligenza artificiale.

L'idea che ha trasformato la produzione industriale — scomporre un processo complesso in stazioni specializzate, collegate da passaggi di consegne precisi — è oggi il paradigma più potente per costruire sistemi AI che funzionano davvero in produzione.
Un singolo agente monolitico soffre delle stesse patologie di una catena di montaggio gestita da un solo operaio: diluizione del contesto, mancanza di specializzazione, impossibilità di parallelizzare, bias di conferma. Il risultato? Un biglietto di sola andata per il cimitero dei progetti AI — quel silenzioso cimitero di progetti pilota ambiziosi che non sono mai arrivati in produzione.
La risposta è la catena di montaggio digitale: un'architettura multi-agente in cui ogni stazione riceve l'output della precedente, applica la sua funzione specifica e passa l'artefatto trasformato alla stazione successiva — con schemi tipizzati, handoff puliti e completa eterogeneità tecnologica tra le stazioni.
In questo talk esploreremo i tre pilastri della catena di montaggio applicata all'AI:

Flusso di lavoro strutturato — Flussi di lavoro a grafo e orchestrazione multi-agente con Google ADK: quando usare un approccio deterministico e quando lasciare spazio all'autonomia.
Eterogeneità tecnologica — Sotto-agenti, Tools, MCP e il protocollo A2A (Agent-to-Agent): come dotare gli agenti di strumenti e consentire loro di interagire con sorgenti dati o tra loro.
Passaggi di consegne strutturati — come eliminare le allucinazioni strutturali e rendere la pipeline robusta e autocorrettiva utilizzando schemi di input/output con Pydantic.

Tutto questo attraverso un caso d'uso concreto e narrativo — costruito dal vivo, slide dopo slide, riga di codice dopo riga di codice con Google ADK — fino all'architettura finale completa.
