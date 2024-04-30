<template>
    <Transition name="addon">
        <div class="fixed top-0 left-16 m-0 h-screen w-40 bg-second flex flex-col shadow-lg z-40" v-if="showAddon">
            <div class="sidebar-addon-top">
                <div class="group">
                    <span class="group-hover:scale-100 addon-icon-popup">
                        close
                    </span>
                    <BIconCaretLeftFill class="cursor-pointer" @click="changeAddonState" />
                </div>
            </div>
            <div class="sidebar-addon-icon">
                <a href="#about-us" class="group">
                    <span class="border-fifth group-hover:border-b-2 transition-all duration-50 ease-in">
                        About us
                    </span>
                </a>
            </div>
            <div class="sidebar-addon-icon">
                <a href="#get-app" class="group">
                    <span class="border-fifth group-hover:border-b-2 transition-all duration-50 ease-in">
                        Get app
                    </span>
                </a>
            </div>
            <div class="sidebar-addon-icon">
                <a href="#accounts" class="group">
                    <span class="border-fifth group-hover:border-b-2 transition-all duration-50 ease-in">
                        Accounts
                    </span>
                </a>
            </div>
            <div class="sidebar-addon-icon">
                <a href="#other-projects" class="group">
                    <span class="border-fifth group-hover:border-b-2 transition-all duration-50 ease-in">
                        Other projects
                    </span>
                </a>
            </div>
        </div>
    </Transition>
    <div v-if="!showAddon"
        class="fixed w-10 h-10 top-2 rounded-r-md bg-second z-40 flex items-center justify-center text-sixth group">
        <BIconCaretRightFill class="cursor-pointer" @click="changeAddonState" />
        <span class="open-addon-popup">
            open details
        </span>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showAddon: false,
        };
    },
    methods: {
        changeAddonState() {
            this.showAddon = !this.showAddon;
        },
    }
};

</script>

<style>
.addon-enter-active {
    transition: all 0.3s ease-in-out;
}

.addon-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.addon-enter-from,
.addon-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>