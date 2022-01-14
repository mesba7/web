<template>
    <section>
        <div class="flex flex-col gap-3 text-gray-700">
            <div class="flex flex-inline gap-2">
                <div>عدد الجمل: {{ $store.state.options.sentences_count }}</div>
                <span class="flex flex-1 grow"></span>
                <button class="bg-gray-100 text-gray-500 py-1 px-2 rounded-sm w-2/12" @click="decreaseParagraphs">-</button>
                <button class="bg-gray-100 text-gray-500 py-1 px-2 rounded-sm w-2/12" @click="increaseParagraphs">+</button>
            </div>

            <div class="flex flex-inline gap-2">
                <div>التكرار: {{ $store.state.repeat }}</div>
                <span class="flex flex-1 grow"></span>
                <button class="bg-gray-100 text-gray-500 py-1 px-2 rounded-sm w-2/12" @click="decreaseRepeat">-</button>
                <button class="bg-gray-100 text-gray-500 py-1 px-2 rounded-sm w-2/12" @click="increaseRepeat">+</button>
            </div>

            <div class="flex flex-inline gap-2">
                <div>نوع النص</div>
                <span class="flex flex-1 grow"></span>
                <select v-model="category" @change="updateCategory($event)" class="w-1/3">
                    <option value="random">عشوائي</option>
                    <!-- <option value="text">نص</option> -->
                    <!-- <option value="hadith">حديث</option> -->
                    <!-- <option value="aya">آية</option> -->
                    <option value="proverb">مثل شعبي</option>
                    <!-- <option value="phrase">عبارة</option> -->
                    <option value="poem">شعر</option>
                </select>
            </div>

            <div v-if="isVocalizedOptionEnabled" class="flex flex-inline gap-2">
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
            category: 'random',
            vocalized: false,
            isVocalizedOptionEnabled: false,
        }
    },
    methods: {
        increaseParagraphs () {
            this.$store.commit('INCREASE_SENTENCES_COUNT')
            this.$store.dispatch('generate')
        },
        decreaseParagraphs () {
            this.$store.commit('DECREASE_SENTENCES_COUNT')
            this.$store.dispatch('generate')
        },
        updateCategory (e) {
            if (this.category === 'random') {
                this.isVocalizedOptionEnabled = false
            } else {
                this.isVocalizedOptionEnabled = true
            }
            this.$store.commit('SET_CATEGORY', this.category)
            this.$store.dispatch('generate')
        },
        async toggleVocalized () {
            await this.$store.commit('TOGGLE_VOCALIZED')
            await this.$store.dispatch('generate')
        },
        increaseRepeat () {
            this.$store.commit('INCREASE_REPEAT')
        },
        decreaseRepeat () {
            this.$store.commit('DECREASE_REPEAT')
        }
    }
}
</script>