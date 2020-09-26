<template>
  <section class="w-full max-w-screen mx-auto container">
    <article class="mx-auto h-full w-full lg:3/4">
      <div class="my-10 md:my-20">
        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <div
            class=" w-full flex content-center justify-center md:justify-end "
          >
            <img
              class="rounded-full shadow-sm w-1/2 md:flex-shrink-0"
              src="/profile.image.jpeg"
              alt="Profile Image"
            />
          </div>
          <div
            class="w-full md:w-3/4 text-center md:text-left flex flex-col content-center justify-center md:justify-start md:ml-8 my-6 md:mb-6 "
          >
            <span class="text-xl"> Full Stack Developer </span>
            <h1 class="text-3xl md:text-6xl text-color-white">
              Jawahar
            </h1>
            <p>
              Hi, there I am Jawahar Full Stack Developer. <br />
              Currently working as Full Stack Developer in Bytize Inc. Love for
              learning and experiment application based on new stack.
            </p>
            <!-- <div class="w-full flex py-2">
              <button
                class="mx-3 px-4 py-2 bg-transparent hover:bg-gray-600 rounded border border-gray-600 hover:text-white"
              >
                Downloard Resume
              </button>
              <button class="mx-3">Interative(coming soon)</button>
            </div> -->
          </div>
        </div>
      </div>
    </article>
    <br />
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
