<template>
    <div>
        <Title>DevFest Modena 2024 &mdash; Alfonso Graziano</Title>
        <NuxtLayout name="speaker-page" speaker-url="/talk/alfonso-graziano" speaker-image="alfonso-graziano"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Alfonso Graziano </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>NearForm | AWS Certified Solutions Architect</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Senior Developer</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    I'm a Full Stack Developer in NearForm. I work mainly with Node.js and React. In my free time I like to read books and articles, cook, and walk in the nature.
                </p>

                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.alfonsograziano.it/" target="_blank">
                        <img src="@/assets/img/website.png" style="height: 24px;" />
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