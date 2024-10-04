<template>
  <Title>DevFest Modena 2024 &mdash; Ritorno al Futuro: sviluppare app mobile e cross-platform in Pascal, Grande
    Giove!</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="marco-breveglieri">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>
      <template #title> Ritorno al Futuro: sviluppare app mobile e cross-platform in Pascal, Grande Giove!</template>
      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Marco Breveglieri</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>ABLS Team</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Software Developer</p>
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
          Saltando a bordo della nostra DeLorean faremo un viaggio verso l'inaspettato: creeremo app mobile native e
          cross-platform con... udite udite... Pascal! Sì, fidati del brivido lungo la schiena: parliamo proprio di quel
          Pascal. Pesante!
        </p>
        <p class="mb-3">
          Andremo prima nel passato per rivivere il momento in cui è nato questo linguaggio. Sfrecceremo poi nel futuro
          per scoprire quali sorprese e potenzialità il linguaggio Pascal ci riserva grazie alle tecnologie emergenti,
          tra cui l'AI!
        </p>
        <p class="mb-3">
          Che siate developer veterani, o novellini particolarmente curiosi, allacciate le cinture: dove stiamo andando
          non abbiamo bisogno di strade!
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          Marco is a software and Web developer, a mentor and a consultant since 1999. He works at ABLS Team, a company
          dedicated to process analysis and software implementation, from small dedicate systems to large vertical
          solutions, which also offers consulting, training and outsourcing services providing its expertise to partners
          and companies. In his spare time, he does live coding sessions on Twitch.
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/marcobreveglieri" target="_blank">
            <img src="@/assets/img/linkedin.png" style="height: 24px;"/>
          </a>
           <a href="https://x.com/mbreveglieri" target="_blank">
            <img src="@/assets/img/twitter.png" style="height: 24px;"/>
          </a>
           <a href="https://github.com/marcobreveglieri" target="_blank">
            <img src="@/assets/img/github.svg" style="height: 24px;"/>
          </a>
           <a href="https://www.twitch.tv/compilaquindiva" target="_blank">
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