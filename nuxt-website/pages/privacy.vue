<template>
    <Title>
        DevFest Modena 2024 &mdash; Privacy Policy
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/stop.svg">
                </div>
            </template>
            <template #title>
                Privacy Policy
            </template>
            <template #content>
                <div style="text-align: center;">
                    <h1>DA REDIGERE</h1>
                </div>
            </template>
            <section class="full-w ternary-background"
          style="border-bottom: 2px solid #c9c9c9;">
            <FreeTicket />
        </section>
        <section class="full-w secondary-background">
            <SocialLinks />
        </section>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: false,
    });
</script>
