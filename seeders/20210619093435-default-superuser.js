'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Property',[{
           propertyName:"runda",
            category:"flat",
            propertySize:"56by12",
            Rooms:"14",
            propertyPrice:"4500",
            buildYear:"2020-09-09",
            location:"kisumu",
            description:"nice flat "
    },
  
  {
    propertyName:"baraka",
    category:"flat",
    propertySize:"56by12",
    Rooms:"14",
    propertyPrice:"5000",
    buildYear:"2020-09-09",
    location:"kakamega",
    description:"nice flat "

  }
,{
  propertyName:"kill",
  category:"flat",
  propertySize:"56by12",
  Rooms:"14",
  propertyPrice:"4500",
  buildYear:"2020-09-09",
  location:"kisumu",
  description:"nice flat "



}])
await queryInterface.bulkInsert('Owner',[{

  firstName:"mark",
  lastName:"lumino",
  email:"lumino@gmail.com",
  gender:"male",
  contact:"070000000",
  password:"gert"

},
{
  firstName:"ronald",
  lastName:"atsali",
  email:"atsali@gmail.com",
  gender:"male",
  contact:"0711111111",
  password:"ioif"


},
{
  firstName:"enos",
  lastName:"ekello",
  email:"ekello@gmail.com",
  gender:"male",
  contact:"0722222222",
  password:"retro"
}

])

await queryInterface.bulkInsert('Client',[{

  firstName:"mark",
  lastName:"lumino",
  email:"lumino@gmail.com",
  gender:"male",
  contact:"070000000",
  password:"gert"

},
{
  firstName:"ronald",
  lastName:"atsali",
  email:"atsali@gmail.com",
  gender:"male",
  contact:"0711111111",
  password:"ioif"


},
{
  firstName:"enos",
  lastName:"ekello",
  email:"ekello@gmail.com",
  gender:"male",
  contact:"0722222222",
  password:"retro"
}

])

await queryInterface.bulkInsert('Admin',[{
username:"melvinwere",
password:"1234"
  

},
{
  username:"olgah",
password:"1234"

},
{
username:"ronald",
password:"1234"
}

])

await queryInterface.bulkInsert('Staff',[{

  firstName:"mark",
  lastName:"lumino",
  email:"lumino@gmail.com",
  gender:"male",
  contact:"070000000",
  password:"gert",
  role:"staff"

},
{
  firstName:"ronald",
  lastName:"atsali",
  email:"atsali@gmail.com",
  gender:"male",
  contact:"0711111111",
  password:"ioif",
  role:"staff"



},
{
  firstName:"enos",
  lastName:"ekello",
  email:"ekello@gmail.com",
  gender:"male",
  contact:"0722222222",
  password:"retro",
  role:"staff"

}

])


    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
