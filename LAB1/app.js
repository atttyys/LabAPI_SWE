const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const users = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "John.doe@gmail.com"
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
    const result = {"status": 200,"data": users}
    return res.json(result)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))