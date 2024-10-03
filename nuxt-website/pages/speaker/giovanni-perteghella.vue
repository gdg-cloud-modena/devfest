<template>
  <Title>DevFest Modena 2024 &mdash; Dal Caos al Controllo: Il Viaggio nell'Infrastructure as Code, da Docker Compose a
    Kubernetes</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="giovanni-perteghella">
      <template #image>
        <div style="max-width: 100px; max-height: 200px;">
          <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
        </div>
      </template>
      <template #title> Dal Caos al Controllo: Il Viaggio nell'Infrastructure as Code, da Docker Compose a Kubernetes
      </template>
      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Giovanni Perteghella</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p> CTO, Senior AWS, Cisco, Google, VMware, Kubernetes and CyberSecurity Trainer </p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>Italiano</p>
          </div>
        </div>
      </template>
      <template #talk>
        <h2>Speech</h2>
        <p class="mb-3">
          In this talk, we will explore the new features of Gemini Functions Calls in Flutter, how to use them, and how
          to integrate them into your projects.
        </p>
        <ol>
          <li>1. Introduzione</li>
          <li>2. Il Caos Iniziale: Sfide nella Gestione dell'Infrastruttura</li>
          <li>3. Infrastructure as Code (IaC): I Fondamenti</li>
          <li>4. Docker Compose: Il Primo Passo verso l'Ordine</li>
          <li>5. Limiti di Docker Compose e Necessità di Scalare</li>
          <li>6. Kubernetes: L'Evoluzione dell'Orchestrazione</li>
          <li>7. Strumenti per l'IaC in Kubernetes</li>
          <li>8. Best Practices e Considerazioni di Sicurezza</li>
          <li>9. Il Controllo Raggiunto: Benefici e Sfide</li>
          <li>10. Conclusione e Domande</li>
        </ol>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p class="mb-3">Sono un docente senior nel campo dell'informatica, con certificazioni ufficiali da AWS, Cisco, EC-Council,
          Google e VMware. Ho accumulato oltre 30 anni di esperienza nel settore dell'Information Technology, durante i
          quali ho ricoperto varie posizioni, sia come dipendente che come dirigente e consulente aziendale, in contesti
          di dimensioni e strutture molto diverse.</p>

        <p class="mb-3">La passione per le tecnologie mi ha spinto a esplorare e approfondire diverse aree correlate, passando dai
          sistemi alle reti, dalla virtualizzazione al cloud, dalla sicurezza informatica difensiva e offensiva
          all'automazione. Nella mia duplice veste di docente e consulente aziendale, integro le mie esperienze e le
          best practice acquisite, offrendo un valore aggiunto che accelera e facilita il processo di apprendimento per
          i partecipanti.</p>

        <p class="mb-3">Date le crescenti complessità nel campo dell'Information Technology, comprendere l'intera "big picture" è
          fondamentale per analizzare i dettagli con successo. Quello che mi appassiona è semplificare questo percorso
          per i miei studenti, trasformando l'apprendimento in un'esperienza piacevole e duratura nel tempo.</p>

        <p class="mb-3">La mia passione per la tecnologia è stata scatenata sin dai primi giorni, quando ho avuto accesso a uno dei
          primi Apple II in Italia, e questo spirito hacker ha alimentato la mia continua curiosità e amore per il mondo
          tecnologico.</p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/perteghella/" target="_blank">
            <img src="@/assets/img/linkedin.png" style="height: 24px;"/>
          </a>
          <a href="https://twitter.com/perteghella" target="_blank">
            <img src="@/assets/img/twitter.png" style="height: 24px;"/>
          </a>
          <a href="https://www.facebook.com/perteghella" target="_blank">
            <img src="@/assets/img/fb.png" style="height: 24px;"/>
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