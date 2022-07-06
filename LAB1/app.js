const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const users = [
    {
        "id": 1,
        "name": "Mr Chollathit Saensaradee",
        "email": "Chollathit.s@ku.th"
    },
    {
        "id": 2,
        "name": "William Smith",
        "email": "will.smith@gmail.com"
    },
    {
        "id": 3,
        "name": "Jennifer Lee",
        "email": "Jennifer.lee@gmail.com"
    },
]
app.get('/', (req, res) => res.send('hello world!'))

app.get('/api/users', (req, res) => {
    const result = { "status": 200, "data": users }
    return res.json(result)
})

app.get("/api/users/:id", (req, res) => {
    let user = users.find(user => user.id === parseInt(req.params.id));
    if (!user)
        return res.status(400).json({ status: 400, massage: "Not found user with the given ID" });
    res.user = user;
    const result = {
        status: 200,
        data: res.user
    };
    return res.json(result);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))