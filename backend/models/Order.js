const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: String,
  customerId: String,
  productId: String,
  region: String,
  quantity: Number,
  totalPrice: Number,
  orderDate: Date
});

module.exports = mongoose.model('Order', orderSchema);
