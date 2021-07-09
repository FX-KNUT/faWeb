import { useState } from "react";
import { MdClose } from "react-icons/md";

const CommunitySave = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const modal = document.querySelector("#modal");
  const saveModal = document.querySelector(".saveModal");

  const onExit = () => {
    setTitle("");
    setContent("");
    setFile("");
    modal?.classList.toggle("show");
    saveModal?.classList.toggle("show");
  };

  // const onSubmit = () => {
  // community에 등록하는 코드
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    onExit();
  };

  return (
    <div className="community_save">
      <form action="" method="post" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            placeholder="제목을 입력해 주세요."
          />
        </div>
        <div className="input-group">
          <div className="custom-file">
            <input
              value={file}
              onChange={(e) => setFile(e.target.value)}
              type="file"
              className="custom-file-input"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile04">
              {file}
            </label>
          </div>
        </div>
        <div className="form-group">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            rows="8"
            placeholder="내용을 입력해 주세요."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" id="saveBtn">
          Save
        </button>
      </form>
      <MdClose onClick={onExit} className="exitBtn" />
    </div>
  );
};

export default CommunitySave;
