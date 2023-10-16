import db from "../models";

export const createOrderRepository = async (data) => {
  console.log(data.userId);
  // Get all items in the order for the user
  const cartItems = await db.Cart.findAll({
    where: { userId: data.userId },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  if (cartItems.length === 0) {
    return { message: "Giỏ hàng trống" };
  }

  // Create a new order
  const newOrder = await db.Order.create({
    userId: data.userId,
    status: "Đang xử lý",
    total: data.total,
    addresss,
  });

  for (let item of cartItems) {
    const newOrder = await db.Order.create({
      userId: item.userId,
      status: "Đang xử lý",
      total: data.total, // Assuming each item has a 'price' field
      cartId: item.id,
    });
  }

  // Add all items from the cart to the order
  //   for (let item of cartItems) {
  //     await db.OrderItem.create({
  //       orderId: newOrder.id,
  //       productSizeId: item.productSizeId,
  //       quantity: item.quantity,
  //     });
  //   }

  // Clear the cart
  //   await db.Cart.destroy({
  //     where: { userId: userId },
  //   });

  return {
    message: "Order has been placed successfully",
    newOrder: newOrder,
  };
};
