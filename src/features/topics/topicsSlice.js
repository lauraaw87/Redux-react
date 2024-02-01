import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const initialState = { topics: {} };

export const topicsSlice = createSlice({
    name: "topics",
    initialState,
    reducers: {
        addTopic(state, action) {
            let topic = action.payload;
            topic.quizIds = [];
            state.topics[action.payload.id] = topic;
        },
        addQuizId(state, action)  {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuiz, (state, action) =>{
                console.log(action)
                state.topics[action.payload.topicId].quizIds.push(action.payload.id)
            })
    },
  
    selectors: {
        selectTopics: (state) => state.topics,
    },
});

export const { addTopic, addQuizId } = topicsSlice.actions;
// export const { selectTopics } = topicsSlice.selectors;
export const selectTopics =  (state) => state.topics.topics;
export default topicsSlice.reducer;