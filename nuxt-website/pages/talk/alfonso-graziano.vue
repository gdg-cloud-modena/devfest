<template>
    <Title>DevFest Modena 2024 &mdash; Alfonso Graziano Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> The Staff Engineer VS Manager Path: A window over the tech career paths </template>
            <template #hint> Alfonso Graziano </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Alfonso Graziano</p>
                    </div>
                    <div class="info-box">
                        <h3>Orario</h3>
                        <p>10:00 AM - 11:00 AM</p>
                    </div>
                    <div class="info-box">
                        <h3>Sala</h3>
                        <p>Stanza piccola</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Engineer or Manager: Who wears the cooler tech cape? Dive into the great debate with insights from 'The Manager's Path' and 'The Staff Engineer's Path'. From code-wrangling wizards to tech team captains, get a fun peek into the world of tech's top jobs. Pick your path or just enjoy the ride!
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