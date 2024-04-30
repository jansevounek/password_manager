<template>
    <div class="relative left-16 w-screen h-screen top-0 m-0">
        <SideAddon />
        <div class="homepage-text">
            <h1 class="text-start font-mono text-[40px] w-screen">
                Password_manager
            </h1>
            <br>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras pede libero, dapibus nec, pretium sit
                amet, tempor quis. Maecenas aliquet accumsan leo. Pellentesque sapien. Aliquam erat volutpat. Maecenas
                aliquet accumsan leo. Sed convallis magna eu sem. Phasellus rhoncus. Nullam rhoncus aliquam metus. Etiam
                sapien elit, consequat eget, tristique non, venenatis quis, ante. Maecenas lorem. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Morbi scelerisque luctus velit. Aenean placerat. Maecenas libero.
                Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
                asperiores repellat. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio,
                vitae placerat pede sem sit amet enim. Maecenas fermentum, sem in pharetra pellentesque, velit turpis
                volutpat ante, in pharetra metus odio a lectus. </p>
        </div>
        <div class="fixed w-screen h-[600px] top-0 m-0 z-0">
            <TresCanvas clear-color="#8EA8C3">
                <TresPerspectiveCamera />
                <TresMesh ref="boxRef" :position="[3, 1, 0]">
                    <TresBoxGeometry />
                    <TresMeshNormalMaterial />
                </TresMesh>
            </TresCanvas>
        </div>

    </div>
</template>

<script setup>
import SideAddon from '../components/SideAddon.vue';
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { ref } from 'vue';

const { onLoop } = useRenderLoop();

const boxRef = ref();

onLoop(( {delta, elapsed} ) => {
    if (!boxRef.value) return;

    boxRef.value.rotation.z += delta;
    boxRef.value.rotation.y = elapsed;
});
</script>

<style>
body {
    background-color: #8EA8C3;
}
</style>