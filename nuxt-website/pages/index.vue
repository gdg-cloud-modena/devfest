<template>
  <Title>DevFest Modena 2024 &mdash; Homepage</Title>
  <div class="flexbox column">
    <section
        data-toggle
        class="flexbox column justify-center align-center pad-24 mb-10"
    >
      <div
          class="pad-24 radius-24 black-layer-24 flexbox column justify-center align-center big-block w-full"
          style="background: url(/img/bg.webp) no-repeat center center fixed; background-size: cover;"
      >
        <div class="content text-center">
          <div class="pad-24 radius-24 background">
            <div style="max-width: 570px; max-height: 80px;">
              <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/devfest-logo-full.svg"/>
            </div>
          </div>
          <h2 class="text-secondary mt-8 text-4xl lg:text-5xl text-center font-extrabold">
            Modena
            <span class="block mt-4">12 ottobre 2024</span>
          </h2>
          <div class="mt-4">
            <a class="inline-block" href="#info">
              <img src="@/assets/svg/chevron-down.svg"/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
        id="info"
        class="flexbox column pad-24 mb-10"
    >
      <div class="flexbox justify-between align-center">
        <div class="text-accent text-4xl lg:text-6xl font-bold">Cos'è il DevFest</div>
        <div class="max-w-10 lg:max-w-20">
          <img src="@/assets/svg/colon.svg"/>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row mt-6">
        <div class="w-full lg:w-7/12 lg:pr-10">
          <h3 class="mb-4 text-xl lg:text-2xl" style="font-weight: normal;">DevFest è un evento dedicato agli
            sviluppatori,
            ospitato dai
            Google Developer Groups di tutto il mondo.</h3>
          <h4 class="mb-6 text-lg lg:text-xl">
            L'evento nasce dal lavoro congiunto delle communities locali: GDG Cloud Modena, Modena Full Stack, Flutter
            Modena, ML Modena, Conoscere Linux, Reggio Emilia Full Stack.
          </h4>
          <div class="pt-5">
            <a class="button-like text-2xl py-5 px-7 font-bold"
               href="https://www.eventbrite.it/e/devfest-modena-2024-tickets-1006887817567?aff=oddtdtcreator"
               target="_blank">Riserva un biglietto!</a>
          </div>
        </div>
        <div class="w-full lg:w-5/12 flex flex-wrap mt-10 lg:mt-0">
          <div class="w-1/2 p-2">
            <div class="card text-center">
              <div class="image">
                <img src="@/assets/svg/room.svg"/>
              </div>
              <div class="highlight">
                <div class="text-accent-3 text-3xl font-bold">4</div>
              </div>
              <div class="text-xl">Sale</div>
            </div>
          </div>
          <div class="w-1/2 p-2">
            <div class="card text-center">
              <div class="image">
                <img src="@/assets/svg/ic_keyboard_voice.svg"/>
              </div>
              <div class="highlight">
                <div class="text-accent-2 text-3xl font-bold">25</div>
              </div>
              <div class="text-xl">Relatori</div>
            </div>
          </div>
          <div class="w-1/2 p-2">
            <div class="card text-center">
              <div class="image">
                <img src="@/assets/svg/ic_teach.svg"/>
              </div>
              <div class="highlight">
                <div class="text-accent-1 text-3xl font-bold">4</div>
              </div>
              <div class="text-xl">Workshop</div>
            </div>
          </div>
          <div class="w-1/2 p-2">
            <div class="card text-center">
              <div class="image">
                <img src="@/assets/svg/people.svg"/>
              </div>
              <div class="highlight">
                <div class="text-accent text-3xl font-bold">400</div>
              </div>
              <div class="text-xl">Ospiti</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
        id="timetable-home"
        class="flexbox column pad-24 mb-10"
        style="gap: 48px;"
    >
      <div class="flexbox justify-between column justify-center" style="width: 100%;">
        <div class="flexbox justify-between align-center">
          <div class="pr-6">
            <div class="text-accent text-4xl lg:text-6xl font-bold">Programma generale</div>
            <div class="text-lg lg:text-xl pt-6">
              Il programma generale coi principali momenti della giornata.
              Il programma dettagliato sarà disponibile a breve, nel frattempo puoi consultare
              <RouterLink to="/speakers">speaker e speech</RouterLink>
              .
            </div>
          </div>
          <div class="max-w-10 lg:max-w-20">
            <img src="@/assets/svg/brackets.svg">
          </div>
        </div>
      </div>
      <div class="swapper-500">
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
              time="9:30 - 10:30"
              speaker=""
              title="Keynote + 4 sale tra sessioni, workshop e networking"
              url="/speakers"
              class="middle border-bottom"
          />
          <TimetableCard
              timetable-type="break"
              time="10:30 - 11:00"
              speaker=""
              title="Coffee break"
              class="middle border-bottom"
          />
          <TimetableCard
              timetable-type="break"
              time="11:00 - 12:30"
              speaker=""
              title="4 sale tra sessioni, workshop e networking"
              url="/speakers"
              class="middle border-bottom"
          />
          <TimetableCard
              timetable-type="break"
              time="12:30 - 14:00"
              speaker=""
              room-and-language="La pausa pranzo è suddivisa su 3 turni di mezz'ora in base alle sale"
              title="Pausa pranzo"
              class="middle border-bottom"
          />
          <TimetableCard
              timetable-type="break"
              time="14:00 - 16:00"
              speaker=""
              title="4 sale tra sessioni, workshop e networking"
              url="/speakers"
              class="middle border-bottom"
          />
          <TimetableCard
              timetable-type="break"
              time="16:00 - 16:30"
              speaker=""
              title="Coffee break"
              class="middle border-bottom"
          />
          <TimetableCard
              timetable-type="break"
              time="16:30 - 18:30"
              speaker=""
              title="4 sale tra sessioni, workshop e networking"
              url="/speakers"
              class="middle border-bottom"
          />
          <TimetableCard
              timetable-type="break"
              time="18:30"
              speaker=""
              title="Fine dell'evento"
              class="middle border-bottom"
          />
          <TimetableCard
              timetable-type="break"
              time="19:00 - 21:30"
              speaker=""
              title="Party con dj-set"
              class="below"
          />
        </div>
        <div class="to-swap">
          <div class="flexbox column" style="gap: 48px">
            <TimetableCard
                timetable-type="event"
                time="9:00 - 9:30"
                speaker=""
                title="Inizio dell'evento, accoglienza e networking"
            />
            <TimetableCard
                timetable-type="event"
                time="9:30 - 10:30"
                speaker=""
                title="Keynote + 4 sale tra sessioni, workshop e networking"
                url="/speakers"
            />
            <TimetableCard
                timetable-type="event"
                time="10:30 - 11:00"
                speaker=""
                title="Coffee break"
            />
            <TimetableCard
                timetable-type="event"
                time="11:00 - 12:30"
                speaker=""
                title="4 sale tra sessioni, workshop e networking"
                url="/speakers"
            />
            <TimetableCard
                timetable-type="event"
                time="12:30 - 14:00"
                speaker=""
                room-and-language="La pausa pranzo è suddivisa su 3 turni di mezz'ora in base alle sale"
                title="Pausa pranzo"
            />
            <TimetableCard
                timetable-type="event"
                time="14:00 - 16:00"
                speaker=""
                title="4 sale tra sessioni, workshop e networking"
                url="/speakers"
            />
            <TimetableCard
                timetable-type="event"
                time="16:00 - 16:30"
                speaker=""
                title="Coffee break"
            />
            <TimetableCard
                timetable-type="event"
                time="16:30 - 18:30"
                speaker=""
                title="4 sale tra sessioni, workshop e networking"
                url="/speakers"
            />
            <TimetableCard
                timetable-type="event"
                time="18:30"
                speaker=""
                title="Fine dell'evento"
            />
            <TimetableCard
                timetable-type="event"
                time="19:00 - 21:30"
                speaker=""
                title="Party con dj-set"
            />
          </div>
        </div>
      </div>
      <div class="white-card">
        <RouterLink to="/program">
          <div class="flexbox justify-center" style="gap: 12px;">
            <p style="text-align: center">Vedi il programma dettagliato</p> <img src="@/assets/svg/arrow-black.svg"/>
          </div>
        </RouterLink>
      </div>
    </section>
    <!--<section
        id="speakers-home"
        class="flexbox column pad-24"
        style="gap: 48px;"
    >
        <div class="flexbox justify-between column justify-center">
            <div class="flexbox justify-between">
                <h1 class="text-accent">Speaker</h1>
                <div style="width: 101px; height: 101px;">
                    <img src="@/assets/svg/square-brackets.svg" style="max-width: 100%; max-height: 100%;" />
                </div>
            </div>
            <h4>Ecco chi interverrà all'evento</h4>
        </div>
        <div class="flexbox wrap justify-center" style="gap: 24px;">
            <div class="white-card max-width-450">
                <div class="image riccardo-carlesso"></div>
                <h4>Riccardo Carlesso</h4>
                <p class="text-label">English/Italiano</p>
                <RouterLink to="/speaker/riccardo-carlesso" class="button-like">Scopri di più</RouterLink>
            </div>
            <div class="white-card max-width-450">
                <div class="image moreno-razzoli"></div>
                <h4>Moreno Razzoli</h4>
                <p class="text-label">English/Italiano</p>
                <RouterLink to="/speaker/moreno-razzoli" class="button-like">Scopri di più</RouterLink>
            </div>
        </div>
        <div class="white-card">
            <RouterLink to="/speakers">
                <div class="flexbox justify-center" style="gap: 12px;">
                    <p style="text-align: center">Vedi tutto</p> <img src="@/assets/svg/arrow-black.svg" />
                </div>
            </RouterLink>
        </div>
    </section>-->
    <section class="px-4 mb-14">
      <div class="ternary-background" style="border-radius: 24px;">
        <TicketWidget/>
      </div>
    </section>

    <section
        id="sponsor-home"
        class="flexbox column px-4 mb-14"
        style="gap: 48px;"
    >
      <div class="flexbox justify-between column justify-center">
        <div class="flexbox justify-between">
          <div class="pr-6">
            <div class="text-accent text-4xl lg:text-6xl font-bold">I nostri sponsor</div>
            <div class="text-lg lg:text-xl pt-6">Scopri i partner che hanno scelto di sostenere la nostra missione.
            </div>
          </div>
          <div class="max-w-10 lg:max-w-20">
            <img src="@/assets/svg/Ellipsis_y.svg"/>
          </div>
        </div>
        <Sponsor/>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.big-block {
  min-height: 80vh;
}
</style>
<script setup lang="ts">
import Sponsor from "~/components/sponsor.vue";
</script>