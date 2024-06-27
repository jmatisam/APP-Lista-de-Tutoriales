<script setup>
</script>

<template>
   <div>
      <nav>
         <router-link to="/">TUTORIAL LIST</router-link>
         <div>
            <router-link to="/add">Add</router-link>
         </div>
      </nav>
      <div>
         <router-view />
      </div>
   </div>
</template>
