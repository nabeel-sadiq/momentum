<script setup>
import { animate } from 'motion';
import { onMounted } from 'vue';

onMounted(() => {
  const paragraph = document.querySelector('p');
  const words = paragraph.innerText.split(' '); // Split the paragraph text into words
  paragraph.innerHTML = ''; // Clear the existing content

  words.forEach((word, index) => {
    // Create a span for each word and add it to the paragraph
    const span = document.createElement('span');
    span.classList.add('animate-word');
    span.innerText = word + ' '; // Add a space after each word
    paragraph.appendChild(span);

    // Animate each span
    animate(span,
      {
        opacity: [0, 1]
      },
      {
        duration: 1,
        delay: 0.1 + (index / 50),
        easing: "ease-out"
      }
    );
  });
});
</script>


<template>
  <div class="hero bg-base-100 py-36 text-balance">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="sm:text-6xl text-5xl font-bold">Momentum</h1>
        <p class="py-6 text-lg text-base-content/80">
          Momentum is a <span class="underline underline-offset-2 decoration-accent">100% free</span>, open-source habit
          tracker that helps you stay consistent, motivated, and achieve your goals daily.
        </p>
        <button class="btn btn-accent">Get Productive</button>
      </div>
    </div>
  </div>
</template>
