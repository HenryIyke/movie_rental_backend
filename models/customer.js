const Joi = require('joi');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    isGold: {
      type: Boolean,
      default: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1045,
        required: true
    }
    
  });

  const Customer = mongoose.model('Customer', customerSchema);

  function validateCustomer(customer) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      isGold: Joi.Boolean(),
      email: Joi.string().required(),
      phone: Joi.string().min(5).max(20).required(),
      password: Joi.string().min(8).max(1045).required()
    };
  
    return Joi.validate(customer, schema);
  }

  exports.customerSchema = customerSchema;
  exports.Customer = Customer;
  exports.validate = validateCustomer;

