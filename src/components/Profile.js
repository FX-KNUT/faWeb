import { store } from './App';

const Profile = () => {
  store.dispatch({ type: { loc: 'profile' } });

  let page = 1;
  let arr = [1, 2, 3, 4, 5, 6];

  const Content = (key) => (
    <table className="main-profile-content-table">
      <thead className="main-profile-content-thead" page={page} id={key}>
        <tr>
          <td className="main-profile-content-thead-id">1444018</td>
          <td className="main-profile-content-thead-name">신이종</td>
        </tr>
      </thead>
      <tbody className="main-profile-content-tbody" page={page} id={key}>
        <tr>
          <td className="main-profile-content-tbody-img">이미지</td>
        </tr>
      </tbody>
      <tfoot className="main-profile-content-tfoot" page={page} id={key}>
        <tr>
          <td className="main-profile-content-tfoot-start">가입일</td>
          <td className="main-profile-content-tfoot-start-date">2021-06-02</td>
        </tr>
        <tr>
          <td className="main-profile-content-tfoot-end">탈퇴일</td>
          <td className="main-profile-content-tfoot-end-date">2021-06-03</td>
        </tr>
      </tfoot>
    </table>
  );

  console.log(Content);
  console.log(arr);

  // arr의 map 함수 내 _는 ele 인자를 사용하지 않겠다는 것을
  // 암시적으로 나타내는 minify입니다. 일종의 convention이니,
  // 익혀두시면 다음에 다른 코드를 볼 때 또 보실 일이 있을 겁니다.

  return (
    <div className="main-profile-wrapper">
      <div className="main-profile-content">
        {arr.map((_, idx) => (
          <Content key={idx} />
        ))}
      </div>
      <div className="main-profile-pagination">
        <button className="main-profile-pagination-start">처음으로</button>
        <ul className="main-profile-pagination-ul">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <button className="main-profile-pagination-end">끝으로</button>
      </div>
    </div>
  );
};

export default Profile;
