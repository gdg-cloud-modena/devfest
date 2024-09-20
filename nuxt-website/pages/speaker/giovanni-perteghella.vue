<template>
    <Title>DevFest Modena 2024 &mdash; Giovanni Perteghella</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/talk/giovanni-perteghella" speaker-image="giovanni-perteghella"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Giovanni Perteghella </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Non ho capito cosa mettere</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Non ho capito cosa mettere</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Ciao sono Giovanni Perteghella, un trainer ufficiale Cisco, VMware, EC-Council, Fortinet, Checkpoint a livello europeo, vivo in Italia e gestisco questo blog perteghella.org

                    Lavoro nel mondo dell’Information Technology da più di 30 anni, dove ho ricoperto diversi ruoli come dipendente, dirigente e consulente aziendale in realtà di dimensioni e strutture molto diverse.

                    Le tecnologie si cui mi occupo sono Routing e Switching, Collaboration, Wireless, Virtualizzazione e Automazione.
                </p>

                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/perteghella/" target="_blank">
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