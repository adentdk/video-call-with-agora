
import AgoraVideoCall from "~/containers/video-call/components/agora-video-call";
import AgoraVideoCallContextProvider from "~/containers/video-call/components/context-provider";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <AgoraVideoCallContextProvider>
        <AgoraVideoCall />
      </AgoraVideoCallContextProvider>
    </main>
  )
}
