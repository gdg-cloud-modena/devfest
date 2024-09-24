<template>
    <Title>DevFest Modena 2024 &mdash; Workshop Marco Arena</Title>
    <div>
        <NuxtLayout name="speaker-page" speaker-image="marco-arena"> 
            <template #image>
                <div style="max-width: 100px; max-height: 200px;">
                    <img style="max-width: 100%; max-height: 100%;" src="@/assets/svg/square-brackets.svg">
                </div>
            </template>
            <template #title> Workshop Marco Arena </template>
            <template #speaker-info>
                <div class="flexbox column pad-24" style="gap: 12px; width: 100%;">
                    <div class="info-box">
                        <h3>Speaker</h3>
                        <p>Marco Arena</p>
                    </div>
                    <div class="info-box">
                        <h3>Azienda</h3>
                        <p>Tetra Pak</p>
                    </div>
                    <div class="info-box">
                        <h3>Ruolo</h3>
                        <p>Artificial Intelligence Engineering Lead</p>
                    </div>
                    <div class="info-box">
                        <h3>Lingua</h3>
                        <p>English / Italiano</p>
                    </div>
                </div>
            </template>
            <template #talk>
                <h2>Workshop</h2>
                <p>
                    Marco Arena is a software engineer and community lead with extensive experience in C++ development.
                 </p>
                 <p>
                    He is currently pioneering Artificial Intelligence adoption at Tetra Pak as a technical leader. Previously, he worked as a software engineer for the Ferrari F1 racing team, focusing on mission-critical software and driving the adoption of the latest C++ standards.
                 </p>
                 <p>
                    Beyond coding, Marco is a seasoned community manager, blogger, and speaker with over 11 years of experience. He founded the Italian C++ Community (2013), Coding Gym (2016), and ML Modena (2020), and co-founded the ISO C++ Italian body (2020). His initiatives have attracted thousands of participants.
                 </p>
                 <p>
                    Recognized for his contributions, Marco has received the Microsoft MVP award nine times since 2016, highlighting his significant impact on the community.
                 </p>
            </template>
            <template #description>
                <h2>Bio</h2>
                <p>
                    Marco Arena...
                </p>
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/marcoarena/" target="_blank">
                        <img src="@/assets/img/linkedin.png" style="height: 24px;" />
                    </a>
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