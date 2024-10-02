<template>
  <Title>DevFest Modena 2024 &mdash; Contatti</Title>
  <div>
    <NuxtLayout name="page">
      <template #image>
        <img src="@/assets/svg/arc.svg">
      </template>

      <template #title>Contatti</template>

      <template #subtitle>Serve una mano? Eccoci :)</template>

      <template #hint>
        Puoi interagire con il nostro staff tramite diversi canali.
        <br>
        Scegli quello che preferisci.
      </template>

      <template #content>
        <section class="px-10 pb-12 pt-10">
          <div class="flexbox wrap" style="gap: 48px">
            <div class="flexbox column" style="gap: 24px; flex: 1 1 470px;">
              <div class="flexbox column">
                <div class="text-xl">Desideri proporti come speaker?</div>
                <div class="swapper-500">
                  <div class="main">
                    <div class="text-accent text-2xl" style="word-break: break-all;">
                      <a href="mailto:speakers@devfest.modena.it">speakers@devfest.modena.it</a>
                    </div>
                  </div>
                  <div class="to-swap">
                    <div class="text-accent" style="word-break: break-all;">
                      <a href="mailto:speakers@devfest.modena.it">speakers@devfest.modena.it</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flexbox column">
                <div class="text-xl">Vuoi partecipare come sponsor?</div>
                <div class="swapper-500">
                  <div class="main">
                    <div class="text-accent text-2xl" style="word-break: break-all;">
                      <a href="mailto:sponsors@devfest.modena.it">sponsors@devfest.modena.it</a>
                    </div>
                  </div>
                  <div class="to-swap">
                    <div class="text-accent text-2xl" style="word-break: break-all;">
                      <a href="mailto:sponsors@devfest.modena.it">sponsors@devfest.modena.it</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flexbox column">
                <div class="text-xl">Per qualsiasi altra informazione scrivi a:</div>
                <div class="swapper-500">
                  <div class="main">
                    <div class="text-accent text-2xl" style="word-break: break-all;">
                      <a href="mailto:info@devfest.modena.it">info@devfest.modena.it</a>
                    </div>
                  </div>
                  <div class="to-swap">
                    <div class="text-accent text-2xl" style="word-break: break-all;">
                      <a href="mailto:info@devfest.modena.it">info@devfest.modena.it</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flexbox column" style="gap: 24px; flex: 1 1 470px;">
              <div class="text-xl">
                Non dimenticare che siamo anche sui social.
                <br>
                Segui le nostre pagine per rimanere aggiornato sulle news e le edizioni future.
              </div>
              <div class="flexbox wrap" style="gap: 24px">
                <a href="https://www.facebook.com/events/7532786990157832/" target="_blank">
                  <img class="w-10"
                       src="@/assets/img/ic_Facebook.png"/></a>
                <a href="https://instagram.com/explore/tags/devfestmodena" target="_blank">
                  <img class="w-10" src="@/assets/img/Instagram.png"/></a>
                <a href="https://www.linkedin.com/showcase/devfest-modena/" target="_blank">
                  <img class="w-10" src="@/assets/img/linkedin.png"/></a>
                <a href="https://x.com/hashtag/devfestmodena" target="_blank">
                  <img class="w-10" src="@/assets/img/Twitter_X_square.png"/></a>
              </div>
            </div>
          </div>
        </section>
      </template>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>