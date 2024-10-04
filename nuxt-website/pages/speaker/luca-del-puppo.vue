<template>
  <Title>DevFest Modena 2024 &mdash; Scale your Frontend application with Module Federation</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="luca-del-puppo">
      <template #image>
        <div style="max-width: 100px; max-height: 200px;">
          <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
        </div>
      </template>
      <template #title> Scale your Frontend application with Module Federation</template>
      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Luca Del Puppo</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>NearForm</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Senior Software Developer</p>
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
          Building complex frontend applications can be a challenge. As features grow, monolithic codebases become
          unwieldy and difficult to maintain. Microfrontends offer a solution by breaking down the application into
          independent, feature-focused chunks.
        </p>
        <p class="mb-3">
          However, traditional microfrontend approaches can introduce new issues with dependency management and
          communication between the microfrontends themselves.
        </p>
        <p class="mb-3">
          This talk explores Module Federation, a technique that addresses these challenges. By enabling dynamic loading
          of remote microfrontends at runtime, Module Federation fosters a more efficient and scalable architecture for
          large-scale frontend applications.
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          I'm a Senior Software Engineer, Microsoft MVP, Google Developer Expert and GitKraken Ambassador, I love
          JavaScript and TypeScript. In my free time, I love to study new technologies or something about improving
          myself and do trail running in my love Dolomiti.
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/lucadelpuppo/" target="_blank">
            <img src="@/assets/img/linkedin.png" style="height: 24px;"/>
          </a>
          <a href="https://twitter.com/puppo92" target="_blank">
            <img src="@/assets/img/twitter.png" style="height: 24px;"/>
          </a>
          <a href="https://www.delpuppo.net/" target="_blank">
            <img src="@/assets/img/website.png" style="height: 24px;"/>
          </a>
          <a href="https://www.nearform.com/" target="_blank">
            <img src="@/assets/img/website.png" style="height: 24px;"/>
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