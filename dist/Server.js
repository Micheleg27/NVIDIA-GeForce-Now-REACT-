"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const { check, validationResult } = require('express-validator');
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
// app.use(express.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;
app.post('/register', [check('email').isEmail().normalizeEmail(), check('password').isLength({ min: 8, max: 16 })], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.redirect('/register');
    }
    const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
    yield prisma.user.create({
        data: {
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        }
    });
    yield prisma.$disconnect();
    res.redirect('/login');
}));
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
app.post('/login', [check('email').isEmail().normalizeEmail(), check('password').isLength({ min: 8, max: 16 })], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.redirect('/login');
    }
    const response = yield prisma.user.findFirst({
        where: {
            email: req.body.email
        }
    });
    if (response && (yield bcrypt_1.default.compare(req.body.password, response.password))) {
        return res.redirect('http://localhost:3000');
    }
    yield prisma.$disconnect();
}));
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
//# sourceMappingURL=Server.js.map