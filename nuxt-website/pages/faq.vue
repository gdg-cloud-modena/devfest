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