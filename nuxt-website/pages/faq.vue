<template>
    <Title>
        DevFest Modena 2024 &mdash; FAQ
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <img src="@/assets/svg/Hash.svg">
            </template>

            <template #title>
                FAQ
            </template>

            <template #content>
                <Faq />
            </template>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: false,
    });
</script>