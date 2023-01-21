import { useState } from 'react';
import axios from 'axios';

function CommentCreate({ postId }) {
  const [content, setContent] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div className="p-2">
      <form onSubmit={submitHandler}>
        <div className="mb-2 form-group">
          <label className="form-label">New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default CommentCreate;
