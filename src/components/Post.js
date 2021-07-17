import { Link } from "react-router-dom";
import Comment from "./Comment.js";
import qs from "qs";
// import { SERVERURL, SERVERPORT } from "./Constants";
import axios from "axios";
import { useEffect, useState } from "react";

const Post = ({ location }) => {
  const file = "";

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 ?를 생략
  });
  const idx = query.idx;
  // console.log(idx);

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  // axios.get()로 idx를 전달하고 idx에 맞는 post를 받아온다.
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${idx}`
        );
        setPost(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchPost();
  }, [idx]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <div className="write">
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={post.title}
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
            value={post.body}
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
      </div>
      <Comment />
      <div className="postBtn">
        <Link to="/community" className="btn btn-primary ">
          돌아가기
        </Link>
      </div>
    </div>
  );
};

export default Post;
