import { Link } from "react-router-dom";

const CommunityPostlist = ({ currPostList }) => {
  const titleClick = (e) => {
    if (e.target.className === "main-community-posts-title-example")
      console.log("asd");
  };

  return (
    <div className="main-community-posts-body" onClick={titleClick}>
      {currPostList.map((post) => {
        return (
          <div className="post" key={post.idx}>
            <span className="post-idx">{post.idx}</span>
            <Link to="post" className="post-title">
              <span>{post.title}</span>
            </Link>
            <span className="post-author">{post.author}</span>
            <span className="post-date">{post.date}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CommunityPostlist;
