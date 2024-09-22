<template>
    <Title>DevFest Modena 2024 &mdash; Ray on Vertex AI</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="imran-us-salam-mian"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Ray on Vertex AI </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Imran us Salam Mian</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Workwise</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Senior Machine Learning Engineer</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>English</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Speech</h2>
                <p>
                    What is Ray?
                    <br />
                    A multiprocessing tool for large-scale training pipelines or even normal Python code. We review the details of what Ray is, and how to use it. And the similarities between Ray and Spark.
                </p>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    I am a Machine Learning Engineer in the field of Computer Vision. My main area of focus is in Generative Modeling and Latent Variable Methods. I have also been an AI Scholar at Pi School, Rome. I also participate in conducting workshops and technical talks around the field of Machine Learning to teach others and in return learn from them. And I make steaks.
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/imran-us-salam-mian-54a48897/" target="_blank">
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