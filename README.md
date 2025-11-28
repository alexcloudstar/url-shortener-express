# URL Shortener in TypeScript + Express

A simple URL shortening service built with Node.js, Express, and TypeScript. It exposes two API endpoints to shorten URLs and redirect to the original link.

## Video Tutorial

Watch the full tutorial here:
https://www.youtube.com/watch?v=KAMKOzVFsxs

## Features

- REST API for shortening URLs
- In memory storage for URL mappings
- URL validation
- Automatic unique short keys
- Written in TypeScript
- Easy to extend for production use

## How it works

The service generates a unique key for each URL. It stores the mapping in memory and exposes an API endpoint to shorten URLs. Visiting the short link redirects the user to the original URL.

Simple flow:
1. Client sends a POST request with a long URL
2. Server generates a random key
3. Server returns a shortened link using that key
4. Client can visit `/api/:key` to get redirected

## API Endpoints

### Create short URL

**POST** `/api/shorten`

Body:
```json
{
  "url": "https://example.com"
}
```

Response:
```json
{
  "shortUrl": "http://localhost:3000/api/abc123"
}
```

### Redirect to original URL

**GET** `/api/:key`

If the key exists, the server redirects to the original URL.  
If not found, it returns an error.

## Project Structure

```
src/
package.json
tsconfig.json
.gitignore
```

## Run Locally

### Install dependencies
```
npm install
```

### Start the server
```
npm run dev
```

Server runs at:
```
http://localhost:3000
```

## Future improvements

- Persistent storage (Redis, PostgreSQL, SQLite)
- Rate limiting and validations
- Better unique key generation
- Analytics for clicks
- Expiration system for URLs

## License

MIT
