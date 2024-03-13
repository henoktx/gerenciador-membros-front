<script setup lang="ts">
import { router } from '@/router';
import { ref, watch } from 'vue';

interface rowInfo {
    index: number
}

const props = defineProps<{
    search?: string,
    headers: { title: string, value: string }[]
    getItens: (p: number, s: number, n: string) => Promise<MembroCollection | null>,
}>();

const loading = ref(true);
const items = ref<Membro[]>([]);
const pageable = ref<Pageable>({
    number: 1,
    size: 10,
    totalElements: 0,
    totalPages: 0
});

watch(props, () => {
    loadItems({ page: pageable.value.number, itemsPerPage: pageable.value.size });
});

async function loadItems(object: { page: number, itemsPerPage: number }) {
    loading.value = true;

    const result = await props.getItens(object.page - 1, object.itemsPerPage, props.search ?? "");

    if (result == null) {
        console.log("error");
        loading.value = false;
    } else {
        items.value = result.membros;
        pageable.value = result.pageable;
        pageable.value.number += 1;
        loading.value = false; 
    }
}

function handleColumnEvent(index: number) {
    const { id } = items.value[index];

    router.push({ name: "Membro", params: { id }})
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
            >
                <v-data-table-server
                    height="400"
                    v-model:items-per-page="pageable.size"
                    :headers="props.headers"
                    :items="items"
                    :items-length="pageable.totalElements"
                    :loading="loading"
                    @update:options="loadItems"
                    :hover="true"
                    @click:row="(_: unknown, b: rowInfo) => { handleColumnEvent(b.index) }"
                >
                </v-data-table-server>
            </v-col>
        </v-row>
    </v-container>
</template>