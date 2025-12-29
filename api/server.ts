import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules don't have __dirname, so we need to create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
// give static files
app.use(express.static(path.join(__dirname, '..', '..')));

// home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

// dashboard
app.get('/Dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'Dashboard.html'));
});

// help page
app.get('/helpPage.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'helpPage.html'));
});

// Serve static files
app.use(express.static(path.join(__dirname, '..')));

// 404: not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', '404.html'));
});

app.use(((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('ERROR IN SERVER BOI !!!');
}) as ErrorRequestHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});