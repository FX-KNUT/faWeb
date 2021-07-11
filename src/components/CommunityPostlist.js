const CommunityPostlist = ({ currPostList, history }) => {
  return (
    <div className="main-community-posts-body">
      {currPostList.map((post) => {
        return (
          <div className="post" key={post.idx}>
            <span className="post-idx">{post.idx}</span>
            <span
              className="post-title"
              onClick={() => history.push(`/post?idx=${post.idx}`)}
            >
              {post.title}
            </span>
            <span className="post-author">{post.author}</span>
            <span className="post-date">{post.date}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CommunityPostlist;
