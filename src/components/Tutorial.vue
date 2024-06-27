<script setup>

import TutorialDataService from "../services/TutorialDataService";
import { ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const currentTutorial = ref();
const message = ref("");

function getTutorial(id) {
  TutorialDataService.get(id)
    .then(response => {
      currentTutorial.value = response.data;
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
}

function updatePublished(status) {
  var data = {
    id: currentTutorial.value.id,
    title: currentTutorial.value.title,
    description: currentTutorial.value.description,
    published: status
  };

  TutorialDataService.update(currentTutorial.value.id, data)
    .then(response => {
      console.log(response.data);
      currentTutorial.value.published = status;
      message.value = 'The status was updated successfully!';
    })
    .catch(e => {
      console.log(e);
    });
}

function updateTutorial() {
  TutorialDataService.update(currentTutorial.value.id, currentTutorial.value)
    .then(response => {
      console.log(response.data);
      message.value = 'The tutorial was updated successfully!';
    })
    .catch(e => {
      console.log(e);
    });
}

function deleteTutorial() {
  TutorialDataService.delete(currentTutorial.value.id)
    .then(response => {
      console.log(response.data);
      router.push({ name: "tutorials" });
    })
    .catch(e => {
      console.log(e);
    });
}

onBeforeMount(() => {
  message.value = '';
  getTutorial(route.params.id);
})

</script>

<template>
  <div v-if="currentTutorial">
    <h4>Tutorial</h4>
    <form>
      <div>
        <label>Title</label>
        <input type="text" id="title" v-model="currentTutorial.title" />
      </div>
      <div>
        <label>Description</label>
        <input type="text" id="description" v-model="currentTutorial.description" />
      </div>

      <div>
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button v-if="currentTutorial.published" @click="updatePublished(false)">
      UnPublish
    </button>
    <button v-else @click="updatePublished(true)"> Publish </button>

    <button @click="deleteTutorial"> Delete </button>

    <button type="submit" @click="updateTutorial"> Update </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>


