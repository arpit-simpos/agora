const initialState = {
    hashTags: [],
    totalRecords: 0
};

export default function hashTagReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_HASHTAG': {
            return {
                totalRecords : state.totalRecords + 1,
                hashTags: [...state.hashTags,action.payload]
            }
        }
        case 'COUNTS': {
            return {
                totalRecords: action.payload,
                hashTags: [...state.hashTags]
            }
        }
        default:
            return state;
    }
}