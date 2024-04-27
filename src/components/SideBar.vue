
import { BIconPlusSquare } from 'bootstrap-icons-vue';

import { BIconBoxArrowInRight } from 'bootstrap-icons-vue';

import { BIconGithub } from 'bootstrap-icons-vue';

import { BIconPersonCircle } from 'bootstrap-icons-vue';
<template>
    <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-first text-secondary shadow-lg z-50">
        <router-link to="/">
            <div class="sidebar-icon group">
                <BIconHouse />
            </div>
        </router-link>
        <router-link to="/login">
            <div class="sidebar-icon group">
                <BIconBoxArrowInRight />
            </div>
        </router-link>
        <router-link to="/register">
            <div class="sidebar-icon group">
                <BIconPlusSquare />
            </div>
        </router-link>
        <router-link to="/logout">
            <div class="sidebar-icon group">
                <BIconBoxArrowLeft />
            </div>
        </router-link>
        <a href="">
            <div class="sidebar-icon group">
                <BIconGithub />
            </div>
        </a>
    </div>
</template>
