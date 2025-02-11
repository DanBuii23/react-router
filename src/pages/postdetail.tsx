import { useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Bài viết 1", content: "Nội dung của bài viết 1." },
  { id: 2, title: "Bài viết 2", content: "Nội dung của bài viết 2." },
  { id: 3, title: "Bài viết 3", content: "Nội dung của bài viết 3." },
];

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return <h2>Không có bài viết này!</h2>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600">{post.title}</h2>
      <p className="mt-2 text-gray-700">{post.content}</p>
    </div>
  );
}
