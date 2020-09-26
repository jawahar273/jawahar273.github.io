<template>
  <div
    class="max-w-sm w-full lg:max-w-full lg:flex rounded-lg mx-auto transition duration-500 ease-in-out transform scale-100 hover:scale-105"
    style="background-color: #4C566A"
  >
    <div
      class="h-36 lg:h-auto lg:w-48 flex-none  bg-center text-center overflow-hidden"
      :title="data.name"
    >
      <img
        :class="[data.padding || 'p-3', 'm-auto']"
        :src="data.logo"
        style="width: 150px; height: 150px"
      />
    </div>
    <div
      class="p-6 hidden md:flex flex-col justify-between content-center leading-normal "
    >
      <div class="mb-3">
        <div class="text-gray-400 font-bold text-xl mb-2 text-bold">
          {{ data.name }}
        </div>
        <p class="text-gray-400 text-base">
          {{ data.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillSetCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
