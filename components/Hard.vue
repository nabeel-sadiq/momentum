<script setup>
import { animate, scroll, stagger } from "motion";
import { onMounted } from "vue";

onMounted(async () => {
  const card1 = document.querySelector(".card-animation1");
  const card3 = document.querySelector(".card-animation3");

  const animate1 = animate(card1, { skew: 10 });
  const animate3 = animate(card3, { skew: -10 });

  scroll(animate1);
  scroll(animate3);
})
</script>


<template>
  <div class="flex justify-center items-center px-4 pt-20">
    <h1 class="font-bold md:text-3xl text-2xl text-center">The Problem</h1>
  </div>
  <div class="flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-10 gap-6 py-10 md:px-10 px-3">
    <span class="card-animation1">
      <Card emoji="📝" title="You set a goal" quote1="&quot;I'm gonna get ripped&quot;"
        quote2="&quot;I'm gonna be rich&quot;" />
    </span>
    <Rarrow />
    <span class="card-animation2">
      <Card emoji="🏃‍♂️" title="You get motivated" quote1="&quot;I'm gonna do it this time&quot;"
        quote2="&quot;I got this let's go&quot;" />
    </span>
    <Rarrow />
    <span class="card-animation3">
      <Card emoji="😩" title="Motivation disappears" quote1="&quot;Bruh just leave it&quot;"
        quote2="&quot;Lemme go to sleep&quot;" />
    </span>
  </div>
</template>