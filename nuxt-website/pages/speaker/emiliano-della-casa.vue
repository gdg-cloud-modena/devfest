<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; gRPC on Rails - a true story</Title>
    <NuxtLayout name="speaker-page" speaker-image="emiliano-della-casa">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>gRPC on Rails - a true story</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Emiliano Della Casa</p>
          </div>
          <!--          <div class="info-box">-->
          <!--            <h3>Azienda</h3>-->
          <!--            <p>MotorK</p>-->
          <!--          </div>-->
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Software Architect Independent Consultant</p>
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
          Il talk presenta l'integrazione di gRPC in un progetto Ruby on Rails, concentrandosi sull'adozione di questa
          tecnologia per potenziare le comunicazioni tra microservizi in un contesto reale. </p>
        <p class="mb-3">
          Partendo da un caso di studio, si evidenziano le problematiche riscontrate con l'uso delle API REST
          tradizionali, come la latenza e l'eccessivo overhead, e si spiega come gRPC abbia offerto una soluzione
          efficiente e scalabile.
        </p>
        <p class="mb-3">
          Viene illustrata la configurazione di gRPC, con esempi di implementazione pratica su
          Ruby, e si mostrano le differenze chiave nella serializzazione dei dati rispetto a JSON. Si discutono anche i
          vantaggi delle comunicazioni asincrone e bidirezionali, con focus su performance e resilienza del sistema.
          Infine, si analizzano le buone pratiche per l'integrazione di gRPC con Rails e si offrono consigli per gestire
          la compatibilità tra servizi.
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p class="mb-3">
          Born in Modena in 1980, I have been developing with Ruby for 20 years and never stopped loving it.
        </p>
        <p class="mb-3">
          I am currently working as an independent consultant
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/emilianodellacasa/" target="_blank">
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