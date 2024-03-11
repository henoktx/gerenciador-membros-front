<script setup lang="ts">
import { router } from '@/router';
import Modal from '../components/Modal.vue';
import { ref } from 'vue';

const dialog = ref(false);
function teste() {
    router.push({ name: "Membro", params: { id: 1 } });
}
</script>

<template>
    <v-container>
        <h1>Membros</h1>
        <v-btn color="info" @click="dialog = true">Adicionar novo membro</v-btn>

        <Modal :isActivate="dialog" @close=" () => { dialog = false; teste() }"/>
    </v-container>
</template>
