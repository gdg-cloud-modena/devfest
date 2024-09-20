<template>
    <Title>DevFest Modena 2024 &mdash; Giovanni Perteghella Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> Dal Caos al Controllo: Il Viaggio nell'Infrastructure as Code, da Docker Compose a Kubernetes </template>
            <template #hint> Giovanni Perteghella </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Giovanni Perteghella</p>
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
                <ol>
                    <li>Introduzione</li>
                    <li> Il Caos Iniziale: Sfide nella Gestione dell'Infrastruttura</li>
                    <li>Infrastructure as Code (IaC): I Fondamenti</li>
                    <li>Docker Compose: Il Primo Passo verso l'Ordine</li>
                    <li>Limiti di Docker Compose e Necessità di Scalare</li>
                    <li>Kubernetes: L'Evoluzione dell'Orchestrazione</li>
                    <li>Strumenti per l'IaC in Kubernetes</li>
                    <li>Best Practices e Considerazioni di Sicurezza</li>
                    <li>Il Controllo Raggiunto: Benefici e Sfide</li>
                    <li>Conclusione e Domande</li>
                </ol>
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