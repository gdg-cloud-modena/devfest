<template>
    <Title>
        DevFest Modena 2024 &mdash; Programma Sala Tortellino
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
                <div class="schedule-container">
                    <div
                        v-for="room in rooms"
                        :key="room.id"
                        class="room"
                    >
                        <div class="room-header">{{ room.name }}</div>
                        <div
                            v-for="event in room.events"
                            :key="event.id"
                            class="event"
                            :style="{ height: getEventHeight(event.duration) }"
                        >
                            <div v-if="event.title" class="event-header">
                                <p style="text-align: center;">{{ event.time }}</p>
                            </div>
                            <div class="event-details" style="color: #4285f4;">{{ event.speaker }}</div>
                            <div class="event-title">{{ event.title }}</div>
                            <RouterLink v-if="event.url" style="position: absolute; bottom: 10px; right: 10px;" class="button-like cool-blue text-lg py-3 px-5" :to="event.url">Dettagli</RouterLink>
                        </div>
                    </div>
                </div>
                <!--div class="swapper-500" style="padding-top: 48px;">
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
                            time="AM"
                            speaker=""
                            title="Intro/Keynote"
                            room-and-language="Sala 1 & 2 - Italiano"
                            class="middle border-bottom"
                        />
                        <div class="flexbox">
                            <div class="flexbox column" style="flex: 1">
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Riccardo Carlesso"
                                    title="News Crawler via Langchain.RB and Gemini APIs"
                                    room-and-language="Sala 1 - English/Italiano"
                                    url="/speaker/riccardo-carlesso"
                                    class="border"
                                    style="height: 603px;"
                                />
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Break"
                                    title="Coffee break"
                                    class="border" 
                                />
                            </div>
                            <div style="flex: 1" class="flexbox column">
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="CoderDojo"
                                    title="CoderDojo"
                                    room-and-language="Sala Workshop - English/Italiano"
                                    url="/speakers"
                                    style="height: 800px;"
                                />
                            </div>
                            <div style="flex: 1" class="flexbox column">
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Francesco Baldassarri "
                                    title="Unleash the Power of Llama 3.1 on Your Local Hardware – No Cloud Needed!"
                                    room-and-language="Sala 2 - English/Italiano"
                                    url="/speaker/francesco-baldassarri"
                                    class="border"
                                />
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Break"
                                    title="Coffee break"
                                    class="border" 
                                    style="height: 302px;"
                                />
                            </div>
                            <div style="flex: 1" class="flexbox column">
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Flavio Basile "
                                    title="Unleash the Power of Llama 3.1 on Your Local Hardware – No Cloud Needed!"
                                    room-and-language="Sala 3 - English/Italiano"
                                    url="/speaker/flavio-basile"    
                                    class=""
                                    style="height: 580px;"
                                />
                                <TimetableCard 
                                    timetable-type="event" 
                                    time="AM"
                                    speaker="Break"
                                    title="Coffee break"
                                    class="" 
                                    style="height: 220px;"
                                />
                            </div>           
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
                </div-->
            </template>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: false,
    });
    const rooms = [
        {
            id: 1,
            name: "Sala Tortellino",
            events: [
                {
                    id: 1,
                    title: "Accoglienza",
                    time: "09:00 - 09:30",
                    speaker: "",
                    duration: 30,
                    url: ""
                },
                {
                    id: 2,
                    title: "Intro/Keynote",
                    time: "09:30 - 09:55",
                    duration: 30, // allungato a comprendere pausa dopo
                    url: ""
                },
                {
                    id: 3,
                    title: "News Crawler via Langchain.RB and Gemini APIs",
                    time: "10:00 - 10:50",
                    speaker: "Riccardo Carlesso",
                    duration: 50,
                    url: "/speaker/riccardo-carlesso"
                },
                {
                    id: 4,
                    title: "Coffee Break",
                    time: "10:50 - 11:00",
                    speaker: "",
                    duration: 20, //si "mangia" il succ
                    url: ""
                },
                {
                    id: 5,
                    title: "Improve your Multi-Factor Auth with Firebase and Vonage APIs",
                    time: "11:10 - 12:00",
                    speaker: "Amanda Cavallaro",
                    duration: 60, //+10 di pausa dopo
                    url: "/speaker/amanda-cavallaro"
                },
                {
                    id: 6,
                    title: "WWWAI: Constructing a truly open GenAI app with WebAssembly, WebGPU, and WebAI",
                    time: "12:10 - 13:00",
                    speaker: "Susanna Wong",
                    duration: 50,
                    url: "/speaker/susanna-wong"
                },
                {
                    id: 7,
                    title: "Lunch",
                    time: "13:00 - 14:00",
                    speaker: "",
                    duration: 60,
                    url: ""
                },
                {
                    id: 8,
                    title: "Dal Caos al Controllo: Il Viaggio nell'Infrastructure as Code, da Docker Compose a Kubernetes",
                    time: "14:00 - 14:50",
                    speaker: "Giovanni Perteghella",
                    duration: 60, //+10 di pausa dopo
                    url: "speaker/giovanni-perteghella"
                },
                {
                    id: 9,
                    title: "The Staff Engineer VS Manager Path: A window over the tech career paths",
                    time: "15:00 - 15:50",
                    speaker: "Alfonso Graziano",
                    duration: 60, // +10 di pausa dopo
                    url: "/speaker/alfonso-graziano"
                },
                {
                    id: 10,
                    title: "Coffee Break",
                    time: "16:00 - 16:20",
                    speaker: "",
                    duration: 20,
                    url: ""
                },
                {
                    id: 11,
                    title: "Gemini Functions Calls in Flutter",
                    time: "16:20 - 16:55",
                    speaker: "Carlo Lucera",
                    duration: 40, // +5 di pausa dopo
                    url: "/speaker/carlo-lucera"
                },
                {
                    id: 12,
                    title: "Scale your Frontend application with Module Federation",
                    time: "17:00 - 17:35",
                    speaker: "Luca Del Puppo",
                    duration: 40, // +5 di pausa dopo
                    url: "/speaker/luca-del-puppo"
                },
                {
                    id: 13,
                    title: "SPONSOR",
                    time: "17:40 - 18:20",
                    speaker: "Talk tecnico",
                    duration: 50, // +10 di pausa dopo
                    url: ""
                },
                {
                    id: 14,
                    title: "DJ Set",
                    time: "18:30 - 21:30",
                    speaker: "",
                    duration: 120,
                    url: ""
                }
            ]
        },
    ];

    const getEventHeight = (duration: number) => {
        return `${duration * 12-10}px`; 
    };
</script>

<style scoped>
    .schedule-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        margin: 20px;
    }

    .room {
        flex: 1;
        min-width: 250px;
        max-width: 100%;
        margin: 0 10px;
        box-sizing: border-box;
    }

    .room-header {
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
        background-color: #eee;
        padding: 10px;
    }

    .event-header{
            padding: 12px;
            background: #ff7daf;
            margin-bottom: 5px;
        }

    .event {
        margin-bottom: 10px;
        padding: 10px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: #fefefe;
        border: 1px solid #cecece;
        position: relative;
        box-sizing: border-box;
    }

    .event-title {
        font-size: clamp(1rem, 1.174vw, 1.574rem); 
        font-weight: 500;
    }

    .time {
        font-style: italic;
        font-size: 0.9em;
    }

    .event-details {
        font-size: 0.9em;
    }

    @media (max-width: 768px) {
        .room {
            flex: 1 1 100%;
        }
    }
</style>