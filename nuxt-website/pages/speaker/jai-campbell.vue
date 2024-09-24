<template>
    <Title>DevFest Modena 2024 &mdash; Gemma - Open Source on Google Cloud</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="jai-campbell"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Gemma - Open Source on Google Cloud </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Jai Campbell</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Jellyfish</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Lead Cloud and Security Engineer</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>English</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Speech</h2>
                <p>
                    ...
                 </p>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    My names Jai Campbell, I am a software engineer from the UK working with a wide range of organisations leveraging cloud technologies to enhance their engineering and customer experiences. I specialise on the Google Cloud Platform in the following areas; cloud adoption, application modernisation, digital transformations, cloud migrations, SRE, DevOps, FinOps, architecture, endorsing cloud, open source technologies and best practices. Outside of work I love to spend time with my daughter, family and friends, I am a keen athlete and enjoy playing basketball, cycling, swimming and lots of other outdoor sports. I love travelling to new places where I enjoy absorbing the history art and culture of the places I visit.
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/campbelljai/" target="_blank">
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