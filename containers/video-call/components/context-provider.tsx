'use client'

import { useState } from "react";
import AgoraVideoCallContext from "../context";

export default function AgoraVideoCallContextProvider(props: { children: React.ReactNode }) {
  const [channel, setChannel] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [uid, setUid] = useState<number | null>(null);
  return (
    <AgoraVideoCallContext.Provider
      value={{
        channel,
        token,
        uid,
        setChannel,
        setToken,
        setUid,
      }}>
      {props.children}
    </AgoraVideoCallContext.Provider>
  )
}