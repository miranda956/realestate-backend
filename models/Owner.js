module.exports=(sequelize,DataTypes)=>{

const Owner=sequelize.define("Owner",{
firstName:{
 type:DataTypes.STRING,
allowNull:false,
required:true
        },
lastName:{
type:DataTypes.STRING,
allowNull:false,
required:true
        },
email:{
 type:DataTypes.STRING,
allowNull:false,
required:true
        },
gender:{
type:DataTypes.STRING,
allowNull:false,
required:true
},
contact:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true
},
password:{
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
    Owner.associate=(models)=>{
        Owner.hasMany(models.Property,{
            foreignkey:{
                allowNull:false
            }
            
        })
    }
    return Owner;
}