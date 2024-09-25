import {useContext, useRef} from "react";
import {PostList} from "../store/post-list-store";
const createPost = () => {
  const{addPost}=useContext(PostList);
  const userIdElement= useRef();
  const PostTitleElement= useRef();
  const userBodyElement= useRef();
  const reactionElement= useRef();
  const tagsElement= useRef();
  const handleSumbit=(event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const userBody = userBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value ="";
    PostTitleElement.current.value="";
    userBodyElement.current.value="";
    reactionElement.current.value="";
    tagsElement.current.value= "";

    addPost(userId , PostTitle , userBody, reaction,tags );
    

  };

return <form className="create-post" onSubmit={handleSumbit}>
<div className="mb-3">
  <label htmlFor="title" className="form-label">User id</label>
  <input type="text"
  ref={userIdElement}
  className="form-control" id="title"  placeholder="enter ur userid"/>
  
</div>
<div className="mb-3">
  <label htmlFor="userId" className="form-label">Post title</label>
  <input
   type="text"
   ref={PostTitleElement}
   className="form-control" id="userId"  placeholder="how r u feelin"/>
  
</div>
<div className="mb-3">
  <label htmlFor="body" className="form-label">Post Content</label>
  <textarea
   type="text"
   ref={userBodyElement}
   rows="4"
   className="form-control" id="body"  placeholder="tell us moreeeeeeee"/>

</div>

<div className="mb-3">
  <label htmlFor="reaction" className="form-label">no. of reaction</label>
  <input
   type="text"
   ref={reactionElement}
   className="form-control" id="reaction"  placeholder="how many reacted"/>
  
</div>
<div className="mb-3">
  <label htmlFor="tags" className="form-label">enter ur tags here</label>
  <input
   type="text"
   ref={tagsElement}
   className="form-control" id="tags"  placeholder="enter"/>
  
</div>

<button type="submit" className="btn btn-primary">Post</button>
</form>
}
export default createPost;