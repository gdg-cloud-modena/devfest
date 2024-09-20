<template>
    <Title>DevFest Modena 2024 &mdash; Riccardo Carlesso</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/talk/riccardo-carlesso" speaker-image="riccardo-carlesso"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Riccardo Carlesso </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Google Cloud</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Developer Advocate</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Riccardo loves caipirinhas and Amarone, playing piano and triathlons; he's been passionate about Mathematics since he was 4.
                    He's still in love with Ruby and Rails.
                    Former network administrator, sysadmin, and Ruby on Rails developer, Riccardo has been in operations for 20+ years and still likes to spend time coding (better if Ruby). He loves engaging with customers and help them run their operations reliably and successfully in the cloud.
                </p>

                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/riccardocarlesso/" target="_blank">
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