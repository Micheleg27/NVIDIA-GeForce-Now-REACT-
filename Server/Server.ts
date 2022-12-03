import express from 'express';
import 'express-async-errors';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import 'dotenv/config';

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

// app.get('/register', (req, res) => {
//     res.send('Hello World!')
// });

app.post('/register', async (req, res) => {
	const response = await prisma.user.create({
		data: {
			username: req.body.username,
			password: req.body.password,
			email: req.body.email
		}
	});

	await prisma.$disconnect();

	res.send(JSON.stringify(response));
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
