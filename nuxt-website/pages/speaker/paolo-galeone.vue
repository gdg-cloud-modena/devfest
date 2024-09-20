<template>
    <Title>DevFest Modena 2024 &mdash; Paolo Galeone</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-url="/talk/paolo-galeone" speaker-image="paolo-galeone"> <!-- TODO: aggiungere talk-->
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Paolo Galeone </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>GDE in Machine Learning</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Tech Lead</p>
                    </div>
                </div>
            </template>
            <template #description>
                <p>
                    Paolo Galeone is a Computer Engineer with a real passion for the IT world. He received his MSc in 2016 with a thesis on the application of convolutional neural networks to the object detection and classification problems.
                    After this, he took up research as a career and became a research fellow at the Computer Vision Laboratory at the University of Bologna, Italy, where he worked on a broad range of topics such as object detection, classification, coordinate regression, and anomaly detection.
                    Currently, he leads the computer vision and machine learning department at ZURU Tech, Italy. While in school, university and at work, he developed several projects spanning a broad range of topics such as database abstraction layers,
                    a complete social network covering both the back-end and front-end aspects,
                    several tools for machine learning developers and researchers with the aim to simplify the machine learning pipeline.
                    All his computer vision and machine learning projects have been implemented using the framework he loves: Tensorflow.
                    All these projects were completely open-source and are available on his Github profile at https://github.com/galeone.
                    He also blogs about Computer Vision, Machine Learning and Linux system administration. You can find his blog at https://pgaleone.eu/ Being a strong Open Source supporter he works exclusively on Linux-based systems.
                </p>

                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/paolo-galeone-6782b311b/" target="_blank">
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