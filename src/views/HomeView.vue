<template>
    <div class="relative left-16 w-screen h-screen top-0 m-0">
        <SideAddon />
        <Content />
        <div class="fixed w-screen h-[600px] top-0 m-0 z-0 sm:scale-0 lg:scale-100">
            <TresCanvas clear-color="#8EA8C3">
                <TresPerspectiveCamera />
                <TresMesh ref="boxRef" :position="[positionX, 1, positionZ]"
                    v-bind:style="{ transform: `translateX(${positionX}px)` }">
                    <TresBoxGeometry />
                    <TresMeshNormalMaterial />
                </TresMesh>
            </TresCanvas>
        </div>
        <div class="homepage-text">
            <div class="main-text">
                <h1 id="about-us" class="text-start font-mono text-[40px]">
                    Password_manager
                </h1>
                <br>
                <br>
                <p class="text-start">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras pede libero,
                    dapibus nec, pretium sit
                    amet, tempor quis. Maecenas aliquet accumsan leo. Pellentesque sapien. Aliquam erat volutpat.
                    Maecenas
                    aliquet accumsan leo. Sed convallis magna eu sem. Phasellus rhoncus. Nullam rhoncus aliquam metus.
                    Etiam
                    sapien elit, consequat eget, tristique non, venenatis quis, ante. Maecenas lorem. Lorem ipsum dolor
                    sit
                    amet, consectetuer adipiscing elit. Morbi scelerisque luctus velit. Aenean placerat. Maecenas
                    libero.
                    Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Itaque earum rerum hic tenetur
                    a
                    sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                    doloribus
                    asperiores repellat. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies
                    odio,
                    vitae placerat pede sem sit amet enim. Maecenas fermentum, sem in pharetra pellentesque, velit
                    turpis
                    volutpat ante, in pharetra metus odio a lectus. </p>
            </div>
            <div class="get-app-text">
                <h1 id="get-app" class="text-end font-mono text-[40px] w-[50%] mr-20">
                    Get the app
                </h1>
                <p class="text-end w-[50%] mr-20">
                    We have a windows desktop application availible for download. You can download it from the link below.
                </p>
            </div>
            <div class="get-app-text">
                <h1 id="accounts" class="text-end font-mono text-[40px] w-[50%] mr-20">
                    Get the app
                </h1>
                <p class="text-end w-[50%] mr-20">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras pede
                    libero, dapibus
                    nec,
                    pretium sit
                    amet, tempor quis. Maecenas aliquet accumsan leo. Pellentesque sapien. Aliquam erat volutpat.
                    Maecenas
                    aliquet accumsan leo. Sed convallis magna eu sem. Phasellus rhoncus. Nullam rhoncus aliquam metus.
                    Etiam
                    sapien elit, consequat eget, tristique non, venenatis quis, ante. Maecenas lorem. Lorem ipsum dolor
                    sit
                    amet, consectetuer adipiscing elit. Morbi scelerisque luctus velit. Aenean placerat. Maecenas
                    libero.
                    Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Itaque earum rerum hic tenetur
                    a
                    sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                    doloribus
                    asperiores repellat. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies
                    odio,
                    vitae placerat pede sem sit amet enim. Maecenas fermentum, sem in pharetra pellentesque, velit
                    turpis
                    volutpat ante, in pharetra metus odio a lectus. </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import SideAddon from '../components/SideAddon.vue';
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { ref, onMounted, provide } from 'vue';
import Content from '../components/Content.vue';

const currentSection = ref('');

const positionX = ref(3);
const positionZ = ref(0);

const { onLoop } = useRenderLoop();

const boxRef = ref();

onLoop(( {delta, elapsed} ) => {
    if (!boxRef.value) return;

    boxRef.value.rotation.z += delta;
    boxRef.value.rotation.y = elapsed;
});

onMounted(() => {
    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                const value = entry.target.getAttribute('id');
                currentSection.value = value;  
            }
        });
    });
    document.querySelectorAll('h1').forEach((section) => {
        observer1.observe(section);
    });
    window.addEventListener('scroll', handleScroll);
});

provide('currentSection', currentSection);

let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
}

function doSomething(scrollPos) {
    if (scrollPos < 878) {
        if (scrollPos < 10 && scrollPos > 0) {
            positionX.value = 3 + scrollPos / 270;
            positionZ.value = 0 + scrollPos / 270;
            console.log(positionX.value, positionZ.value)
        } else {
            positionX.value = 3 - scrollPos / 270;
            positionZ.value = 0 + scrollPos / 270;
        }
    } else {
        positionX.value = -0.2259259259259258;
        positionZ.value = 3.225925925925926;
    }
}

</script>

<style>
body {
    background-color: #8EA8C3;
}
</style>