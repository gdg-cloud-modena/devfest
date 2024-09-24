<template>
    <Title>
        DevFest Modena 2024 &mdash; Programma
    </Title>
    <div>
        <NuxtLayout name="page">
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/brackets.svg">
                </div>
            </template>
            <template #title>
                Programma da definire
            </template>
            <template #content>
                <div class="swapper-500" style="padding-top: 48px;">
                    <div class="main">
                        <TimetableCard 
                        timetable-type="break" 
                        time="9:00 - 9:30"
                        speaker=""
                        title="Inizio dell'evento, accoglienza e networking"
                        class="above border-bottom"
                        />
                        <TimetableCard 
                            timetable-type="break" 
                            time="9:30 - 9:55"
                            speaker=""
                            title="Intro/Keynote"
                            room-and-language="Sala 1 & 2 - Italiano"
                            class="middle border-bottom"
                        />
                        <div class="flexbox">
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM - AM"
                                speaker="Riccardo Carlesso"
                                title="News Crawler via Langchain.RB and Gemini APIs"
                                room-and-language="Sala 1 - Italiano"
                                url="/speakers"
                                style="flex: 1"
                                class="border"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM - AM"
                                speaker="Coderdojo"
                                title="Intro/Keynote"
                                room-and-language="Sala Workshop - Italiano"
                                url="/speakers"
                                style="flex: 1"
                            />
                            
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM - AM"
                                speaker="Francesco Baldassarri "
                                title="Unleash the Power of Llama 3.1 on Your Local Hardware – No Cloud Needed!"
                                room-and-language="Sala 2 - Italiano"
                                url="/speakers"
                                style="flex: 1"
                                class="border"
                            />
                        </div>
                        <TimetableCard 
                            timetable-type="break" 
                            time="10:30 - 11:00"
                            speaker="Break"
                            title="Coffee break"
                            class="middle border-bottom border-top" 
                        />
                    </div>
                    <div class="to-swap">
                        <div class="flexbox column" style="gap: 48px">
                            <TimetableCard 
                                timetable-type="event" 
                                time="10:30 - 11:00"
                                speaker="Break"
                                title="Coffee break"
                            />
                            <div>
                                <TimetableCard 
                                timetable-type="event" 
                                time="10:30 - 11:00"
                                speaker="Ponglo Ponglers"
                                title="Rust è figo"
                                room-and-language="Sala 1 - Italiano"
                                url="/speakers"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="10:30 - 11:00"
                                speaker="Ponglo Ponglers"
                                title="Rust è figo"
                                room-and-language="Sala 1 - Italiano"
                                url="/speakers"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="10:30 - 11:00"
                                speaker="Ponglo Ponglers"
                                title="Rust è figo"
                                room-and-language="Sala 1 - Italiano"
                                url="/speakers"
                            />
                            </div>
                            <TimetableCard 
                                timetable-type="event" 
                                time="10:30 - 11:00"
                                speaker="Break"
                                title="Lunch Break"
                            />
                        </div>
                    </div>
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

