const Post = ({ post }) => {
  const { idx, title, content, author, date } = post;
  return (
    <div className="post">
      <span className="main-community-posts-no-example">{idx}</span>
      <span className="main-community-posts-title-example">{title}</span>
      <span className="main-community-posts-author-example">{author}</span>
      <span className="main-community-posts-date-example">{date}</span>
    </div>
  );
};

export default Post;
