<template>
    <Title>DevFest Modena 2024 &mdash; Luca del Puppo</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/talk/luca-del-puppo" speaker-image="luca-del-puppo"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Luca del Puppo </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>NearForm</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Senior Software Developer</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    I'm a Senior Software Engineer, Microsoft MVP, Google Developer Expert and GitKraken Ambassador, I love JavaScript and TypeScript. In my free time, I love to study new technologies or something about improving myself and do trail running in my love Dolomiti.
                </p>

                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/lucadelpuppo/" target="_blank">
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