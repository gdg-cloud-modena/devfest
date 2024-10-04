<template>
  <Title>DevFest Modena 2024 &mdash; Gemini 1.5: A workshop in multimodal use cases</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="ankur-roy">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title> Gemini 1.5: A workshop in multimodal use cases</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Ankur Roy</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>Online Partner AB</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Solutions Architect</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>English</p>
          </div>
        </div>
      </template>
      <template #talk>
        <h2>Speech</h2>
        <p class="mb-3">
          Session abstract<br/>
          It is a pre-prepared demo using Google's content on multimodal use cases with Gemini that has been provided to
          GDEs. I will present it along with a short talk to explain Vertex AI and Gemini models. The description, as
          given by Google is as follows:
        </p>
        <p class="mb-3">
          What are the applications of multimodality with Gemini? This session will cover a variety of different
          multimodal use cases for text, images, audio, video, and code to provide ideas on how you can apply
          multimodality to practical business scenarios. You will gain hands-on experience with both Gemini 1.5 Pro and
          Gemini 1.5 Flash.
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          I am a Solutions Architect at Online Partner AB. I have worked on several projects involving Google Cloud
          services and Google Workspace along with multiple other technology stacks and platforms.
          Some important things to know about me:
        </p>
        <ul>
          <li>I have all 11 GCP certifications.</li>
          <li>I have recently published a book on the use of Python in DevOps and am currently working on a book
            regarding passing the Google Cloud Professional Data Engineer certification exam.
          </li>
          <li>I am passionate about working out, writing, and content creation.</li>
          <li>I love public speaking and have done many speaking appearances including one recently for a webinar at
            Google's Oslo headquarters.
          </li>
        </ul>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/ankurr0y/" target="_blank">
            <img src="@/assets/img/linkedin.png" style="height: 24px;"/>
          </a>
          <a href="https://github.com/ankurr0y" target="_blank">
            <img src="@/assets/img/github.svg" style="height: 24px;"/>
          </a>
          <a href="https://ankurr.substack.com/" target="_blank">
            <img src="@/assets/img/website.png" style="height: 24px;"/>
          </a>
          <a href="https://open.spotify.com/show/5INjWLYQdlPOCJmCoRDx7C?si=jtHQpBzcRimHWK-7Yn8yBg" target="_blank">
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