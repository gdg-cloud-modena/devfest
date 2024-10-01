<template>
    <Title>DevFest Modena 2024 &mdash; Pattern Matching to the Rescue!</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="matteo-maria-terzuolo"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Pattern Matching to the Rescue! </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Matteo Maria Terzuolo</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Salty Spaghetti</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Dev by day, gamer by night</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>English / Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Speech</h2>
                <p>
                    This talk is going to be a deep dive into Pattern Matching in Dart. We'll explore how Dart simplifies dealing with complex data structures using clear and intuitive patterns.
                </p>
                <p>
                    The demo application includes a simple bank dashboard and a login form. If the SIM Swap API detects that a phone number was swapped recently, the verification code will not be sent, and additional security measures will be applied. A verification code will be sent via the Verify v2 API to authenticate the user if no recent swap is detected.
                </p>
                <p>
                    So buckle up, because by the end of this session, you'll be ready to level up your Dart game and tackle those data structures like a pro!
                </p>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    Matteo Maria is a Flutter Engineer who always loves to experiment with new things. He works with Flutter but is also interested in Rust and backend development. In his free time, he spends tons of hours playing video games and listening to every genre under the EDM umbrella
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/matteo-maria-terzuolo/" target="_blank">
                        <img src="@/assets/img/linkedin.png" style="height: 24px;" />
                    </a>
                </div>

            </template>
            <section class="full-w ternary-background"
          style="border-bottom: 2px solid #c9c9c9;">
            <FreeTicket />
        </section>
        <section class="full-w secondary-background">
            <SocialLinks />
        </section>
        </NuxtLayout>
    </div>
</template>
<script setup lang="ts">
    definePageMeta({
        layout: false,
    });
</script>