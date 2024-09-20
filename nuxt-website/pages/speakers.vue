<template>
    <Title>
        DevFest Modena 2024 &mdash; Speakers
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title>
                Gli speakers
            </template>
            <template #content>
                <div class="flexbox wrap justify-center align-top" style="gap: 48px; flex: 1 1 400px;">
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/riccardo-carlesso">
                            <div class="image riccardo-carlesso"></div>
                            <h4>Riccardo Carlesso</h4>
                            <p class="text-label">English/Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/moreno-razzoli">
                            <div class="image moreno-razzoli"></div>
                            <h4>Moreno Razzoli</h4>
                            <p class="text-label">Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/alfonso-graziano">
                            <div class="image alfonso-graziano"></div>
                            <h4>Alfonso Graziano</h4>
                            <p class="text-label">English/Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/giovanni-perteghella">
                            <div class="image giovanni-perteghella"></div>
                            <h4>Giovanni Perteghella</h4>
                            <p class="text-label">Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/paolo-galeone">
                            <div class="image paolo-galeone"></div>
                            <h4>Paolo Galeone</h4>
                            <p class="text-label">English/Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/imran-us-salam-mian">
                            <div class="image imran-us-salam-mian"></div>
                            <h4>Imran us Salam Mian</h4>
                            <p class="text-label">English</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/ankur-roy">
                            <div class="image ankur-roy"></div>
                            <h4>Ankur Roy</h4>
                            <p class="text-label">English</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/carlo-lucera">
                            <div class="image carlo-lucera"></div>
                            <h4>Carlo Lucera</h4>
                            <p class="text-label">English/Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/flavio-basile">
                            <div class="image flavio-basile"></div>
                            <h4>Flavio Basile</h4>
                            <p class="text-label">Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/luca-del-puppo">
                            <div class="image luca-del-puppo"></div>
                            <h4>Luca del Puppo</h4>
                            <p class="text-label">English/Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/marco-breveglieri">
                            <div class="image marco-breveglieri"></div>
                            <h4>Marco Breveglieri</h4>
                            <p class="text-label">Italiano</p>
                        </RouterLink>
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