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
const supertest = require('supertest');
const createApp = require('./Server');
const app = createApp();
const request = supertest(app);
test('POST /login', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield request.post('/register')
        .expect(200)
        .expect('Content-Type', 'application/json');
    expect(res.body).toEqual('http://localhost:3000');
}));
//# sourceMappingURL=server.test.js.map