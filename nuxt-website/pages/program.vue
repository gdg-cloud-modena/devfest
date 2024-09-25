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
                Programma (orari da definire)
            </template>
            <template #content>
                <div class="swapper-500" style="padding-top: 48px;"><!--class="swapper-500"-->
                    <div class="main">
                        <TimetableCard 
                        timetable-type="break" 
                        time="AM"
                        speaker=""
                        title="Inizio dell'evento, accoglienza e networking"
                        class="above border-bottom"
                        />
                        <TimetableCard 
                            timetable-type="break" 
                            time="AM"
                            speaker=""
                            title="Intro/Keynote"
                            room-and-language="Sala 1 & 2 - Italiano"
                            class="middle border-bottom"
                        />
                        <div class="flexbox">
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="Riccardo Carlesso"
                                title="News Crawler via Langchain.RB and Gemini APIs"
                                room-and-language="Sala 1 - English/Italiano"
                                url="/speaker/riccardo-carlesso"
                                style="flex: 1"
                                class="border"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="CoderDojo"
                                title="CoderDojo"
                                room-and-language="Sala Workshop - English/Italiano"
                                url="/speakers"
                                style="flex: 1"
                            />
                            
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="Francesco Baldassarri "
                                title="Unleash the Power of Llama 3.1 on Your Local Hardware – No Cloud Needed!"
                                room-and-language="Sala 2 - English/Italiano"
                                url="/speaker/francesco-baldassarri"
                                style="flex: 1"
                                class="border"
                            />
                        </div>
                        <TimetableCard 
                            timetable-type="break" 
                            time="AM"
                            speaker="Break"
                            title="Coffee break"
                            class="middle border-bottom border-top" 
                        />
                        <div class="flexbox" >
                            <div class="column" style="flex: 1">
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Amanda Cavallaro"
                                    title=" Improve your Multi-Factor Auth with Firebase and Vonage APIs "
                                    room-and-language="Sala 1 - English"
                                    url="/speaker/amanda-cavallaro"
                                    class="border"
                                />
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Susanna Wang"
                                    title=" Improve your Multi-Factor Auth with Firebase and Vonage APIs "
                                    room-and-language="Sala 1 - English"
                                    url="/speaker/amanda-cavallaro"
                                    class="border"
                                />
                            </div>
                            
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="Moreno Razzoli"
                                title="Containerizza la tua App e distribuisci senza pensieri"
                                room-and-language="Sala Workshop - English/Italiano"
                                url="/speaker/moreno-razzoli"
                                style="flex: 1;"
                            />
                            <div class="column" style="flex: 1">
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="TBD "
                                    title="Sponsored Talk"
                                    room-and-language="Sala 2 - English/Italiano"
                                    url="/speakers"
                                    style="flex: 1"
                                    class="border"
                                />
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Paolo Galeone"
                                    title=" Building a RAG for tabular data in Go with PostgreSQL & Gemini "
                                    room-and-language="Sala 2 - English / Italiano"
                                    url="/speaker/paolo-galeone"
                                    class="border"
                                />
                            </div>                  
                        </div>
                    </div>
                    <div class="to-swap">
                        <div class="flexbox column" style="gap: 48px">
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="Amanda Cavallaro"
                                title=" Improve your Multi-Factor Auth with Firebase and Vonage APIs "
                                room-and-language="Sala 1 - English"
                                url="/speaker/amanda-cavallaro"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="Susanna Wang"
                                title=" Improve your Multi-Factor Auth with Firebase and Vonage APIs "
                                room-and-language="Sala 1 - English"
                                url="/speaker/amanda-cavallaro"
                            />                            
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="Moreno Razzoli"
                                title="Containerizza la tua App e distribuisci senza pensieri"
                                room-and-language="Sala Workshop - English/Italiano"
                                url="/speaker/moreno-razzoli"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="TBD "
                                title="Sponsored Talk"
                                room-and-language="Sala 2 - English/Italiano"
                                url="/speakers"
                            />
                            <TimetableCard 
                                timetable-type="event" 
                                time="AM"
                                speaker="Paolo Galeone"
                                title=" Building a RAG for tabular data in Go with PostgreSQL & Gemini "
                                room-and-language="Sala 2 - English / Italiano"
                                url="/speaker/paolo-galeone"
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

