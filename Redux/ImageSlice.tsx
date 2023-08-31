// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0,
//   todos: [],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: Math.random() * 100,
//         text: action.payload,
//       };
//       state.todos.push(todo);
//       state.count += 1;
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);

//       state.count -= 1;
//     },
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;

// export default todoSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
    
//     imagename: '',
//     imagedes: '',
//     images: [],
//     imageUrl:'',
//     delImageId:''
// };

// export const ImageSlice = createSlice({
//     name: "ImageSelect",
//     initialState,
//     reducers: {
//         addImage: (state, action) => {
//             const { imagename, imagedes,imageUrl,delImageId} = action.payload;
//             console.log(action.payload);
            
//             const ImageSelect = {
//                 id: Math.random() * 100,
//                 imagedes,
//                 imagename,
//                 imageUrl,
//                 delImageId
//             };
//             state.images.push(ImageSelect);
//         },
//         removeImage: (state, action) => {
           
//             state.images = state.images.filter((ImageSelect) => ImageSelect.id !== action.payload);

            
//           },
//     },
// });

// export const { addImage,removeImage, } = ImageSlice.actions;

// export default ImageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    imagename: '',
    imagedes: '',
    images: [],
    imageUrl:'',
    delImages:[],
   
};

export const ImageSlice = createSlice({
    name: "ImageSelect",
    initialState,
    reducers: {
        addImage: (state, action) => {
            const { imagename, imagedes,imageUrl,} = action.payload;
            console.log(action.payload);
            
            const ImageSelect = {
                id: Math.random() * 100,

                imagename,
                imagedes,
                
                imageUrl,
            
            };
            state.images.push(ImageSelect);
        },
        removeImage: (state, action) => {
            
            state.images = state.images.filter((ImageSelect) => ImageSelect.id !== action.payload);
            
          },
          
         delImageHistory: (state, action) => {
            const { imagename, imagedes,imageUrl,} = action.payload;
            const DelImageSelect = {

                imagename,
                imagedes,
                
                imageUrl,
            
            };
            state.delImages.push(DelImageSelect);
            
          },
    },
});

export const { addImage,removeImage,delImageHistory } = ImageSlice.actions;

export default ImageSlice.reducer;