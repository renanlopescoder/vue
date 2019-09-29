<template>
  <b-container class="mt-2" fluid>
    <div class="text-center m-5" v-show="loading">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <div v-show="!loading">
      <b-row>
        <b-col sm="12" md="3" v-for="arena of arenas" :key="arena.idName">
          <clash-media type="arenas" :item="arena">
            <ul>
              <li><b>Number:</b> {{ arena.number }}</li>
              <li><b>Gold:</b> {{ arena.victoryGold }}</li>
              <li><b>Trophies:</b> {{ arena.minTrophies }}</li>
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
    "clash-media": ClashMedia
  },
  data: function() {
    return {
      arenas: [],
      loading: true
    };
  },
  created: async function() {
    this.service = new ClashService(this.$http);
    this.arenas = await this.service.listAllArenas();
    this.loading = false;
  }
};
</script>

<style></style>
