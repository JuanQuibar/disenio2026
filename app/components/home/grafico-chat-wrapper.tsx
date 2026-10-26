import { GraficoInteractivoWrapper } from "@/app/components/grafico-interactivo/grafico-interactivo-wrapper";
import { ChatBotWrapper } from "@/app/components/chat-bot/chat-bot-wrapper";
import { HomePair } from "./home-pair";

export function GraficoChatWrapper() {
  return (
    <HomePair
      name="grafico-chat"
      first={<GraficoInteractivoWrapper />}
      second={<ChatBotWrapper />}
    />
  );
}
