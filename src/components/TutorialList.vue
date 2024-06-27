<script setup>
import TutorialDataService from "../services/TutorialDataService";
import { ref, onBeforeMount } from 'vue';

const tutorials = ref();

function getTutorials() {
  TutorialDataService.getAll()
    .then(response => {
      tutorials.value = response.data;
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
}

function refreshList() {
  tareas.value = [];
  getTutorials();

}

onBeforeMount(() => {
  getTutorials();
})
</script>


<template>
  <div>
    <div>
      <h4>Tasks List</h4>
      <ul>
        <li v-for="(tutorial, index) in tutorials" :key="index">
          {{ tutorial.title }}
          <router-link :to="'/task/detail/' + tutorial.id"> Details </router-link>
          <router-link :to="'/tasks/' + tutorial.id"> Edit </router-link>
        </li>
      </ul>
    </div>
    <br>
  </div>
</template>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

<!-- <script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script> -->