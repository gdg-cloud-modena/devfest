<template>
    <Title>DevFest Modena 2024 &mdash; Building a RAG for tabular data in Go with PostgreSQL & Gemini</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="paolo-galeone">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Building a RAG for tabular data in Go with PostgreSQL & Gemini </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Paolo Galeone</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Tech Lead | GDE in Machine Learning</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Speech</h2>
                <p>
                    In this talk, we explore how to combine a large language model (LLM) with a relational database management system (RDBMS) to enable users to ask questions about their data in a natural way. It demonstrates the development of a Retrieval-Augmented Generation (RAG) system built with Go that leverages PostgreSQL and pgvector for data storage, retrieval, and embedding generation. The provided code showcases the core functionalities of the system. This work serves as an overview of the "chat with your data" feature currently under development for fitsleepinsights.app.
                </p>
            </template>
            <template #description>
                <h2>
                    Bio
                </h2>
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
                <br />
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