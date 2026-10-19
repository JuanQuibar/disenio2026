import { fetchPexelsVideoById } from "@/app/services/fetchs";
import { MuyDestacada } from "./muy-destacada";

export async function MuyDestacadaWrapper() {
  const videos = await fetchPexelsVideoById(34634812);
  if (videos.length === 0) {
    return null;
  }

  return <MuyDestacada videoUrl={videos[0]} />;
}
