<script setup>

//props
defineProps({
  emoji: String,
  title: String,
  quote1: String,
  quote2: String,
})

</script>

<template>
  <div class="card bg-base-200 w-80 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-4xl">{{ emoji }}</h2>
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ quote1 }}</p>
      <p>{{ quote2 }}</p>
    </div>
  </div>
</template>