import express, { Request, Response } from 'express';
import 'express-async-errors';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';
const { check, validationResult } = require('express-validator');

const prisma = new PrismaClient();

const app = express();

// app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const port = process.env.PORT || 5000;

// app.get('/', async (req, res) => {
// 	const response = await prisma.user.findMany();
// 	res.json(response);
// });

app.post(
	'/register',
	[ check('email').isEmail().normalizeEmail(), check('password').isLength({ min: 8, max: 16 }) ],
	async (req: Request, res: Response) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		await prisma.user.create({
			data: {
				username: req.body.username,
				password: req.body.password,
				email: req.body.email
			}
		});

		await prisma.$disconnect();

		// res.send(JSON.stringify(response));
		res.redirect('/login');
	}
);

app.post(
	'/login',
	[ check('email').isEmail().normalizeEmail(), check('password').isLength({ min: 8, max: 16 }) ],
	async (req: Request, res: Response) => {
		await prisma.user.findMany({});

		await prisma.$disconnect();

		// res.send(JSON.stringify(response));
		res.redirect('http://localhost:3000');
	}
);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
