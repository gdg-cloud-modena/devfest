<template>
  <Title>DevFest Modena 2024 &mdash; AI-Powered Testing: Revolutionizing QA with Machine Learning</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="ludovico-besana">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>
      <template #title>AI-Powered Testing: Revolutionizing QA with Machine Learning</template>
      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Ludovico Besana</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>Nearform</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Senior Test Engineer</p>
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
          The integration of AI into quality assurance can significantly enhance the efficiency and effectiveness of
          testing processes. In this session, Ludovico Besana will explore the latest advancements in AI-powered testing
          tools and techniques. He will discuss how machine learning algorithms can automate complex test scenarios,
          predict potential failures, and optimize test coverage. Attendees will learn about the practical applications
          of AI in testing, including case studies of successful implementations, and receive guidance on integrating AI
          tools into their existing QA framework.
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p class="mb-3">
          Ludovico, born as a Full Stack Developer, discovered his true passion for quality later in his career. With
          a background in Full Stack Development, he possessed a strong technical foundation and a deep understanding
          of software systems.</p>
        <p class="mb-3">
          As an Automation and Open Source enthusiast, Ludovico recognized the power of efficient and reliable testing
          methodologies. He understood the importance of ensuring that software products met the highest standards of
          performance, functionality, and user experience. He works as a Senior Test Engineer.
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/ludovicobesana/" target="_blank">
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