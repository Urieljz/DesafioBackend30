const jwt = require('jsonwebtoken');
const JWT_SIGN = process.env.JWT_SIGN;
const User = require('../models/users');

function createJWT(data) {
    return jwt.sign(data, JWT_SIGN, { expiresIn: '1h' });
}

function verifyJWT(req, res, next) {
    const token = req.headers.authorization;
    const dateNow = new Date();

    if (!token) {
        return res.status(401).send({ msg: 'Login required' });
    }

    token = token.split(' ')[1];
    jwt.verify(token, JWT_SIGN, async (err, decoded) => {
        if (err) {
            return res.status(401).send({ msg: 'Invalid token' });
        }

        if (decoded.exp < dateNow.getTime() / 1000) {
            return res.status(401).send({ msg: 'Expired token' });
        } else {
            req.user = await User.findById(decoded._id);
            next();
        }
    });
}

module.exports = { createJWT, verifyJWT };