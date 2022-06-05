const { slug } = require('github-slugger')

const kebabCase = (str) => slug(str)

module.exports = { kebabCase }
