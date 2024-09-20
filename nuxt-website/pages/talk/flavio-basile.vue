<template>
    <Title>DevFest Modena 2024 &mdash; Flavio Basile Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> GemAPI testing in action - DMVC & PyTest for better API </template>
            <template #hint> Flavio Basile </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Flavio Basile</p>
                    </div>
                    <!--div class="info-box">
                        <h3>Orario</h3>
                        <p>10:00 AM - 11:00 AM</p>
                    </div>
                    <div class="info-box">
                        <h3>Sala</h3>
                        <p>Stanza piccola</p>
                    </div-->
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Nelle architetture distribuite, nell’ambito delle applicazioni organizzate come Microservizi offerti mediante l’esposizione di un set di API, la fase di testing assume un ruolo importante come fase del processo di sviluppo del software al fine di garantire robustezza e scalabilità del sistema.
                    Con questo speech, mostrerò come è possibile metter su facilmente un sistema di testing per le nostre API utilizzando gli strumenti a noi più familiari, affiancati ad altri che magari non rientrano nella nostra quotidianità ma che, conosciuti, non potranno più mancare nella nostra Toolbox.
                    Mostrerò come testare con Pytest le API esposte da una applicazione DMVC in Delphi, validare il payload della richiesta, gestirne i casi di fallimento, capire con Locust quante risorse il nostro applicativo necessita per soddisfare un numero sempre più elevato di richieste utente e quanto scalabile può essere.
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