import { RtcTokenBuilder, RtcRole } from 'agora-token'
import { NextRequest } from 'next/server';
import { stringify } from 'querystring';

const generateRtcToken = (channelName: string, uid: string) => {
  const appId = process.env.AGORA_APP_ID as string;
  const appCertificate = process.env.AGORA_APP_CERTIFICATE as string;

  const expirationTimeInSeconds = 3600 * 3;

  const currentTimestamp = Math.floor(Date.now() / 1000);

  const role = RtcRole.PUBLISHER;

  const tokenExpiredTs = currentTimestamp + expirationTimeInSeconds
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

  const userToken = RtcTokenBuilder.buildTokenWithUid(
    appId,
    appCertificate,
    channelName,
    uid,
    role,
    tokenExpiredTs,
    privilegeExpiredTs
  );

  return userToken;
}

export const POST = async (req: NextRequest) => {
  const { channelName, uid } = await req.json()

  const token = generateRtcToken(channelName, uid);

  const queryString = stringify({
    channelName,
    token
  })

  return Response.json({
    url: `${process.env.APP_URL}?${queryString}`
  })
}