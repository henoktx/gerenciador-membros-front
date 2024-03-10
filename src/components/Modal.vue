<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    isActivate: boolean
}>();

defineEmits<{"close": []}> ();
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
        >
            <v-card-text>
                <v-row dense>
                    <v-col
                        cols="12"
                        md="7"
                        sm="7"
                    >
                        <v-text-field
                            label="Nome completo*"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="5"
                        sm="5"
                    >
                        <v-text-field
                            label="Apelido"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        sm="4"
                    >
                        <v-text-field
                            label="Nascimento*"
                            required
                            type="date"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        sm="4"
                    >
                        <v-text-field
                            label="Inclusão*"
                            required
                            type="date"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        sm="4"
                    >
                        <v-text-field
                            label="Telefone*"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="7"
                        sm="7"
                    >
                        <v-text-field
                            label="Endereço*"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        sm="5"
                    >
                    <v-autocomplete
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
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
                    @click="$emit('close')"
                ></v-btn>
                
                <v-btn 
                    @click="$emit('close')"
                    color="primary"
                    >
                        Concluir
                    </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>