import db from "../models";
export const createProductRepository = async (body) => {
  console.log(body);
  return db.Product.findOrCreate({
    where: {
      nameProduct: body.nameProduct,
    },
    defaults: {
      nameProduct: body.nameProduct,
      description: body.description,
      price: body.price,
      categoryId: body.categoryId,
      stock: body.stock,
      status: body.status,
    },
  });
};

export const getAllProductRepository = async () => {
  return db.Product.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt", "categoryId"],
    },
    include: [
      {
        model: db.Categories,
        as: "category",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: db.imageProducts,
        as: "image",
        attributes: {
          exclude: ["createdAt", "updatedAt", "productId"],
        },
      },
      {
        model: db.sizeProduct,
        as: "sizeProduct",
        attributes: {
          exclude: ["createdAt", "updatedAt", "productId", "sizeId"],
        },
        include: [
          {
            model: db.Size,
            as: "size",
            attributes: {
              exclude: ["createdAt", "updatedAt", "sizeId"],
            },
          },
        ],
      },
    ],
  });
};

export const getOneProductRepository = async ({ id }) => {
  return db.Product.findOne({
    where: { id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: db.Categories,
        as: "category",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: db.imageProducts,
        as: "image",
        attributes: {
          exclude: ["createdAt", "updatedAt", "productId"],
        },
      },
      {
        model: db.sizeProduct,
        as: "sizeProduct",
        attributes: {
          exclude: ["createdAt", "updatedAt", "productId", "sizeId"],
        },
        include: [
          {
            model: db.Size,
            as: "size",
            attributes: {
              exclude: ["createdAt", "updatedAt", "sizeId"],
            },
          },
        ],
      },
    ],
  });
};

export const updateProductRepository = async (id, body) => {
  return db.Product.update(body, {
    where: { id },
  });
};

export const deleteProductRepository = async ({ id }) => {
  return db.Product.destroy({
    where: { id },
  });
};
