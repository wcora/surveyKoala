const auth = async (req, res, next) => {
    try{
        if (!req.user){
            throw new Error();
        }
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate. '})
    }
}
module.exports = auth;
