import { serve } from "bun";

// Create a simple Bun server
const server = serve({
  port: 3000,
  fetch(req) {
    console.log(`Server 1 ${req.url} ${new Date().toISOString()}`);
    const url = new URL(req.url);

    // Handle different routes
    if (url.pathname === "/") {
      return new Response("Server!");
    }

    if (url.pathname === "/about") {
      return new Response("!1 This is a simple server built with Bun");
    }

    // Handle 404
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
