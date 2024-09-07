<template>
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
                            <h3 class="text-accent" style="word-break: break-all;">speakers@devfest.modena.it</h3>
                        </div>
                        <div class="flexbox column">
                            <h4>Sei uno sponsor o desideri diventarlo?</h4>
                            <h3 class="text-accent" style="word-break: break-all;">sponsors@devfest.modena.it</h3>
                        </div>
                        <div class="flexbox column">
                            <h4>Per qualsiasi altra informazione scrivi a:</h4>
                            <h3 class="text-accent" style="word-break: break-all;">info@devfest.modena.it</h3>
                        </div>
                    </div>
                    <div class="flexbox column" style="gap: 24px; flex: 1 1 470px;">
                        <h4>
                            Non dimenticare che siamo anche sui social.
                            <br>
                            Segui le nostre pagine per rimanere aggiornato sulle news e le edizioni future.
                        </h4>
                        <div class="flexbox wrap" style="gap: 24px">
                            
                        </div>
                    </div>
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>
<script setup lang="ts">
    definePageMeta({
        layout: false,
    })
</script>