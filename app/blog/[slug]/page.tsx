import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";

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
      <Nav />
      <article className="blog-post">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
        <h2>{post.title}</h2>

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
