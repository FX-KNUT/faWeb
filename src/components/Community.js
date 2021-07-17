import axios from "axios";
import { useEffect, useState } from "react";
import { store } from "./App.tsx";
import CommunityPagination from "./CommunityPagination";
import CommunityPostlist from "./CommunityPostlist";

const Community = ({ history }) => {
  store.dispatch({ type: { loc: "community" } });

  // 서버에 profileList를 받음.
  const [postList, setPostlist] = useState([]);
  const [loading, setLoading] = useState(false); // 서버에서 PostList를 가져올 때 loading을 하고 있냐 아니냐
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  useEffect(() => {
    const fetchPostlist = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPostlist(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchPostlist();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!postList) {
    return null;
  }

  // pagination 관련
  const maxPostList = 11; // 한 페이지에서 보여줄 최대 profile 개수

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
