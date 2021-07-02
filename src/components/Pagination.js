const Pagination = ({ maxProfileList, totalProfile, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProfile / maxProfileList); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="main-profile-pagination">
      <button className="main-profile-pagination-start">처음으로</button>
      <ul
        className="main-profile-pagination-ul"
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
      <button className="main-profile-pagination-end">끝으로</button>
    </div>
  );
};

export default Pagination;
