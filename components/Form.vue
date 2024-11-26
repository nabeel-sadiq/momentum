<script setup>

//props
defineProps({
  form: String,
})

</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-base-100">
    <div class="flex flex-col justify-center items-center bg-base-200 px-8 py-10 border-2 border-accent">
      <h1 class="font-bold text-4xl">Momentum</h1>
      <button class="btn btn-neutral sm:w-96 w-72 mt-8 text-neutral-content">
        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333"
          shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"
          fill-rule="evenodd" clip-rule="evenodd">
          <path
            d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
            fill="#4285f4" />
          <path
            d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
            fill="#34a853" />
          <path
            d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
            fill="#fbbc04" />
          <path
            d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
            fill="#ea4335" />
        </svg>
        {{ form }} with Google</button>
      <div class="divider text-sm text-base-content/50 before:h-[1px] after:h-[1px]">or</div>

      <!-- email account -->
      <label class="input input-bordered flex items-center gap-2 sm:w-96 w-72">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" class="grow" placeholder="Email" />
      </label>
      <button class="btn btn-accent sm:w-96 w-72 mt-4 text-accent-content">{{ form }} with Email</button>
    </div>
  </div>
</template>