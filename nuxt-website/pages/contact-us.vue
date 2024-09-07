<template>
    <Title>DevFest Modena 2024 &mdash; Contatti</Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/arc.svg">
                </div>
            </template>
            <template #title> Contatti </template>
            <template #subtitle> Serve una mano? Eccoci :) </template>
            <template #hint> 
                Puoi interagire con il nostro staff tramite adiversi canali.
                <br>
                Scegli quello che preferisci. 
            </template>
            <template #content>
                <div class="flexbox wrap" style="gap: 48px">
                    <div class="flexbox column" style="gap: 24px; flex: 1 1 470px;">
                        <div class="flexbox column">
                            <h4>Sei uno speaker o vuoi proporti?</h4>
                        <h3 class="text-accent" style="word-break: break-all;">
                            <a href="mailto:speakers@devfest.modena.it">speakers@devfest.modena.it</a>
                        </h3>
                        </div>
                        <div class="flexbox column">
                            <h4>Sei uno sponsor o desideri diventarlo?</h4>
                            <h3 class="text-accent" style="word-break: break-all;">
                                <a href="mailto:sponsors@devfest.modena.it">sponsors@devfest.modena.it</a>
                            </h3>
                        </div>
                        <div class="flexbox column">
                            <h4>Per qualsiasi altra informazione scrivi a:</h4>
                            <h3 class="text-accent" style="word-break: break-all;">
                                <a href="mailto:info@devfest.modena.it">info@devfest.modena.it</a>
                            </h3>
                        </div>
                    </div>
                    <div class="flexbox column" style="gap: 24px; flex: 1 1 470px;">
                        <h4>
                            Non dimenticare che siamo anche sui social.
                            <br>
                            Segui le nostre pagine per rimanere aggiornato sulle news e le edizioni future.
                        </h4>
                        <div class="flexbox wrap" style="gap: 24px">
                            <a href="https://www.linkedin.com/showcase/devfest-modena/" target="_blank"><img src="@/assets/img/linkedin.png" /></a>
                            <!--<img src="@/assets/img/instagram.png" />
                            <img src="@/assets/img/linkedin.png" />
                            <img src="@/assets/img/twitter.png" />-->
                        </div>
                    </div>
                </div>
            </template>
            <template #under-content>
                <a href="https://www.eventbrite.it/e/devfest-modena-2024-tickets-1006887817567?aff=oddtdtcreator" target="_blank">
                    <div 
                        class="pad-48 flexbox wrap justify-between align-center" 
                        style="border-bottom: 2px solid #c9c9c9;">
                            <h3 class="text-accent-2">Biglietto d'ingresso gratuito</h3>
                            <img src="@/assets/svg/yellow-arrow-right.svg" />
                    </div>
                </a>
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