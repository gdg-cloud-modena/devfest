<template>
    <Title>DevFest Modena 2024 &mdash; Paolo Galeone Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> Building a RAG for tabular data in Go with PostgreSQL & Gemini </template>
            <template #hint> Paolo Galeone </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Paolo Galeone</p>
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
                    In this talk, we explore how to combine a large language model (LLM) with a relational database management system (RDBMS) to enable users to ask questions about their data in a natural way. It demonstrates the development of a Retrieval-Augmented Generation (RAG) system built with Go that leverages PostgreSQL and pgvector for data storage, retrieval, and embedding generation. The provided code showcases the core functionalities of the system. This work serves as an overview of the "chat with your data" feature currently under development for fitsleepinsights.app.
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