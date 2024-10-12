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
              <a href="https://maps.app.goo.gl/eq783A1v6aVxPwFHA?g_st=atm" target="_blank"
                 class="button-like cool-blue text-2xl py-5 px-7">Link Parcheggio sotterraneo</a>
              <a href="https://maps.google.com/?q=Viale Buon Pastore 43, Modena" target="_blank"
                 class="button-like cool-blue text-2xl py-5 px-7">Apri in Maps</a>
            </div>
            <div class="map-image" style="flex: 1 1 400px;">
              <img src="@/assets/img/map.png" alt="Map Image"/>
            </div>
            <div>
              <div class="font-medium text-2xl mb-4">Garage Info - Via Antonio Peretti, 40/54</div>
              <div class="pb-3">Uscita garage: Piazza Dei Binari. L'edificio è quello di fronte all'uscita, giallo, con
                la torre dell'acqua, dalla piazzetta si arriva dietro al edificio (ex centrale termica), l'ingresso del
                evento si trova sulla strada.
              </div>
              <div class="flex flex-col lg:flex-row gap-8">
                <div>
                  <img src="@/assets/img/garage-out.jpg" class="rounded-md"/>
                </div>
                <div>
                  <img src="@/assets/img/garage-in.jpg" class="rounded-md"/>
                </div>
                <div>
                  <img src="@/assets/img/location-out.jpg" class="rounded-md"/>
                </div>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-8">
              <div>
                <div class="font-medium text-xl mb-2">Informazioni per raggiungerci con i mezzi di trasporto</div>
                <ul class="list-disc ml-5">
                  <li>da stazione dei treni Modena si possono prendere gli autobus 11S e 13 direzione Ospedale
                    baggiovara
                  </li>
                  <li>taxi da stazione (059 374242 o tramite whatsapp 3351838555)</li>
                  <li>2km da piedi</li>
                </ul>
              </div>
              <div>
                <div class="font-medium text-xl mb-2">Informazioni sui mezzi di trasporto</div>
                <ul class="list-disc ml-5">
                  <li>biglietto valido per 75 minuti</li>
                  <li>2 euro a bordo da macchina self service (solo moente)</li>
                  <li>1,50 euro a bordo con carta di credito contactless</li>
                  <li>1,50 euro biglietteria nel piazzale antistante la stanzione, nell'angolo adiacente ai terminal
                    bus
                  </li>
                </ul>
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