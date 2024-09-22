<template>
    <Title>
        DevFest Modena 2024 &mdash; Note legali
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/stop.svg">
                </div>
            </template>
            <template #title>
                Note legali
            </template>
            <template #content>
                <div style="text-align: center;">
                    <h1>DA REDIGERE</h1>
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
