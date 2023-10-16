import * as repository from "../repositories/orderRepository";

export const createOrderService = async (data) => {
  //   console.log(userId);
  try {
    const response = await repository.createOrderRepository(data);
    console.log(response);
    return {
      message: "Order has been placed successfully",
      response: response,
    };
  } catch (error) {
    throw error;
  }
};
