<template>
    <div class="flex flex-col items-center justify-center h-screen w-screen z-20">
        <div class="inline-block">
            <h1 class="font-mono text-[40px] typewriter">Log into your account.</h1>
        </div>
        <form action="">

        </form>
    </div>
</template>

<style>
.typewriter {
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    border-right: .15em solid black;
    /* The typwriter cursor */
    white-space: nowrap;
    /* Keeps the content on a single line */
    margin: 0 auto;
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em;
    /* Adjust as needed */
    animation:
        typing 3.5s steps(22, end),
        blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: black;
    }
}
</style>