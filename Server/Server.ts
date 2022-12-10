import express, { Request, Response } from 'express';
import 'express-async-errors';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
const { check, validationResult } = require('express-validator');

const prisma = new PrismaClient();

const app = express();

// app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.post(
	'/register',
	[ check('email').isEmail().normalizeEmail(), check('password').isLength({ min: 8, max: 16 }) ],
	async (req: Request, res: Response) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.redirect('/register');
		}

		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		await prisma.user.create({
			data: {
				username: req.body.username,
				password: hashedPassword,
				email: req.body.email
			}
		});

		await prisma.$disconnect();

		res.redirect('/login');
	}
);

// app.get('/login', async(req: Request, res: Response) => {
//     const response = await prisma.user.findMany({
// 		where: {
// 			email: req.body.email
// 		}
// 	});

//     await prisma.$disconnect();
//     res.send(JSON.stringify(response));
// 	// res.render('Login.js');
// });


app.post(
	'/login',
	[ check('email').isEmail().normalizeEmail(), check('password').isLength({ min: 8, max: 16 }) ],
	async (req: Request, res: Response) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.redirect('/login');
		}

		const response = await prisma.user.findFirst({
			where: {
				email: req.body.email
			}
		});

		if (response && (await bcrypt.compare(req.body.password, response.password))) {
			return res.redirect('http://localhost:3000');
		}

		await prisma.$disconnect();
	}
);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
