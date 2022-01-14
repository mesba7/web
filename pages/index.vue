<template>
  <section class="mt-6 md:mt-0">

      <section class="">
        <div>
          <p class="text-gray-700 text-xl paragraph mb-6" v-for="i in $store.state.repeat" :key="i">
            {{ $store.state.result}} 
          </p>
        </div>
      </section>

  </section>
</template>

<script>
const url = `${process.env.baseUrl}/sample?length=2`

export default {
  name: 'IndexPage',
  async asyncData ({ store }) {
    store.dispatch('generate')
  },
}
</script>

<style scoped>
.paragraph {
  line-height: 2rem;
}

p ::after {
  content: " "
}
</style>