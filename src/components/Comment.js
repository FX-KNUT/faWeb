const Comment = () => {
  // axios

  const onCommentSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="comment">
      <div>Comment</div>
      <div></div>
      <form
        className="row g-3"
        action=""
        method="post"
        onSubmit={onCommentSubmit}
      >
        <div className="col-auto">
          <input
            type="text"
            disabled
            className="form-control-plaintext"
            value="UserName"
          />
        </div>
        <div class="col-auto">
          <input
            type="password"
            className="form-control"
            placeholder="Comment"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
