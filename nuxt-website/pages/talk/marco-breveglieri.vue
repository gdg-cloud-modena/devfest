<template>
    <Title>DevFest Modena 2024 &mdash; Marco Breveglieri Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> Ritorno al Futuro: sviluppare app mobile e cross-platform in Pascal, Grande Giove! </template>
            <template #hint> Marco Breveglieri </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Marco Breveglieri</p>
                    </div>
                    <!--div class="info-box">
                        <h3>Orario</h3>
                        <p>10:00 AM - 11:00 AM</p>
                    </div>
                    <div class="info-box">
                        <h3>Sala</h3>
                        <p>Stanza piccola</p>
                    </div-->
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Saltando a bordo della nostra DeLorean faremo un viaggio verso l'inaspettato: creeremo app mobile native e cross-platform con... udite udite... Pascal! Sì, fidati del brivido lungo la schiena: parliamo proprio di quel Pascal. Pesante!
                    <br />
                    Andremo prima nel passato per rivivere il momento in cui è nato questo linguaggio. Sfrecceremo poi nel futuro per scoprire quali sorprese e potenzialità il linguaggio Pascal ci riserva grazie alle tecnologie emergenti, tra cui l'AI!
                    <br />
                    Che siate developer veterani, o novellini particolarmente curiosi, allacciate le cinture: dove stiamo andando non abbiamo bisogno di strade!
                </p>
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