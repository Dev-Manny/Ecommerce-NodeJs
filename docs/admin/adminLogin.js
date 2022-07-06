module.exports = {
  post: {
    tags: ["Admin"],
    description: "Login to admin",
    operationId: "adminLogin",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/AuthInput",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Login successful",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
