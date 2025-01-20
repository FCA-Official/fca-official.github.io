<template>
    <div class="q-pa-none" style="max-width: 720px">
        <q-list bordered padding>
            <q-item clickable @click="updateApp">
                <q-item-section top avatar>
                    <q-avatar color="primary" text-color="white" :icon="appText.updateIcon" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ appText.updateTitle }}</q-item-label>
                    <q-item-label caption lines="2">{{ appText.updateInfo }}</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </div>

</template>

<script setup>
import { appText } from "../constants/text"
import * as K from "../constants/constants"
const updateApp = async () => {
    window.location.reload(true)
}

</script>

<style scoped>
.infoText {
    font-size: 1.25rem;
}

.dateText {
    font-size: 1rem;
}
</style>
