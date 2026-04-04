require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const studentmodel = require('./models/student');
const rolemodel = require('./models/role');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.log(err));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;

/* ================== ROUTES ================== */

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

/* ================== ADMIN PAGE ================== */

app.get('/admin', async (req, res) => {
    if (!req.session.username) return res.redirect('/');

    const complaints = await studentmodel
        .find({ dept: req.session.username })
        .sort({ _id: -1 });

    res.render('admin', { complaints });
});

/* ================== STUDENT PAGE ================== */

app.get('/student', async (req, res) => {
    if (!req.session.username) return res.redirect('/');

    const complaints = await studentmodel
        .find({ username: req.session.username })
        .sort({ _id: -1 });

    res.render('student', { complaints });
});

/* ================== ADMIN SAVE (SOLVE COMPLAINT) ================== */

app.post('/admin-save', async (req, res) => {
    if (!req.session.username) return res.redirect('/');

    const { complaintId, solution } = req.body;

    await studentmodel.findByIdAndUpdate(complaintId, {
        solution: solution,
        status: 'solved'
    });

    res.redirect('/admin');
});

/* ================== STUDENT POST COMPLAINT ================== */

app.post('/student-save', async (req, res) => {
    if (!req.session.username) return res.redirect('/');

    const { username, dept, complaint } = req.body;

    const checkDept = await rolemodel.findOne({ username: dept });

    if (!checkDept) {
        return res.send(`
            <script>
                alert("Department not found");
                window.location.href = "/student";
            </script>
        `);
    }

    const newComplaint = new studentmodel({
        username,
        dept,
        complaint,
        status: 'posted',
        solution: ''
    });

    await newComplaint.save();

    res.redirect('/student');
});

/* ================== LOGIN ================== */

app.post('/login', async (req, res) => {

    const check = await rolemodel.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (!check) {
        return res.send(`
            <script>
                alert("Invalid credentials");
                window.location.href = "/";
            </script>
        `);
    }

    req.session.username = check.username;

    if (check.role === 'admin') {
        return res.redirect('/admin');
    } else {
        return res.redirect('/student');
    }
});

/* ================== REGISTER ================== */

app.post('/register', async (req, res) => {

    const check = await rolemodel.findOne({
        username: req.body.username
    });

    if (check) {
        return res.send(`
            <script>
                alert("Username already exists");
                window.location.href = "/register";
            </script>
        `);
    }

    const { username, password, role } = req.body;

    const user = new rolemodel({ username, password, role });

    await user.save();

    res.redirect('/');
});

/* ================== LOGOUT ================== */

app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

/* ================== SERVER ================== */

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});