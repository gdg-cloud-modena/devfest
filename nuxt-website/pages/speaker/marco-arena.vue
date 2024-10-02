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
                        <p>C++ Software Engineer & Community Lead</p>
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
                    Coding Gym is an international format of programming labs open to any language. It is designed for continuous improvement, guided by the principles of the Coding Gym manifesto:
                </p>
                <br />
                <p>
                    "We help others practice programming, software development, and communication skills by making coding laboratories open to any programming language where cooperation is valued over competition, doing and sharing are valued over teaching, and where competing solutions come with discussing and understanding tradeoffs."
                </p>
                <br />
                <p style="font-weight: bold;">
                    How It Works:
                </p>
                <p>
                    Coding Gym is NOT a contest!
                </p>
                <p>
                    Participants ("gymmers") work in pairs on 3 self-contained problems using any programming language of their choice, all within a browser.
                </p>
                <p>
                    After each exercise, a Coding Gym "trainer" moderates a retrospective session where gymmers present their solutions, discussing pros, cons, and tradeoffs.
                </p>
                <p>
                    The trainer may also set new questions such as "What happens if the input size increases by 100 times?", or may introduce new solutions and concepts, potentially altering the problem on the spot to encourage discussion on changes and their impact. These variations can lead to discovering new ways of simplifying or complicating the problem.
                </p>
                <br />
                <p style="font-weight: bold;">
                    Philosophy:
                </p>
                <p>
                    Coding Gym is not tied to any specific paradigm or programming language. It uses any tool, technique, or paradigm necessary to achieve its goals, promoting freedom in problem-solving.
                </p>
                <p>
                    For each problem, Coding Gym encourages gymmers to explore, study, and experiment with alternative solutions and variations. This approach helps participants break free from their mental patterns, evolving and learning new concepts and techniques. Each new solution brings compromises, advantages, and disadvantages that must be identified and understood as part of the practice.
                </p>
                <p>
                    A key aspect of Coding Gym is recognizing that technical skills alone are not sufficient. Professionals also need to master effective communication and collaboration. Coding Gym provides opportunities to practice these skills directly, enabling participants to collaborate with others and to explain their ideas and solutions in public. We eliminate stress, anxiety, and strict deadlines, replacing them with a fun and friendly atmosphere that fosters creativity and personal growth.
                </p>
                <br />
                <p>
                    More information on <a href="https://coding-gym.org">coding-gym.org</a>
                </p>
                <br />
                <p>
                    Coding Gym has been conceived, developed, and directed by Marco Arena since 2016.
                </p>
            </template>
            <template #description>
                <h2>Bio</h2>
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
                <br />
                <!--Links-->
                <div class="flexbox" style="gap: 12px;">
                    <a href="https://www.linkedin.com/in/marcoarena/" target="_blank">
                        <img src="@/assets/img/linkedin.png" style="height: 24px;" />
                    </a>
                </div>

            </template>
        </NuxtLayout>
    </div>
</template>
<script setup lang="ts">
    definePageMeta({
        layout: false,
    });
</script>