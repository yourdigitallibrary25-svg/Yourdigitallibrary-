import type { APIRoute } from "astro"

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData()
    const title = formData.get("title")
    const author = formData.get("author")
    const description = formData.get("description")
    const language = formData.get("language")
    const format = formData.get("format")
    const bookFile = formData.get("bookFile")

    // Here you can save the data to your database, file system, or content collection.
    // For now, we will log it to your terminal to verify it works:
    console.log("New Book Received:", {
      title,
      author,
      description,
      language,
      format,
    })

    return new Response(
      JSON.stringify({ success: true, message: "Book added successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Failed to add book" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
