import { useState } from "react";
import { MdClose } from "react-icons/md";

const CommunitySave = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const modal = document.querySelector("#modal");
  const saveModal = document.querySelector(".saveModal");

  const onExit = () => {
    modal?.classList.toggle("show");
    saveModal?.classList.toggle("show");
  };

  // const onSubmit = () => {

  // }

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="community_save">
      <form action="" method="post" onSubmit={onSubmit}>
        <div class="form-group">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            class="form-control"
            placeholder="제목을 입력해 주세요."
          />
        </div>
        <div class="input-group">
          <div class="custom-file">
            <input
              value={file}
              onChange={(e) => setFile(e.target.value)}
              type="file"
              class="custom-file-input"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
            />
            <label class="custom-file-label" for="inputGroupFile04">
              {file}
            </label>
          </div>
        </div>
        <div class="form-group">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            class="form-control"
            rows="3"
            placeholder="내용을 입력해 주세요."
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" id="saveBtn">
          Save
        </button>
      </form>
      <MdClose onClick={onExit} className="exitBtn" />
    </div>
  );
};

export default CommunitySave;
