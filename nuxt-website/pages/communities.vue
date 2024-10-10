<template>
  <Title>
    DevFest Modena 2024 &mdash; Communities
  </Title>
  <div>
    <NuxtLayout name="page">
      <template #image>
        <div>
          <img src="@/assets/svg/Ellipsis.svg">
        </div>
      </template>

      <template #title>
        Communities
      </template>

      <template #content>
        <section class="px-10 pb-12 pt-10">
          <div class="text-xl">
            Le comunità locali di sviluppatori sono il fulcro dell'innovazione e della collaborazione tecnica.
            In queste realtà, professionisti e appassionati si uniscono per condividere conoscenze, crescere insieme e
            creare soluzioni innovative.
            Esplora l'elenco delle comunità per trovare quella più vicina a te e unirti a un network dinamico di
            creatori e visionari.
          </div>
          <div class="flex flex-wrap justify-center my-10">
            <a class="mt-6 mr-8 white-card sponsor-card"
               href="https://gdg.community.dev/gdg-cloud-modena/">
              <div class="image image-staff gdg-modena"></div>
              <div class="font-medium">GDG Cloud Modena</div>
            </a>
            <a class="mt-6 mr-8 white-card sponsor-card"
               href="https://www.meetup.com/it-IT/Modena-Full-Stack/">
              <div class="image image-staff modena-full-stack"></div>
              <div class="font-medium">Modena Full Stack</div>
            </a>
            <a class="mt-6 mr-8 white-card sponsor-card"
               href="https://blog.fluttermodena.dev/">
              <div class="image image-staff flutter-modena"></div>
              <div class="font-medium">Flutter Modena</div>
            </a>
            <a class="mt-6 mr-8 white-card sponsor-card"
               href="https://conoscerelinux.org/">
              <div class="image image-staff conoscere-linux"></div>
              <div class="font-medium">ConoscereLinux</div>
            </a>
            <a class="mt-6 mr-8 white-card sponsor-card"
               href="https://mlmodena.it/">
              <div class="image image-staff ml-modena"></div>
              <div class="font-medium">ML Modena</div>
            </a>
            <a class="mt-6 mr-8 white-card sponsor-card"
               href="https://www.meetup.com/reggio-emilia-full-stack/">
              <div class="image image-staff reggio-emilia-full-stack"></div>
              <div class="font-medium">Reggio Emilia full stack</div>
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

