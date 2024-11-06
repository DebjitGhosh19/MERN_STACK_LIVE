const express = require('express');
const path=require('path')

const app = express();

const rootPath=require('./util/util');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootPath,"public")))

const storeRouter=require('./Router/storeRouter');
const {hostRouter}=require('./Router/hostRouter');

app.use(storeRouter);
app.use('/host',hostRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootPath,"views","404.html"));
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});