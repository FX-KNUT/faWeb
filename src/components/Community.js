// import { useState } from "react";
import { store } from "./App.tsx";
// import Commu_Pagination from "./Commu_Pagination";

const postList = [
  {
    idx: 1,
    title: "1234567",
    author: "김김김",
  },
  {
    idx: 2,
    title: "22222222",
    author: "박박박",
  },
];

const Community = () => {
  store.dispatch({ type: { loc: "community" } });

  // const [posts, setPosts] = useState([]);
  // pagination 관련
  // const maxPostList = 6; // 한 페이지에서 보여줄 최대 profile 개수
  // const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  // const [loading, setLoading] = useState(false); // 서버에서 ProfileList를 가져올 때 loading을 하고 있냐 아니냐
  // const indexOfLast = currentPage * maxProfileList; // 현재 페이지에서 있을 수 있는 마지막 index
  // const indexOfFirst = indexOfLast - maxProfileList; // 현재 페이지에서 있을 수 있는 처음 index
  // const currProfileList = (tmp) => {
  //   // 페이지에 맞는 Profile을 보여준다.
  //   const currProfile = tmp.slice(indexOfFirst, indexOfLast);
  //   return currProfile;
  // };

  return (
    <div className="main-community-wrapper">
      <div className="main-community-content">
        <div className="main-community-posts">
          <strong>
            <span className="main-community-posts-no">번호</span>
          </strong>
          <strong>
            <span className="main-community-posts-title">제목</span>
          </strong>
          <strong>
            <span className="main-community-posts-author">글쓴이</span>
          </strong>
          {postList.map((post) => {
            return (
              <>
                <span className="main-community-posts-no-example">
                  {post.idx}
                </span>
                <span className="main-community-posts-title-example">
                  {post.title}
                </span>
                <span className="main-community-posts-author-example">
                  {post.author}
                </span>
              </>
            );
          })}
        </div>
      </div>
      <div className="main-community-functions">
        <button>등록</button>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>

    //   <div className="main-community-pagination">
    //     <button className="main-community-pagination-start">처음으로</button>
    //     <ul className="main-community-pagination-ul">
    //       <li>1</li>
    //       <li>2</li>
    //       <li>3</li>
    //       <li>4</li>
    //     </ul>
    //     <button className="main-community-pagination-end">끝으로</button>
    //   </div>
    // </div>
  );
};

export default Community;
