const { celebrate, Joi, Segments } = require('celebrate');

//ATTENTION NOTE:
//No se usa el body parses de celebrate porques se usa el default de Express.js
//END NOTE

module.exports = {

    create: celebrate ({

        [Segments.BODY]: Joi.object().keys({
          first_name: Joi.string().required(),
          last_name: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string(),
        }),
      
      }), 

}; 

