<template>
  <section class="mt-6 md:mt-0">

      <section  class="">
        <div v-for="(item, index) in $store.state.result" :key="index">
          <p class="text-gray-700 text-xl paragraph mb-6">{{ item }}</p>
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
</style>