<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; [Workshop] Containerizza la tua App e distribuisci senza pensieri</Title>
    <NuxtLayout name="speaker-page" speaker-image="moreno-razzoli">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>
      <template #title> [Workshop] Containerizza la tua App e distribuisci senza pensieri</template>
      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Moreno Razzoli</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>Morrolinux</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Consultant & Instructor</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>Italiano</p>
          </div>
        </div>
      </template>
      <template #talk>
        <h2>Workshop</h2>
        <p class="mb-3">
          I container semplificano la distribuzione del software racchiudendo un'app e tutte le sue dipendenze in
          un'unica unità portabile, eliminando così la complessità della gestione delle dipendenze su diverse
          piattaforme.
        </p>
        <p class="mb-3">
          Dopo una rapida introduzione dei concetti di base, entreremo nel vivo della creazione di immagini di container
          con Docker o Podman. Impareremo a costruire, configurare e distribuire applicazioni containerizzate con
          facilità. Durante la sessione, metteremo tutto in pratica containerizzando insieme la nostra prima
          applicazione.
        </p>
        <p class="mb-3">
          Questo workshop è pensato per sviluppatori di ogni livello, con un approccio pratico e orientato alla
          semplicità.
        </p>
        <h2 class="mt-5">Informazioni Importanti</h2>
        <p class="mb-3">
          Per partecipare al workshop è richiesta un'installazione funzionante di Docker o Podman su una macchina LINUX
          x86 a 64 bit (fisica o virtuale).
        </p>
        <p class="mb-3">
          Qualunque altra configurazione (Docker su Windows; Mac con Apple Silicon; altre piattaforme o architetture)
          non sarà ufficialmente supportata per ragioni legate alle tempistiche.
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          Mi chiamo Moreno Razzoli,
          Sono laureato in Scienze Informatiche, ho conseguito le certificazioni Linux LPI, CompTIA Linux+ e Suse CLA,
          ho realizzato diversi progetti Open Source, contribuito allo sviluppo di nuove funzionalità in altrettanti
          progetti già avviati e realizzo video didattici dal 2008 su YouTube e sul mio sito ufficiale.
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.youtube.com/morrolinux" target="_blank">
            <img src="@/assets/img/youtube.png" style="height: 24px;"/>
          </a>
          <a href="https://x.com/morrolinux/" target="_blank">
            <img src="@/assets/img/twitter.png" style="height: 24px;"/>
          </a>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>