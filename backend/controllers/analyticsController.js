const Order = require('../models/Order');

const getTopProducts = async (req, res) => {
  try {
    const data = await Order.aggregate([
      {
        $group: {
          _id: "$productId",
          totalSales: { $sum: "$totalPrice" },
          count: { $sum: 1 }
        }
      },
      { $sort: { totalSales: -1 } },
      { $limit: 5 }
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTopProducts };
