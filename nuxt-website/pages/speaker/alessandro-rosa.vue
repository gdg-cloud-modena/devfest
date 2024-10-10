<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; Intelligent Document Processing</Title>
    <NuxtLayout name="speaker-page" speaker-image="alessandro-rosa">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>Intelligent Document Processing</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Alessandro Rosa</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>Expert.ai</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Software engineer</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>Italiano</p>
          </div>
        </div>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p class="mb-3">
         Laureato in Filosofia e Linguistica Computazionale presso l’Università di Bologna, Alessandro ha completato la sua formazione con una tesi su Smart Document Understanding.
        </p>
        <p class="mb-3">Da due anni lavora come data scientist in expert.ai, concentrandosi sull'intelligenza artificiale generativa e contribuendo a progetti all'avanguardia nel campo dell'AI e del machine learning.</p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/alessandro-rosa-99a43a1aa" target="_blank">
            <img src="@/assets/img/linkedin.png" style="height: 24px;"/>
          </a>
        </div>
      </template>
      <template #talk>
        <h2>Speech</h2>
        <p class="mb-3">
          In questo intervento verrà presentata una panoramica completa dei processi di analisi di documenti non strutturati utilizzando un tool avanzato basato su una combinazione di tecnologie ibride, come il machine learning e metodi euristici. Saranno trattati i seguenti aspetti chiave:
        </p>
        <p class="mb-3">Estrazione del testo tramite OCR: processi di riconoscimento ottico dei caratteri per digitalizzare e rendere ricercabili i contenuti testuali.</p>
        <p class="mb-3">Analisi del layout: identificazione dell'ordine di lettura, gerarchia dei titoli, struttura della tabella dei contenuti (TOC) e gestione delle tabelle.</p>
        <p class="mb-3">Estrazione di informazioni rilevanti: individuazione automatica di coppie chiave-valore e dati significativi all'interno del documento.</p>
        <p class="mb-3">Classificazione dei documenti: categorizzazione automatica di tipologie documentali come fatture, bolle, report e CID.</p>
        <p class="mb-3">Estrazione di campi specifici: focalizzazione su campi particolari a seconda della tipologia di documento, come importi o date in fatture.</p>
        <p class="mb-3">Questo approccio consente di automatizzare e ottimizzare l'elaborazione di grandi volumi di documenti, riducendo significativamente i tempi di gestione manuale e migliorando la precisione dell'estrazione delle informazioni.</p>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>