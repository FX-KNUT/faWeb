import Post from "./Post";

const CommunityPostlist = ({ currPostList }) => {
  const modal = document.querySelector("#modal");
  const contentModal = document.querySelector(".contentModal");

  const titleClick = (e) => {
    let target = e.target;
    if (target.className === "main-community-posts-title-example") {
      console.log(target.parentNode);
      modal?.classList.toggle("show");
      contentModal?.classList.toggle("show");
    }
  };

  return (
    <div className="main-community-posts-body" onClick={titleClick}>
      {currPostList.map((post) => {
        return <Post post={post} key={post.idx} />;
      })}
    </div>
  );
};

export default CommunityPostlist;
