'use client'

import { createContext, useContext } from "react"

type AgoraVideoCallContextType = {
  channel: string | null
  token: string | null
  uid: number | null
  setChannel: (channel: string) => void
  setToken: (token: string | null) => void
  setUid: (uid: number | null) => void
}

const AgoraVideoCallContext = createContext<AgoraVideoCallContextType>({
  channel: null,
  token: null,
  uid: null,
  setChannel: () => {},
  setToken: () => {},
  setUid: () => {}
})

export const useAgoraVideoCallContext = () => useContext(AgoraVideoCallContext)

export default AgoraVideoCallContext
