export const state = () => ({
    options: {
        paragraphs: 4,
        category: 'text',
        vocalized: true
    },
    result: [],
    baseUrl: process.env.baseUrl,
})

export const actions = {
    async generate (store) {
        const url = new URL(store.state.baseUrl + '/sample')
        
        for (let key of Object.keys(store.state.options)) {
            url.searchParams.append(key, store.state.options[key])
        }

        const resp = await fetch(url).then(res => res.json())

        store.commit('SET_RESULT', resp.result)
    }
}

export const mutations = {
    SET_RESULT: (state, result) => {
        state.result = result
    },
    SET_OPTIONS: (state, options) => {
        state.options = options
    },
    INCREASE_PARAGRAPHS: (state) => {
        state.options.paragraphs++
    },
    DECREASE_PARAGRAPHS: (state) => {
        state.options.paragraphs--
    },
    SET_CATEGORY: (state, cat) => {
        state.options.category = cat
    },
    TOGGLE_VOCALIZED: (state) => {
        state.options.vocalized = !state.options.vocalized
    }
}
