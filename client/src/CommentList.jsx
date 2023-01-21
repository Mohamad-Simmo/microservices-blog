import { useState, useEffect } from 'react';
import axios from 'axios';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    return res.data;
  };
  useEffect(() => {
    fetchComments().then((data) => setComments(data));
  }, []);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
}
export default CommentList;
