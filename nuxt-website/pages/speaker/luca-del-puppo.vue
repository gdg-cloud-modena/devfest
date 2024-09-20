<template>
    <Title>DevFest Modena 2024 &mdash; Dive into advanced TypeScript</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="luca-del-puppo"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Dive into advanced TypeScript </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Luca Del Puppo</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>NearForm</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Senior Software Developer</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <p>
                    Typescript or not Typescript? More than ten years have passed since its birth, and many of us still struggle to understand and love it.
                    Well, it’s time to understand more and stop bypassing it with a simple any.
                    Types, functions, literals, unions, intersections and so on: together, we will see all the notions that will lead you to start loving and using it to the fullest to ensure a more typologically secure future and perhaps not be hated by your future self.
                </p>
            </template>
            <template #description>
                <h3>Bio</h3>
                <p>
                    I'm a Senior Software Engineer, Microsoft MVP, Google Developer Expert and GitKraken Ambassador, I love JavaScript and TypeScript. In my free time, I love to study new technologies or something about improving myself and do trail running in my love Dolomiti.
                </p>
                <br />
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