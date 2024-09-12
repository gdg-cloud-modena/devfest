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
                Puoi interagire con il nostro staff tramite diversi canali.
                <br>
                Scegli quello che preferisci. 
            </template>
            <template #content>
                <div class="flexbox wrap" style="gap: 48px">
                    <div class="flexbox column" style="gap: 24px; flex: 1 1 470px;">
                        <div class="flexbox column">
                            <h4>Desideri proporti come speaker?</h4>
                            <div class="swapper-500">
                                <div class="main">
                                    <h3 class="text-accent" style="word-break: break-all;">
                                        <a href="mailto:speakers@devfest.modena.it">speakers@devfest.modena.it</a>
                                    </h3>
                                </div>
                                <div class="to-swap">
                                    <h4 class="text-accent" style="word-break: break-all;">
                                        <a href="mailto:speakers@devfest.modena.it">speakers@devfest.modena.it</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="flexbox column">
                            <h4>Vuoi partecipare come sponsor?</h4>
                            <div class="swapper-500">
                                <div class="main">
                                    <h3 class="text-accent" style="word-break: break-all;">
                                        <a href="mailto:sponsors@devfest.modena.it">sponsors@devfest.modena.it</a>
                                    </h3>
                                </div>
                                <div class="to-swap">
                                    <h4 class="text-accent" style="word-break: break-all;">
                                        <a href="mailto:sponsors@devfest.modena.it">sponsors@devfest.modena.it</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="flexbox column">
                            <h4>Per qualsiasi altra informazione scrivi a:</h4>
                            <div class="swapper-500">
                                <div class="main">
                                    <h3 class="text-accent" style="word-break: break-all;">
                                        <a href="mailto:info@devfest.modena.it">info@devfest.modena.it</a>
                                    </h3>
                                </div>
                                <div class="to-swap">
                                    <h4 class="text-accent" style="word-break: break-all;">
                                        <a href="mailto:info@devfest.modena.it">info@devfest.modena.it</a>
                                    </h4>
                                </div>
                            </div>
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