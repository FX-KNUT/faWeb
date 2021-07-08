const CommunityPostlist = ({ currPostList }) => {
  const titleClick = () => {};

  return (
    <div className="main-community-posts-body" onClick={titleClick}>
      {currPostList.map((post) => {
        return (
          <div className="post" key={post.idx}>
            <span className="main-community-posts-no-example">{post.idx}</span>
            <span className="main-community-posts-title-example">
              {post.title}
            </span>
            <span className="main-community-posts-author-example">
              {post.author}
            </span>
            <span className="main-community-posts-date-example">
              {post.date}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CommunityPostlist;
