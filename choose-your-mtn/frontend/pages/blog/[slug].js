import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PageTitle from "@/components/PageTitle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import Image from "next/image";
import PostLayout from "@/layouts/PostLayout"
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFiles,
  getFileBySlug,
} from "@/lib/md";

export async function getStaticPaths() {
  const posts = getFiles("blog"); // [ 'coding-post.md', 'first-post.md', 'long-post.md', 'second-post.md' ]
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug)
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('blog', params.slug)
  const authorList = post.frontmatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontmatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss - TODO

  return { props: { post, authorDetails, prev, next } }

}

export default function Blog({ post, authorDetails, prev, next }) {
  const { frontmatter } = post
  return (
    <>
      {frontmatter.draft !== true ? (
        <PostLayout
          frontMatter={frontmatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  );
}

// export default function Post({ post, frontmatter, nextPost, previousPost }) {
//   return (
//     <div className='my-10'>
//       <SEO
//         title={frontmatter.title}
//         description={frontmatter.description || post.excerpt}
//       />

//       <article>
//         <header className="mb-8">
//           <h1 className="mb-2 text-6xl font-black leading-none font-display">
//             {frontmatter.title}
//           </h1>
//           <p className="text-sm">{frontmatter.date}</p>
//         </header>
//         <ReactMarkdown
//           className="mb-4 prose lg:prose-lg dark:prose-dark"
//           escapeHtml={false}
//           source={post.content}
//           renderers={{ code: CodeBlock, image: MarkdownImage }}
//         />
//         <hr className="mt-4" />
//       </article>

//       <nav className="flex flex-wrap justify-between mb-10">
//         {previousPost ? (
//           <Link href={"/posts/[slug]"} as={`/posts/${previousPost.slug}`}>
//             <a className="text-lg font-bold">
//               ← {previousPost.frontmatter.title}
//             </a>
//           </Link>
//         ) : (
//           <div />
//         )}
//         {nextPost ? (
//           <Link href={"/posts/[slug]"} as={`/posts/${nextPost.slug}`}>
//             <a className="text-lg font-bold">{nextPost.frontmatter.title} →</a>
//           </Link>
//         ) : (
//           <div />
//         )}
//       </nav>
//     </div>
//   );
// }

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const MarkdownImage = ({ alt, src }) => {
  return (
    <Image
      alt={alt}
      src={require(`../../content/assets/${src}`)}
      placeholder="blur"
      className="w-full"
    />
  );
};
