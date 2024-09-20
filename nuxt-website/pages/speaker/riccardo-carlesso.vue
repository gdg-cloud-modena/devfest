<template>
    <Title>DevFest Modena 2024 &mdash; News Crawler via Langchain.RB and Gemini APIs</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="riccardo-carlesso"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> News Crawler via Langchain.RB and Gemini APIs </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Riccardo Carlesso</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Google Cloud</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Developer Advocate</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>English/Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <p>
                    How can we get an LLM to be updated to today’s news?
                    Gen AI is great at answering questions.. from the past. After the LLM was trained, all you can do is RAG.
                    How about crawling the web for latest news with Gemini for multimodal extraction and offering summarization by your favorite topic?
                    It all gets more exciting thanks to Andrei’s langchainrb gem.
                </p>
            </template>
            <template #description>
                <h3>Bio</h3>
                <p>
                    Riccardo loves caipirinhas and Amarone, playing piano and triathlons; he's been passionate about Mathematics since he was 4.
                    He's still in love with Ruby and Rails.
                    Former network administrator, sysadmin, and Ruby on Rails developer, Riccardo has been in operations for 20+ years and still likes to spend time coding (better if Ruby). He loves engaging with customers and help them run their operations reliably and successfully in the cloud.
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/riccardocarlesso/" target="_blank">
                        <img src="@/assets/img/linkedin.png" style="height: 24px;" />
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