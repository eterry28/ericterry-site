import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="grid-bg" />
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
      <article className="blog-post">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
        <h1>{post.title}</h1>
        <div className="meta">
          {post.date}
          {post.category && <span className="category">{post.category}</span>}
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}