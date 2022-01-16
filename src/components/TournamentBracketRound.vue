<template>
    <div v-bind:id="'round-' + round">
        <div class="round-collapse" @click="collapse" :class="{'active-round': !isCollapsed}">
            <h1>Round {{round}}</h1>
        </div>
        <div class="round-content">
            <TournamentBracketElement v-for="game in games" :key="game.id" :game="game"/>
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
            }
        }
    },
    props: {
        games: Array,
        round: Number,
    },
    components: {
        TournamentBracketElement,
    },
    methods: {
        collapse() {
            this.isCollapsed = !this.isCollapsed;
            let query = "#round-" + this.round + " .round-content";
            let content = document.querySelector(query);
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        },
    }
};
</script>