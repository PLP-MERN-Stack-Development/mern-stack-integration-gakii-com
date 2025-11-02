import useFetch from "../hooks/useFetch";
import PostCard from "../components/PostCard";

const Home = () => {
    const { data: posts, loading, error } = useFetch("/posts");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-4 grid gap-4">
            {posts.map((post) => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    );
};

export default Home;
