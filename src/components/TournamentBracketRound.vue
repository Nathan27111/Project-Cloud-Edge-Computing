<template>
    <div>
        <div class="round-collapse" @click="collapse" :class="{'active-round': !isCollapsed}">
            <h1 v-html="title"></h1>
        </div>
        <div class="round-content">
            <TournamentBracketElement />
            <TournamentBracketElement />
            <TournamentBracketElement />
        </div>
        
    </div>
</template>

<script>
import TournamentBracketElement from "../components/TournamentBracketElement.vue";

export default {
    data() {
        return {
            isCollapsed: {
                type: Boolean,
                default: false,
            },
        }
    },
    props: {
        title: String,
    },
    components: {
        TournamentBracketElement,
    },
    methods: {
        collapse() {
            this.isCollapsed = !this.isCollapsed;
            let content = document.querySelector(".round-content");
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        },
    }
};
</script>