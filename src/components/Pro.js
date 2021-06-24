const Pro = ({ profile }) => {
  const page = 1;
  //   const [page, setPage] = useState(1);

  const { id, name, img, start_date, end_date } = profile;
  return (
    <table className="main-profile-content-table">
      <thead className="main-profile-content-thead" page={page} id={id}>
        <tr>
          <td className="main-profile-content-thead-id">{id}</td>
          <td className="main-profile-content-thead-name">{name}</td>
        </tr>
      </thead>
      <tbody className="main-profile-content-tbody" page={page} id={id}>
        <tr>
          <td className="main-profile-content-tbody-img">
            <img src={img} alt={img} />
          </td>
        </tr>
      </tbody>
      <tfoot className="main-profile-content-tfoot" page={page} id={id}>
        <tr>
          <td className="main-profile-content-tfoot-start">가입일</td>
          <td className="main-profile-content-tfoot-start-date">
            {start_date}
          </td>
        </tr>
        <tr>
          <td className="main-profile-content-tfoot-end">탈퇴일</td>
          <td className="main-profile-content-tfoot-end-date">{end_date}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Pro;
