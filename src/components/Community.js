import { store } from './App';

const Community = () => {
  store.dispatch({ type: { loc: 'community' } });

  return (
    <div className="main-community-wrapper">
      <div className="main-community-content">
        <span className="main-community-content-span">전체 게시글: 0 / 0</span>
        <div className="main-community-posts">
          <div>이 안에</div>
          <div>게시글들을</div>
          <div>넣어주세요</div>
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
