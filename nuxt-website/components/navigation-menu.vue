<template>
    <section 
        style="position: fixed; z-index: 99; overflow-y: scroll; gap: 48px;"
        class="full background flexbox column pad-24"
    >
        <div class="flexbox justify-between pad-24 wrap" style="padding-top: 120px; gap: 48px;">
            <div class="flexbox column" style="gap: 48px; flex: 1 1 470px;">
                <h1><RouterLink to="/">Home</RouterLink></h1>
                <h1>Programma</h1>
                <h1>Speaker</h1>
            </div>
            <div class="flexbox column gap-24 wrap" style="gap: 48px; flex: 1 1 470px;">
                <h1>News</h1>
                <h1><a href="https://www.eventbrite.it/e/devfest-modena-2024-tickets-1006887817567?aff=oddtdtcreator" target="_blank">Ticket</a></h1>
                <h1>Sponsor</h1>
            </div>
        </div>
        <hr />
        <SecondaryLinks />
    </section>
</template>