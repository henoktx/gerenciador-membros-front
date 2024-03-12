<script setup lang="ts">
import { getById } from '@/service/services';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = Number(route.params.id);
const membro = ref<Membro>({} as Membro);
const loading = ref(true);

async function getMembro(id: number) {
    const result = await getById(id);

    if (result == null) {
        console.log("error");
    } else {
        membro.value = result;
    }

    loading.value = false;
}

onBeforeMount( async () => {
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
                v-if="membro.diaconoResponsavelId == null"
                class="text-h6 mt-1 text-center"
            >
                (Diácono)
            </v-card-subtitle>
            
            <v-row
                class="mt-8"
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
                    v-if="membro.diaconoResponsavelId != null"
                >
                    <v-card
                        subtitle="Diácono responsável"
                        :variant="'tonal'"
                        class="rounded-lg"
                    >
                        <v-card-text 
                            class="text-h6"
                        >
                            {{ membro.diaconoResponsavelId }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>