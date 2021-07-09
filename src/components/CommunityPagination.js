const CommunityPagination = ({ maxPostList, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / maxPostList); i++) {
    pageNumbers.push(i);
  }

  const modal = document.querySelector("#modal");
  const saveModal = document.querySelector(".saveModal");

  const onSaveBtnClick = () => {
    modal?.classList.toggle("show");
    saveModal?.classList.toggle("show");
  };

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
        <button onClick={onSaveBtnClick} className="saveBtn">
          등록
        </button>
      </div>
    </div>
  );
};

export default CommunityPagination;
