export const state = () => ({
    options: {
        sentences_count: 3,
        category: 'random',
        vocalized: false
    },
    repeat: 3,
    result: [],
    baseUrl: process.env.baseUrl,
})

export const actions = {
    async generate (store) {
        let endpoint = "/sample"
        if (store.state.options.category == "random") {
            endpoint = "/random" 
        }

        const url = new URL(store.state.baseUrl + endpoint)
        for (let key of Object.keys(store.state.options)) {
            url.searchParams.append(key, store.state.options[key])
        }

        const resp = await fetch(url).then(res => res.json())
        const txt = resp.result.join(' ')

        store.commit('SET_RESULT', txt)
    }
}

export const mutations = {
    SET_RESULT: (state, result) => {
        state.result = result
    },
    SET_OPTIONS: (state, options) => {
        state.options = options
    },
    INCREASE_SENTENCES_COUNT: (state) => {
        state.options.sentences_count++
    },
    DECREASE_SENTENCES_COUNT: (state) => {
        state.options.sentences_count--
    },
    SET_CATEGORY: (state, cat) => {
        state.options.category = cat
    },
    TOGGLE_VOCALIZED: (state) => {
        state.options.vocalized = !state.options.vocalized
    },
    INCREASE_REPEAT (state) {
        state.repeat++
    },
    DECREASE_REPEAT (state) {
        state.repeat--
    }
}
