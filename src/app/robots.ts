import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rathore-construction-earthmovers.vercel.app/sitemap.xml",
    host: "https://rathore-construction-earthmovers.vercel.app",
  };
}
