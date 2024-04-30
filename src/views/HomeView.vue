<template>
    <div class="relative left-16 w-screen h-screen top-0 m-0">
        <SideAddon />
        <Content />
        <div class="fixed w-screen h-[600px] top-0 m-0 z-0 sm:scale-0 lg:scale-100">
            <TresCanvas clear-color="#8EA8C3">
                <TresPerspectiveCamera />
                <TresMesh ref="boxRef" :position="[positionX, positionY, positionZ]">
                    <TresBoxGeometry />
                    <TresMeshBasicMaterial :color="'#161925'" />
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
                <h1 id="get-app" class="text-end font-mono text-[40px] mr-20">
                    Get the app
                </h1>
                <p class="text-end mr-20 mt-10">
                    We have a windows desktop application availible for download. You can download it from the link
                    below.
                </p>
                <div class="border-first border-b-2 w-[50%] mr-20 mt-10"></div>
                <div class="relative flex flex-row w-[100%] h-16 justify-end">
                    <button class="z-20 mt-10 mr-36 button-get-app">Get app</button>
                </div>
            </div>
            <div class="account-text">
                <div class="relative mx-auto">
                    <h1 id="accounts" class="text-start font-mono text-[40px]">
                        Create an account
                    </h1>
                    <p>
                        You can create an account by clicking the button below.
                    </p>

                    <button class="create-account-button">
                        Create an account
                    </button>
                </div>
                <div class="relative mx-auto">
                    <h2 id="#" class="text-start font-mono text-[40px]">
                        Log into an account
                    </h2>
                    <p>
                        You can log into your account by clicking the button below.
                    </p>
                    <button class="log-in-button">
                        Log in
                    </button>
                </div>
            </div>
            <div class="other-projects-text">
                <h1 id="other-projects" class="font-mono text-[40px] w-[50%] mr-20 text-center">
                    Our other projects
                </h1>
                <p class="w-[50%] mr-20 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras pede
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
const positionY = ref(1);

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
                console.log(currentSection.value)
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
        } else {
            positionX.value = 3 - scrollPos / 270;
            positionZ.value = 0 + scrollPos / 270;
        }
    } else if (scrollPos > 878 && scrollPos < 1342) {
        positionX.value = -0.2259259259259258;
        positionZ.value = 3.225925925925926;
    } else if (scrollPos > 1342 && scrollPos < 2000) {
        if (scrollPos < 2000 && scrollPos > 1342) {
            positionX.value = -0.2259259259259258 + (scrollPos - 1342) / 400;
            positionZ.value = 3.225925925925926 - (scrollPos - 1342) / 400;
        } else {
            positionX.value = -0.2259259259259258 - (scrollPos - 1342) / 400;
            positionZ.value = 3.225925925925926 + (scrollPos - 1342) / 400;
        }
    } else if (scrollPos > 2000 && scrollPos < 3030) {
        positionX.value = 1.3040740740740742;
        positionZ.value = 1.6959259259259258;
    } else if (scrollPos > 3030) {
        if (scrollPos < 3030 && scrollPos > 2000) {
            positionY.value = 1 - (scrollPos - 3030) / 300;
        } else {
            positionY.value = 1 + (scrollPos - 3030) / 300;
        }
    }
}

</script>

<style>
body {
    background-color: #8EA8C3;
}
</style>