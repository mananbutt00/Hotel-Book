// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../Redux/TodoSlice";

// const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//   },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import todoReducer from "../Redux/TodoSlice";
import ImageSlice  from "../Redux/ImageSlice";
const persistConfig = {
  key: 'root',
  storage:AsyncStorage
};
const reducers = combineReducers({
  todo: todoReducer,
  ImageSlice: ImageSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
