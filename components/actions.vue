<template>
  <div class="flex flex-row gap-3 grow w-full justify-end">
    <button
      class="rounded bg-gray-100 mt-4 text-xl text-gray-600 py-3 px-6 border"
      @click="copy"
    >نسخ</button>
    <button
      class="rounded border bg-black mt-4 text-xl text-white py-3 px-6"
      @click="generate"
    >توليد نص جديد</button>
  </div>
</template>

<script>
export default {
  name: 'ActionsContainer',
  methods: {
    async generate () {
      await this.$store.dispatch('generate')
    },
    copy () {
      const txt = this.$store.state.result

      const all = Array(this.$store.state.repeat).fill(txt)

      navigator.clipboard.writeText(all.join('\n'))
      // console.log(window.parent)
      // if (window.parent) {
      // window.parent.postMessage({ pluginMessage: {type: 'copy', text: all.join('\n')}, pluginId: '*'}, '*')
      // } else {
      // navigator.clipboard.writeText(all.join('\n'))
      // }
    }
  }
}
</script>
