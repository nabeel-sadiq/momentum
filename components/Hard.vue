<script setup></script>

<template>
  <div class="flex justify-center items-center px-4">
    <h1 class="font-bold md:text-3xl text-2xl text-center">The Problem</h1>
  </div>
  <div class="flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-10 gap-6 py-10 md:px-10 px-3">
    <Card emoji="📝" title="You set a goal" quote1="&quot;I'm gonna get ripped&quot;"
      quote2="&quot;I'm gonna be rich&quot;" />
    <Rarrow />
    <Card emoji="🏃‍♂️" title="You get motivated" quote1="&quot;I'm gonna do it this time&quot;"
      quote2="&quot;I got this let's go&quot;" />
    <Rarrow />
    <Card emoji="😩" title="Motivation disappears" quote1="&quot;Bruh just leave it&quot;"
      quote2="&quot;Lemme go to sleep&quot;" />
  </div>
</template>