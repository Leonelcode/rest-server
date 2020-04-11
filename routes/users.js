
const reviewRoutes = (app, fs) => {

    // variables
    const dataPath = './data/reviews.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/reviews', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/reviews', (req, res) => {

        readFile(data => {
            const newReviewId = Object.keys(data).length + 1;

            // add the new user
            data[newReviewId.toString()] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new review added');
            });
        },
            true);
    });


    // UPDATE
    app.put('/reviews/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const reviewId = req.params["id"];
            data[reviewId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`reviews id:${reviewId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/reviews/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const reviewId = req.params["id"];
            delete data[reviewId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`reviews id:${reviewId} removed`);
            });
        },
            true);
    });
};

module.exports = reviewRoutes;