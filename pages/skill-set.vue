<template>
  <section class="h-full w-full max-w-screen mx-auto container">
    <div id="experienced" class="experienced w-full mx-auto">
      <h2 class="text-4xl mb-4 text-center">Web Development</h2>
      <div class="grid grid-cols-2 gap-2 lg:gap-4 px-3 lg:px-0">
        <skill-set-card
          v-for="(data, index) in experienced"
          :key="index"
          :data="data"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SkillSetCard from '@/components/skill-set-card'

export default {
  name: 'SkillSet',
  components: {
    SkillSetCard
  },
  data: () => {
    return {
      experienced: [
        {
          logo: '/stack/nuxt.svg',
          name: 'Nuxt.js',
          description:
            'Nuxt.js a progressive framework based on Vue.js for building modern web application'
        },
        {
          logo: '/stack/vuejs.svg',
          name: 'Vue.js',
          description:
            'Vue.js one of most popular framework used in industry for building reative website'
        },
        {
          logo: '/stack/sass.svg',
          name: 'SCSS',
          description: 'SCSS a preprocessor language that compiled into CSS'
        },
        {
          logo: '/stack/javascript.svg',
          name: 'JavaScript',
          description: 'Javascript hight level with JIT and mulit-paradigm'
        },
        {
          logo: '/stack/html.svg',
          name: 'HTML',
          description:
            'HTML standard markup lanuage, for designing and displaying in web brower engines'
        },
        {
          logo: '/stack/node.js.svg',
          name: 'Node.js',
          description:
            'Node.js is a event-driven and asynchronous I/O server-side scripting with  represents a "JavaScript everywhere" paradigm'
        },
        {
          logo: '/stack/express.js.png',
          name: 'Express.js',
          description:
            'Express.js a web application framework written using Node.js'
        },
        {
          logo: '/stack/python.svg',
          name: 'Python',
          description:
            'Python an interperter, high level language with design philosophy of code readability'
        }
      ]
    }
  }
}
</script>

<style></style>
