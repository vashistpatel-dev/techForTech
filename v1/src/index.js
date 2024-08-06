import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Need extra lines without TypeScript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((err, req, res, next) => {
    if(err){
        response.status(500).send('Error 500 : something is wrong with the server');
    }else {
        next();
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // res.sendFile(path.resolve('index.html'));

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});