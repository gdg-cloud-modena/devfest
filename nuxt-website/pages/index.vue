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
                    background: url(/img/bg.jpg) no-repeat center center fixed;
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
                        L'evento nasce dal lavoro congiunto delle comunità locali: GDG Cloud Modena, Modena Full Stack, Flutter Modena, ML Modena, Conoscere Linux, Reggio Emilia Full Stack e GDG Bologna.
                    </h4>
                    <div class="flexbox" style="gap: 24px; padding-bottom: 24px;">
                        <a class="button-like" href="https://www.eventbrite.it/e/devfest-modena-2024-tickets-1006887817567?aff=oddtdtcreator" target="_blank"> Riserva un biglietto! </a>
                        <a class="button-like" href="https://sessionize.com/devfest-modena2024/" target="_blank"> Candidati come speaker </a>
                    </div>
                </div>
                <div class="flexbox align-center justify-center" style="gap: 24px; flex: 1 1 560px;">
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/svg/people.svg" />
                        </div>
                        <div class="highlight">
                            <h3 class="text-accent">300</h3>
                        </div>
                        <h4>Ospiti</h4>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/svg/room.svg" />
                        </div>
                        <div class="highlight">
                            <h3 class="text-accent-3">3</h3>
                        </div>
                        <h4>Track</h4>
                    </div>
                </div>
            </div>
        </section>
        <section 
            id="speakers-home"
            class="flexbox column pad-24"
            style="gap: 48px;"
        >   
            <div class="flexbox justify-between column justify-center" style="pad: 24px">
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
            </div>
        </section>
        <section class="full ternary-background" style="border-radius: 24px;">
            <TicketWidget />
        </section>
        <section>
            <FreeTicket />
            <SocialLinks />
        </section>
    </div>
</template>
<!-- style="background: url(/img/bg.jpg) no-repeat center center scroll" -->