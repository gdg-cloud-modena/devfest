<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; Le incredibili conseguenze della keyword final</Title>
    <NuxtLayout name="speaker-page" speaker-image="enrico-sasdelli">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>Le incredibili conseguenze della keyword final</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Enrico Sasdelli</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>MotorK</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Software developer, general specialist, motorbike enthusiast</p>
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
          ...e altre storie di come scrivere codice migliore.</p>
        <p class="mb-3">
          In questo talk racconterò come il solo uso della keyword final può cambiare drasticamente la faccia del codice
          (Java in questo caso) per migliorarne la struttura, la semplicità di lettura e scrittura.</p>
        <p class="mb-3">
          Sarà un talk denso di consigli pratici e di come concretamente applicare una serie di tecniche per non perdere
          il controllo della nostra codebase e anzi migliorarla passo dopo passo.
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p class="mb-3">
          Ho lavorato per 16 anni nella stessa azienda prima di decidermi a fare il grande salto e cambiare.</p>
        <p class="mb-3">
          Mi piace sapere un po' di tutto, dal backend al frontend.</p>
        <p class="mb-3">
          Sono specializzato in Java, Spring, Hibernate, Grails, SQL, Jenkins.</p>
        <p class="mb-3">
          Mi piacciono le moto.</p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/enrico-sasdelli/" target="_blank">
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