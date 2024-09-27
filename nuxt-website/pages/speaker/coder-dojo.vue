<template>
    <Title>DevFest Modena 2024 &mdash; Coder Dojo</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="coder-dojo"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Coder Dojo </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Workshop</h3>
                        <p>CorderDojo</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Workshop</h2>
                <p>
                    Benvenuti al CoderDojo della DevFest Modena 2024! Preparatevi per una mattinata ricca di coding, in cui realizzeremo insieme un semplice videogioco! Il laboratorio è dedicato ai bambini dai 7 ai 12 anni. Unitevi a noi sabato 12 ottobre 2024 alle 09:00 presso il Laboratorio Aperto - ex AEM a Modena. Ogni partecipante dovrà portare il proprio computer portatile ed essere accompagnato da un genitore. Non importa se siete principianti o avete già qualche esperienza di programmazione: ci sarà qualcosa di speciale per tutti. Venite a incontrare nuovi amici, partecipate ai laboratori e iniziate il vostro viaggio nel mondo del coding. Non perdete questa fantastica opportunità di imparare divertendovi. Ci vediamo lì!
                </p>
                <p>
                    <b>N.B. Ogni partecipante dovrà portare il proprio computer portatile ed essere accompagnato da un genitore. </b>
                </p>
            </template>
            <template #description>
                
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