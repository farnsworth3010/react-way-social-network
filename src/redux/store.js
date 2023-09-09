import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hi", likesCount: 12}, 
                {id: 2, message: "hi", likesCount: 12}
            ],
            newPostText: "",
        },
        messagesPage: {
            messages: [
                {id: 1, message: "Hi", my: true},
                {id: 2, message: "Hi", my: false},
                {id: 3, message: "Do you like tea?", my: false},
                {id: 4, message: "Yes, I do", my: true}
            ],
            dialogs: [
                { id: 1, name: "Andrew" },
                { id: 2, name: "Alex" },
                { id: 3, name: "Max" },
                { id: 4, name: "Carlos" },
                { id: 5, name: "Carver" },
            ],
            newMessageText: "",
        },
    },
    _callSubscriber(){
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){ // (type: 'ADD-POST')
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    }
}



window.store = store
export default store;
