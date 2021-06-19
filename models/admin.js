module.exports=(sequelize,DataTypes)=>{

    const Admin= sequelize.define("Admin",{
     
     username:{
         type:DataTypes.STRING,
         allowNull:false,
         required:true
     },
     password:{
         type:DataTypes.STRING,
         allowNull:false,
         required:true
     }



        
    },{
        
            freezeTableName:true,
            timestamps:false
        
    }
    )

    return Admin;



}