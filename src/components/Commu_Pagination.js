const Commu_Pagination = ({ maxPostList, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / maxPostList); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="main-community-pagination">
      <ul className="main-community-pagination-ul">
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <span
                onClick={() => setCurrentPage(number)}
                className="pageNumber"
              >
                {number}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Commu_Pagination;
