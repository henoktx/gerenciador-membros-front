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
            to: { name: "Membros" },
            prependIcon: "mdi-account-group"
        }
    }, 
    { 
        title: "Diáconos",
        props: {
            to: { name: "Diaconos" },
            prependIcon: "mdi-account-supervisor"
        } 
    }
];
</script>

<template>
    <v-navigation-drawer
        permanent
        class="pa-md-4 mx-lg-auto"
    >
        <v-list-item 
            height="150" 
            title="Gerenciador de membros" 
        />

        <v-list-item
            v-for="{ title, props } in navItens"
            :key="title"
            :title="title"
            :to="props.to"
            :prepend-icon="props.prependIcon"
            class="rounded-lg mb-1 pa-3"
        >    
        </v-list-item>

    </v-navigation-drawer>
</template>