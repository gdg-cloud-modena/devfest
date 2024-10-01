<template>
    <Title>DevFest Modena 2024 &mdash; Dal Caos al Controllo: Il Viaggio nell'Infrastructure as Code, da Docker Compose a Kubernetes</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="giovanni-perteghella">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Dal Caos al Controllo: Il Viaggio nell'Infrastructure as Code, da Docker Compose a Kubernetes </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Giovanni Perteghella</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p> CTO, Senior AWS, Cisco, Google, VMware, Kubernetes and CyberSecurity Trainer </p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Speech</h2>
                <p>
                    In this talk, we will explore the new features of Gemini Functions Calls in Flutter, how to use them, and how to integrate them into your projects.
                </p>
                <ol>
                    <li>Introduzione</li>
                    <li> Il Caos Iniziale: Sfide nella Gestione dell'Infrastruttura</li>
                    <li>Infrastructure as Code (IaC): I Fondamenti</li>
                    <li>Docker Compose: Il Primo Passo verso l'Ordine</li>
                    <li>Limiti di Docker Compose e Necessità di Scalare</li>
                    <li>Kubernetes: L'Evoluzione dell'Orchestrazione</li>
                    <li>Strumenti per l'IaC in Kubernetes</li>
                    <li>Best Practices e Considerazioni di Sicurezza</li>
                    <li>Il Controllo Raggiunto: Benefici e Sfide</li>
                    <li>Conclusione e Domande</li>
                </ol>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    Ciao sono Giovanni Perteghella, un trainer ufficiale Cisco, VMware, EC-Council, Fortinet, Checkpoint a livello europeo, vivo in Italia e gestisco questo blog perteghella.org

                    Lavoro nel mondo dell’Information Technology da più di 30 anni, dove ho ricoperto diversi ruoli come dipendente, dirigente e consulente aziendale in realtà di dimensioni e strutture molto diverse.

                    Le tecnologie si cui mi occupo sono Routing e Switching, Collaboration, Wireless, Virtualizzazione e Automazione.
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/perteghella/" target="_blank">
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