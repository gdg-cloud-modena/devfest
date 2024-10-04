<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; The Staff Engineer VS Manager Path: A window over the tech career paths</Title>
    <NuxtLayout name="speaker-page" speaker-image="alfonso-graziano">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>The Staff Engineer VS Manager Path: A window over the tech career paths</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Alfonso Graziano</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>NearForm | AWS Certified Solutions Architect</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Senior Developer</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>Italiano</p>
          </div>
        </div>
      </template>
      <template #talk>
        <h2>Speech</h2>
        <p>
          Engineer or Manager: Who wears the cooler tech cape? Dive into the great debate with insights from 'The Manager's Path' and 'The Staff Engineer's Path'. From code-wrangling wizards to tech team captains, get a fun peek into the world of tech's top jobs. Pick your path or just enjoy the ride!
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          I'm a Full Stack Developer in NearForm. I work mainly with Node.js and React. In my free time I like to read books and articles, cook, and walk in the nature.
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.alfonsograziano.it/" target="_blank">
            <img src="@/assets/img/website.png" style="height: 24px;"/>
          </a>
          <a href="https://www.linkedin.com/in/alfonso-graziano/" target="_blank">
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