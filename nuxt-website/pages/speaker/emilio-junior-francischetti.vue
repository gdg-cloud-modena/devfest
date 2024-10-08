<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; Es/Cqrs Anatomy</Title>
    <NuxtLayout name="speaker-page" speaker-image="emilio-junior-francischetti">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>Es/Cqrs Anatomy</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Emilio Junior Francischetti</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>Prima</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Software Restorer</p>
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
          Senti spesso parlare di Event Sourcing e di CQRS, ma non sai bene come funzionano? Sei nella sessione giusta
          allora!
        </p>
        <p class="mb-3">
          Vedremo i concetti base di queste tecnologie nel miglior modo possibile... con del codice che funziona!
        </p>
        <p class="mb-3">
          Useremo livebook , tool similare a Jupyter book, per esplorare un'applicazione in Elixir.
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p class="mb-3">
          Appassionato di sviluppo software e automazione, amo prendere dei bei monoliti, grossi, super accoppiati e
          ovviamente senza tests, per poi trasformarli in applicazione cloud native in salsa TDD, DDD, CQRS, Event
          Sourcing e ovviamente su Kubernetes.
        </p>
        <p class="mb-3">
          Mi definisco quindi un Restauratore Software.
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/frnmjn/" target="_blank">
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