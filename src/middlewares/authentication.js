const jwt = require('jsonwebtoken');
const jwt_sign = process.env.JWT_SIGN;
const User = require('../models/users');

function createJWT(data) {
    return jwt.sign(data, jwt_sign, { expiresIn: '1h' });
}

function verifyJWT(req, res, next) {
    const token = req.headers.authorization;
    const dateNow = new Date();

    if (!token) {
        return res.status(401).send({ msg: 'Login required' });
    }

    token = token.replace('Bearer ', '');
}