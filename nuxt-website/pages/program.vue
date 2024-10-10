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
        Programma
      </template>
      <template #content>
        <section class="py-6 pad-24">
          <div class="parent">
            <div v-for="(event, index) in events"
                 :key="index"
                 :class="`div${(index+1)}`">
              <div v-if="event?.title_room" class="font-medium text-2xl p-2 text-center">{{ event.title }}</div>
              <RouterLink v-else-if="event.url"
                          :to="event.url"
                          class="block border border-slate-200 rounded-lg p-2 bg-white hover:bg-slate-50 mb-3 h-full">
                <div class="font-bold bg-pink-400 p-2 text-center text-white rounded">{{ event.time }}</div>
                <div class="min-h-44">
                  <div v-if="event.speaker" class="p-2 mt-2">{{ event.speaker }}</div>
                  <div class="font-medium text-xl p-2">{{ event.title }}</div>
                </div>
              </RouterLink>
              <div v-else class="border border-slate-200 rounded-lg p-2 bg-white mb-3 h-full">
                <div class="font-bold bg-pink-400 p-2 text-center text-white rounded">{{ event.time }}</div>
                <div class="min-h-44">
                  <div v-if="event.speaker" class="p-2 mt-2">{{ event.speaker }}</div>
                  <div class="font-medium text-xl p-2">{{ event.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const events = [
  {
    id: 52,
    title: "Basilico",
    time: "18:30 - 21:30",
    speaker: "",
    duration: 120,
    block: "block-time-one",
    url: "",
    title_room: true
  },
  {
    id: 1,
    title: "Makerdojo",
    time: "09:00 - 11:00",
    duration: 120,
    block: "block-time-four",
    url: ""
  },
  {
    id: 2,
    title: "Bring your old PHP app to the Cloud: AppMod with Google",
    time: "11:00 - 13:00",
    speaker: "Riccardo Carlesso",
    duration: 120,
    block: "block-time-five",
    url: "/speaker/riccardo-carlesso-workshop"
  },
  {
    id: 3,
    title: "Lunch",
    time: "13:00 - 14:00",
    speaker: "",
    duration: 60,
    block: "block-time-two",
    url: ""
  },
  {
    id: 4,
    title: "Containerizza la tua App e distribuisci senza pensieri",
    time: "14:00 - 16:00",
    speaker: "Moreno Razzoli",
    duration: 120,
    block: "block-time-five",
    url: "/speaker/moreno-razzoli"
  },
  {
    id: 5,
    title: "Coffee Break",
    time: "16:00 - 16:20",
    speaker: "",
    duration: 20,
    block: "block-time-one",
    url: ""
  },
  {
    id: 6,
    title: "Coding Gym",
    time: "16:20 - 18:20",
    speaker: "Marco Arena",
    duration: 130, // 10m dopo
    block: "block-time-four",
    url: "/speaker/marco-arena"
  },
  {
    id: 7,
    title: "DJ Set",
    time: "18:30 - 21:30",
    speaker: "",
    duration: 120,
    block: "block-time-one",
    url: ""
  },

  {
    id: 53,
    title: "Tortellino",
    time: "18:30 - 21:30",
    speaker: "",
    duration: 120,
    block: "block-time-one",
    url: "",
    title_room: true
  },
  {
    id: 8,
    title: "Accoglienza",
    time: "09:00 - 09:30",
    speaker: "",
    duration: 30,
    block: "block-time-one",
    url: ""
  },
  {
    id: 9,
    title: "Intro/Keynote",
    time: "09:30 - 09:55",
    duration: 30, // allungato a comprendere pausa dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 10,
    title: "News Crawler via Langchain.RB and Gemini APIs",
    time: "10:00 - 10:50",
    speaker: "Riccardo Carlesso",
    duration: 50,
    block: "block-time-one",
    url: "/speaker/riccardo-carlesso"
  },
  {
    id: 11,
    title: "Coffee Break",
    time: "10:50 - 11:00",
    speaker: "",
    duration: 20, //si "mangia" il succ
    block: "block-time-one",
    url: ""
  },
  {
    id: 12,
    title: "The Staff Engineer VS Manager Path: A window over the tech career paths",
    time: "11:10 - 12:00",
    speaker: "Alfonso Graziano",
    duration: 60, // +10 di pausa dopo
    block: "block-time-two",
    url: "/speaker/alfonso-graziano"
  },
  {
    id: 13,
    title: "WWWAI: Constructing a truly open GenAI app with WebAssembly, WebGPU, and WebAI",
    time: "12:10 - 13:00",
    speaker: "Susanna Wong",
    duration: 50,
    block: "block-time-two",
    url: "/speaker/susanna-wong"
  },
  {
    id: 14,
    title: "Lunch",
    time: "13:00 - 14:00",
    speaker: "",
    duration: 60,
    block: "block-time-two",
    url: ""
  },
  {
    id: 15,
    title: "Dal Caos al Controllo: Il Viaggio nell'Infrastructure as Code, da Docker Compose a Kubernetes",
    time: "14:00 - 14:50",
    speaker: "Giovanni Perteghella",
    duration: 60, //+10 di pausa dopo
    block: "block-time-two",
    url: "speaker/giovanni-perteghella"
  },
  {
    id: 16,
    title: "Improve your Multi-Factor Auth with Firebase and Vonage APIs",
    time: "15:00 - 15:50",
    speaker: "Amanda Cavallaro",
    duration: 60, //+10 di pausa dopo
    block: "block-time-two",
    url: "/speaker/amanda-cavallaro"
  },
  {
    id: 17,
    title: "Coffee Break",
    time: "16:00 - 16:20",
    speaker: "",
    duration: 20,
    block: "block-time-one",
    url: ""
  },
  {
    id: 18,
    title: "Gemini Functions Calls in Flutter",
    time: "16:20 - 16:55",
    speaker: "Carlo Lucera",
    duration: 40, // +5 di pausa dopo
    block: "block-time-two",
    url: "/speaker/carlo-lucera"
  },
  {
    id: 19,
    title: "Scale your Frontend application with Module Federation",
    time: "17:00 - 17:35",
    speaker: "Luca Del Puppo",
    duration: 40, // +5 di pausa dopo
    block: "block-time-one",
    url: "/speaker/luca-del-puppo"
  },
  {
    id: 20,
    title: "Saluti finali  e via al DJ Set",
    time: "17:40 - 18:20",
    speaker: "",
    duration: 50, // +10 di pausa dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 21,
    title: "DJ Set",
    time: "18:30 - 21:30",
    speaker: "",
    duration: 120,
    block: "block-time-one",
    url: ""
  },
  {
    id: 54,
    title: "Tigella",
    time: "18:30 - 21:30",
    speaker: "",
    duration: 120,
    block: "block-time-one",
    url: "",
    title_room: true
  },
  {
    id: 22,
    title: "Accoglienza",
    time: "09:00 - 09:30",
    speaker: "",
    duration: 30,
    block: "block-time-one",
    url: ""
  },
  {
    id: 23,
    title: "Intro/Keynote",
    time: "09:30 - 09:55",
    speaker: "",
    duration: 30, // 5m dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 24,
    title: "Unleash the Power of Llama 3.1 on Your Local Hardware – No Cloud Needed!",
    time: "10:00 - 10:45",
    speaker: "Francesco Baldassarri",
    duration: 50, // 5m dopo
    block: "block-time-one",
    url: "/speaker/francesco-baldassarri"
  },
  {
    id: 25,
    title: "Coffee Break",
    time: "10:50 - 11:00",
    speaker: "",
    duration: 10,
    block: "block-time-one",
    url: ""
  },
  {
    id: 26,
    title: "",
    time: "11:00 - 11:35",
    speaker: "Stefano Allegretti",
    duration: 40, // +5min dopo
    block: "block-time-two",
    url: ""
  },
  {
    id: 27,
    title: "Building a RAG for tabular data in Go with PostgreSQL & Gemini ",
    time: "11:40 - 12:15",
    speaker: "Paolo Galeone",
    duration: 35,
    block: "block-time-two",
    url: "/speaker/paolo-galeone"
  },
  {
    id: 28,
    title: "Lunch",
    time: "12:30 - 13:30",
    speaker: "",
    duration: 60,
    block: "block-time-two",
    url: ""
  },
  {
    id: 29,
    title: "Ray on Vertex AI",
    time: "14:00 - 14:35",
    speaker: "Imran us Salam Mian",
    duration: 40, // con i 5m dopo
    block: "block-time-one",
    url: "/speaker/imran-us-salam-mian"
  },
  {
    id: 30,
    title: "Technological porting for a legacy system",
    time: "14:40 - 15:15",
    speaker: "Maurizio Carli",
    duration: 80, // 5m dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 31,
    title: "Es/Cqrs Anatomy",
    time: "15:20 - 15:55",
    speaker: "Emilio Junior Franceschetti",
    duration: 80, // 5m dopo
    block: "block-time-two",
    url: ""
  },
  {
    id: 32,
    title: "Coffee Break",
    time: "16:00 - 16:20",
    speaker: "",
    duration: 20,
    block: "block-time-one",
    url: ""
  },
  {
    id: 33,
    title: "Gemini 1.5: A demo in multimodal use cases",
    time: "16:20 - 16:55",
    speaker: "Ankur Roy",
    duration: 40, // incl 5 min dopo
    block: "block-time-one",
    url: "/speaker/ankur-roy"
  },
  {
    id: 34,
    title: "Free slot",
    time: "17:00 - 17:35",
    speaker: "",
    duration: 40, // incl 5 min dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 35,
    title: "Saluti finali e via al DJ Set",
    time: "17:40 - 18:20",
    speaker: "",
    duration: 50, // incl 10 min dopo
    block: "block-time-two",
    url: ""
  },
  {
    id: 36,
    title: "DJ Set",
    time: "18:30 - 21:30",
    speaker: "",
    duration: 120,
    block: "block-time-one",
    url: ""
  },
  {
    id: 55,
    title: "Lambrusco",
    time: "18:30 - 21:30",
    speaker: "",
    duration: 120,
    block: "block-time-one",
    url: "",
    title_room: true
  },
  {
    id: 37,
    title: "Accoglienza",
    time: "09:00 - 09:30",
    speaker: "",
    duration: 30,
    block: "block-time-one",
    url: ""
  },
  {
    id: 38,
    title: "Intro/Keynote",
    time: "09:30 - 09:55",
    speaker: "",
    duration: 30, // allungato a comprendere pausa dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 39,
    title: "API testing in action - DMVC & PyTest for better API",
    time: "10:00 - 10:40",
    speaker: "Flavio Basile",
    duration: 50, // pausa dopo
    block: "block-time-one",
    url: "/speaker/flavio-basile"
  },
  {
    id: 40,
    title: "Coffee Break",
    time: "10:50 - 11:00",
    speaker: "",
    duration: 20, // pausa dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 41,
    title: "Pattern Matching to the rescue!",
    time: "11:10 - 11:45",
    speaker: "Matteo Maria Terzuolo",
    duration: 40, // pausa dopo
    block: "block-time-two",
    url: "/speaker/matteo-maria-terzuolo"
  },
  {
    id: 42,
    title: "Expert.ai",
    time: "11:50 - 12:25",
    speaker: "Andrea Capitani, Alessandro Rosa, Stefano Simonazzi",
    duration: 40, // pausa dopo
    block: "block-time-two",
    url: ""
  },
  {
    id: 43,
    title: "Lunch",
    time: "12:30 - 13:30",
    speaker: "",
    duration: 60,
    block: "block-time-two",
    url: ""
  },
  {
    id: 44,
    title: "Ritorno al Futuro: sviluppare app mobile e cross-platform in Pascal, Grande Giove!",
    time: "14:00 - 14:35",
    speaker: "Marco Breveglieri",
    duration: 40, // pausa dopo
    block: "block-time-one",
    url: "/speaker/marco-breveglieri"
  },
  {
    id: 45,
    title: "gRPC on Rails - a true story",
    time: "14:40 - 15:15",
    speaker: "Emiliano Della Casa",
    duration: 40, // pausa dopo
    block: "block-time-one",
    url: "/speaker/marco-breveglieri"
  },
  {
    id: 46,
    title: "Free slot",
    time: "15:20 - 15:55",
    speaker: "",
    duration: 40, // 5m dopo
    block: "block-time-two",
    url: ""
  },
  {
    id: 47,
    title: "Coffee Break",
    time: "16:00 - 16:20",
    speaker: "",
    duration: 40, // 5m dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 48,
    title: "AI-Powered Testing: Revolutionizing QA with Machine Learning",
    time: "16:20 - 16:55",
    speaker: "Ludovico Besana",
    duration: 40, // 5m dopo
    block: "block-time-one",
    url: "/speaker/ludovico-besana"
  },
  {
    id: 49,
    title: "Le incredibili conseguenze della keyword final",
    time: "17:00 - 17:35",
    speaker: "Enrico Sasdelli",
    duration: 50, // 10m dopo
    block: "block-time-one",
    url: ""
  },
  {
    id: 50,
    title: "Saluti finali e via al DJ Set",
    time: "17:40 - 18:20",
    speaker: "",
    duration: 50, // incl 10 min dopo
    block: "block-time-two",
    url: ""
  },
  {
    id: 51,
    title: "DJ Set",
    time: "18:30 - 21:30",
    speaker: "",
    duration: 120,
    block: "block-time-one",
    url: ""
  },
]

const getEventHeight = (duration: number) => {
  return `${duration * 12 - 10}px`;
};
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(20, 1fr);
  gap: 10px;
  margin-top: -200px;
}

@media (max-width: 768px) {
  .parent {
    display: block;
    margin-top: 20px;
  }
}

.div1 {
  align-self: end;
}

.div2 {
  grid-row: span 4 / span 4;
  grid-column-start: 1;
  grid-row-start: 2;
}

.div3 {
  grid-row: span 4 / span 4;
  grid-column-start: 1;
  grid-row-start: 6;
}

.div4 {
  grid-row: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 10;
}

.div5 {
  grid-row: span 4 / span 4;
  grid-column-start: 1;
  grid-row-start: 12;
}

.div6 {
  grid-column-start: 1;
  grid-row-start: 16;
}

.div7 {
  grid-row: span 4 / span 4;
  grid-column-start: 1;
  grid-row-start: 17;
}

.div8 {
  grid-column-start: 1;
  grid-row-start: 21;
}

.div9 {
  grid-column-start: 2;
  grid-row-start: 1;
  align-self: end;
}

.div10 {
  grid-column-start: 2;
  grid-row-start: 2;
}

.div11 {
  grid-column-start: 2;
  grid-row-start: 3;
}

.div12 {
  grid-column-start: 2;
  grid-row-start: 4;
}

.div13 {
  grid-column-start: 2;
  grid-row-start: 5;
}

.div14 {
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 6;
}

.div15 {
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 8;
}

.div16 {
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 10;
}

.div17 {
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 12;
}

.div18 {
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 14;
}

.div19 {
  grid-column-start: 2;
  grid-row-start: 16;
}

.div20 {
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 17;
}

.div21 {
  grid-column-start: 2;
  grid-row-start: 19;
}

.div22 {
  grid-column-start: 2;
  grid-row-start: 20;
}

.div23 {
  grid-column-start: 2;
  grid-row-start: 21;
}

.div24 {
  grid-column-start: 3;
  grid-row-start: 1;
  align-self: end;
}

.div25 {
  grid-column-start: 3;
  grid-row-start: 2;
}

.div26 {
  grid-column-start: 3;
  grid-row-start: 3;
}

.div27 {
  grid-column-start: 3;
  grid-row-start: 4;
}

.div28 {
  grid-column-start: 3;
  grid-row-start: 5;
}

.div29 {
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 6;
}

.div30 {
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 8;
}

.div31 {
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 10;
}

.div32 {
  grid-column-start: 3;
  grid-row-start: 12;
}

.div33 {
  grid-column-start: 3;
  grid-row-start: 13;
}

.div34 {
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 14;
}

.div35 {
  grid-column-start: 3;
  grid-row-start: 16;
}

.div36 {
  grid-column-start: 3;
  grid-row-start: 17;
}

.div37 {
  grid-column-start: 3;
  grid-row-start: 18;
}

.div38 {
  grid-row: span 2 / span 2;
  grid-column-start: 3;
  grid-row-start: 19;
}

.div39 {
  grid-column-start: 3;
  grid-row-start: 21;
}

.div40 {
  grid-column-start: 4;
  grid-row-start: 1;
  align-self: end;
}

.div41 {
  grid-column-start: 4;
  grid-row-start: 2;
}

.div42 {
  grid-column-start: 4;
  grid-row-start: 3;
}

.div43 {
  grid-column-start: 4;
  grid-row-start: 4;
}

.div44 {
  grid-column-start: 4;
  grid-row-start: 5;
}

.div45 {
  grid-row: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 6;
}

.div46 {
  grid-row: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 8;
}

.div47 {
  grid-row: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 10;
}

.div48 {
  grid-column-start: 4;
  grid-row-start: 12;
}

.div49 {
  grid-column-start: 4;
  grid-row-start: 13;
}

.div50 {
  grid-row: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 14;
}

.div51 {
  grid-column-start: 4;
  grid-row-start: 16;
}

.div52 {
  grid-column-start: 4;
  grid-row-start: 17;
}

.div53 {
  grid-column-start: 4;
  grid-row-start: 18;
}

.div54 {
  grid-row: span 2 / span 2;
  grid-column-start: 4;
  grid-row-start: 19;
}

.div55 {
  grid-row-start: 21;
}
</style>