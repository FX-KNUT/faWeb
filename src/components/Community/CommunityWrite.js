import axios from "axios";
import { SERVERURL, SERVERPORT } from "../Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const CommunityWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };
  const onFileChange = (e) => {
    setFile(e.target.value);
  };

  // axios로 title, content, file을 전달한다.
  // const onSubmit = (e) => {
  //
  // };

  const requestPostInfo = async (PostDTO) => {
    const response = await axios.post(`${SERVERURL}:${SERVERPORT}`, {
      PostDTO,
    });
    console.log(response);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const PostDTO = {
      title,
      content,
      file,
    };
    const response = requestPostInfo(PostDTO);
    console.log(response);
  };

  return (
    <div className="write">
      <form action="" method="post" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={title}
            onChange={onTitleChange}
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
            onChange={onContentChange}
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
            onChange={onFileChange}
            multiple
          />
        </div>
        <div className="writePageBtn">
          <button type="submit" className="btn btn-primary">
            등록
          </button>
          <Link to="/community" className="btn btn-primary">
            돌아가기
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CommunityWrite;
