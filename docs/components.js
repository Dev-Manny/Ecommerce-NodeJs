module.exports = {
  components: {
    schemas: {
      // Product
      Product: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "An id of a product",
          },
          name: {
            type: "string",
            description: "Name of the product",
          },
          description: {
            type: "string",
            description: "Description of the product",
          },
          image: {
            type: "string",
            description: "Image of the product",
          },
          category: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                description: "An id of a category",
              },
              name: {
                type: "string",
                description: "Name of the category",
              },
            },
          },
          quantity: {
            type: "number",
            description: "Quantity of the product",
          },
          price: {
            type: "number",
            description: "Price of the product",
          },
          status: {
            type: "string",
            description: "Status of the product",
          },
          reviews: {
            type: "array",
            description: "Reviews of the product",
            items: {
              type: "object",
              properties: {
                _id: {
                  type: "string",
                  description: "An id of a review",
                },
                user: {
                  type: "object",
                  properties: {
                    _id: {
                      type: "string",
                      description: "An id of a user",
                    },
                    name: {
                      type: "string",
                      description: "Name of the user",
                    },
                  },
                },
                rating: {
                  type: "number",
                  description: "Rating of the review",
                },
                comment: {
                  type: "string",
                  description: "Comment of the review",
                },
                date: {
                  type: "string",
                  description: "Date of the review",
                },
              },
            },
          },
          sold: {
            type: "boolean",
            description: "The status of the product",
            example: false,
          },
        },
      },
      // Authentication
      AuthInput: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "Email of the user",
            example: "test@example.com",
          },
          password: {
            type: "string",
            description: "Password of the user",
            example: false,
          },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          internal_code: {
            type: "string",
          },
        },
      },
    },
  },
};
