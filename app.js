// const http = require('http');

// const routes = require('./routes')
// console.log(routes.someText)
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
// const db = require('./util/database');

const errorController = require('./controllers/error')
//ejs template engine implementation
app.set('view engine','ejs');

// const mongoConnect = require('./util/database').mongoConnect;
const mongoose = require('mongoose');
//mysql connection + sequelize
// const sequelize = require('./util/database');

// const Product = require('./models/product');
const User = require('./models/user');
// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');

//handlebars template engine implementation
// const expressHbs = require('express-handlebars')
// app.engine('hbs',expressHbs({layoutsDir:'views/layouts',defaultLayout:'main-layout',extname:'hbs'}));
// app.set('view engine','hbs')
//pug template engine implementation
// app.set('view engine','pug')
// const rootDir = require('./util/path')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// db.execute('select * from products')
// .then((res)=>{
//     console.log(res)
// })
// .catch(err =>{
//     console.log(err)
// });

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

//mysql + sequelize work
// app.use((req,res,next)=>{
//     User.findUserById("60a12796cf8c4f7c4f00c8e9")
//     .then(user=>{
//         req.user = new User(user.name, user.email,user.cart, user._id);
//         next();
//     })
//     .catch(err=>{console.log(err)})
// });

// app.use('/admin',adminData.routes)

// app.use(shopRoutes);

//with controller
app.use(errorController.error404)
//without controller
// app.use((req,res,next)=>{
//     // res.status(404).send('<h1>Page Not Found</h1>')
//     // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
//     // res.status(404).sendFile(path.join(rootDir,'views','404.html'))
//     res.status(404).render('404',{docTitle:'404 Not Found'})

// })
//node way without express
// const server = http.createServer(app);
// server.listen(3000);

//node way with express
//sequelize + mysql connection + work
// Product.belongsTo(User,{contrain:true, onDelete:'CASCADE'});
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product,{through:CartItem});
// Product.belongsToMany(Cart,{through:CartItem});
// sequelize.sync()
// .then((res)=>{
//     return User.findByPk(1)
// })
// .then(user=>{
//     if(!user){
//         User.create({name:'Anas', email:'anas.rasheed@email.com'})
//     }
//     return user
// })
// // .then(result=>{
// //     // console.log(result)
// //     // return result.createCart();
// // })
// .then(
//     res =>{
//     app.listen(3000);

//     }
// )
// .catch(err=>{
//     console.log(err)
// });
//mongodb method
// mongoConnect(()=>{
//     console.log('runs at 108')
//     app.listen(3000);

// })

//mongoes method:
mongoose.connect('mongodb+srv://ZCGawUWxCKWeS23k:GRVjFN5A60mzVHYo@cluster0.6a3sf.mongodb.net/shop?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('runs at 108');
    app.listen(3000);
}
)
.catch(err=>{
    console.log(err)
})