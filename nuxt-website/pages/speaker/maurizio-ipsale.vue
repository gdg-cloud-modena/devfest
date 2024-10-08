<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; Keynote</Title>
    <NuxtLayout name="speaker-page" speaker-image="maurizio-ipsale">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>Keynote</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Maurizio Ipsale</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>Datatonic</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Lead Google Cloud Instructor | Google Cloud Champion Innovator</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>Italiano</p>
          </div>
        </div>
      </template>
      <template #talk>
        <h2>Bio</h2>
        <p class="mb-3">
          Maurizio was born in Messina (Italy) in 1978 where he graduated in Electronic Engineering at the age of 23 and
          obtained a Ph.D. degree. Passionate about the ICT world, his professional curriculum has been enriched with
          many certifications, in particular as an instructor of official training courses, such as Cisco, Juniper,
          Amazon AWS, and Google Cloud.</p>
        <p class="mb-3">He delivers training courses all around the world on many state-of-the-art technologies, including Cloud and
          Machine Learning.</p>
        <p class="mb-3">Maurizio currently lives in Modena (Italy) with his wife Liliana and two children, Simone and Alessia. He is
          a Google Cloud Authorized Trainer.</p>
        <p class="mb-3">Since 2022, he's leading a team of trainers in Datatonic Academy, a Google Cloud Authorized Training
          Partner.</p>
        <p class="mb-3">He is co-author of the book “Google Cloud Certified Professional Cloud Network Engineer Guide: Design,
          implement, manage, and secure a network architecture in Google Cloud”, published by Packt Publishing.</p>
        <p class="mb-3">In 2023 he founded GDG Cloud Modena and, in 2024 he was recognized as Google Champion Innovator for Cloud
          AI/ML track.</p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/maurizioipsale/" target="_blank">
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