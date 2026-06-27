import { NextResponse } from "next/server";

// Place IDs de las sedes con perfil en Google Business
const PLACE_IDS = [
  { location: "Pérez Zeledón", placeId: "ChIJVVodgNNPoY8RkYuHCT7yYA8" },
  { location: "Río Claro",     placeId: "ChIJ8algg8lPpI8RisOQMtVnDsU" },
  { location: "Ciudad Neily",  placeId: "ChIJN0I8vMVNpI8RhZ5HJnF7ST8" },
];

// Revalidar cada 12 horas
export const revalidate = 43200;

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    const allReviews: {
      name: string;
      rating: number;
      text: string;
      date: string;
      location: string;
      profilePhoto: string | null;
    }[] = [];

    await Promise.all(
      PLACE_IDS.map(async ({ location, placeId }) => {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=es&key=${key}`;
        const res = await fetch(url, { next: { revalidate: 43200 } });
        const data = await res.json();

        if (data.status !== "OK" || !data.result?.reviews) return;

        const reviews = (data.result.reviews as {
          author_name: string;
          rating: number;
          text: string;
          relative_time_description: string;
          profile_photo_url?: string;
        }[])
          .filter((r) => r.rating >= 4 && r.text?.trim())
          .map((r) => ({
            name: r.author_name,
            rating: r.rating,
            text: r.text,
            date: r.relative_time_description,
            location,
            profilePhoto: r.profile_photo_url ?? null,
          }));

        allReviews.push(...reviews);
      })
    );

    // Ordenar por rating desc, mezclar sedes
    allReviews.sort((a, b) => b.rating - a.rating);

    return NextResponse.json({ reviews: allReviews });
  } catch {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
