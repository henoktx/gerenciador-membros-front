<script setup lang="ts">
import { getById, remove, update } from '@/service/services';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { AxiosError } from 'axios';
import FormModal from '@/components/FormModal.vue';
import RemoveModal from '@/components/RemoveModal.vue';
import { router } from '@/router';

const route = useRoute();
const id = Number(route.params.id);

const membro = ref<Membro>({} as Membro);
const loading = ref(false);
const formModal = ref(false);
const removeModal = ref(false);

async function getMembro(id: number) {
    loading.value = true;

    const result = await getById(id);

    if (result == null) {   
        console.log("error");
    } else {
        membro.value = result;
    }

    loading.value = false;
}

async function handleFormModal(operation: string, newMembro?: Membro) {
    if (operation === "conclusion" && newMembro != undefined) {
        const result = await update(newMembro);

        if (typeof result != typeof AxiosError) {
            membro.value = newMembro
        }
    }

    formModal.value = false;
}

async function handleRemoveModal(decision: string) {
    loading.value = true;
    
    if (decision === "confirm") {
        const result = await remove(id);

        if (typeof result != typeof AxiosError) {
            router.push({ name: "Membros" });
        }
    }

    loading.value = false;
    removeModal.value = false;
}

onBeforeMount(async () => {
    getMembro(id);
})
</script>

<template>
    <v-container
        class="h-screen d-flex align-center justify-center"
    >
        <v-card
            class="h-auto px-12 pb-13 pt-10 rounded-lg"
            min-width="800"
        >
            <v-card-title 
                class="text-h4 text-center"
            >
                {{ membro.nomeCompleto }}
            </v-card-title>

            <v-card-subtitle
                v-if="membro.diaconoResponsavel == null"
                class="text-h6 mt-1 text-center"
            >
                (Diácono)
            </v-card-subtitle>
            
            <v-card-text>
                <v-row
                    class="mt-4"
                >
                    <v-col>
                        <v-card
                            subtitle="Apelido"
                            :variant="'tonal'"
                            class="rounded-lg"
                        >
                            <v-card-text 
                                class="text-h6"
                            >
                                {{ membro.apelido ?? "Não informado" }}
                            </v-card-text>
                        </v-card>
                    </v-col>
    
                    <v-col>
                        <v-card
                            subtitle="Telefone"
                            :variant="'tonal'"
                            class="rounded-lg"
                        >
                            <v-card-text 
                                class="text-h6"
                            >
                                {{ membro.telefone }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
    
                <v-row>
                    <v-col>
                        <v-card
                            subtitle="Endereço"
                            :variant="'tonal'"
                            class="rounded-lg"
                        >
                            <v-card-text 
                                class="text-h6"
                            >
                                {{ membro.endereco }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
    
                <v-row>
                    <v-col>
                        <v-card
                            subtitle="Nascimento"
                            :variant="'tonal'"
                            class="rounded-lg"
                        >
                            <v-card-text 
                                class="text-h6"
                            >
                                {{ membro.dataNascimento }}
                            </v-card-text>
                        </v-card>
                    </v-col>
    
                    <v-col>
                        <v-card
                            subtitle="Inclusão"
                            :variant="'tonal'"
                            class="rounded-lg"
                        >
                            <v-card-text 
                                class="text-h6"
                            >
                                {{ membro.dataInclusao }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
    
                <v-row>
                    <v-col
                        v-if="membro.diaconoResponsavel != null"
                    >
                        <v-card
                            subtitle="Diácono responsável"
                            :variant="'tonal'"
                            class="rounded-lg"
                        >
                            <v-card-text 
                                class="text-h6"
                            >
                                {{ membro.diaconoResponsavel.nomeCompleto }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-divider
                class="my-4"
            ></v-divider>

            <v-card-actions
                class="px-4"
            >
                <v-btn
                    class="rounded-lg"
                    color="green"
                    icon="mdi-arrow-left"
                    size="large"
                    variant="tonal"
                    @click="router.back()"
                ></v-btn>

                <v-spacer></v-spacer>
                
                <v-btn
                text="Remover"
                class="rounded-lg px-5"
                color="red"
                prepend-icon="mdi-account-remove"
                size="large"
                variant="tonal"
                @click="removeModal = true"
                ></v-btn>
                
                <v-btn
                    text="Editar"
                    class="rounded-lg px-5"
                    color="primary"
                    prepend-icon="mdi-account-edit"
                    size="large"
                    variant="tonal"
                    @click="formModal = true"
                ></v-btn>
            </v-card-actions>
        </v-card>
        <FormModal 
            :is-activate="formModal"
            :membro="membro"
            @operation="(operation: string, membro?: Membro) => { handleFormModal(operation, membro) }"
        />
        <RemoveModal 
            :is-activate="removeModal"
            @decision="(decision: string) => { handleRemoveModal(decision) }"
        />
    </v-container>
</template>