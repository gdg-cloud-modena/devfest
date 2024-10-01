<template>
    <Title>DevFest Modena 2024 &mdash; Improve your Multi-Factor Auth with Firebase and Vonage APIs</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="susanna-wong"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Improve your Multi-Factor Auth with Firebase and Vonage APIs </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Amanda Cavallaro</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Vonage</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Developer Advocate</p>
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
                    In this talk, Amanda Cavallaro will demonstrate how to use the Vonage APIs for SIM swap detection and verification through SMS alongside Firebase services for hosting, database, and storing logic.
                </p>
                <p>
                    The demo application includes a simple bank dashboard and a login form. If the SIM Swap API detects that a phone number was swapped recently, the verification code will not be sent, and additional security measures will be applied. A verification code will be sent via the Verify v2 API to authenticate the user if no recent swap is detected.
                </p>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    Amanda Cavallaro is an Italo-Brazilian developer advocate @ Vonage. She is a Google Developers Expert for the Firebase, Assistant and ML Cloud Conversational AI categories, who is passionate about cloud technologies, JavaScript, human-computer interactions and ambient computing and a love of learning. You can speak to her in Portuguese, English, Italian and a little Japanese.
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/susanna-wong-london/" target="_blank">
                        <img src="@/assets/img/linkedin.png" style="height: 24px;" />
                    </a>
                </div>

            </template>
            <section class="full-w ternary-background"
          style="border-bottom: 2px solid #c9c9c9;">
            <FreeTicket />
        </section>
        <section class="full-w secondary-background">
            <SocialLinks />
        </section>
        </NuxtLayout>
    </div>
</template>
<script setup lang="ts">
    definePageMeta({
        layout: false,
    });
</script>