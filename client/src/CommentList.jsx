function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.status === 'approved'
            ? comment.content
            : comment.status === 'rejected'
            ? 'This comment has been rejected'
            : comment.status === 'pending' && 'This comment is awaiting moderation'}
        </li>
      ))}
    </ul>
  );
}
export default CommentList;
