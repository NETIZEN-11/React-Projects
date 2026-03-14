import React, { useEffect, useState } from "react";

export default function Github() {
  const [followers, setFollowers] = useState(0);
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);

        // ✅ yaha apna github username daal dena
        const username = "NETIZEN-11";

        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();

        setFollowers(data.followers);
        setAvatar(data.avatar_url);
      } catch (err) {
        console.log("Github API error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Followers Strip */}
        <div className="w-full bg-slate-700 text-white text-center py-4 rounded-lg text-2xl font-bold shadow">
          {loading ? "Loading..." : `Github followers : ${followers}`}
        </div>

        {/* Avatar */}
        <div className="mt-10">
          {avatar && (
            <img
              src={avatar}
              alt="Github Avatar"
              className="w-[350px] h-[350px] object-cover rounded-xl shadow-xl border"
            />
          )}
        </div>
      </div>
    </section>
  );
}
