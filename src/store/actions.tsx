import axios from "../axios/axiosinst"

import {
  SET_CHANNEL_HASH,
  SET_CHANNEL_INFO,
  BLOCK_ACTIVITY_DATA,
} from "./actionTypes"

//Type for object
interface IObjectKeys {
  [key: string]: string | number
}

export const setChannelHash = (hash: string) => {
  return { type: SET_CHANNEL_HASH, payload: { hash: hash } }
}

const assembleChannelInfo = (data: IObjectKeys) => {
  return { type: SET_CHANNEL_INFO, payload: { channelInfoData: data } }
}

const assembleBlockDataObj = (data: Array<IObjectKeys>) => {
  return { type: BLOCK_ACTIVITY_DATA, payload: { blockActivityData: data } }
}

// Redux Action to get channel info
export const setChannelInfo = (channelHash: string) => {
  return (dispatch: any) => {
    axios
      .get("/channels/info")
      .then((response) => {
        console.log("Channel Info: ", response.status, response.statusText)
        dispatch(assembleChannelInfo(response.data.channels[0]))
      })
      .catch((e) => console.error(e))
  }
}

// Redux Action to get block activity data
export const setBlockActivityData = (channelHash: string) => {
  return (dispatch: any) => {
    axios
      .get(`/blockActivity/${channelHash}`)
      .then((response) => {
        console.log("Block Activity: ", response.status, response.statusText)
        dispatch(assembleBlockDataObj(response.data.row))
      })
      .catch((e) => console.error(e))
  }
}
