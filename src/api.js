// api.js
export const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
