import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const fetchPosts = async () => {
  const res = await axios.get('http://localhost:4000/posts');
  return res.data;
};

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-start gap-3">
      {Object.values(posts).map((post) => (
        <div
          key={post.id}
          className="card mb-3"
          style={{
            width: '30%',
          }}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
          </div>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      ))}
    </div>
  );
}
export default PostList;
