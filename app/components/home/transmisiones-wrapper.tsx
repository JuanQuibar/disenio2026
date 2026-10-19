import { Canal7LiveWrapper } from "@/app/components/live/canal7-live-wrapper";
import { RadioNihuilWrapper } from "@/app/components/live/radio-nihuil-wrapper";
import { BannerPublicitario } from "@/app/components/banner-publicitario";
import { HomePair } from "./home-pair";

export async function TransmisionesWrapper() {
  const [canal7, radioNihuil] = await Promise.all([
    Canal7LiveWrapper(),
    RadioNihuilWrapper(),
  ]);

  return HomePair({
    name: "transmisiones",
    first: canal7,
    second: radioNihuil,
    third: <BannerPublicitario moduleId="ad-listado" />,
  });
}
