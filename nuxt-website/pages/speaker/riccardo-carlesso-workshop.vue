<template>
    <Title>DevFest Modena 2024 &mdash; Bring your old PHP app to the Cloud: AppMod with Google</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="riccardo-carlesso"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Bring your old PHP app to the Cloud: AppMod with Google </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Riccardo Carlesso</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Google Cloud</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Developer Advocate</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>English/Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Workshop</h2>
                <p>
                    Chi non ha una vecchia app nel cassetto in un linguaggio che e una versione che non e’ piu’ supportata? Non sarebbe bello prenderla, modernizzarla e lanciarla su Google Cloud? 
                </p>
                <p>
                    Riccardo vi insegnera’ a prendere la vostra vecchia app, e:
                </p>
                <ul>
                    <li>Dockerizzarla</li>
                    <li>Collegarla a un DB Cloud SQL</li>
                    <li>Astrarre i secrets con Secret Manager in modo da ripulire il vostro codice da passwords (e magari poterlo pubblicare su Github!)</li>
                    <li>Creare una CI/CD pipeline con Cloud build cosicche’ a ogni git push venga lanciata una nuova versione (e magari auto-promossa in dev(ma non in prod).</li>
                    
                </ul>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    Riccardo loves caipirinhas and Amarone, playing piano and triathlons; he's been passionate about Mathematics since he was 4.
                    He's still in love with Ruby and Rails.
                    Former network administrator, sysadmin, and Ruby on Rails developer, Riccardo has been in operations for 20+ years and still likes to spend time coding (better if Ruby). He loves engaging with customers and help them run their operations reliably and successfully in the cloud.
                </p>
                <br />
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