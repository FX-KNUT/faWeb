const CommunityPagination = ({ maxPostList, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / maxPostList); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="main-community-pagination">
      <ul
        className="main-community-pagination-ul"
        onClick={(e) => setCurrentPage(e.target.closest("li > span").innerText)}
      >
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <span className="pageNumber">{number}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommunityPagination;
