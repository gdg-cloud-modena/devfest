<template>
    <div :class='["timetable-card", "border-bottom", timetableType]'>
        <div class="header">
            <p style="text-align: center;">{{ time }}</p>
        </div>
        <div class="content">
            <h4 class="text-accent">{{ speaker }}</h4>
            <h2>{{ title }}</h2>
            <div
                v-if="roomAndLanguage || url" 
                class="flexbox justify-between wrap align-center">
                    <p style="flex: 1 1 150px;">{{ roomAndLanguage }}</p>
                    <RouterLink v-if="url" class="button-like cool-blue" :to="url">Dettagli</RouterLink>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    type TimetableType = 'break' | 'event';
    const props = defineProps<{
        timetableType: TimetableType,
        time: string,
        speaker: string,
        title: string,
        roomAndLanguage?: string,
        url?: string,
    }>();

    const {
        timetableType,
        time,
        speaker,
        title,
        roomAndLanguage,
        url
    } = toRefs(props);
</script>