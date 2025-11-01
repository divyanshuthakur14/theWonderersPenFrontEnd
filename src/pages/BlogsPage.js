import Post from "../partials/Post";
import { useEffect, useState, useCallback } from "react";
import "../css/blogspage.css";

export default function BlogsPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPosts = useCallback(async () => {
    const url = search
      ? `https://thewondererspenbackend.onrender.com/post?search=${encodeURIComponent(search)}`
      : "https://thewondererspenbackend.onrender.com/post";

    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include", // ✅ send cookies (for JWT / session)
      });

      // Handle non-OK responses gracefully
      if (!response.ok) {
        console.error("Server error:", response.status);
        setPosts([]);
        return;
      }

      const data = await response.json();

      // ✅ prevent crash if backend returns an object (like {error:...})
      if (!Array.isArray(data)) {
        console.error("Unexpected data format:", data);
        setPosts([]);
        return;
      }

      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      setPosts([]);
    }
  }, [search]);

  useEffect(() => {
    fetchPosts();
  }, [search, fetchPosts]);

  return (
    <div className="blogs-container">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div>
        {posts.length > 0 ? (
          posts.map((post) => <Post key={post._id} {...post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}
