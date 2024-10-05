<template>
  <Title>DevFest Modena 2024 &mdash; Pattern Matching to the Rescue!</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="matteo-maria-terzuolo">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>
      <template #title> Pattern Matching to the Rescue!</template>
      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Matteo Maria Terzuolo</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>Salty Spaghetti</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Dev by day, gamer by night</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>English/Italiano</p>
          </div>
        </div>
      </template>
      <template #talk>
        <h2>Speech</h2>
        <p class="mb-3">
          This talk is going to be a deep dive into Pattern Matching in Dart. We'll explore how Dart simplifies dealing
          with complex data structures using clear and intuitive patterns.
        </p>
        <p class="mb-3">
          We'll uncover real-world applications and share some neat tricks to maximize the potential of this powerful feature.
        </p>
        <p class="mb-3">
          So buckle up, because by the end of this session, you'll be ready to level up your Dart game and tackle those
          data structures like a pro!
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          Matteo Maria is a Flutter Engineer who always loves to experiment with new things. He works with Flutter but
          is also interested in Rust and backend development. In his free time, he spends tons of hours playing video
          games and listening to every genre under the EDM umbrella
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/matteo-maria-terzuolo/" target="_blank">
            <img src="@/assets/img/linkedin.png" style="height: 24px;"/>
          </a>
          <a href="https://twitter.com/SaltySpag" target="_blank">
            <img src="@/assets/img/twitter.png" style="height: 24px;"/>
          </a>
          <a href="https://github.com/SaltySpaghetti" target="_blank">
            <img src="@/assets/img/github.svg" style="height: 24px;"/>
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