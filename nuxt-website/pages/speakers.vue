<template>
    <Title>
        DevFest Modena 2024 &mdash; Speaker
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title>
                Gli speaker
            </template>        
            <template #content>
                <div class="flexbox center align-center" style="justify-content: center;">
                    <div style="padding-bottom: 100px;width: 80%; text-align: justify-center;">
                        <h4>
                            Durante questo evento, avrai l'opportunità di ascoltare e incontrare esperti del settore, innovatori e professionisti.
                            Qui trovi tutte le informazioni sugli interventi in programma, con dettagli sugli argomenti trattati e i profili degli speaker che li presenteranno.
                        </h4>
                        <br />
                        <h4>
                            Esplora il programma, scopri le storie e le competenze di chi salirà sul palco e preparati a vivere un'esperienza di apprendimento e ispirazione senza pari a Modena.
                        </h4>
                    </div>
                </div>
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
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/amanda-cavallaro">
                            <div class="image amanda-cavallaro"></div>
                            <h4>Amanda Cavallaro</h4>
                            <p class="text-label">English</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/matteo-maria-terzuolo">
                            <div class="image matteo-maria-terzuolo"></div>
                            <h4>Matteo Maria Terzuolo</h4>
                            <p class="text-label">English/Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/marco-arena">
                            <div class="image marco-arena"></div>
                            <h4>Marco Arena</h4>
                            <p class="text-label">English/Italiano</p>
                        </RouterLink>
                    </div>
                    <div class="white-card max-width-450">
                        <RouterLink to="/speaker/francesco-baldassarri">
                            <div class="image francesco-baldassarri"></div>
                            <h4>Francesco Baldassarri</h4>
                            <p class="text-label">English/Italiano</p>
                        </RouterLink>
                    </div>
                    <!--div class="white-card max-width-450">
                        <RouterLink to="/speaker/jai-campbell">
                            <div class="image jai-campbell"></div>
                            <h4>Jai Campbell</h4>
                            <p class="text-label">English</p>
                        </RouterLink>
                    </div-->
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