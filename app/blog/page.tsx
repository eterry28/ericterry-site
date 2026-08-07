import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Nav from "@/components/Nav";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <section>
      <div className="wrap">
        <div className="section-head">
          <h2>Blog</h2>
          <p>Thoughts, ideas, and stories from my journey as a technologist and people leader.</p>
        </div>
      
        <div className="preview-grid">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="connect-box">
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
      </section>

      <footer>
        <div className="wrap">
          <p>&copy; 2026 Eric Terry &mdash; ericterry.me</p>
          <p>
            <Link href="/">(&larr; Back to main site)</Link>
          </p>
        </div>
      </footer>
    </>
  );
}