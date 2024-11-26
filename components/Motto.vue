<script setup>
import { animate, scroll } from 'motion';

onMounted(() => {
  const heading = document.querySelector(".capitalize");

  const animation = animate(
    heading,
    { transform: ["none", "translateX(-1000px)"] },
    { ease: "linear" }
  )

  scroll(animation);
});
</script>

<template>
  <div class="overflow-hidden py-20">
    <h1 class="capitalize font-bold md:text-9xl text-4xl text-nowrap">
      BECOME &#x2022; INFINITELY &#x2022; PRODUCTIVE &#x2022; BECOME &#x2022; INFINITELY &#x2022; PRODUCTIVE &#x2022;
      BECOME &#x2022; INFINITELY &#x2022; PRODUCTIVE
    </h1>
  </div>
</template>
