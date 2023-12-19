import express from 'express';

const app =  express();
const port = 3000;
app.use(express.json());
app.get('/',function (req, res) {
    res.send('Hello, world')
})

app.listen(port, () => {
console.log(`server is running in ${port}`)
})