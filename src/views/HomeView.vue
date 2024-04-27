<template>
    <div class="relative left-16 w-screen h-screen top-0 m-0">
        <SideAddon />
        <div class="relative w-screen h-screen top-0 m-0">
            <div class="custom-shape-divider-top-1714245192">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        class="shape-fill"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import SideAddon from '../components/SideAddon.vue';

</script>

<style>
.custom-shape-divider-top-1714245192 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1714245192 svg {
    position: relative;
    display: block;
    width: calc(118% + 1.3px);
    height: 210px;
}

.custom-shape-divider-top-1714245192 .shape-fill {
    fill: #161925;
}
body {
    background-color: #8EA8C3;
}
</style>