<template>
    <div :class='["timetable-card", "border-bottom", timetableType]'>
        <div class="header">
            <p style="text-align: center;">{{ time }}</p>
        </div>
        <div class="content flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h4 class="text-accent">{{ speaker }}</h4>
            <p class="session-title">{{ title }}</p>
          </div>
          <div
              v-if="roomAndLanguage || url"
              class="flexbox justify-between wrap align-center pt-5 lg:pt-0">
                  <p style="flex: 1 1 150px;">{{ roomAndLanguage }}</p>
                  <RouterLink v-if="url" class="button-like cool-blue py-3 px-5" :to="url">Dettagli</RouterLink>
          </div>
        </div>
    </div>
</template>
<style>
.session-title {
    font-size: clamp(1rem, 1.774vw, 1.774rem); 
    font-weight: 600;
}

</style>
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