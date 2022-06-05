import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'
import getAllFilesRecursively from "./utils/files";

const root = process.cwd()

export function getFiles(type) {
  const prefixPaths = path.join(root, "content", type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
  );
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export async function getFileBySlug(type, slug) {
  const mdPath = path.join(root, "content", type, `${slug}.md`);
  const source = fs.readFileSync(mdPath, "utf8");
  const { data: frontmatter, content } = matter(source);

  return {
    content,
    frontmatter: {
      slug: slug || null,
      fileName: `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  };
}


export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, "content", folder)
  const files = getAllFilesRecursively(prefixPaths)
  const allFrontMatter = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove unexpected file
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}