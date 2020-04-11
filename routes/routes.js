// import other routes
const reviewRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Welcome to API server');
    });

    // // other routes
    reviewRoutes(app, fs);

};

module.exports = appRouter;