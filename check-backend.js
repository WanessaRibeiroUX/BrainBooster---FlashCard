const fetch = require("node-fetch"); // Bun has built-in fetch, but just in case node is used. Actually for Bun we don't need require.

async function checkBackend() {
  const url = "http://localhost:3000/";
  console.log(`Checking backend at ${url}...`);

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("✅ Backend is running!");
      console.log("Response:", data);
    } else {
      console.error(`❌ Backend returned status ${response.status}`);
      console.error("Response:", await response.text());
    }
  } catch (error) {
    console.error("❌ Failed to connect to backend.");
    console.error("Error:", error.message);
    console.error("\nPossible causes:");
    console.error(
      '1. The server is not running. Run "bun dev:server" in a separate terminal.'
    );
    console.error("2. The server is running on a different port.");
    console.error("3. Firewall or network issues.");
  }
}

checkBackend();
