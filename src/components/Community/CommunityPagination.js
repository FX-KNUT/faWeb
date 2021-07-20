import { Link } from "react-router-dom";

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
      <Link to="/communityWrite" className="writeBtn">
        <button type="button" className="btn btn-warning">
          등록
        </button>
      </Link>
    </div>
  );
};

export default CommunityPagination;
