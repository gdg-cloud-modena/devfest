<template>
    <Title>
        DevFest Modena 2024 &mdash; Come raggiungerci
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/stop.svg">
                </div>
            </template>
            <template #title>
                Come raggiungerci
            </template>
            <template #content>
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
                    <a href="https://maps.google.com/?q=Viale Buon Pastore 43, Modena" target="_blank" class="maps-button">Apri in Maps</a>
                  </div>
                  <div class="map-image" style="flex: 1 1 400px;">
                      <img src="@/assets/img/map.png" alt="Map Image" />
                  </div>
              </div>
            </template>
            <template #under-content>
                <FreeTicket />
                <SocialLinks />
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
.maps-button {
  background-color: #4285F4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  margin-top: auto; /* Push button to the bottom */
  display: inline-block;
  text-decoration: none;
}

.maps-button:hover {
  background-color: #365bb5;
}

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