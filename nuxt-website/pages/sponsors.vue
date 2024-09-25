<template>
    <Title>
        DevFest Modena 2024 &mdash; Sponsors
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/Plus.svg">
                </div>
            </template>
            <template #title>
                I nostri sponsor
            </template>
            <template #content>
                <div class="flexbox center align-center" style="justify-content: center;">
                    <div style="padding-bottom: 100px;width: 80%; text-align: justify-center;">
                        <h4>
                            Il supporto dei nostri sponsor è essenziale per il successo del DevFest, fornendo il supporto necessario per portare avanti un evento che ispira e connette la nostra community tech. Scopri i partner che hanno scelto di sostenere la nostra missione. Grazie a loro, possiamo garantire un'esperienza unica per tutti i partecipanti.
                        </h4>                    </div>
                </div>
                <div class="flexbox wrap justify-center align-top" style="gap: 48px; flex: 1 1 400px;">
                    <a href="https://developers.google.com/community/devfest?utm_source=devfest&utm_medium=website&utm_campaign=devfest_modena_2024">
                        <div class="white-card team-card">
                            <div class="image image-staff google"></div>
                            <h4>Google</h4>
                            <h5>Main Sponsor</h5>
                        </div>
                    </a>
                    <a href="https://zuru.com/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card team-card">
                            <div class="image image-staff zuru"></div>
                            <h4>Zuru</h4>
                            <h5>Diamond Sponsor</h5>
                        </div>
                    </a>
                    <a href="https://www.dualb.it/&utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card team-card">
                            <div class="image image-staff dualbit"></div>
                            <h4>Dualbit</h4>
                            <h5>Gold Sponsor</h5>
                        </div>
                    </a>
                    <a href="https://netframe.it/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card team-card">
                            <div class="image image-staff netframe"></div>
                            <h4>Netframe</h4>
                            <h5>Tech Sponsor</h5>
                        </div>
                    </a>
                    <!--a href="https://quix.it/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card team-card">
                            <div class="image image-staff quix"></div>
                            <h4>Quix</h4>
                            <h5>Silver Sponsor</h5>
                        </div>
                    </a-->
                    <a href="https://atobit.it?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card team-card">
                            <div class="image image-staff atobit"></div>
                            <h4>Atobit</h4>
                            <h5>Bronze Sponsor</h5>
                        </div>
                    </a>
                    <a href="https://www.jetbrains.com/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card team-card">
                            <div class="image image-staff jetbrains"></div>
                            <h4>Jetbrains</h4>
                            <h5>Community Sponsor</h5>
                        </div>
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
