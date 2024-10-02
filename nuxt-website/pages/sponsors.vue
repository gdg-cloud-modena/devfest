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
          <div class="flex flex-col lg:flex-row flex-wrap items-center lg:items-start my-10">
            <a class="mt-6 lg:mr-8 white-card sponsor-card"
               href="https://developers.google.com/community/devfest?utm_source=devfest&utm_medium=website&utm_campaign=devfest_modena_2024">
              <div class="image image-staff google"></div>
              <div class="font-medium">MAIN</div>
            </a>
            <a class="mt-6 lg:mr-8 white-card sponsor-card"
               href="https://zuru.com/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
              <div class="image image-staff zuru"></div>
              <div class="font-medium">DIAMOND</div>
            </a>
            <a class="mt-6 lg:mr-8 white-card sponsor-card"
               href="https://www.dualb.it/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
              <div class="image image-staff dualbit"></div>
              <div class="font-medium">GOLD</div>
            </a>
            <a class="mt-6 lg:mr-8 white-card sponsor-card"
               href="https://netframe.it/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
              <div class="image image-staff netframe"></div>
              <div class="font-medium">TECH</div>
            </a>
            <a class="mt-6 lg:mr-8 white-card sponsor-card"
               href="https://atobit.it?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
              <div class="image image-staff atobit"></div>
              <div class="font-medium">BRONZE</div>
            </a>
            <a class="mt-6 lg:mr-8 white-card sponsor-card"
               href="https://www.jetbrains.com/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
              <div class="image image-staff jetbrains"></div>
              <div class="font-medium">COMMUNITY</div>
            </a>
          </div>
        </section>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
