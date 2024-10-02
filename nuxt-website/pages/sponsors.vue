<template>
  <Title>
    DevFest Modena 2024 &mdash; Sponsors
  </Title>
  <div>
    <NuxtLayout name="page">
      <template #image>
        <div>
          <img src="@/assets/svg/Ellipsis_y.svg">
        </div>
      </template>

      <template #title>
        I nostri sponsor
      </template>

      <template #content>
        <section class="px-10 pb-12 pt-10">
          <div class="text-xl">
            Il supporto dei nostri sponsor è essenziale per il successo del DevFest, fornendo il supporto necessario
            per portare avanti un evento che ispira e connette la nostra community tech. Scopri i partner che hanno
            scelto di sostenere la nostra missione. Grazie a loro, possiamo garantire un'esperienza unica per tutti
            i
            partecipanti.
          </div>
          <Sponsor/>
        </section>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import Sponsor from "~/components/sponsor.vue";

definePageMeta({
  layout: false,
});
</script>
