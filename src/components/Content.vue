<template>
    <div
        class="fixed left-[85%] w-52 h-52 flex flex-col items-center justify-center z-20 sm:scale-0 md:scale-0 lg:scale-100">
        <a href="#about-us">
            <div class="heading-content z-20" :class="{ underline: 'about-us' == currentSection }">
                About us
            </div>
        </a>
        <a href="#get-app">
            <div class="heading-content z-20" :class="{ underline: 'get-app' == currentSection }">
                Get app
            </div>
        </a>
        <a href="#accounts">
            <div class="heading-content z-20" :class="{ underline: 'accounts' == currentSection }">
                Accounts
            </div>
        </a>
        <a href="#other-projects">
            <div class="heading-content z-20" :class="{ underline: 'other-projects' == currentSection }">
                Other projects
            </div>
        </a>
    </div>
</template>

<script setup>
import { ref, inject, watch } from 'vue';


const currentSection = inject('currentSection');

watch(currentSection, (newValue, oldValue) => {
    console.log(`currentSection changed from ${oldValue} to ${newValue}`);
});
</script>