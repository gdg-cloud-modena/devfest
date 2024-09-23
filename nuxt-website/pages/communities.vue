<template>
    <Title>
        DevFest Modena 2024 &mdash; Communities
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/Ellipsis.svg">
                </div>
            </template>
            <template #title>
                Communities
            </template>
            <template #content>
                <div class="flexbox center align-center" style="justify-content: center;">
                    <div style="padding-bottom: 100px;width: 80%; text-align: justify-center;">
                        <h4>
                            Le comunità locali di sviluppatori sono il fulcro dell'innovazione e della collaborazione tecnica.
                            In queste realtà, professionisti e appassionati si uniscono per condividere conoscenze, crescere insieme e creare soluzioni innovative.
                            Esplora l'elenco delle comunità per trovare quella più vicina a te e unirti a un network dinamico di creatori e visionari.
                        </h4>
                    </div>
                </div>
                <div class="flexbox wrap justify-center align-top" style="gap: 48px; flex: 1 1 400px;">
                    <a href="https://gdg.community.dev/gdg-cloud-modena/">
                        <div class="white-card team-card">
                            <div class="image image-staff gdg-modena"></div>
                            <h4>GDG Cloud Modena</h4>
                        </div>
                    </a>
                    <a href="https://www.meetup.com/it-IT/Modena-Full-Stack/">
                        <div class="white-card team-card">
                            <div class="image image-staff modena-full-stack"></div>
                            <h4>Modena Full Stack</h4>
                        </div>
                    </a>
                    <a href="https://blog.fluttermodena.dev/">
                        <div class="white-card team-card">
                            <div class="image image-staff flutter-modena"></div>
                            <h4>Flutter Modena</h4>
                        </div>
                    </a>
                    <a href="https://conoscerelinux.org/">
                        <div class="white-card team-card">
                            <div class="image image-staff conoscere-linux"></div>
                            <h4>ConoscereLinux</h4>
                        </div>
                    </a>
                    <a href="https://mlmodena.it/">
                        <div class="white-card team-card">
                            <div class="image image-staff ml-modena"></div>
                            <h4>ML Modena</h4>
                        </div>
                    </a>
                    <a href="https://gdg.community.dev/gdg-bologna/">
                        <div class="white-card team-card">
                            <div class="image image-staff gdg-bologna"></div>
                            <h4>GDG Bologna</h4>
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

