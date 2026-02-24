require('dotenv').config();
const express=require('express');
const app=express();
const session = require('express-session');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const studentmodel=require('./models/student');
const rolemodel=require('./models/role');
const solutionmodel=require('./models/solution');
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to database atlas');
}).catch((err)=>{
    console.log(err);
});
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/register',(req,res)=>{
    res.render('register');
});
app.get('/admin',async (req,res)=>{
    if(!req.session || !req.session.username){
        return res.redirect('/');
    }
    const complaints=await studentmodel.find({dept:req.session.username});
    res.render('admin',{complaints});
});
app.get('/student',async (req,res)=>{
    if(!req.session || !req.session.username){
        return res.redirect('/');
    }
    const complaints=await studentmodel.find({username:req.session.username});
    const solutions=await solutionmodel.find({username:req.session.username});
    res.render('student',{complaints,solutions});
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
app.post('/admin-save',async (req,res)=>{
    if(!req.session || !req.session.username){
        return res.redirect('/');
    }
    const{username,dept,solution}=req.body;
    const solutions=new solutionmodel({username,dept,solution});
    await solutions.save();
    await studentmodel.findOneAndDelete({username:req.body.username});
    res.redirect('/admin');
});


app.post('/student-save', async (req,res)=>{
    if(!req.session || !req.session.username){
        return res.redirect('/');
    }
    const check=await rolemodel.findOne({username:req.body.dept});
    if(!check){
        return res.send(`
            <script>
                alert("Department not found");
                window.location.href = "/student";
            </script>
        `);
    }
    const {username,dept,complaint}=req.body;
    const student=new studentmodel({username,dept,complaint});
    await student.save();
    res.redirect('/student');
});
app.post('/login',async (req,res)=>{
    const check=await rolemodel.findOne({username:req.body.username,password:req.body.password});
    
    if(!check){
        return res.send('<script>alert("Invalid credentials");window.location.href = "/";</script>');
    }
    req.session.username=check.username;
    if(check.role=='admin'){
        const complaints=await studentmodel.find({dept:req.session.username});
        res.render('admin',{complaints});
    }
    else if(check.role=='user'){
        const complaints=await studentmodel.find({username:req.session.username});
        const solutions=await solutionmodel.find({username:req.session.username});
        res.render('student',{complaints,solutions});
    }
});
app.post('/register', async (req,res)=>{
    const check=await rolemodel.findOne({username:req.body.username});
    if(check){
        return res.send(`
            <script>
                alert("Username already exists");
                window.location.href = "/register";
            </script>
        `);
    }
    const {username,password,role}=req.body;
    const user=new rolemodel({username,password,role});
    await user.save();
    console.log("saved successfully");
    res.redirect('/');
});
app.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    });
});