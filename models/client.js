module.exports=(sequelize,DataTypes)=>{
    const Client=sequelize.define("Client",{
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
    Client.associate=(models)=>{
        Client.belongsToMany(models.Property,{
            through:"Lease"

        });
    }
    return Client;
}