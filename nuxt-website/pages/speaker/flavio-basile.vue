<template>
    <Title>DevFest Modena 2024 &mdash; Flavio Basile</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/" speaker-image="flavio-basile"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Flavio Basile </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>PMO in bit Time Professionals s.r.l.</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Analista Programmatore</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Sono Flavio Basile, sono un Informatico laureatosi all’Università degli studi di Catania e dal 2006 mi occupo professionalmente di progettazione e sviluppo software applicativo desktop.
                    Ho un passato professionale di libero professionista ma dal 2015 lavoro come Analista Programmatore presso Software House. Oggi lo faccio per bit Time Professionals
                </p>

                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/flavio-basile-87556041/" target="_blank">
                        <img src="@/assets/img/linkedin.png" style="height: 24px;" />
                    </a>
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