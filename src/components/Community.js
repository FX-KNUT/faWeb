import { useState } from "react";
import { store } from "./App.tsx";
import CommunityPagination from "./CommunityPagination";
import CommunityPostlist from "./CommunityPostlist";

const postList = [
  {
    idx: 13,
    title: "33333332",
    content: "123",
    author: "ygjvhb",
    date: "2021-07-06",
  },
  {
    idx: 12,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 11,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 10,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 9,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 8,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 7,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 6,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 5,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 4,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 3,
    title: "33333332",
    content: "123",
    author: "SKSKSK",
    date: "2021-07-06",
  },
  {
    idx: 2,
    title: "22222222",
    content: "123",
    author: "박박박",
    date: "2021-07-06",
  },
  {
    idx: 1,
    title: "1234567",
    content: "123",
    author: "김김김",
    date: "2021-07-06",
  },
];

const Community = ({ history }) => {
  store.dispatch({ type: { loc: "community" } });

  // 서버에 profileList를 받음.
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false); // 서버에서 PostList를 가져올 때 loading을 하고 있냐 아니냐

  // pagination 관련
  const maxPostList = 11; // 한 페이지에서 보여줄 최대 profile 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const indexOfLast = currentPage * maxPostList; // 현재 페이지에서 있을 수 있는 마지막 index
  const indexOfFirst = indexOfLast - maxPostList; // 현재 페이지에서 있을 수 있는 처음 index
  const currPostList = (postList) => {
    // 페이지에 맞는 Post를 보여준다.
    const currPost = postList.slice(indexOfFirst, indexOfLast);
    return currPost;
  };

  return (
    <div className="main-community-wrapper">
      <div className="main-community-content">
        <div className="main-community-posts-head">
          <strong>
            <span className="main-community-posts-no">번호</span>
          </strong>
          <strong>
            <span className="main-community-posts-title">제목</span>
          </strong>
          <strong>
            <span className="main-community-posts-author">글쓴이</span>
          </strong>
          <strong>
            <span className="main-community-posts-date">작성일</span>
          </strong>
        </div>
        <CommunityPostlist
          currPostList={currPostList(postList)}
          history={history}
        />
      </div>
      <CommunityPagination
        maxPostList={maxPostList}
        totalPosts={postList.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Community;
