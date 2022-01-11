<template>
    <div class="flex flex-row gap-4 grow w-full justify-end">
        <button class="rounded-sm bg-gray-100 mt-4 text-xl text-gray-400 py-3 px-6" @click="copy">
          نسخ
        </button>
        <button class="rounded-sm bg-black mt-4 text-xl text-white py-3 px-6" @click="generate">
          توليد نص جديد
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        async generate () {
            this.$store.dispatch('generate')
        },
        copy () {
            let txt = ''
            for (const p of this.$store.state.result) {
                txt += p + ' '
            }

            navigator.clipboard.writeText(txt)
        }
    }
}
</script>