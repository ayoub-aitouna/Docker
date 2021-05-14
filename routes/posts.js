const expres = require('express');
//const { model } = require('mongoose');
const router = expres.Router();
const _Post = require('../models/post');
//get all posts 
router.get('/', async(req, res) => {
    try {
        const post = await _Post.find();
        res.json(post);
    } catch (err) {
        res.json({ message: "1" })
    }
});
router.get('/1', (req, res) => {
    res.send('we are on post page 1');
});
//submite post
router.post('/', async(req, res) => {
    const Post = new _Post({
        title: req.body.title,
        descriprion: req.body.descriprion
    });
    try {
        const savedPost = await Post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

//specific post
router.get('/:postId', async(req, res) => {
        try {
            const post = await _Post.findById(req.params.postId);
            res.json(post);
        } catch (err) {
            res.json({ message: err });
        }

    })
    //delete spisific post
    // router.delete('/:postId', async(res, req) => {

//         const deleted = await _Post.deleteOne({ _id: res.params.postId });
//         res.json(deleted);

//     })


router.delete('/:postId', async(req, res) => {

    const post = await _Post.deleteOne({ _id: req.params.postId });
    res.json(post);


})


router.use('/45', (e) => {

    })
    // router.delete('/', async(req, res) => {

//     const post = await _Post.deleteMany();
//     res.json(post);


// })


//update a post
router.patch('/:postId', async(req, res) => {

        const Updatedpost = await _Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
        res.json(Updatedpost);


    })
    //module.express = router;
module.exports = router;