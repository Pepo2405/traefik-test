import { serve } from "bun";

// Create a simple Bun server
const server = serve({
  port: 3001,
  fetch(req) {
    const url = new URL(req.url);
    
    // Handle different routes
    if (url.pathname === "/") {
      return new Response("Server 2!");
    }
    
    if (url.pathname === "/about") {
      return new Response("!2 This is a simple server built with Bun");
    }
    
    // Handle 404
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
