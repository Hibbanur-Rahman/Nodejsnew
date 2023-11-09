module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('plz enter the age in query');
    }
    else{
        next();
    }
}