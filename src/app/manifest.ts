
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "JP Workshop",
    short_name: "JP Workshop",
    description:
      "Motorcycle and scooter servicing, repairs, and maintenance.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F3F7FC",
    theme_color: "#173B63",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
