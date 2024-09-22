<template>
    <Title>
        DevFest Modena 2024 &mdash; Sponsors
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/Plus.svg">
                </div>
            </template>
            <template #title>
                I nostri sponsor
            </template>
            <template #content>
                <div style="text-align: center;">
                    <h1>PAGINA DA CREARE</h1>
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
