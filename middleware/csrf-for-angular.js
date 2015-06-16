module.exports = function () {

    return function (req, res, next) {
        res.cookie('XSRF-TOKEN', res.locals._csrf, {httpOnly: false});
        next();
    };
};
