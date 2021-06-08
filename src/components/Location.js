import { store } from './App.tsx';

const Community = () => {
  store.dispatch({ type: { loc: 'community' } });

  return (
    <div className="main-community-wrapper">
      <div className="main-community-content">
        <span className="main-community-content-span">전체 게시글: 0 / 0</span>
        <div className="main-community-posts">
          <span className="main-community-posts-no">번호</span>
          <span className="main-community-posts-title">제목</span>
          <span className="main-community-posts-author">글쓴이</span>
          <span id="1" className="main-community-posts-no-example">
            1
          </span>
          <span id="some_title" className="main-community-posts-title-example">
            한국교통대학교 소프트웨어학과
          </span>
          <span id="leejong" className="main-community-posts-author-example">
            신이종
          </span>
        </div>
        <div className="main-community-functions">
          <button>등록</button>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div className="main-community-pagination">
        <button className="main-community-pagination-start">처음으로</button>
        <ul className="main-community-pagination-ul">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <button className="main-community-pagination-end">끝으로</button>
      </div>
    </div>
  );
};

export default Community;
