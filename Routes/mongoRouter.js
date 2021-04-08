const express = require('express');
const Docs = require('../services/index')

const mongoRouter = express.Router();

mongoRouter.get('/getDocument',async(req, res) => {
    const docs = await new Docs;
    console.log('console log');
    res.send(docs.getDocument());
})

mongoRouter.post('/getDocuments', async (req, res) => {
    const docs = await new Docs;
    res.send(docs.getDocuments());
})

mongoRouter.put('/updateDocument', async(req, res) => {
    const docs = await new Docs;
    res.send(docs.updateDocuement());
})

mongoRouter.delete('/deleteDocument',async (req, res) => {
    const docs = await new Docs;
    res.send(docs.deleteDocument)
})

module.exports = mongoRouter;