<template>
    <div>
        <Title>DevFest Modena 2024 &mdash; Moreno Razzoli</Title>
        <NuxtLayout name="speaker-page" speaker-url="/" speaker-image="moreno-razzoli"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Moreno Razzoli </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Morrolinux</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Consultant & Instructor</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Mi chiamo Moreno Razzoli,
                    Sono laureato in Scienze Informatiche, ho conseguito le certificazioni Linux LPI, CompTIA Linux+ e Suse CLA, ho realizzato diversi progetti Open Source, contribuito allo sviluppo di nuove funzionalità in altrettanti progetti già avviati e realizzo video didattici dal 2008 su YouTube e sul mio sito ufficiale.
                </p>

                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.youtube.com/morrolinux" target="_blank">
                        Da mettere l'icona di YouTube??
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