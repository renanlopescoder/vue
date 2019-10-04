<template>
    <b-container class="mt-2" fluid>
        <div class="text-center m-5" v-show="loading">
            <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>
        <div v-show="!loading">
            <b-row class="mb-3">
                <b-col md="12" sm="12">
                    <b-button block variant="dark" @click="getRandomDeck"
                        >Generate Deck</b-button
                    >
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="12" md="3" v-for="card of deck" :key="card.idName">
                    <clash-media type="cards" :item="card">
                        <ul>
                            <li><b>Elixir Cost:</b> {{ card.elixirCost }}</li>
                            <li><b>Type:</b> {{ card.type }}</li>
                            <li><b>Rarity:</b> {{ card.rarity }}</li>
                            <li><b>Arena:</b> {{ card.arena }}</li>
                        </ul>
                    </clash-media>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>

<script>
import ClashMedia from "../shared/clash-media/ClashMedia";
import ClashService from "../../domain/clash/ClashService";

export default {
    components: {
        "clash-media": ClashMedia,
    },
    data: function() {
        return {
            deck: [],
            loading: true,
        };
    },
    methods: {
        getRandomDeck: async function() {
            this.loading = true;
            this.deck = await this.service.getRandomDeck();
            this.loading = false;
        },
    },
    created: function() {
        this.service = new ClashService(this.$http);
        this.getRandomDeck();
    },
};
</script>

<style></style>
