<template>
    <Title>DevFest Modena 2024 &mdash; Riccardo Carlesso Talk</Title>
    <div>
        <NuxtLayout name="talk-page"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title> News Crawler via Langchain.RB and Gemini APIs </template>
            <template #hint> Riccardo Carlesso </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Riccardo Carlesso</p>
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
                    How can we get an LLM to be updated to today’s news?
                    Gen AI is great at answering questions.. from the past. After the LLM was trained, all you can do is RAG.
                    How about crawling the web for latest news with Gemini for multimodal extraction and offering summarization by your favorite topic?
                    It all gets more exciting thanks to Andrei’s langchainrb gem.
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