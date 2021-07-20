const CommunityPostlist = ({ currPostList, history }) => {
  return (
    <div className="main-community-posts-body">
      {currPostList.map((post) => {
        const date = post.date.substr(0, 10);

        return (
          <div className="post" key={post.id}>
            <span className="post-idx">{post.id}</span>
            <span
              className="post-title"
              onClick={() => history.push(`/post?idx=${post.id}`)}
            >
              {post.subjectName}
            </span>
            <span className="post-author">{post.userid}</span>
            <span className="post-date">{date}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CommunityPostlist;
