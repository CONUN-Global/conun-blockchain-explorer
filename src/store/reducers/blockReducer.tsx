import { BLOCK_ACTIVITY_DATA, ADD_NEW_BLOCK } from "../actions/actionTypes"

import { ObjectType } from "../../utility/types"
import { logger } from "../../utility/functions"

// In TS an action must be of a strict format. Set them here:
type Action =
  | {
      type: typeof BLOCK_ACTIVITY_DATA
      payload: {
        blockActivityData: Array<ObjectType>
        from?: number | string | null
      }
    }
  | {
      type: typeof ADD_NEW_BLOCK
      payload: {
        previousBlockData: Array<ObjectType>
        newBlockData: ObjectType
      }
    }

const initialState = {
  blockActivityData: Array<ObjectType>(),
}

const blockReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case BLOCK_ACTIVITY_DATA:
      if (!action.payload) {
        return state
      }
      return {
        ...state,
        blockActivityData: action.payload.blockActivityData,
        from: action.payload.from || null,
      }

    case ADD_NEW_BLOCK:
      if (!action.payload) {
        return state
      }
      const updatedBlockData = [...action.payload.previousBlockData]

      // Prevent duplicated with this function. Return list with no change if duplicate found.
      for (let i = 0; i < updatedBlockData.length; i++) {
        let old = updatedBlockData[i]
        if (old.blocknum === action.payload.newBlockData.blocknum) {
          logger("BLOCK REDUCER: Duplicates found", "warn")
          return {
            ...state,
            blockActivityData: updatedBlockData,
          }
        }
      }

      updatedBlockData.unshift(action.payload.newBlockData)

      return {
        ...state,
        blockActivityData: updatedBlockData.slice(0, 10), // Keep only 10 blocks in the table
      }
    default:
      return {
        ...state,
      }
  }
}

export default blockReducer
