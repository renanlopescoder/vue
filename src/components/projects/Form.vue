<template>
  <b-container class="mt-2">
    <b-row>
      <b-col sm="12">
        <b-form @submit.prevent="save()">
          <label for="name">Name</label>
          <b-input id="name" type="text" v-model.lazy="project.project" />

          <label class="mt-2" for="author">Author</label>
          <b-input id="author" type="text" v-model.lazy="project.author" />

          <label class="mt-2" for="technologies">Technologies</label>
          <b-input
            id="technologies"
            type="text"
            v-model.lazy="project.technologies"
          />
          <b-row>
            <b-col sm="6" md="6" class="mt-2"
              ><router-link :to="{ name: 'home' }"
                ><b-button block variant="dark" type="submit"
                  >Back</b-button
                ></router-link
              ></b-col
            >
            <b-col sm="6" md="6" class="mt-2"
              ><b-button block variant="success" type="submit"
                >Save</b-button
              ></b-col
            >
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProjectService from "../../domain/project/ProjectService";
import Project from "../../domain/project/Project";

export default {
  data: function() {
    return {
      project: new Project(),
      id: this.$route.params.id
    };
  },
  methods: {
    save: async function() {
      await this.service.save(this.project);
      if (this.id) this.$router.push({ name: "home" });
      this.project = new Project();
    }
  },
  created: async function() {
    this.service = new ProjectService(this.$http);
    if (this.id) {
      this.project = await this.service.select(this.id);
    }
  }
};
</script>

<style></style>
