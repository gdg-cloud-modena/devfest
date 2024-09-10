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
                <div class="container">
                    <div class="location-info">
                        <div class="location">
                            <h3>Location</h3>
                            <p>Laboratorio Aperto di Modena</p>
                        </div>
                        <div class="address">
                            <h3>Indirizzo</h3>
                            <p>Viale Buon Pastore 43, Modena, 41125, (MO)</p>
                        </div>
                        <a href="https://maps.google.com/?q=Viale Buon Pastore 43, Modena" target="_blank" class="maps-button">Apri in Maps</a>
                    </div>

                    <div class="map-image">
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
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
}

.location-info {
  flex: 0.25; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.location {
    background-color: white;
    border-radius: 10px;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    margin-bottom: 20px;
}

.address {
    background-color: white;
    border-radius: 10px;
    border-color: black;
    border-width: 3px;
    border-style: solid;
    margin-bottom: 20px;
}


.location-info h3 {
  font-size: 1.65rem;
  color: #4285F4;
  margin-bottom: 10px;
  margin-left: 5px;
}

.location-info p {
  font-size: 1rem;
  margin-bottom: 15px;
  margin-left: 5px;
  font-weight: bold;
}

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
  flex: 0.75; 
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

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .map-image img {
    height: auto;
  }
}
</style>