<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Check through our site for amazing content

    </h3>
  </div>
</template>

<style scoped>

</style>
