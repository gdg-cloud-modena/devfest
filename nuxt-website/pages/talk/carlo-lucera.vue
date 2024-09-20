<template>
    <Title>DevFest Modena 2024 &mdash; Carlo Lucera Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> Gemini Functions Calls in Flutter </template>
            <template #hint> Carlo Lucera </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Carlo Lucera</p>
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
                    Preparatevi a scoprire le Gemini Function Calls, lo strumento rivoluzionario di Google che vi permetterà di infondere l'intelligenza artificiale generativa nelle vostre app Flutter. Durante questo intervento, vi guiderò attraverso l'utilizzo del Google AI Studio SDK per creare app capaci di generare contenuti coinvolgenti, rispondere a domande e portare a termine compiti in modo intelligente.
                    Insieme, daremo vita a un'app per l'agenda del DevFest dotata di un assistente AI interattivo, alimentato dalle Gemini Functions. Vi svelerò i segreti della progettazione dell'interfaccia utente, della strutturazione dei dati e dell'utilizzo delle Gemini Functions per creare contenuti dinamici e interazioni coinvolgenti.
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