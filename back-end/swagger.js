

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'back-end',
            version: '1.0.0',
            description: 'api back-end',
        },
        servers: [
            {
                url: `http://localhost:3000`
            }
        ]
    },
    apis: ['./routes/*.js'] 
}

export default swaggerOptions;