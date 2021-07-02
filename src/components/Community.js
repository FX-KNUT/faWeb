// import { useState } from "react";
import { store } from "./App.tsx";
// import Commu_Pagination from "./Commu_Pagination";

const postList = [
  {
    idx: 0,
    subject: "1234567",
    name: "김김김",
  },
];

const Community = () => {
  store.dispatch({ type: { loc: "community" } });

  // const [posts, setPosts] = useState([]);
  // pagination 관련
  const maxPostList = 6; // 한 페이지에서 보여줄 최대 profile 개수
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
      <table className="main-community-content">
        <thead className="main-community-posts">
          <th className="main-community-posts-no">번호</th>
          <th className="main-community-posts-title">제목</th>
          <th className="main-community-posts-author">글쓴이</th>
        </thead>
        <tbody>
          {postList.map((post) => (
            <tr key={post.idx}>
              <td className="main-community-posts-no-example">{post.idx}</td>
              <td className="main-community-posts-title-example">
                {post.subject}
              </td>
              <td className="main-community-posts-author-example">
                {post.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="main-community-functions">
        <button>등록</button>
        <button>수정</button>
        <button>삭제</button>
      </div>
      {/* <Commu_Pagination
        maxPostList={maxPostList}
        totalPosts={totalPosts}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>

    // <div className="main-community-wrapper">
    //   <div className="main-community-content">
    //     <span className="main-community-content-span">전체 게시글: 0 / 0</span>
    //     <div className="main-community-posts">
    //       <span className="main-community-posts-no">번호</span>
    //       <span className="main-community-posts-title">제목</span>
    //       <span className="main-community-posts-author">글쓴이</span>
    //       <span id="1" className="main-community-posts-no-example">
    //         1
    //       </span>
    //       <span id="some_title" className="main-community-posts-title-example">
    //         한국교통대학교 소프트웨어학과
    //       </span>
    //       <span id="leejong" className="main-community-posts-author-example">
    //         신이종
    //       </span>
    //     </div>
    //     <div className="main-community-functions">
    //       <button>등록</button>
    //       <button>수정</button>
    //       <button>삭제</button>
    //     </div>
    //   </div>
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
