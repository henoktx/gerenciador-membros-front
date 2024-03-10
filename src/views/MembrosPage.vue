<script setup lang="ts">
import Modal from '../components/Modal.vue';
import { ref } from 'vue';

const dialog = ref(false);
</script>

<template>
    <div class="membros">
        <h1>Membros</h1>
        <v-btn color="info" @click="dialog = true">Adicionar novo membro</v-btn>

        <Modal :isActivate="dialog" @close="dialog = false"/>
    </div>
</template>
