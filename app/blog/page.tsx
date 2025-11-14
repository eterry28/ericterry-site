import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <div className="grid-bg" />
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
      <div className="blog-container">
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-magenta))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Blog
        </h1>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
              <h3>{post.title}</h3>
              <div className="date">{post.date}</div>
              <p className="excerpt">{post.excerpt}</p>
              {post.category && <span className="category">{post.category}</span>}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}