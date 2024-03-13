<script setup lang="ts">
const emits = defineEmits<{
    (e: "decision", value: string): string
}>();

const props = defineProps<{
    isActivate: boolean
}>();

</script>

<template>
    <v-dialog
        v-model="props.isActivate"
        max-width="350px"
        transition="dialog-transition"
        persistent :overlay="false"
    >
        <v-card
            text="Deseja excluir esse membro?"
            title="Tem certeza?"
        >
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    class="ms-auto"
                    text="Não"
                    @click="$emit('decision', 'cancel')"
                ></v-btn>
                <v-btn
                    class="ms-auto"
                    text="Sim"
                    @click="$emit('decision', 'confirm')"
                ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>