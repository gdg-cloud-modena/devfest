<template>
    <Title>DevFest Modena 2024 &mdash; Moreno Razzoli Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> [Workshop] Containerizza la tua App e distribuisci senza pensieri </template>
            <template #hint> Moreno Razzoli </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Moreno Razzoli</p>
                    </div>
                    <div class="info-box">
                        <h3>Orario</h3>
                        <p>10:00 AM - 11:00 AM</p>
                    </div>
                    <div class="info-box">
                        <h3>Sala</h3>
                        <p>Stanza piccola</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    I container semplificano la distribuzione del software racchiudendo un'app e tutte le sue dipendenze in un'unica unità portabile, eliminando così la complessità della gestione delle dipendenze su diverse piattaforme.
                    <br />
                    Dopo una rapida introduzione dei concetti di base, entreremo nel vivo della creazione di immagini di container con Docker o Podman. Impareremo a costruire, configurare e distribuire applicazioni containerizzate con facilità. Durante la sessione, metteremo tutto in pratica containerizzando insieme la nostra prima applicazione.
                    <br />
                    Questo workshop è pensato per sviluppatori di ogni livello, con un approccio pratico e orientato alla semplicità.
                </p>
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