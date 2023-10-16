import db from "../models";
export const createOrderItemRepository = async (data) => {
  console.log(data, "data");
  // Get the cart item
  const cartItem = await db.Cart.findAll({
    where: { userId: data.userId },
  });
  console.log(cartItem, "cart");

  if (!cartItem) {
    return { message: "Không tìm thấy mục trong giỏ hàng" };
  }

  // Create a new order item with the data from the cart item
  const newOrder = await db.Order.create({
    userId: data.userId,
  });

  // Delete all cart by user
  await db.Cart.destroy({
    where: { userId: data.userId },
  });

  return {
    message: "Mục đơn hàng đã được tạo thành công",
    newOrderItem: newOrderItem,
  };

  //   const response = await db.OrderItems.findOrCreate({
  //     where: { cartId },
  //     defaults: { cartId, orderId },
  //   });
  //   return response;
};
export const getAllOrderItemRepository = async () => {
  const data = await db.OrderItems.findAll({
    // include: [
    //   {
    //     model: db.Carts,
    //     as: "carts",
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"],
    //     },
    //   },
    // ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOrderItemByUserRepository = async ({ id }) => {
  const data = await db.OrderItems.findAll({
    where: { userId: id },
    include: [
      {
        model: db.Carts,
        as: "carts",
        where: {
          userId: id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};
