const request = require('postman-request');

const getAllDishes = (callback) => {
    request('https://origen-api-belu.herokuapp.com/dishes', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}


module.exports= {
 
  getAllDishes

}

