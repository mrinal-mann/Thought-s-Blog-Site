"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInputs = exports.signupInputs = exports.updateBloginputs = exports.createBloginputs = void 0;
const zod_1 = require("zod");
exports.createBloginputs = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.updateBloginputs = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    id: zod_1.z.string(),
});
exports.signupInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional(),
});
exports.signinInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
