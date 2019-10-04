<template>
    <div id="app">
        <custom-menu></custom-menu>
        <transition name="page">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";
export default {
    components: {
        "custom-menu": Menu,
    },
    data: function() {
        return {};
    },
    name: "app",
};
</script>

<style scoped>
.page-enter,
.page-leave-active {
    opacity: 0;
}
.page-leave-active {
    transition: opacity 0.2s;
}

.page-enter-active {
    transition: opacity 2s;
}
</style>
