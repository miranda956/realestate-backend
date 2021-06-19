module.exports=(sequelize,DataTypes)=>{

const Property=sequelize.define("Property",{


propertyName:{
type:DataTypes.STRING,
allowNull:false,
required:true
},

Category:{
type:DataTypes.STRING,
allowNull:false,
required:true
},

propertySize:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true
},

Rooms:{
    type:DataTypes.INTEGER,
    allowNull:false,
    required:true
},

propertyPrice:{
    type:DataTypes.DECIMAL,
    allowNull:false
    
},
buildYear:{
    type:DataTypes.DATE,
    allowNull:false,
    required:true
},
location:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true

},

description:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true
}

},
{
    freezeTableName:true,
    timestamps:false
}
);
Property.associate=(models)=>{
    Property.belongsTo(models.Owner,{
        foreignkey:{
            allowNull:false
        }
    }),
    Property.belongsToMany(models.Client,{
        through:'Lease'
    })
}


    return Property;
}