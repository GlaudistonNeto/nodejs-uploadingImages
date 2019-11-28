const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

// View engine
app.set('view engine','ejs');

// Static
app.use(express.static('public'));

//multer middleware

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file') , (req, res) => {
    res.send('Received file');
});    

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(1919, () => {
    console.log('Server running!');
});