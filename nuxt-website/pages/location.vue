<template>
  <Title>
    DevFest Modena 2024 &mdash; Come raggiungerci
  </Title>
  <div>
    <NuxtLayout name="page">
      <template #image>
        <img src="@/assets/svg/stop.svg">
      </template>

      <template #title>
        Come raggiungerci
      </template>

      <template #content>
        <section class="px-10 pb-12 pt-10">
          <div class="flexbox wrap justify-center align-top" style="gap: 48px; flex: 1 1 400px;">
            <div class="flexbox column" style="gap: 24px">
              <div class="info-box">
                <h3>Location</h3>
                <p>Laboratorio Aperto di Modena</p>
              </div>
              <div class="info-box">
                <div class="content">
                  <h3>Indirizzo</h3>
                  <p>Viale Buon Pastore 43, Modena, 41125, (MO)</p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=Viale Buon Pastore 43, Modena" target="_blank"
                 class="button-like cool-blue text-2xl py-5 px-7">Apri in Maps</a>
            </div>
            <div class="map-image" style="flex: 1 1 400px;">
              <img src="@/assets/img/map.png" alt="Map Image"/>
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

<style scoped>
.map-image {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>