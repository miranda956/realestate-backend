let express =require("express");

let winston =require("winston");

let bodyParser= require("body-parser");
let  path =require("path");

let cors =require("cors");
let  expresswinston =require("express-winston");


let db =require("./models");
let app =express();
require("./controllers/admin")(app);
require("./controllers/property")(app);
require("./controllers/auth")(app);
require("./controllers/notification");
require("./controllers/client")(app);
require("./controllers/owner")(app);
require("./controllers/reports")(app);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expresswinston.logger({
    transports:[
        new winston.transports.Console({
            // @ts-ignore
            json:true,
            colirize:true
        }),
        new winston.transports.File({
            filename:'logs/success.log'
        })
    ]
}))
app.use(expresswinston.errorLogger({
    transports:[
        new winston.transports.Console({
            // @ts-ignore
            json:true,
            colorize:true
        }),
        new winston.transports.File({
            filename:"logs/error.log"
        })
    ]
}));

db.sequelize.sync({force:false}).then(()=>{
    app.listen(6050, function(req, res) {
        console.log('server listening to localhost 6050');
      });
})
