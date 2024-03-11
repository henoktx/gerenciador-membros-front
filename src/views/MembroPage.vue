<script setup lang="ts">
const fields = ["Apelido", "Telefone", "Endereço", "Data nascimento", "Data inclusão", "Diácono responsável"];
</script>

<template>
    <v-container
        class="h-screen d-flex align-center"
    >
        <v-card
            class="h-auto px-12 pb-13 pt-10 rounded-lg"
        >
            <v-card-title 
                class="text-h4 mb-8 w-100 text-center"
            >
                Fulano de Tal | id: {{ $route.params.id }}
            </v-card-title>
            
            <v-row>
                <v-col
                    cols="6"
                    v-for="item in fields"
                    :key="item"
                >
                    <v-card
                        :subtitle="item"
                        :variant="'tonal'"
                        class="rounded-lg"
                    >
                        <v-card-text 
                            class="text-h6"
                        >
                            {{ item }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>