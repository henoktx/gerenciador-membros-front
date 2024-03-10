<script setup lang="ts">
import { router } from '../router';
import Modal from '../components/Modal.vue';
import { ref } from 'vue';

const dialog = ref(false);

function teste() {
    router.push({ name: "Diacono", params: { id: 1 } });
}
</script>

<template>
    <div class="diaconos">
        <h1>Diáconos</h1>
    </div>
</template> 