<template>
  <Title>DevFest Modena 2024 &mdash; API testing in action - DMVC & PyTest for better API</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="flavio-basile">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>
      <template #title>API testing in action - DMVC & PyTest for better API</template>
      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Flavio Basile</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>PMO in bit Time Professionals s.r.l.</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Analista Programmatore</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>Italiano</p>
          </div>
        </div>
      </template>
      <template #talk>
        <h2>Speech</h2>
        <p class="mb-3">Nelle architetture distribuite, nell’ambito delle applicazioni organizzate come Microservizi offerti mediante
          l’esposizione di un set di API, la fase di testing assume un ruolo importante come fase del processo di
          sviluppo del software al fine di garantire robustezza e scalabilità del sistema.</p>
        <p class="mb-3">Con questo speech, mostrerò come è possibile metter su facilmente un sistema di testing per le nostre API
          utilizzando gli strumenti a noi più familiari, affiancati ad altri che magari non rientrano nella nostra
          quotidianità ma che, conosciuti, non potranno più mancare nella nostra Toolbox.</p>
        <p class="mb-3">Mostrerò come testare con Pytest le API esposte da una applicazione DMVC in Delphi, validare il payload della
          richiesta, gestirne i casi di fallimento, capire con Locust quante risorse il nostro applicativo necessita per
          soddisfare un numero sempre più elevato di richieste utente e quanto scalabile può essere.</p>
        <p class="mb-3">Introdurrò DMVC quale framework utilizzato per l’applicazione backend.<br/>
          Introdurrò Pytest quale framework per il test delle nostre API.<br/>
          Introdurrò Json Validator per la validazione del payload.<br/>
          Introdurrò Locust quale strumento utile per il Load Testing.<br/>
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          Sono Flavio Basile, sono un Informatico laureatosi all’Università degli studi di Catania e dal 2006 mi occupo
          professionalmente di progettazione e sviluppo software applicativo desktop.
          Ho un passato professionale di libero professionista ma dal 2015 lavoro come Analista Programmatore presso
          Software House. Oggi lo faccio per bit Time Professionals
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/flavio-basile-87556041/" target="_blank">
            <img src="@/assets/img/linkedin.png" style="height: 24px;"/>
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