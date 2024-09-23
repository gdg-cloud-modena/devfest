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
                    <div class="card-partner">
                        <div class="image">
                            <img src="@/assets/img/Logo(1).png" />
                        </div>
                        <p>ConoscereLinux</p>
                        <div class="image-bottom">
                            <a href="https://conoscerelinux.org/"><img src="@/assets/img/ic_open_in_new.png" /></a>
                        </div>
                    </div>
                    <div class="card-partner">
                        <div class="image">
                            <img src="@/assets/img/Logo(2).png" />
                        </div>
                        <p>Flutter Modena</p>
                        <div class="image-bottom">
                            <a href="https://blog.fluttermodena.dev/"><img src="@/assets/img/ic_open_in_new.png" /></a>
                        </div>
                    </div>
                    <div class="card-partner">
                        <div class="image">
                            <img src="@/assets/img/Logo(3).png" />
                        </div>
                        <p>GDG Cloud Modena</p>
                        <div class="image-bottom">
                            <a href="https://gdg.community.dev/gdg-cloud-modena/"><img src="@/assets/img/ic_open_in_new.png" /></a>
                        </div>
                    </div>
                    <div class="card-partner">
                        <div class="image">
                            <img src="@/assets/img/Logo(4).png" />
                        </div>
                        <p>ML Modena</p>
                        <div class="image-bottom">
                            <a href="https://mlmodena.it/"><img src="@/assets/img/ic_open_in_new.png" /></a>
                        </div>
                    </div>
                    <div class="card-partner">
                        <div class="image">
                            <img src="@/assets/img/Logo(5).png" />
                        </div>
                        <p>Modena Full Stack</p>
                        <div class="image-bottom">
                            <a href="https://www.meetup.com/it-IT/Modena-Full-Stack/"><img src="@/assets/img/ic_open_in_new.png" /></a>
                        </div>
                    </div>
                    <div class="card-partner">
                        <div class="image">
                            <img src="@/assets/img/Logo(6).png" />
                        </div>
                        <p>GDG Bologna</p>
                        <div class="image-bottom">
                            <a href="https://gdg.community.dev/gdg-bologna/"><img src="@/assets/img/ic_open_in_new.png" /></a>
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

