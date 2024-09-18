<template>
    <Title>DevFest Modena 2024 &mdash; Contatti</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/" speaker-image="riccardo-carlesso"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Riccardo Carlesso </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Google Cloud</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Developer Advocate</p>
                    </div>
                </div>
            </template>
            <template #content>
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