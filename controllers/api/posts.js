const Post = require('../../models/Post');

module.exports = {
    index,
    create
}

async function index(req, res) {
    let posts = await Post.find({})
    res.json(posts)
    // 1. Get all Posts from the database
    // 2. Use res.json() to send the posts to the frontend
}

async function create(req, res) {
    let newPost =  await Post.create(req.body)
    res.json(newPost)
    // 1. Create a post in the database (the data will be incoming via `req.body`)
    // 2. use res.json() to send a response to the frontend
}