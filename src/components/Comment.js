import { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");

  // axios

  const onCommentSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="comment">
      <div>Comment</div>
      {/* 조회 */}
      <div>asd</div>
      <form
        className="row g-3"
        action=""
        method="post"
        onSubmit={onCommentSubmit}
      >
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Comment"
            value={comment}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3 col-auto">
          등록
        </button>
      </form>
    </div>
  );
};

export default Comment;
