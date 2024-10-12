<template>
  <div>
    <Title>DevFest Modena 2024 &mdash; Modern asynchronous programming in C++: the Execution library</Title>
    <NuxtLayout name="speaker-page" speaker-image="stefano-allegretti">
      <template #image>
        <img src="@/assets/svg/square-brackets.svg">
      </template>

      <template #title>Modern asynchronous programming in C++: the Execution library</template>

      <template #speaker-info>
        <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
          <div class="info-box">
            <h3>Speaker</h3>
            <p>Stefano Allegretti</p>
          </div>
          <div class="info-box">
            <h3>Azienda</h3>
            <p>ZURU Tech Italy</p>
          </div>
          <div class="info-box">
            <h3>Ruolo</h3>
            <p>Software Engineer</p>
          </div>
          <div class="info-box">
            <h3>Lingua</h3>
            <p>Italiano</p>
          </div>
        </div>
      </template>
      <template #description>
        <h2>Bio</h2>
        <p class="mb-3">
          Stefano Allegretti è un Software Engineer in C++ presso ZURU Tech Italy, dove contribuisce attivamente al
          gruppo MEP (Mechanical, Electrical, and Plumbing), con un focus particolare sui sistemi HVAC e le simulazioni
          energetiche.
        </p>
        <p class="mb-3">Con un Ph.D. in Computer Engineering e una solida esperienza nell'ottimizzazione di algoritmi
          per l'elaborazione delle immagini e la computer vision, Stefano ha una profonda competenza sia accademica che
          pratica.
        </p>
        <p class="mb-3">
          Ha svolto ricerche presso l'Università di Modena e Reggio Emilia e ha completato stage di ricerca in
          prestigiose istituzioni internazionali.
        </p>
        <p class="mb-3">
          Da oltre 4 anni lavora come Machine Learning Engineer presso Expert.ai, concentrandosi su progetti di document
          understanding e Natural Language Processing (NLP).</p>
        <br/>
        <!--Links-->
        <div class="flexbox" style="gap: 12px;">
          <a href="https://www.linkedin.com/in/stefano-allegretti-206484206/" target="_blank">
            <img src="@/assets/img/linkedin.png" style="height: 24px;"/>
          </a>
        </div>
      </template>
      <template #talk>
        <h2>Speech</h2>
        <p class="mb-3">
          Esploreremo il futuro della programmazione asincrona in C++, con uno sguardo approfondito alla Execution
          library, un elemento chiave per gestire la complessità delle applicazioni moderne.
        </p>
        <p class="mb-3">
          Sarà una straordinaria occasione per approfondire come ottimizzare la gestione della concorrenza e migliorare
          le performance del software.
        </p>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>