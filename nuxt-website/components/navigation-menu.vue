<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
  <section
      style="position: fixed; z-index: 99; overflow-y: scroll; gap: 48px; max-width: 100% !important;"
      class="full background flexbox column pad-24"
      id="navigation"
  >
    <section>
      <div class="flex flex-col lg:flex-row pt-20 lg:pt-24 px-5 wrap">
        <div class="lg:w-1/2">
          <div class="text-4xl font-semibold mb-10 lg:mb-14">
            <RouterLink to="/speakers">Speaker</RouterLink>
          </div>
          <div class="text-4xl font-semibold mb-10 lg:mb-14">
            <RouterLink to="/team">Team</RouterLink>
          </div>
          <div class="text-4xl font-semibold mb-10 lg:mb-14">
            <RouterLink to="/program">Programma</RouterLink>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="text-4xl font-semibold mb-10 lg:mb-14">
            <RouterLink to="/location">Location</RouterLink>
          </div>
          <div class="text-4xl font-semibold mb-10 lg:mb-14">
            <RouterLink to="/sponsors">Sponsor</RouterLink>
          </div>
          <div class="text-4xl font-semibold mb-10 lg:mb-14">
            <a
                href="https://www.eventbrite.it/e/devfest-modena-2024-tickets-1006887817567?aff=oddtdtcreator"
                target="_blank">Ticket</a>
          </div>
        </div>
      </div>
      <hr/>
      <SecondaryLinks/>
    </section>
  </section>
</template>

<style lang="scss">
#navigation {
  h1 {
    font-size: 3rem;
    word-break: break-all;
  }
}

@media screen and (max-width: 500px) {
  #navigation {
    h1 {
      font-size: 3rem !important;
      word-break: break-all;
    }
  }
}
</style>