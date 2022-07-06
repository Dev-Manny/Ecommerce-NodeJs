module.exports = {
  get: {
    tags: ["Product"],
    description: "Admin Get All Products",
    operationId: "adminGetAllProducts",
    parameters: [],
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Product",
            },
          },
        },
      },
    },
  },
};
