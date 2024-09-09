<template>
    <Title>
        DevFest Modena 2024 &mdash; Sponsorizza
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/Hash.svg">
                </div>
            </template>
            <template #title>
                Sponsorizza
            </template>
            <template #content>
                <div style="text-align: center;">
                    <h4>DACCI UNA MANO A DIVENTARE</h4>
                    <h3>IL <mark class="red">GRANDE</mark> APPUNTAMENTO DI <mark class="green">OTTOBRE</mark></h3>
                </div>
                <div>
                    <div class="section-content">
                        <div class="image-container">
                            <img src="@/assets/img/sponsorizza-1.png"/>
                        </div>
                        <div class="text-content">
                            <h4 class="blue-title">La prima DevFest in Emilia</h4>
                            <p>
                                La prima volta a Modena di un evento DevFest nel corso del quale si incontreranno e si aggiorneranno sviluppatori e devops ma anche studenti e i talentuosi creativi che stanno costruendo il domani.
                            </p>
                            <br>
                            <p>
                                In Emilia la prima DevFest per chi ama l’informatica, la tecnologia e vuole entrare nella più attiva comunità locale per imparare e conoscere appassionati, professionisti ed imprenditori.
                            </p>
                        </div>
                    </div>
                    <div class="section-content">
                        <div class="image-container">
                            <img src="@/assets/img/sponsorizza-3.png"/>
                        </div>
                        <div class="text-content">
                            <h4 class="blue-title">Chi organizza?</h4>
                            <p>
                                Le comunità di Modena, Reggio Emilia e Bologna insieme nella creazione di un evento in comune:                            </p>
                            <br>
                            <ul>
                                <li>GDG Cloud Modena</li>
                                <li>Modena Full Stack</li>
                                <li>Flutter Modena</li>
                                <li>Conoscere Linux</li>
                                <li>ML Modena</li>
                                <li>GDG Bologna</li>
                            </ul>
                        </div>
                    </div>
                    <div class="section-content">
                        <div class="image-container">
                            <img src="@/assets/img/sponsorizza-2.png"/>
                        </div>
                        <div class="text-content">
                            <h4 class="blue-title">I partecipanti</h4>
                            <p>
                                I partecipanti saranno super-appassionati provenienti da aziende, startup innovative, oltre a freelance, sviluppatori indipendenti e membri di grandi organizzazioni. Si stima un’affluenza di circa 300 persone.                            </p>
                            <br>
                            <p>
                                Il DevFest  è il luogo dove si potrà essere aggiornati sulle più innovativi tecnologie e sulle più diffuse pratiche nell'ingegneria del software.                            </p>
                        </div>
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
mark.red{
    color: #EA4335;
    background: none;
}
mark.green{
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

@media (max-width: 768px) {
  .section-content {
    flex-direction: column;
  }

  .text-content {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
