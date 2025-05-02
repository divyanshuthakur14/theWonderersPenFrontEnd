import Post from "../partials/Post";
import { useEffect, useState, useCallback } from "react";
import "../css/home.css";

export default function BlogsPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  // Memoize fetchPosts to prevent unnecessary re-creation
  const fetchPosts = useCallback(async () => {
    const url = search
      ? `https://thewondererspenbackend.onrender.com/post?search=${encodeURIComponent(search)}`
      : "https://thewondererspenbackend.onrender.com/post";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  }, [search]); // Memoize fetchPosts based on search

  // Effect to fetch posts whenever search changes
  useEffect(() => {
    fetchPosts();
  }, [search, fetchPosts]); // Include fetchPosts in dependency array

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
