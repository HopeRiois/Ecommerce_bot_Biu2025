export async function GET() {
    try {
      // Fetch a products
      const apiUrl = process.env.API_URL ?? "http://localhost:5000";
      const apiRoute = process.env.API_PRODUCT ?? "/api/Product";
      const productsRes = await fetch(apiUrl + apiRoute + "/get-all");
      if (!productsRes.ok) throw new Error("Failed to fetch products");
  
      const responseData = await productsRes.json();
  
      return new Response(JSON.stringify({ responseData }), { status: 200 });
    } catch (error) {
      console.error("Error fetching products:", error);
      return new Response(JSON.stringify({ error: "Could not fetch products" }), {
        status: 500,
      });
    }
  }