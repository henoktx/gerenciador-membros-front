<script setup="ts">
const navItens = [
    { 
        title: "Dashboard",
        props: {
            to: "/",
            prependIcon: "mdi-view-dashboard"
        }
    }, 
    { 
        title: "Membros",
        props: {
            to: "membros",
            prependIcon: "mdi-account-group"
        }
    }, 
    { 
        title: "Diáconos",
        props: {
            to: "diaconos",
            prependIcon: "mdi-account-supervisor"
        } 
    }
];
</script>

<template>
    <v-navigation-drawer
        theme="dark"
    >
        <v-list-item 
            height="150" 
            title="Gerenciador de membros" 
        />
        <v-list :items="navItens" />
    </v-navigation-drawer>
</template>