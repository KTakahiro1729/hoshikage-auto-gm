const state = {
  cards: [
    {
      id: 1,
      src: `CardSamples/card_sample_1_back.png`,
      pos: [11, 7]
    },
    {
      id: 2,
      src: `CardSamples/card_sample_2_back.png`,
      pos: [17, 7]
    },
    {
      id: 3,
      src: `CardSamples/card_sample_3_back.png`,
      pos: [23, 7]
    },
    {
      id: 4,
      src: `CardSamples/card_sample_4_back.png`,
      pos: [29, 7]
    },
  ]

};

const getters = {
  allCards: (state) => state.cards
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};