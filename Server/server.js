import express from 'express';
import routeProduct from './routes/routeProduct.js';


const app =  express();
const port = 3000;
app.use('/api',routeProduct);
// app.use(express.json());


app.listen(port, () => {
console.log(`server is running in ${port}`)
})