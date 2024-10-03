<template>
  <div class="flexbox column w-full">
    <div class="flexbox wrap pad-24 gap-4 lg:gap-8">
      <div class="text-lg">
        <RouterLink to="/faq">FAQ</RouterLink>
      </div>
      <div class="text-lg">
        <RouterLink to="/location">Location</RouterLink>
      </div>
      <div class="text-lg">
        <RouterLink to="/sponsors">Sponsor</RouterLink>
      </div>
      <div class="text-lg">
        <RouterLink to="/team">Team</RouterLink>
      </div>
      <div class="text-lg">
        <RouterLink to="/communities">Communities</RouterLink>
      </div>
      <div class="text-lg">
        <RouterLink to="/contact-us">Contacts</RouterLink>
      </div>
      <div class="text-lg">
        <RouterLink to="/code-of-conduct">Codice di condotta</RouterLink>
      </div>
      <div class="text-lg">
        <RouterLink to="/program">Programma</RouterLink>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-between  pad-24">
      <div class="flexbox wrap gap-4 lg:gap-8">
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
        <RouterLink to="/legal">Note legali</RouterLink>
      </div>
      <div class="flex item-center mt-8 lg:mt-0 text-lg">
        <div class="text-center lg:text-right">
          Patrocinato da <img class="mt-2 lg:mt-0 lg:ml-3 inline-block" style="height: 40px" src="@/assets/img/comune-modena.jpeg"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>