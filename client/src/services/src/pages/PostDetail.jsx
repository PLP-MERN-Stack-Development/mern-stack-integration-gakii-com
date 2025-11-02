import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PostDetail = () => {
    const { id } = useParams();
    const { data: post, loading, error } = useFetch(`/posts/${id}`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            {post.featuredImage && (
                <img
                    src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${post.featuredImage}`}
                    alt={post.title}
                    className="mt-3 rounded-lg"
                />
            )}
            <p className="mt-4">{post.body}</p>
        </div>
    );
};

export default PostDetail;
