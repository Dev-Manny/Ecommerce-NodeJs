module.exports = {
  post: {
    tags: ["Admin"],
    description: "Verify Admin is Logged in",
    operationId: "isAdminLogin",
    parameters: [],
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
