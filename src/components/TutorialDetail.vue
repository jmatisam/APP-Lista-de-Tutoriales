<script setup>
import TutorialDataService from "../services/TutorialDataService";
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'

const tutorial = ref();
const route = useRoute()

function getTutorial(id) {
    TutorialDataService.get(id)
        .then(response => {
            tutorial.value = response.data;
        })
        .catch(e => {
            console.log(e);
        });
}

onBeforeMount(() => {
    getTutorial(route.params.id)
})

</script>
<template>
    <div>
        <h1>Details</h1>
        <form>
            <div>
                <h2>Title</h2>
                <p>{{ tutorial.title }}</p>
            </div>
            <div>
                <h2>Description</h2>
                <p>{{ tutorial.description }}</p>
            </div>

            <!-- <div>
                <label><strong>Status:</strong></label>
                {{ currentTutorial.published ? "Published" : "Pending" }}
            </div> -->
        </form>
    </div>
</template>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>