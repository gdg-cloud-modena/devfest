<template>
    <Title>
        DevFest Modena 2024 &mdash; FAQ
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/Hash.svg">
                </div>
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