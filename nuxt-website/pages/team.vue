<template>
    <Title>
        DevFest Modena 2024 &mdash; Speakers
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/Semicolon.svg">
                </div>
            </template>
            <template #title>
                Chi siamo
            </template>
            <template #content >
                <div class="flexbox center align-center" style="justify-content: center;">
                    <div style="padding-bottom: 100px;width: 80%;text-align: justify-center;">
                        <h4>
                            DevFest Modena 2024 è il risultato della passione e dell'impegno delle comunità tecnologiche di Modena, Reggio Emilia e Bologna. Un evento creato per ispirare e connettere, nato dalla collaborazione di professionisti e appassionati del settore. Scopri chi c'è dietro l'organizzazione di questo straordinario evento.
                        </h4>
                    </div>
                </div>
                <div>
                    <h3 style="text-align: center" class="center justify-center">Organizzatori</h3><br />
                </div>
                <div class="flexbox wrap justify-center align-top" style="gap: 48px; flex: 1 1 400px;">
                    <div class="white-card team-card">
                        <div class="image image-staff davide-muzzarelli"></div>
                        <h4>Davide Muzzarelli</h4>
                        <p class="text-label">Web Specialist & Community Lead</p>
                    </div>
                    <div class="white-card team-card">
                            <div class="image image-staff maurizio-ipsale"></div>
                            <h4>Maurizio Ipsale</h4>
                            <p class="text-label">Lead Google Cloud Trainer</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff mirko-gillioli"></div>
                        <h4>Mirko Gillioli</h4>
                        <p class="text-label">Lead Google Cloud Trainer</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff elia-tolin"></div>
                        <h4>Elia Tolin</h4>
                        <p class="text-label">Proprietario Aurora Digital | Organizzatore Flutter Modena</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff carmine-zaccagnino"></div>
                        <h4>Carmine Zaccagnino</h4>
                        <p class="text-label">Freelance Developer</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff emiliano-maccaferri"></div>
                        <h4>Emiliano Maccaferri</h4>
                        <p class="text-label">Researcher & Freelance developer</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff francesco-boschetti"></div>
                        <h4>Francesco Boschetti</h4>
                        <p class="text-label">Growth Hacker</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff marco-arena"></div>
                        <h4>Marco Arena</h4>
                        <p class="text-label">Software Engineer & Community Lead</p>
                    </div>
                </div>
                <div>
                    <br /><br /><h3 style="text-align: center" class="center justify-center">Staff</h3><br />
                </div>
                <div class="flexbox wrap justify-center align-top" style="gap: 48px; flex: 1 1 400px; ">
                    <div class="white-card team-card">
                        <div class="image image-staff biagio-grimolizzi"></div>
                        <h4>Biagio Grimolizzi</h4>
                        <p class="text-label">Software Engineer</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff francesca-palazzo"></div>
                        <h4>Francesca Palazzo</h4>
                        <p class="text-label">R&D Software Engineer</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff marco-savarese"></div>
                        <h4>Marco Savarese</h4>
                        <p class="text-label">Intelligent Transportation Systems Researcher</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff dario-varriale"></div>
                        <h4>Dario Varriale</h4>
                        <p class="text-label">iOS && Flutter Developer @ Atobit | Co-organizzatore Flutter Modena & ML Modena</p>
                    </div>
                    <div class="white-card team-card">
                            <div class="image image-staff marco-breveglieri"></div>
                            <h4>Marco Breveglieri</h4>
                            <p class="text-label">Software Developer | Trainer e Consulente | Tech Content Creator</p>
                    </div>
                    <div class="white-card team-card">
                        <div class="image image-staff niccolo-maria-menozzi"></div>
                        <h4>Niccolò Maria Menozzi</h4>
                        <p class="text-label">Art Director, UX/UI designer</p>
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