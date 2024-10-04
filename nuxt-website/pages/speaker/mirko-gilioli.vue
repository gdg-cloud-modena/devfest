<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; Lead Google Cloud Instructor</Title>
    <NuxtLayout name="speaker-page" speaker-image="mirko-gilioli">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>The Staff Engineer VS Manager Path: A window over the tech career paths</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Mirko Gilioli</p>
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
        <p>
         Mirko was born in Reggio Emilia, Italy, in 1983. He earned his MSc in Computer Science and Engineering from the University of Modena and Reggio Emilia, spending a year in the U.S. as a Research Assistant at the Institute for Human & Machine Cognition (IHMC) in Pensacola, Florida. After graduating, Mirko began his career as a trainer in 2010, gaining extensive expertise in Networking and Cloud Technologies. He became a Google Cloud Authorized Trainer in 2021 and is also a Cisco Certified System Instructor (CCSI #35749). In 2022, he became an AWS Authorized Instructor, further demonstrating his proficiency in Cloud Technology. That same year, Mirko joined Datatonic Academy as Lead Google Cloud Instructor, where he specialized in Data and AI technologies and training. Datatonic Academy is the training arm of Datatonic, a multi-award-winning Google Cloud partner specializing in Data and AI. In 2023, Mirko co-authored the book Google Cloud Certified: Professional Cloud Network Engineer Guide, published by Packt. In 2024, his expertise culminated in his recognition as a Google Cloud Champion Innovator for Cloud AI/ML. Following this recognition, Mirko began actively engaging in Google Cloud advocacy, speaking at international conferences to share his expertise and insights
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/mirko-gilioli/" target="_blank">
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