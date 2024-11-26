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
  <div class="container">

    <div class="absolute z-40 hero bg-base-100/30 py-36 text-balance">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="sm:text-6xl text-5xl font-bold">Momentum</h1>
          <p class="py-6 text-lg text-base-content/80">
            Momentum is a 100% free, open-source habit
            tracker that helps you stay consistent, motivated, and achieve your goals daily.
          </p>
          <button class="btn btn-accent">Get Productive</button>
        </div>
      </div>
    </div>

    <!-- bg -->
    <div class="grid">
      <div class="grid-fade"></div>
      <div class="grid-lines"></div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #0e1416;
}

.grid {
  width: 100%;
  height: 550px;
  overflow: hidden;
  perspective: 450px;
  /* 600px * 0.75 */
}

.grid-fade {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: radial-gradient(ellipse at 50% 50%, rgba(14, 20, 22, 0) 0%, rgba(14, 20, 22, 1) 80%);
}

.grid-lines {
  width: 100%;
  height: 200%;
  background-image:
    linear-gradient(to right, #DEA05D 1px, transparent 0),
    linear-gradient(to bottom, #DEA05D 1px, transparent 0);
  background-size: 45px 30px;
  background-repeat: repeat;
  transform-origin: 100% 0 0;
  animation: play 15s linear infinite;
}

@keyframes play {
  0% {
    transform: rotateX(45deg) translateY(-50%);
  }

  100% {
    transform: rotateX(45deg) translateY(0);
  }
}
</style>