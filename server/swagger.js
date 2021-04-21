exports.options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Practical Test API",
            description: "Practical Test API with Swagger",
            version: "1.0.0",
            contact: {
              name: "Michael Otokunor",
              email: "mike.otokunor@gmail.com"
            }
    },
    servers: [{url:"http://localhost:3000"},],
  },
  apis: ["./routes/*.js"],

};
