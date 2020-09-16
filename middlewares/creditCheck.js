const creditCheck = async (req, res, next) => {
    try{
        if (!req.user || req.user.credit <= 0){
            throw new Error();
        }
        next();
    } catch (e) {
        res.status(403).send({ error: 'Please make sure you have enough balance! '})
    }
}
module.exports = creditCheck;
