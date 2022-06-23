const fs = require('fs')
const matter = require('gray-matter')
const path = require('path')
const { slug } = require('github-slugger')

const kebabCase = (str) => slug(str)

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const flattenArray = (input) =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

const map = (fn) => (input) => input.map(fn);

const walkDir = (fullPath) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix) => (extraPath) => path.join(prefix, extraPath);

const getAllFilesRecursively = (folder) =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);



const getFiles = () => {
  // const root = process.cwd();
  const root =
    "/Users/kevingrimm_/Desktop/PROJECTS/FORM4/kevingrimm_blog/choose-your-mtn/frontend/";
  console.log(`Root: `, root);
  const prefixPath = path.join(root, "content", "posts");
  // console.log(`Prefix path: `, prefixPath);
  const files = getAllFilesRecursively(prefixPath);
  // console.log('Files: ', files);
  const newFiles = files.map((file) => {
    const slicedFile = file.slice(prefixPath.length + 1);
    // console.log(`Sliced File: `, slicedFile);
    const newFile = slicedFile.replace(/\\/g, "/");
    // console.log(`New File: `, newFile);
    return newFile;
  });
  /*
    'coding-post/coding-post.md',
    'first-post/first-post.md',
    'long-post/long-post.md',
    'second-post/second-post.md'
  */
  // console.log('New Files: ', newFiles);

  // Returns the contents of the path
  let tagCount = {}
  newFiles.forEach((file) => {
    const source = fs.readFileSync(path.join(root, "content", "posts", file), 'utf8')
    const { data } = matter(source);
    // console.log(`Data: `, data);
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        console.log(`Formatted tag: `, formattedTag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  console.log(`Tag Count: `, tagCount);
}

getFiles();