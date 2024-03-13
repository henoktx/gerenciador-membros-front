<script setup lang="ts">
import { getDiaconos } from '@/service/services';
import { onBeforeMount, ref, watch } from 'vue';

const diaconos = ref<Diacono[]>([]);

const props = defineProps<{
    isActivate: boolean,
    membro: Membro,
}>();

const emit = defineEmits<{
    (e: "operation", value: string, membro?: Membro): string,
}> ();

const membro = ref<Membro>({} as Membro);

watch(props, () => {
    membro.value = props.membro;
});

function handleConclusion() {
    emit('operation', 'conclusion', membro.value);
}

function handleCancel() {
    emit('operation', 'cancel');
}

onBeforeMount(async () => {
    const result = await getDiaconos();

    if (result != null) {
        diaconos.value = result;
    }
})
</script>

<template>
    <v-dialog
        v-model="props.isActivate"
        persistent :overlay="false"
        max-width="700px"
        transition="dialog-transition"
    >
        <v-card
            prepend-icon="mdi-account"
            title="Membro"
            class="rounded-lg pa-2"
        >
            <v-card-text>
                <v-row 
                    dense
                    class="mt-2"
                >
                    <v-col
                        cols="7"
                    >
                        <v-text-field
                            label="Nome completo*"
                            required
                            v-model="membro.nomeCompleto"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="5"
                    >
                        <v-text-field
                            label="Apelido"
                            v-model="membro.apelido"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="4"
                    >
                        <v-text-field
                            label="Nascimento*"
                            required
                            type="date"
                            v-model="membro.dataNascimento"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="4"
                    >
                        <v-text-field
                            label="Inclusão*"
                            required
                            type="date"
                            v-model="membro.dataInclusao"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="4"
                    >
                        <v-text-field
                            label="Telefone*"
                            required
                            v-model="membro.telefone"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="7"
                    >
                        <v-text-field
                            label="Endereço*"
                            required
                            v-model="membro.endereco"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="5"
                    >
                        <v-autocomplete
                            v-model="membro.diaconoResponsavel"
                            :items="diaconos.map((m) => { return { title: m.nomeCompleto, value: m } })"
                            label="Diácono responsável"
                            auto-select-first
                        ></v-autocomplete>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn
                    text="Cancelar"
                    variant="plain"
                    @click="handleCancel"
                ></v-btn>
                
                <v-btn 
                    text="Concluir"
                    color="primary"
                    @click="handleConclusion"
                ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>