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
  const allPosts = await getAllFilesFrontMatter("blog");
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug("blog", params.slug);
  // TODO - Add avatar abck to default.md for authors: # avatar: /static/images/avatar.png
  const authorList = post.frontmatter.authors || ["default"];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", [author]);
    return authorResults.frontmatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  // rss - TODO

  return { props: { post, authorDetails, prev, next } };
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { frontmatter, content } = post
  return (
    <>
      {frontmatter.draft !== true ? (
        <PostLayout
          frontMatter={frontmatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        >
          <div className="my-10">
            <article>
              <ReactMarkdown
                className='mb-4 prose lg:prose-lg dark:prose-dark'
                escapeHtml={false}
                source={post.content}
                renderers={{ code: CodeBlock, image: MarkdownImage }}
              />
            </article>
          </div>
        </PostLayout>
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
