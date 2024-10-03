<template>
  <Title>
    DevFest Modena 2024 &mdash; Sponsorizza
  </Title>
  <div>
    <NuxtLayout name="page">
      <template #image>
        <div style="max-width: 100px; max-height: 200px;">
          <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/Plus.svg">
        </div>
      </template>
      <template #title>
        Sponsorizza
      </template>
      <template #content>
        <section class="pt-10 lg:pt-14 pb-4 text-center">
          <h4 class="text-4xl font-semibold">DACCI UNA MANO A DIVENTARE</h4>
          <h3 class="text-3xl font-semibold mt-2">IL
            <mark class="red">GRANDE</mark>
            APPUNTAMENTO DI
            <mark class="green">OTTOBRE</mark>
          </h3>
        </section>
        <section class="px-4 lg:pt-6 pb-8">
          <div class="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl p-6 mt-8">
            <div class="w-full lg:w-5/12">
              <img src="@/assets/img/sponsorizza-1.png" class="w-full rounded-xl"/>
            </div>
            <div class="w-full lg:w-7/12">
              <h4 class="blue-title text-2xl">La prima DevFest in Emilia</h4>
              <p class="text-lg">
                La prima volta a Modena di un evento DevFest nel corso del quale si incontreranno e si aggiorneranno
                sviluppatori e devops ma anche studenti e i talentuosi creativi che stanno costruendo il domani.
              </p>
              <br>
              <p class="text-lg">
                In Emilia la prima DevFest per chi ama l’informatica, la tecnologia e vuole entrare nella più attiva
                comunità locale per imparare e conoscere appassionati, professionisti ed imprenditori.
              </p>
            </div>
          </div>
           <div class="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl p-6 mt-8">
            <div class="w-full lg:w-5/12">
              <img src="@/assets/img/sponsorizza-3.png" class="w-full rounded-xl"/>
            </div>
            <div class="w-full lg:w-7/12">
              <h4 class="blue-title text-2xl">Chi organizza?</h4>
              <p class="text-lg">
                Le comunità di Modena, Reggio Emilia e Bologna insieme nella creazione di un evento in comune: </p>
              <br>
              <ul class="text-lg">
                <li>GDG Cloud Modena</li>
                <li>Modena Full Stack</li>
                <li>Flutter Modena</li>
                <li>Conoscere Linux</li>
                <li>ML Modena</li>
                <li>GDG Bologna</li>
              </ul>
            </div>
          </div>
           <div class="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl p-6 mt-8">
            <div class="w-full lg:w-5/12">
              <img src="@/assets/img/sponsorizza-2.png" class="w-full rounded-xl"/>
            </div>
            <div class="w-full lg:w-7/12">
              <h4 class="blue-title text-2xl">I partecipanti</h4>
              <p class="text-lg">
                I partecipanti saranno super-appassionati provenienti da <span style="font-weight: bold;">aziende</span>,
                <span style="font-weight: bold;">startup</span> innovative, oltre a <span style="font-weight: bold;">freelance</span>,
                <span style="font-weight: bold;">sviluppatori</span> indipendenti e membri di grandi organizzazioni. Si
                stima un’affluenza di circa <span style="font-weight: bold;">300 persone</span>.
              </p>
              <br>
              <p class="text-lg">
                Il DevFest è il luogo dove si potrà essere aggiornati sulle più innovativi tecnologie e sulle più
                diffuse pratiche nell'ingegneria del software.
              </p>
            </div>
          </div>
           <div class="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl p-6 mt-8">
            <div class="w-full lg:w-5/12">
              <img src="@/assets/img/sponsorizza-5.png" class="w-full rounded-xl"/>
            </div>
            <div class="w-full lg:w-7/12">
              <h4 class="blue-title text-2xl">La location</h4>
              <p class="text-lg">
                Il posto dove innovazione, sperimentazione e cultura si incontrano.
              </p>
              <br>
              <p class="text-lg">
                Il Laboratorio Aperto di Modena è un luogo di formazione e innovazione per cittadini, scuole,
                università, imprese e professionisti del settore culturale.
              </p>
            </div>
          </div>
           <div class="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl p-6 mt-8">
            <div class="w-full lg:w-5/12">
              <img src="@/assets/img/sponsorizza-6.png" class="w-full rounded-xl"/>
            </div>
            <div class="w-full lg:w-7/12">
              <h4 class="blue-title text-2xl">Area sponsor</h4>
              <p class="text-lg">
                Un’area dove accogliere le persone e presentarsi.
              </p>
              <br>
              <p class="text-lg">
                In aggiunta, l’Area Vip rappresenta uno spazio esclusivo situato nel soppalco. L’area è pensata
                appositamente per le aziende che desiderano creare un ambiente personalizzato e riservato.
              </p>
            </div>
          </div>
           <div class="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl p-6 mt-8">
            <div class="w-full lg:w-5/12">
              <img src="@/assets/img/sponsorizza-7.png" class="w-full rounded-xl"/>
            </div>
            <div class="w-full lg:w-7/12">
              <h4 class="blue-title text-2xl">Come sponsorizzare</h4>
              <p class="text-lg">
                Contattaci all’indirizzo email <a
                  href="mailto:sponsors@devfest.modena.it">sponsors@devfest.modena.it</a>. Fisseremo una call di 10-15
                minuti per spiegarti i dettagli e mostrarti i pacchetti disponibili.
              </p>
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
mark.red {
  color: #EA4335;
  background: none;
}

mark.green {
  color: #34A853;
  background: none;
}

.section-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 40px;
}

.text-content {
  flex: 1;
  margin-left: 20px;
}

.image-container {
  flex: 1;
  text-align: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.blue-title {
  color: #4285F4;
  margin-bottom: 15px;
  font-weight: bold;
}

a {
  color: #4285F4;
}

@media (max-width: 768px) {
  .section-content {
    flex-direction: column;
  }

  .text-content {
    margin-right: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
