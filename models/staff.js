module.exports=(sequelize,DataTypes)=>{
    const Staff = sequelize.define('Staff',{

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
           role:{
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
        
    })

    return Staff;
}