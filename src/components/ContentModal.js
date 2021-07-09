import { MdClose } from "react-icons/md";

const ContentModal = () => {
  const modal = document.querySelector("#modal");
  const contentModal = document.querySelector(".contentModal");
  const title = "";
  const content = "";
  const file = "";

  const onExit = () => {
    modal?.classList.toggle("show");
    contentModal?.classList.toggle("show");
  };
  return (
    <div className="community_post">
      <div>
        <div className="form-group">
          <input
            value={title}
            disabled
            type="text"
            className="form-control"
            placeholder="제목을 입력해 주세요."
          />
        </div>
        <div className="input-group">
          <div className="custom-file">
            <input
              // value={file}
              disabled
              type="file"
              className="custom-file-input"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
            />
            <label
              className="custom-file-label"
              disabled
              htmlFor="inputGroupFile04"
            >
              {file}
            </label>
          </div>
        </div>
        <div className="form-group">
          <textarea
            value={content}
            disabled
            className="form-control"
            rows="8"
            placeholder="내용을 입력해 주세요."
          ></textarea>
        </div>
      </div>
      <MdClose onClick={onExit} className="exitBtn" />
    </div>
  );
};

export default ContentModal;
