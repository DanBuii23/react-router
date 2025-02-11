import { Link } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  content: string;
};

const posts: Post[] = [
  { id: 1, title: "Bài viết 1", content: "Nội dung của bài viết 1." },
  { id: 2, title: "Bài viết 2", content: "Nội dung của bài viết 2." },
  { id: 3, title: "Bài viết 3", content: "Nội dung của bài viết 3." },
];

export default function Posts() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-600">
        Danh sách bài viết
      </h2>
      <ul className="mt-4 space-y-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
