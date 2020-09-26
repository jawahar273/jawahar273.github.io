<template>
  <main>
    <header
      class=" w-full my-4 py-4 relative block  border-r-8 border-gray-400"
    >
      <nav class="flex content-center justify-center  text-gray-500">
        <nuxt-link
          class="flex justify-center  mx-6 hover:text-white font-medium menu-transition"
          to="/"
          >Home</nuxt-link
        >
        <nuxt-link
          class="flex  justify-center   mx-6 hover:text-white font-medium menu-transition"
          to="/skill-set"
          >Skills</nuxt-link
        >
      </nav>
    </header>
    <nuxt />
    <footer
      class="my-4 py-4 w-full text-gray-500  border-solid border-l-8 border-gray-400 relative"
    >
      <div class="flex justify-center my-auto  absolute bottom-0">
        <ul class="flex item-center">
          <li class="mx-3 hover:text-white menu-transition">
            <small>
              &#169; 2020
            </small>
          </li>
          <li class="mx-3 hover:text-white menu-transition">
            <a href="https://github.com/jawahar273" target="_blank">
              Github
            </a>
          </li>
          <li class="mx-3 hover:text-white menu-transition">
            LinkedIn
          </li>
          <li class="mx-3 hover:text-white menu-transition">
            <a
              href="https://stackoverflow.com/users/story/6628164"
              target="_blank"
            >
              StackOverFlow
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </main>
</template>

<style lang="scss">
body {
  background: #2e3440;
  color: rgb(236, 239, 244);
}

.menu-transition {
  @apply transition duration-500 ease-in-out transform;
  &:hover {
    @apply scale-105;
  }
}
</style>
