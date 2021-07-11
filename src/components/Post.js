import { Link } from "react-router-dom";

const Post = () => {
  const title = "";
  const content = "";
  const file = "";
  return (
    <div className="write">
      <form action="" method="post">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={title}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={content}
            disabled
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">
            Files
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            value={file}
            multiple
            disabled
          />
        </div>
        <div className="postBtn">
          <Link to="/community" className="btn btn-primary ">
            돌아가기
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Post;
