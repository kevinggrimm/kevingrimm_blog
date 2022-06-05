import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { getFiles } from '@/lib/md';

const root = process.cwd()

export function getPostsFolders() {
  // Get all posts folders located in `content/blog`
  const postsFolders = fs
    .readdirSync(`${process.cwd()}/content/blog`)
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.md`,
    }));

  return postsFolders;
}

// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getSortedPosts() {
  const postFolders = getPostsFolders();

  const posts = postFolders
    .map(({ filename, directory }) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/blog/${directory}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata);

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date),
      };

      // Remove .md file extension from post name
      const slug = filename.replace(".md", "");

      return {
        slug,
        frontmatter,
        excerpt,
        content,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return posts;
}

// export async function getFileBySlug(type, slug) {
//   const mdPath = path.join(root, 'content', type, `${slug}.md`)
//   const source = fs.readFileSync(mdPath, 'utf8')
//   const { data: frontmatter } = matter(source)

//   return {
//     frontmatter: {
//       slug: slug || null,
//       fileName: `${slug}.md`,
//       ...frontmatter,
//       date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
//     },
//   }
// }

export function getPostsSlugs() {
  const postFolders = getPostsFolders();

  const paths = postFolders.map(({ filename }) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;
}

export function getPostBySlug(slug) {
  const posts = getSortedPosts();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, excerpt } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return { frontmatter, post: { content, excerpt }, previousPost, nextPost };
}
