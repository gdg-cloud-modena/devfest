<template>
  <Title>DevFest Modena 2024 &mdash; Technological porting for a legacy system</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="maurizio-carli">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>
      <template #title>Technological porting for a legacy system</template>
      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Maurizio Carli</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>QubicaAMF Worldwide</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Bowling Products</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>English / Italiano</p>
          </div>
        </div>
      </template>
      <template #talk>
        <h2>Speech</h2>
        <p>
          In this talk we will talk about the strategy we have been adopting for over 2 years to address the technological porting of a legacy system, a system originally implemented in C++ over twenty years ago, working in the context of the Bowling industry, and that we are gradually rewriting using .NET technologies. We will see the problems related to support different platforms with a single C++ code base, the reasons for starting a porting project, where we would like to get to and the steps that characterize the transition. Finally we will try to draw some conclusions and understand what lessons have been learned.
        </p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          Maurizio Carli has been working for 20+ years in the Bowling industry, is very passionate about software design even more then technology and its favorite language is C++, which he came across with in 1997. Other than an informatic 'guy', he really loves outdoor activities and is addicted about mountain environment.
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="http://www.linkedin.com/in/maurizio-carli-01ab4115" target="_blank">
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