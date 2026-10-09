const express = require('express');
const app = express()
const port = 3000

const users = [{ id: 1, name: 'Prabir' }, { id: 2, name: 'Vivek' }]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/user/:id', (req, res) => {
    const user = users.find((u) => u.id === Number(req.params.id))
    res.json(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})