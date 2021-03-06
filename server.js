const fs = require(`fs`);
const path = require(`path`);

const apiRoutes = require(`./routes/apiRoutes/routes`);
const htmlRoutes = require(`./routes/htmlRoutes`);

const { notes } = require(`./db/db.json`);

const express = require(`express`);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(`public`));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});