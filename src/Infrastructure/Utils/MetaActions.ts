import { Action } from "@reduxjs/toolkit";
import { DebounceData, Meta } from "../../Types/Models/CommonStoreType";

export type MetaAction = {
    type: metaActionType,
    payload: Action,
    meta: Meta

}

export type metaActionType = 'DELAYED_ACTION' | 'DEBOUNCE_ACTION'

function delayedAction(action: Action, delay: number = 0): MetaAction{
    const delayedAction: MetaAction = {
        type: "DELAYED_ACTION",
        payload: action,
        meta: {
            delay
        }
    }

    return delayedAction;
}

export function debounceAction(action: Action, debounce: DebounceData): MetaAction{
    const debounceAction: MetaAction = {
        type: "DEBOUNCE_ACTION",
        payload: action,
        meta: {
            debounce
        }
    }

    return debounceAction;
}