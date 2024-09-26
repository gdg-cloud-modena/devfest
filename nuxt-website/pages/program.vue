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
                            <div class="event-title">{{ event.title }}</div>
                            <div class="time">{{ event.time }}</div>
                            <div class="event-details">{{ event.speaker }}</div>
                            <RouterLink v-if="event.url" style="position: absolute; bottom: 10px; left: 10px;" class="button-like cool-blue" :to="event.url">Dettagli</RouterLink>
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
    const rooms = [
        {
            id: 1,
            name: "Sala Principale",
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
                    duration: 25,
                    url: ""
                },
                {
                    id: 3,
                    title: "News Crawler via Langchain.RB and Gemini APIs",
                    time: "10:00 - 10:50",
                    speaker: "Riccardo Carlesso",
                    duration: 55,
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
                    duration: 50,
                    url: "/speaker/amanda-cavallaro"
                },
                {
                    id: 6,
                    title: "WWWAI: Constructing a truly open GenAI app with WebAssembly, WebGPU, and WebAI",
                    time: "12:10 - 13:00",
                    speaker: "Susanna Wang",
                    duration: 60,
                    url: "/speaker/susanna-wang"
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
                    duration: 50,
                    url: "speaker/giovanni-perteghella"
                },
                {
                    id: 9,
                    title: "The Staff Engineer VS Manager Path: A window over the tech career paths",
                    time: "15:00 - 15:50",
                    speaker: "Alfonso Graziano",
                    duration: 60, //+10 di pausa prima
                    url: "/speaker/alfonso-graziano"
                },
                {
                    id: 10,
                    title: "Coffee Break",
                    time: "16:00 - 16:20",
                    speaker: "",
                    duration: 30, // +10 di pausa prima
                    url: ""
                },
                {
                    id: 11,
                    title: "Gemini Functions Calls in Flutter",
                    time: "16:20 - 16:55",
                    speaker: "Carlo Lucera",
                    duration: 35,
                    url: "/speaker/carlo-lucera"
                },
                {
                    id: 12,
                    title: "Scale your Frontend application with Module Federation",
                    time: "17:00 - 17:35",
                    speaker: "Luca Del Puppo",
                    duration: 40, // +5 di pausa prima
                    url: "/speaker/luca-del-puppo"
                },
                {
                    id: 13,
                    title: "SPONSOR",
                    time: "17:40 - 18:20",
                    speaker: "Talk tecnico",
                    duration: 55, //+5 di pausa prima, +10 di pausa dopo
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
        {
            id: 3,
            name: "Sala 2",
            events: [
                {
                    id: 21,
                    title: "Accoglienza",
                    time: "09:00 - 09:30",
                    speaker: "",
                    duration: 30,
                    url: ""
                },
                {
                    id: 18,
                    title: "Intro/Keynote",
                    time: "09:30 - 09:55",
                    speaker: "",
                    duration: 25,
                    url: ""
                },
                {
                    id: 19,
                    title: "Unleash the Power of Llama 3.1 on Your Local Hardware – No Cloud Needed!",
                    time: "10:00 - 10:45",
                    speaker: "Francesco Baldassarri",
                    duration: 45,
                    url: "/speaker/francesco-baldassarri"
                },
                {
                    id: 20,
                    title: "Coffee Break",
                    time: "10:50 - 11:00",
                    speaker: "",
                    duration: 15, // compreso buco prima
                    url: ""
                },
                {
                    id: 50,
                    title: "TBD",
                    time: "11:00 - 11:35",
                    speaker: "TBD",
                    duration: 40, // +5min dopo
                    url: ""
                },
                {
                    id: 51,
                    title: "Building a RAG for tabular data in Go with PostgreSQL & Gemini ",
                    time: "11:40 - 12:15",
                    speaker: "Paolo Galeone",
                    duration: 45,
                    url: "/speaker/paolo-galeone"
                },
                {// buco grande
                    id: 52,
                    title: "",
                    time: "",
                    speaker: "",
                    duration: 15,
                    url: ""
                },
                {
                    id: 53,
                    title: "Lunch",
                    time: "12:30 - 13:30",
                    speaker: "",
                    duration: 60,
                    url: ""
                },
                {
                    id: 54,
                    title: " Ray on Vertex AI  ",
                    time: "14:00 - 14:35",
                    speaker: "Imran us Salam Mian",
                    duration: 40, // con i 5m dopo
                    url: "/speaker/imran-us-salam-mian"
                },
                {
                    id: 55,
                    title: "TBD",
                    time: "14:40 - 15:55",
                    speaker: "TBD",
                    duration: 80,
                    url: ""
                },
                {
                    id: 56,
                    title: "Coffee Break",
                    time: "16:00 - 16:20",
                    speaker: "",
                    duration: 20,
                    url: ""
                },
                {
                    id: 57,
                    title: "Gemini 1.5: A workshop in multimodal use cases",
                    time: "16:20 - 16:55",
                    speaker: "Ankur Roy",
                    duration: 40, // incl 5 min dopo
                    url: "/speaker/ankur-roy"
                },
                {
                    id: 58,
                    title: "TBD",
                    time: "17:00 - 17:35",
                    speaker: "TBD",
                    duration: 40, // incl 5 min dopo
                    url: ""
                },
                {
                    id: 58,
                    title: "TBD",
                    time: "17:40 - 18:20",
                    speaker: "TBD",
                    duration: 50, // incl 10 min dopo
                    url: ""
                },
                {
                    id: 21,
                    title: "DJ Set",
                    time: "18:30 - 21:30",
                    speaker: "",
                    duration: 120,
                    url: ""
                }
            ]
        },
        {
            id: 4,
            name: "Sala 3",
            events: [
                {
                    id: 21,
                    title: "Accoglienza",
                    time: "09:00 - 09:30",
                    speaker: "",
                    duration: 30,
                    url: ""
                },
                {
                    id: 22,
                    title: "Intro/Keynote",
                    time: "09:30 - 09:55",
                    speaker: "None",
                    duration: 30, // allungato a comprendere pausa dopo
                    url: ""
                },
                {
                    id: 23,
                    title: "Flavio Basile (Dev/Test)",
                    time: "10:00 - 10:40",
                    speaker: "Flavio Basile",
                    duration: 40,
                    url: "/speaker/flavio-basile"
                },
                { //buco troppo grande
                    id: 24,
                    title: "",
                    time: "",
                    speaker: "",
                    duration: 30,
                    url: ""

                },
                {
                    id: 25,
                    title: "Matteo Maria Terzuolo (Dev)",
                    time: "11:10 - 12:00",
                    speaker: "Matteo Maria Terzuolo",
                    duration: 50,
                    url: "/speaker/matteo-maria-terzuolo-dev"
                }
            ]
        },
        {
            id: 2,
            name: "Sala Workshop",
            events: [
                {
                    id: 15,
                    title: "CoderDojo",
                    time: "09:00 - 11:00",
                    duration: 120,
                    url: ""
                },
                {
                    id: 16,
                    title: "Riccardo Carlesso",
                    time: "11:00 - 13:00",
                    speaker: "Riccardo Carlesso",
                    duration: 120,
                    url: "/speaker/riccardo-carlesso"
                },
                {
                    id: 17,
                    title: "Lunch",
                    time: "13:00 - 14:00",
                    speaker: "",
                    duration: 60,
                    url: ""
                },
                {
                    id: 18,
                    title: "Moreno Razzoli",
                    time: "14:00 - 16:00",
                    speaker: "Moreno Razzoli",
                    duration: 120,
                    url: "/speaker/moreno-razzoli"
                },
                {
                    id: 19,
                    title: "Coffee Break",
                    time: "16:00 - 16:20",
                    speaker: "",
                    duration: 20,
                    url: ""
                },
                {
                    id: 20,
                    title: "Coding Gym",
                    time: "16:20 - 18:20",
                    speaker: "Marco Arena",
                    duration: 120,
                    url: "/speaker/marco-arena"
                },
                {
                    id: 21,
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
        return `${duration * 6.5-18}px`; 
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

    .event {
        margin-bottom: 10px;
        padding: 10px;
        background-color: #f2f2f2;
        border: 1px solid #ddd;
        position: relative;
        box-sizing: border-box;
    }

    .event-title {
        font-weight: bold;
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