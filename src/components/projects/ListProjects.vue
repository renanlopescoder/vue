<template>
    <b-container fluid>
        <div class="text-center m-5" v-show="loading">
            <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>

        <div v-show="!loading">
            <b-row>
                <b-col sm="12">
                    <h3 class="text-center">Projects</h3>
                </b-col>
            </b-row>

            <b-row class="mb-2">
                <b-col sm="12">
                    <b-form-input
                        v-model="filter"
                        placeholder="Search Project"
                    ></b-form-input>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="12">
                    <transition name="list-project">
                        <b-table
                            striped
                            hover
                            :items="projectFilter"
                            :fields="fields"
                        >
                            <template v-slot:cell(project)="row">
                                {{ row.item.project }}
                                <router-link
                                    :to="{
                                        name: 'updateProject',
                                        params: { id: row.item._id },
                                    }"
                                >
                                    <b-button
                                        variant="dark"
                                        class="mr-2 mt-2"
                                        block
                                    >
                                        Update
                                    </b-button>
                                </router-link>
                                <b-button
                                    variant="danger"
                                    @click="deleteProject(row.item)"
                                    class="mr-2 mt-2"
                                    block
                                >
                                    Delete
                                </b-button>
                            </template>
                        </b-table>
                    </transition>
                </b-col>
            </b-row>
        </div>
    </b-container>
</template>
<script>
import ProjectService from "../../domain/project/ProjectService";
export default {
    data: function() {
        return {
            data: [],
            filter: "",
            loading: true,
            fields: [
                {
                    key: "project",
                    sortable: true,
                },
                {
                    key: "author",
                    sortable: true,
                },
                {
                    key: "technologies",
                    sortable: true,
                },
            ],
        };
    },
    methods: {
        deleteProject: function(project) {
            this.service.delete(project._id);
            const index = this.data.indexOf(project);
            this.data.splice(index, 1);
        },
    },
    computed: {
        projectFilter: function() {
            if (this.filter) {
                const exp = new RegExp(this.filter.trim(), "i");
                return this.data.filter(item => exp.test(item.project));
            } else {
                return this.data;
            }
        },
    },
    created: async function() {
        this.service = new ProjectService(this.$http);
        this.data = await this.service.listAll();
        this.loading = false;
    },
};
</script>

<style scoped></style>
