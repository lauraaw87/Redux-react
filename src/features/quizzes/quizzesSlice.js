import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const initialState = { quizzes: {} };

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        addQuiz(state, action) {
            let quiz = action.payload;
            state.quizzes[action.payload.id] = quiz;
        },
    },
    selectors: {
        selectQuizzes: (state) => state.quizzes
    }
});

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state)  => state.quizzes.quizzes;
export default quizzesSlice.reducer;
