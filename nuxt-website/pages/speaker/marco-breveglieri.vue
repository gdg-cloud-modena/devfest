<template>
    <Title>DevFest Modena 2024 &mdash; Marco Breveglieri</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/" speaker-image="marco-breveglieri"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Marco Breveglieri </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>ABLS Team</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Software Developer</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Marco is a software and Web developer, a mentor and a consultant since 1999. He works at ABLS Team, a company dedicated to process analysis and software implementation, from small dedicate systems to large vertical solutions, which also offers consulting, training and outsourcing services providing its expertise to partners and companies. In his spare time, he does live coding sessions on Twitch.
                </p>

                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/marcobreveglieri" target="_blank">
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