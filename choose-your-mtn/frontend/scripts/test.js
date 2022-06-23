// import kebabCase from "@/lib/utils/kebabCase";

// const { kebabCase } = require("../lib/utils/kebabCaseTest");
// const { getAllTags } = require("../lib/tagsTest");

// const tags = getAllTags("content")
// console.log(`Tags: `, tags)


// const { getAllFilesFrontMatter } = require('../lib/mdTest');

// (async() => {
//   const allPosts = await getAllFilesFrontMatter("posts")
//   console.log(`All Posts: `, allPosts);

//   const filteredPosts = allPosts.filter(
//     (post) => post.draft !== true && post.tags.map((t) => t)
//   )
//   console.log(`Filtered posts: `, filteredPosts)
// })();

const posts = ["coding-post.md", "first-post.md", "long-post.md", "second-post.md"];

const formatSlug = (slug) => {
  return slug.replace(/\.(mdx|md)/, '')
}

const paths = posts.map((p) => ({
  params: {
    slug: formatSlug(p)
  }
}))

console.log(`PATHS: `, paths)