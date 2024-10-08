import { MdDelete } from "react-icons/md";
const post = ({post}) => {
return <div className="card postcard" style={{width: "30rem",margin: "20px 50px"}}>

<div className="card-body">
  <h5 className="card-title">{post.title}
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   <MdDelete/>
    
  </span>
  </h5>
  <p className="card-text">{post.body}</p>
  {post.tags.map((tag)=>(
  
  <span class="badge text-bg-primary hashtag">{tag}</span>
  ))}
  <div class="alert alert-success reactions" role="alert">
 this post is reacted by {post.reaction} people.
</div>
</div>
</div>
}
export default post;