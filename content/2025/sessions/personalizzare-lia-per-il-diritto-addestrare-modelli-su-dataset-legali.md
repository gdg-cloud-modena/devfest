+++
title = "Personalizzare l'IA per il Diritto: Addestrare Modelli su Dataset Legali"
date = 2025-09-10
draft = false

[params]
rooms = ["40"]
speakers = ["daniele-mario-areddu"]
language = "Italiano"
starts = 2025-10-04T15:00:00
ends = 2025-10-04T15:45:00
slidesURL = ""
warning = ""
+++
L’intelligenza artificiale può essere adattata a compiti altamente specifici attraverso il fine-tuning di modelli pre-addestrati, trasformandoli in strumenti specializzati e utili alla società. In questo talk presenterò un progetto concreto basato su GPT-2, ottimizzato per comprendere e generare testi giuridici, con particolare attenzione all’interpretazione del Codice Civile e Penale italiano e alla generazione automatica di querele.
Il progetto nasce per affrontare un problema reale: semplificare l’accesso al linguaggio giuridico per cittadini, studenti e operatori del settore, offrendo un supporto intelligente nella comprensione delle norme e nella redazione di documenti legali. L’uso dell’IA viene qui declinato in chiave responsabile ed etica, rispettando i limiti normativi e promuovendo la trasparenza nell’uso dei modelli linguistici.
Durante l’intervento illustrerò il workflow completo, articolato in tre fasi:
Preparazione del dataset: scraping e parsing dei testi normativi, pulizia e tokenizzazione con NLTK e Hugging Face Tokenizers.
Fine-tuning del modello: adattamento con PyTorch, ottimizzazione di batch size, learning rate ed epoche, uso di early stopping e gradient accumulation.
 Interfaccia utente: una CLI o web app in Flask che permette di inserire un caso o una domanda legale e ottenere un’analisi contestuale o una bozza automatica di querela.
Il talk si concentrerà anche su:
 Confronto tra Fine-Tuning e RAG (Retrieval-Augmented Generation)
 Scelte per l’implementazione in cloud
 Gestione etica del dataset, bias e limiti dell’IA nei contesti normativi
Già presentato al DevFest Pisa 2025, il talk verrà proposto a Modena in una versione evoluta, arricchita da riflessioni su impatti sociali, sostenibilità tecnologica e possibili scenari futuri.
