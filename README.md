# API Gateway

An API Gateway built using Node.js and Express to support rate limiting and user-provided APIs.  

## Features

- **Rate Limiting**: Control the number of API requests a client can make within a specific time frame.
- **User-Provided APIs**: Register and manage custom APIs provided by users.
- **Centralized API Management**: Act as a single entry point for multiple APIs.
- **Scalable**: Designed to handle a high volume of requests efficiently.
- **Easy to Extend**: Modular structure allows for adding custom middleware and features.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RynoCODE/API-Gateway.git
   cd API-Gateway
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the project root and adding the following:
   ```env
   PORT=3000
   REDIS_URL=redis://localhost:6379
   RATE_LIMIT_MAX=1000 # Maximum number of requests allowed
   RATE_LIMIT_WINDOW=60 # Time window in seconds
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Usage

### Registering an API

To register an API, send a `POST` request to `/register` with the following JSON payload:
```json
{
  "name": "API Name",
  "url": "https://api.example.com",
  "authRequired": true
}
```

### Making Requests

Once an API is registered, clients can send requests to the gateway. Example:
```bash
curl -X GET http://localhost:3000/api-name/endpoint
```

### Rate Limiting

Clients are restricted to the number of requests specified in the `.env` configuration. Requests exceeding the limit will receive a `429 Too Many Requests` response.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue or contact [RynoCODE](https://github.com/RynoCODE).
