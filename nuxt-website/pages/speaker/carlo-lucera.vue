<template>
    <Title>DevFest Modena 2024 &mdash; Carlo Lucera</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/talk/carlo-lucera" speaker-image="carlo-lucera"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Carlo Lucera </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>-</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Flutter dev</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Known as HatDroid, is a Technology enthusiast, former Android, and now Flutter developer, always in search of new technologies and strategies to improve.
                    Flutter Google Developer Expert and Full-time Flutter Developer @Pvotal technologies and admin for Flutter Italia Developers.
                    Always ready to share his experiences and working hard to help the Developer communities grow.
                </p>

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