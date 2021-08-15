// get the client
const mysql = require('mysql2');

const insert = {
    name: process.argv[2],
    age : parseInt(process.argv[3]),
    city : process.argv[4]
}
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    database: 'testdb',
    password:'Acms@123'
  });
  
  connection.query(
      `
      INSERT INTO persons (name, age,city) VALUES(
'${insert.name}',
${insert.age},
'${insert.city}'
)`,
      function(err,results){
          if(err)
          {
              console.error(err)
          }
          else{
              console.log(results)
              console.log("Inserted Successfully")

          }
          connection.close();
      }
     
  )

