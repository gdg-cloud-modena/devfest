<template>
    <Title>DevFest Modena 2024 &mdash; Gemini Functions Calls in Flutter</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="carlo-lucera"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Gemini Functions Calls in Flutter </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Carlo Lucera</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Pvotal Technologies</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Developer</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Speech</h2>
                <p>
                    Preparatevi a scoprire le Gemini Function Calls, lo strumento rivoluzionario di Google che vi permetterà di infondere l'intelligenza artificiale generativa nelle vostre app Flutter. Durante questo intervento, vi guiderò attraverso l'utilizzo del Google AI Studio SDK per creare app capaci di generare contenuti coinvolgenti, rispondere a domande e portare a termine compiti in modo intelligente.
                    Insieme, daremo vita a un'app per l'agenda del DevFest dotata di un assistente AI interattivo, alimentato dalle Gemini Functions. Vi svelerò i segreti della progettazione dell'interfaccia utente, della strutturazione dei dati e dell'utilizzo delle Gemini Functions per creare contenuti dinamici e interazioni coinvolgenti.
                </p>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    Known as HatDroid, is a Technology enthusiast, former Android, and now Flutter developer, always in search of new technologies and strategies to improve.
                    Flutter Google Developer Expert and Full-time Flutter Developer @Pvotal technologies and admin for Flutter Italia Developers.
                    Always ready to share his experiences and working hard to help the Developer communities grow.
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/clucera/" target="_blank">
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