<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section 
        style="position: fixed; z-index: 99; overflow-y: scroll; gap: 48px; max-width: 100% !important;"
        class="full background flexbox column pad-24"
        id="navigation"
    >
        <section>
            <div class="flexbox justify-between pad-24 wrap" style="padding-top: 120px; gap: 48px;">
            <div class="flexbox column" style="gap: 48px; flex: 1 1 470px;">
                <h1><RouterLink to="/"><div style="flex: 1 1 470px">Home</div></RouterLink></h1>
                <!--h1><RouterLink to="/program">Programma</RouterLink></h1-->
                <h1><RouterLink to="/speakers"><div style="flex: 1 1 470px">Speaker</div></RouterLink></h1>
                <h1><RouterLink to="/team"><div style="flex: 1 1 470px">Team</div></RouterLink></h1>
            </div>
            <div class="flexbox column gap-24 wrap" style="gap: 48px; flex: 1 1 470px;">
                <h1><RouterLink to="/location"><div style="flex: 1 1 470px">Location</div></RouterLink></h1>
                <h1><a href="https://www.eventbrite.it/e/devfest-modena-2024-tickets-1006887817567?aff=oddtdtcreator" target="_blank"><div style="flex: 1 1 470px">Ticket</div></a></h1>
                <!--h1><RouterLink to="/sponsor-us">Sponsor</RouterLink></h1-->
            </div>
            </div>
            <hr />
            <SecondaryLinks />
        </section>
    </section>
</template>
<style lang="scss">
    #navigation {
        h1{
            font-size: 3rem;
            word-break: break-all;
        }
    }
    @media screen and (max-width: 500px){
        #navigation {
            h1{
                font-size: 3rem !important;
                word-break: break-all;
            }
        }
    }
</style>