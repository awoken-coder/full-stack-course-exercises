const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  { 'title':'Medium',
    'author':'root',
    'url':'https://medium.com/better-programming',
    'likes':0
  },
  { 'title':'tempTitle',
    'author':'testAuthor',
    'url':'testUrl',
    'likes':2
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON() )
}
const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb }
