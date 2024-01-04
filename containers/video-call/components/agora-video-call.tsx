'use client'

import dynamic from 'next/dynamic';
import { useAgoraVideoCallContext } from '../context';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { RtcPropsInterface, layout } from 'agora-react-uikit';

const AgoraUIKit = dynamic(
  () => import('agora-react-uikit'),
  { ssr: false }
);

const AgoraVideoCall = () => {
  const searchParams = useSearchParams();

  const { channel, token, uid, setChannel, setToken, setUid } = useAgoraVideoCallContext();

  useEffect(() => {
    const channel = searchParams.get('channelName');
    const token = searchParams.get('token');
    const uid = searchParams.get('uid');

    if (channel) {
      setChannel(channel);
    }
    if (token) {
      setToken(token);
    }

    if (uid) {
      setUid(+uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (channel === null) {
    return null;
  }

  const rtcProps: RtcPropsInterface = {
    appId: process.env.NEXT_PUBLIC_AGORA_APP_ID as string,
    channel,
    token,
    uid: uid || 0,
  };

  return (
    <AgoraUIKit rtcProps={rtcProps} callbacks={{
      EndCall: () => {
        window.close();
      },
    }} />
  )
};

export default AgoraVideoCall; 