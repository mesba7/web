<template>
    <section>
        <div class="flex flex-col gap-3 text-gray-700">
            <div class="flex flex-inline gap-2">
                <div>الفقرات: {{ $store.state.options.paragraphs }}</div>
                <span class="flex flex-1 grow"></span>
                <button class="bg-gray-100 text-gray-500 py-1 px-2 rounded-sm w-2/12" @click="decreaseParagraphs">-</button>
                <button class="bg-gray-100 text-gray-500 py-1 px-2 rounded-sm w-2/12" @click="increaseParagraphs">+</button>
            </div>

            <div class="flex flex-inline gap-2">
                <div>نوع النص</div>
                <span class="flex flex-1 grow"></span>
                <select v-model="category" @change="updateCategory($event)" class="w-1/3">
                    <option value="text">عام</option>
                    <option value="hadith">حديث</option>
                    <option value="aya">آية</option>
                    <option value="proverb">مثل</option>
                    <option value="phrase">عبارة</option>
                    <option value="poetry">شعر</option>
                </select>
            </div>

            <div class="flex flex-inline gap-2">
                <div>بالتشكيل</div>
                <span class="flex flex-1 grow"></span>
                <input type="checkbox" v-model="vocalized" @change="toggleVocalized">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            category: 'text',
            vocalized: true,
        }
    },
    methods: {
        increaseParagraphs () {
            this.$store.commit('INCREASE_PARAGRAPHS')
            this.$store.dispatch('generate')
        },
        decreaseParagraphs () {
            this.$store.commit('DECREASE_PARAGRAPHS')
            this.$store.dispatch('generate')
        },
        updateCategory (e) {
            this.$store.commit('SET_CATEGORY', this.category)
            this.$store.dispatch('generate')
        },
        async toggleVocalized () {
            await this.$store.commit('TOGGLE_VOCALIZED')
            await this.$store.dispatch('generate')
        }
    }
}
</script>