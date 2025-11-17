import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#connect">Connect</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <article className="blog-post">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
        <h1>{post.title}</h1>

        <div className="meta">
          {post.date}
          {post.category && post.category.length > 0 && (
            <div style={{ marginTop: "1rem" }}>
              {post.category.map((cat) => (
                <span
                  key={cat}
                  className="category"
                  style={{ marginRight: "0.5rem" }}
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          {/* {post.category && <span className="category">{post.category}</span>} */}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
}
