import React, { useContext } from 'react';
import Post from './post'; // Ensure correct path and capitalization
import { PostList as PostListData } from '../store/post-list-store';

const PostList = () => {
   const {postList} = useContext(PostListData);
   console.log(postList);
  return (
    <>

     {postList.map((post)=>(
      <Post key={post.id} post={post}/>
     ))}
    </>
  );
};

export default PostList;
