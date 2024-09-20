<template>
    <Title>DevFest Modena 2024 &mdash; Ankur Roy</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/talk/ankur-roy" speaker-image="ankur-roy"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Ankur Roy </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Online Partner AB</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Solutions Architect</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    I am a Solutions Architect at Online Partner AB. I have worked on several projects involving Google Cloud services and Google Workspace along with multiple other technology stacks and platforms.
                    Some important things to know about me:
                </p>
                <ul>
                        <li>I have all 11 GCP certifications.</li>
                        <li>I have recently published a book on the use of Python in DevOps and am currently working on a book regarding passing the Google Cloud Professional Data Engineer certification exam.</li>
                        <li>I am passionate about working out, writing, and content creation.</li>
                        <li>I love public speaking and have done many speaking appearances including one recently for a webinar at Google's Oslo headquarters.</li>
                    </ul>
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/ankurr0y/" target="_blank">
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