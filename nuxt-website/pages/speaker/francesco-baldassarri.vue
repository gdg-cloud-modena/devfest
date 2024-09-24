<template>
    <Title>DevFest Modena 2024 &mdash; Unleash the Power of Llama 3.1 on Your Local Hardware – No Cloud Needed!</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="francesco-baldassarri"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Unleash the Power of Llama 3.1 on Your Local Hardware – No Cloud Needed!</template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Francesco Baldassarri</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Passionate</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Technical Project/Product Manager, NLP and Generative-AI</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>English / Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Speech</h2>
                <p>
                    Francesco Baldassarri is a Product/Program/Project Manager with experience in Developer Relations (DevRel) and Technology Community Leadership and Management. He is also Technical Evangelist and Author/Editor. He worked for several main player in IT panorama. Currently, he is Technical Project Manager c/o expert.ai, global leader in artificial intelligence since early ’00s. In spare time, he is a retro-computing lover and sci-fi cinema/books/comics enthusiast.
                </p>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    Generative AI and large language models (LLMs) represent a groundbreaking innovation, offering vast new opportunities. However, there are significant limitations, particularly high costs from overpriced GPUs and expensive cloud services, making AI experimentation challenging. In this session, we'll explore the architecture of Llama models and how to download, convert, quantize and fine-tune it on your own hardware.
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/fbaldassarri/" target="_blank">
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