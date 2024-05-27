# CORS Proxy Server

This project sets up an Express server to act as a CORS proxy, allowing you to bypass CORS restrictions when making requests to external APIs from your client-side applications or browser extensions.

## Features

- Provides a simple Express server to proxy requests to external APIs.
- Allows you to make requests to APIs that don't support CORS.
- Easy setup and configuration.

## Setup

1. **Clone the Repository:**

    ```sh
    git clone https://github.com/your-username/cors-proxy.git
    cd cors-proxy
    ```

2. **Install Dependencies:**

    ```sh
    npm install
    ```

3. **Start the Server:**

    ```sh
    npm start
    ```

4. **Access the Proxy Server:**

    The server will start on port 3000 by default. You can access it at [http://localhost:3000](http://localhost:3000).

## Usage

To use the proxy server, send your HTTP requests to `http://localhost:3000/proxy`, specifying the target URL, headers, and request body in the request payload. The server will forward the request to the target URL and return the response.

Example usage in a browser extension or client-side application:

```javascript
fetch('http://localhost:3000/proxy', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://api.example.com/endpoint',
    headers: {
      'Authorization': 'Bearer your-token',
      // Add any other headers needed
    },
    body: {
      // Add request body if necessary
    },
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
