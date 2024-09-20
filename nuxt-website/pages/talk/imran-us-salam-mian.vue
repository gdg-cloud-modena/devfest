<template>
    <Title>DevFest Modena 2024 &mdash; Imran us Salam Mian Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> Ray on Vertex AI </template>
            <template #hint> Imran us Salam Mian </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Imran us Salam Mian</p>
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
                    What is Ray?
                    <br />
                    A multiprocessing tool for large-scale training pipelines or even normal Python code. We review the details of what Ray is, and how to use it. And the similarities between Ray and Spark.
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