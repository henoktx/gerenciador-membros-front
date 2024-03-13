<script setup lang="ts">
import { ref } from 'vue';
import { router } from '@/router';
import FormModal from '../components/FormModal.vue';
import Table from '../components/Table.vue';
import { create, get } from '@/service/services';
import { useDebounceFn } from '@vueuse/core';

const modal = ref(false);
const loading = ref(false);
const search = ref("");
const headers = ref([
    { title: "Nome completo", value: "nomeCompleto" },
    { title: "Diácono responsável", value: "diaconoResponsavel.nomeCompleto " },
    { title: "Endereço", value: "endereco" },
    { title: "Telefone", value: "telefone" },
]);

const debouncedFn = useDebounceFn((newValue) => {
    loading.value = false;
    search.value = newValue;
}, 1000);

async function handleModalOperation(operation: string, membro?: Membro) {
    if (operation === "conclusion" && membro != undefined) {
        const result = await create(membro);

        if (result != null) {
            router.push({ name: "Membro", params: { id: result.id } });
        }
    }

    modal.value = false;
}
</script>

<template>
    <v-container 
        class="h-screen d-flex flex-column justify-center w-75"
    >
        <v-card
            class="px-12 pb-13 pt-10 rounded-lg"
            height="700"
        >
            <v-card-title
                class="text-h4 mb-8"
            >
                Membros
            </v-card-title>

            <v-row>
                <v-col
                    cols="11"
                    class="pl-6"
                >
                    <v-text-field
                        label="Pesquisar"
                        prepend-inner-icon="mdi-magnify"
                        variant="outlined"
                        hide-details
                        clearable
                        :loading="loading"
                        @update:model-value="(newValue) => { loading = true; debouncedFn(newValue) }"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="1"
                    class="d-flex align-center"    
                >
                    <v-btn
                        color="info"
                        class="x-large rounded h-100"
                        icon="mdi-account-plus"
                        @click="modal = true"
                    ></v-btn>
                </v-col>
            </v-row>

            <v-row>
                <Table 
                    :search="search" 
                    :get-itens="get"
                    :headers="headers"
                />
            </v-row>
        </v-card>

        <FormModal 
            :isActivate="modal"
            :membro="{} as Membro"
            @operation="(operation: string, membro?: Membro) => { handleModalOperation(operation, membro) }"
        />
    </v-container>
</template>
