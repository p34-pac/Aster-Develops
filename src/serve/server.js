/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { processMarkdown } from './processMD.js';
import cheerio from 'cheerio';
import {marked} from 'marked';
import { log } from 'console';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = process.env.HOST || '192.168.56.1';

const DIRECTORY_PATH = path.resolve(__dirname, '../assets/Blogs');
const IMAGE_DIRECTORY_PATH = path.resolve(__dirname, '../assets/images');
// Enable CORS for all routes
app.use(cors());


app.use(express.static('public'));

app.get('/files', (req, res) => {
    fs.readdir(DIRECTORY_PATH, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Unable to scan directory');
        }
        const markdownFiles = files.filter(file => path.extname(file).toLowerCase() === '.md');
        res.json(markdownFiles);
    });
});
// Serve images from the images directory
app.use('/image', express.static(IMAGE_DIRECTORY_PATH));
// Endpoint to list all images in the images folder
app.get('/list-images', (req, res) => {
    fs.readdir(IMAGE_DIRECTORY_PATH, (err, files) => {
        if (err) {
            console.error('Error reading images directory:', err);
            return res.status(500).send('Unable to scan directory');
        }
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.json(imageFiles)
    });
});

// Example endpoint to serve a specific image
app.get('/images/:imageName', (req, res) => {
    const { imageName } = req.params;
    const imagePath = path.join(IMAGE_DIRECTORY_PATH, imageName);
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send('Image not found');
        }
        res.sendFile(imagePath);
    });
});





app.get('/file-content', (req, res) => {
    const { name: fileName } = req.query;
    const filePath = path.join(DIRECTORY_PATH, fileName);

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error('Error reading file stats:', err);
            return res.status(500).send('Unable to read file stats');
        }
        const creationDate = stats.birthtime;

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).send('Unable to read file');
            }

            // Extract specific details using regex or custom parsing
            // const writerName = data.match(/Writer Name:\s*(.*)/)?.[1] || 'Unknown';
            // Load the markdown content into cheerio to parse the inline HTML
            const $ = cheerio.load(marked(data));
            const writerImage = $('.writerImage img').attr('src') || '';            
            const BlogThumbnail = $('.BlogThumbnail img').attr('src') || '';            
            const writerName = $('.writerName').text() || '';      
            const { title } = processMarkdown(data)
            res.json({
                creationDate,
                writerName,
                writerImage,
                BlogThumbnail,
                context: {
                    title,
                    content: data
                }
            });
        });
    });
});










app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});