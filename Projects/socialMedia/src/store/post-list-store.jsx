import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Define the reducer
const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case 'Add_Post':
      return [action.payload, ...currPostList];
    case 'Delete_Post':
      return currPostList.filter(post => post.id !== action.payload);
    default:
      return currPostList;
  }
};

// Define the provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, userBody, reaction, tags) => {
    dispatchPostList({
      type: 'Add_Post',
      payload: {
        id: Date.now(),  // Unique ID for the post
        title: postTitle,
        body: userBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      }
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'Delete_Post',
      payload: postId
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  ); 
};

// Define the default post list
const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'go to mumbai',
    body: 'yayy',
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai"],
  },
  {
    id: '2',
    title: 'pass ho gye bhaiiii',
    body: 'hogya chlo',
    reaction: 2,
    userId: "user-12",
    tags: ["graduate", "partyyy", "khtm"],
  },
];

export default PostListProvider;
