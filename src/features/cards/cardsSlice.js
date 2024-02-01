import { createSlice } from "@reduxjs/toolkit";
const initialState = { cards: {} };

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard(state, action) {
            let card = action.payload;

            state.cards[action.payload.id] = card;
        }
    },
    selectors: {
        selectCards: (state) => state.cards
        //selectCard: (id )=> (state) => state.cards.cards.find(card.id === id );
    },
});


export const { addCard } = cardsSlice.actions;
export const selectCards = (state) => state.cards.cards;
export const selectCard = (id) => (state) => state.cards.cards[id]
export default cardsSlice.reducer;

