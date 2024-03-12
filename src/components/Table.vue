<script setup lang="ts">
import { getAll } from '@/service/services';
import { ref } from 'vue';

const props = defineProps<{
    search: string,
    getItens: (p: number, s: number) => Promise<MembroCollection | null>,
}>();

const loading = ref(true);
const items = ref<Membro[]>([]);
const pageable = ref<Pageable>({
    number: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0
});

const headers = ref([
    { title: "Nome", value: "nomeCompleto" },
    { title: "Diácono responsável", value: "diaconoResponsavelId" },
    { title: "Telefone", value: "telefone" },
    { title: "Endereço", value: "endereco" }
]);


async function loadItems(Object: { page: number, itemsPerPage: number }) {
    loading.value = true;

    const result = await props.getItens(Object.page - 1, Object.itemsPerPage);
    // const result = await getAll(Object.page - 1, Object.itemsPerPage);

    if (result == null) {
        console.log("error");
    } else {
        items.value = result.membros;
        pageable.value = result.pageable;
        loading.value = false; 
        console.log("aa")
    }
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
            >
                <v-data-table-server
                    v-model:items-per-page="pageable.size"
                    :headers="headers"
                    :items="items"
                    :items-length="pageable.totalElements"
                    :loading="loading"
                    :search="search"
                    @update:options="loadItems"
                >
                </v-data-table-server>
            </v-col>
        </v-row>
    </v-container>
</template>