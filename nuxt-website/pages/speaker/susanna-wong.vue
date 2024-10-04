<template>
  <Title>DevFest Modena 2024 &mdash; Improve your Multi-Factor Auth with Firebase and Vonage APIs</Title>
  <div>
    <NuxtLayout name="speaker-page" speaker-image="susanna-wong">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>
        WWWAI: Constructing a truly open GenAI app with WebAssembly, WebGPU, and WebAI
      </template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Susanna Wong</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Staff Software Engineer at QuantumBlack, Google Developer Expert, Google Womens Techmakers Ambassador</p>
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
          GenAI is everywhere, but for most app developers, building with AI seems daunting. We're constrained by LLM
          APIs, lack of control, and rising costs. What if we could democratize AI development for the web without
          diving into Python data science?
        </p>
        <p class="mb-3">
          Enter Wasm, WebGPU, and WebAI - key concepts enabling the use of open AI models with WebAssembly and WebGPU.
          This allows developers to create sophisticated web applications while maintaining control over AI
          infrastructure and costs, all in JS.
        </p>
        <p class="mb-3">
          This talk demonstrates how using open-source models, instead of proprietary cloud AI services, enables greater
          customization, data privacy, and cost management. We'll explore how WASM and WebGPU can efficiently run these
          models in-browser, reducing server-side processing. Through demos, we'll discuss the optimal architectural
          setup to architect this specific paradigm of GenAI apps.</p>
        <p class="mb-3">
          We'll also cover strategies for optimizing web performance with open models, addressing trade-offs and
          implementation considerations for full-stack apps, as well as introducing the cutting edge webNN API to enable
          web apps and frameworks to take advantage of the best available hardware and software optimisations for
          various devices.</p>
        <p class="mb-3">This is our opportunity to elevate AI and web development. Let's reclaim control of our GenAI web apps using
          WASM and open models, making AI accessible to all web developers!</p>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p>
          I am a Software Engineer passionate about all web technologies, UI design systems and machine learning. Having
          initially started out as a software developer at SAP labs in Palo Alto, California, in 2008 before
          transitioning into my second career as an Architect and computational design specialist, I spent seven years
          using code and automation to solve a series of complex Architectural problems for numerous high profile
          projects that would otherwise be impossible to realize in construction. Finally realizing my ultimate passion
          in software development through my years as a tech savvy Architect, I decided to transition back into tech,
          focusing on full stack web technologies. Since then I had been a software developer across multiple highly
          functional teams, from small agile teams in big corporates ( CNN, Toyota Connected, FairFX, McKinsey/QB) to
          early stage startups, I have extensive experience with web development (React, Ember, Angular, PWAs), GraphQL,
          node, and all things JS. Having been experimenting with Machine Learning in my personal projects, I am
          particularly passionate in integrating my interest in ML and expertise in web to build amazing visualisation
          tools for ML, as well as integrating tensorflow.js into the web dev workflow to build truly intelligent and
          highly performant web apps. My current role in QuantumBlack as a Senior Consultant in Front End Engineering
          allows me to take this passion to the next level via building a ML pipeline visualisation tool for an open
          source ML framework that is highly utilised by the data science community. Outside work, I am very passionate
          about knowledge sharing via my active involvement in developer conferences as a speaker. Over the past three
          years I have actively participated in over 20 Full Stack tech conferences, while having been invited to speak
          at several high profile conferences throughout Europe (Code Mesh 2017, ReactFest 2018, Full Stack Fest 2018,
          Full Stack London 2019 and Full Stack Europe 2019).
        </p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/susanna-wong-london/" target="_blank">
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