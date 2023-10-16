import * as services from "../services/order.Service";

export const createOrderController = async (req, res) => {
  try {
    const { id } = req.user;
    const data = {
      ...req.body,
      userId: id,
    };
    // console.log(id);
    const response = await services.createOrderService(data);
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
