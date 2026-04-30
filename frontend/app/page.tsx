import HomeClient from "./HomeClient";
import { jsonLdScript, websiteSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(websiteSchema())}
      />
      <HomeClient />
    </>
  );
}
