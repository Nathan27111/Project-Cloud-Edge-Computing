import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () =>
            import("../views/Login.vue"),
    },
    {
        path: "/join",
        name: "Join",
        component: () =>
            import("../views/Join.vue"),
    },
    {
        path: "/create",
        name: "Create",
        component: () =>
            import("../views/Create.vue"),
    },
    {
        path: "/lobby",
        name: "Lobby",
        component: () =>
            import("../views/Lobby.vue"),
    },
    {
        path: "/",
        name: "Home",
        component: () =>
            import("../views/Home.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () =>
            import("../views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
