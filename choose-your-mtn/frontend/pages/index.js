import Link from "next/link";

import { SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";
import { generateRssPostsFeed } from "@utils/rss";

export default function Home({ posts }) {
  return (
    <div className='my-10'>
      <SEO title="All posts" />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/posts/[slug]"} as={`/posts/${slug}`}>
                <a className="text-4xl font-bold text-yellow-600 font-display">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm">{date}</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  generateRssPostsFeed();
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
