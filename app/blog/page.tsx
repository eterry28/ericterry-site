import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <div className="grid-bg" />
      <nav>
        <ul>
          <li>
          <a href="/#home">Home</a>
        </li>
        <li>
          <a href="/#story">Story</a>
        </li>
        <li>
          <a href="/#journey">Journey</a>
        </li>
        <li>
          <a href="/#expertise">Expertise</a>
        </li>
        <li>
          <a href="/#projects">Initiatives</a>
        </li>
        <li>
          <a href="/#connect">Connect</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        {/*}
        <li>
          <a href="/projects">Projects</a>
        </li>
        */}
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
              {post.category && post.category.length > 0 && (
                <div style={{ marginTop: '1rem' }}>
                  {post.category.map((cat) => (
                    <span key={cat} className="category" style={{ marginRight: '0.5rem' }}>
                      {cat}
                    </span>
                  ))}
                </div>
              )}
              {/* {post.category && <span className="category">{post.category}</span>} */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}