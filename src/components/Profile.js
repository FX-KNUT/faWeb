const Profile = () => {
  return (
    <div className="main-profile-wrapper">
      <div className="main-profile-header">
        <table>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="main-profile-content">
        <table>
          <thead className="main-profile-content-thead">
            <tr>
              <td>1</td>
            </tr>
          </thead>
          <tbody className="main-profile-content-tbody">
            <tr>
              <td>2</td>
            </tr>
          </tbody>
          <tfoot className="main-profile-content-tfoot">
            <tr>
              <td>3</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Profile;
