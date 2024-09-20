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
                Sabato 12 Ottobre 2024
            </template>
            <template #content>
                <div class="swapper-500">
                    <div class="main">
                        <TimetableCard 
                            timetable-type="break" 
                            time="10:30 - 11:00"
                            speaker="Giancarlo De Bongleris"
                            title="Go è terribile"
                            room-and-language="Sala Grande - Italiano"
                            url="/speakers"
                            class="above border-bottom"
                        />
                        <div class="flexbox">
                            <TimetableCard 
                                timetable-type="event" 
                                time="10:30 - 11:00"
                                speaker="Ponglo Ponglers"
                                title="Rust è figo"
                                room-and-language="Sala 1 - Italiano"
                                url="/speakers"
                                style="flex: 1"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="10:30 - 11:00"
                                speaker="Ponglo Ponglers"
                                title="Rust è figo"
                                room-and-language="Sala 1 - Italiano"
                                url="/speakers"
                                class="border"
                                style="flex: 1"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="10:30 - 11:00"
                                speaker="Ponglo Ponglers"
                                title="Rust è figo"
                                room-and-language="Sala 1 - Italiano"
                                url="/speakers"
                                style="flex: 1"
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

