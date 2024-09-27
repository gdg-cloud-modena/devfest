<template>
    <Title>DevFest Modena 2024 &mdash; Homepage</Title>
    <div class="flexbox column" style="gap: 48px;">
        <section 
            data-toggle
            class="flexbox column justify-center align-center full pad-24"
        >   
            <div 
                class="pad-24 full radius-24 black-layer-24 flexbox column justify-center align-center"
                style="
                    background: url(/img/bg.webp) no-repeat center center fixed;
                    background-size: cover;
                "
            >
                <div class="content flexbox column" style="gap: 24px">
                    <div class="pad-24 radius-24 background">
                        <div style="max-width: 570px; max-height: 80px;">
                            <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/devfest-logo-full.svg">
                        </div>
                    </div>
                    <h2 class="text-secondary" style="text-align: center;">
                        Modena<br> 12 ottobre 2024
                    </h2>
                    <div style="text-align: center;">
                        <a href="#info"><img src="@/assets/svg/chevron-down.svg" /></a>
                    </div>
                </div>
            </div>
        </section>
        <section 
            id="info"
            class="flexbox column pad-24"
            style="gap: 48px;"
        >   
            <div class="flexbox justify-between align-center">
                <h1 class="text-accent">Cos'è il DevFest</h1>
                <div style="width: 114px; height: 101px;">
                    <img src="@/assets/svg/colon.svg" style="max-width: 100%; max-height: 100%;" />
                </div>
            </div>
            <div class="flexbox wrap">
                <div class="flexbox column" style="gap: 24px; flex: 1 1 560px;">
                    <h3 style="font-weight: normal;">DevFest è un evento dedicato agli sviluppatori, ospitato dai Google Developer Groups di tutto il mondo.</h3>
                    <h4>
                        L'evento nasce dal lavoro congiunto delle communities locali: GDG Cloud Modena, Modena Full Stack, Flutter Modena, ML Modena, Conoscere Linux, Reggio Emilia Full Stack e GDG Bologna.
                    </h4>
                    <div class="flexbox" style="gap: 24px; padding-bottom: 24px;">
                        <a class="button-like" href="https://www.eventbrite.it/e/devfest-modena-2024-tickets-1006887817567?aff=oddtdtcreator" target="_blank"> Riserva un biglietto! </a>
                    </div>
                </div>
                <div class="flexbox wrap align-center justify-center" style="gap: 24px; flex: 1 1 560px;">
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/svg/room.svg" />
                        </div>
                        <div class="highlight">
                            <h3 class="text-accent-3">3</h3>
                        </div>
                        <h4 style="margin-left: auto; margin-right: auto;">Sale</h4>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/svg/ic_keyboard_voice.svg" />
                        </div>
                        <div class="highlight">
                            <h3 class="text-accent-2">19</h3>
                        </div>
                        <h4 style="margin-left: auto; margin-right: auto;">Relatori</h4>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/svg/ic_teach.svg" />
                        </div>
                        <div class="highlight">
                            <h3 class="text-accent-1">3</h3>
                        </div>
                        <h4 style="margin-left: auto; margin-right: auto;">Workshop</h4>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/svg/people.svg" />
                        </div>
                        <div class="highlight">
                            <h3 class="text-accent">300</h3>
                        </div>
                        <h4 style="margin-left: auto; margin-right: auto;">Ospiti</h4>
                    </div>
                </div>
            </div>
        </section>
        <section 
            id="timetable-home"
            class="flexbox column pad-24"
            style="gap: 48px;"
        >
        <div class="flexbox justify-between column justify-center" style="width: 100%;">
            <div class="flexbox justify-between">
                    <h1 class="text-accent">Programma generale</h1>
                    <div style="width: 101px; height: 101px;">
                        <img src="@/assets/svg/brackets.svg" style="max-width: 100%; max-height: 100%;" />
                    </div>
                </div>
                <h4>
                    Il programma generale coi principali momenti della giornata.
                    Il programma dettagliato sarà disponibile a breve, nel frattempo puoi consultare <RouterLink to="/speakers">speaker e speech</RouterLink>.
                </h4>
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
                        <p style="text-align: center">Vedi il programma dettagliato</p> <img src="@/assets/svg/arrow-black.svg" />
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
        <section class="full ternary-background" style="border-radius: 24px;">
            <TicketWidget />
        </section>
        <section 
            id="sponsor-home"
            class="flexbox column "
            style="gap: 48px;"
        >
            <div class="flexbox justify-between column justify-center">
                <div class="flexbox justify-between">
                    <h1 class="text-accent">I nostri sponsor</h1>
                    <div style="width: 101px; height: 101px;">
                        <img src="@/assets/svg/Ellipsis_y.svg" style="max-width: 100%; max-height: 100%;" />
                    </div>
                </div>
                <h4>Scopri i partner che hanno scelto di sostenere la nostra missione.</h4>

                <div class="flexbox center align-center" style="justify-content: center;">
                    <div style="text-align: justify-center;">
                        <h4>Main</h4>
                    </div>
                </div>
                <div class="flexbox column align-center" style="gap: 48px; flex: 1 1 200px;">
                    <a href="https://developers.google.com/community/devfest?utm_source=devfest&utm_medium=website&utm_campaign=devfest_modena_2024">
                        <div class="white-card
                            sponsor-card">
                            <div class="image image-staff google"></div>
                            <h4>Google</h4>
                        </div>
                    </a>
                </div>
                <div class="flexbox center align-center" style="justify-content: center; padding-top: 24px;">
                    <div style="text-align: justify-center;">
                        <h4>Diamond</h4>
                    </div>
                </div>
                <div class="flexbox column align-center" style="gap: 48px; flex: 1 1 200px;">
                    <a href="https://zuru.com/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card
                            sponsor-card">
                            <div class="image image-staff zuru"></div>
                            <h4>Zuru</h4>
                        </div>
                    </a>
                </div>
                <div class="flexbox center align-center" style="justify-content: center; padding-top: 24px;">
                    <div style="text-align: justify-center;">
                        <h4>Gold</h4>
                    </div>
                </div>
                <div class="flexbox column align-center" style="gap: 48px; flex: 1 1 200px;">
                    <a href="https://www.dualb.it/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card
                            sponsor-card">
                            <div class="image image-staff dualbit"></div>
                            <h4>Dualbit</h4>
                        </div>
                    </a>
                </div>
                <div class="flexbox center align-center" style="justify-content: center; padding-top: 24px;">
                    <div style="text-align: justify-center;">
                        <h4>Tech</h4>
                    </div>
                </div>
                <div class="flexbox column align-center" style="gap: 48px; flex: 1 1 200px;">
                    <a href="https://netframe.it/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card sponsor-card">
                            <div class="image image-staff netframe"></div>
                            <h4>Netframe</h4>
                        </div>
                    </a>
                </div>
                <div class="flexbox center align-center" style="justify-content: center; padding-top: 24px;">
                    <div style="text-align: justify-center;">
                        <h4>Bronze</h4>
                    </div>
                </div>
                <div class="flexbox column align-center" style="gap: 48px; flex: 1 1 200px;">
                    <a href="https://atobit.it?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card sponsor-card">
                            <div class="image image-staff atobit"></div>
                            <h4>Atobit</h4>
                        </div>
                    </a>
                </div>
                <div class="flexbox center align-center" style="justify-content: center; padding-top: 24px;">
                    <div style="text-align: justify-center;">
                        <h4>Community</h4>
                    </div>
                </div>
                <div class="flexbox column align-center" style="gap: 48px; flex: 1 1 200px;">
                    <a href="https://www.jetbrains.com/?utm_source=website&utm_medium=referral&utm_campaign=devfest_modena_2024">
                        <div class="white-card sponsor-card">
                            <div class="image image-staff jetbrains"></div>
                            <h4>JetBrains</h4>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section>
            <FreeTicket />
            <SocialLinks />
        </section>
    </div>
</template>
<!-- style="background: url(/img/bg.jpg) no-repeat center center scroll" -->
