const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { getAllFilesRecursively } = require("./utils/filesTest")

const root =
  "/Users/kevingrimm_/Desktop/PROJECTS/FORM4/kevingrimm_blog/choose-your-mtn/frontend/";

function getFiles(type) {
  const prefixPaths = path.join(root, "content", type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
  );
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}


async function getAllFilesFrontMatter(folder) {
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

module.exports = {
  getFiles,
  dateSortDesc,
  formatSlug,
  getAllFilesFrontMatter,
};