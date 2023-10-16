import * as services from "../services";

export const createUser = async (req, res) => {
  try {
    // const avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    const response = await services.createUserServices({ ...req.body }); // avatar });
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const loginControllers = async (req, res) => {
  try {
    const response = await services.loginUserServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
