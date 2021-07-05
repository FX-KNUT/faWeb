const ProfilePagination = ({
  maxProfileList,
  totalProfile,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProfile / maxProfileList); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="main-profile-pagination">
      <ul
        className="main-profile-pagination-ul"
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
    </div>
  );
};

export default ProfilePagination;
