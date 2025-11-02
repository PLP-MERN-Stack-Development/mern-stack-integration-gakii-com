import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
    <div className="border rounded p-3">
        {post.featuredImage && (
            <img
                src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${post.featuredImage}`}
                alt={post.title}
                className="w-full h-48 object-cover rounded"
            />
        )}
        <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
        <p className="text-gray-600 text-sm">{post.excerpt || post.body.slice(0, 120)}...</p>
        <Link to={`/posts/${post._id}`} className="text-blue-600">Read More</Link>
    </div>
);

export default PostCard;
