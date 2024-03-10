import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/membros", name: "Membros", component: () => import("../views/MembrosPage.vue") },
    { path: "/membro/:id", name: "Membro", component: () => import("../views/MembroPage.vue") },
    { path: "/diaconos", name: "Diaconos", component: () => import("../views/DiaconosPage.vue") },
    { path: "/diacono/:id", name: "Diacono", component: () => import("../views/DiaconoPage.vue") }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});