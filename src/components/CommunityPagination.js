const CommunityPagination = ({ maxPostList, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / maxPostList); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="main-community-pagination">
      <ul
        className="main-community-pagination-ul"
        onClick={(e) => {
          let target = e.target;
          if (target.tagName === "SPAN") {
            setCurrentPage(target.innerText);
          }
        }}
      >
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <span className="pageNumber">{number}</span>
            </li>
          );
        })}
      </ul>
      <div className="main-community-functions">
        <button>등록</button>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default CommunityPagination;
