// @flow
import { NativeModules, NativeEventEmitter } from 'react-native'

const NativeEventModule = NativeModules.EventToJS
const EventEmitter = new NativeEventEmitter(NativeEventModule)

type EventType = 'customEvent'
type EventHandler = (event: any) => void

interface TNativeEvent {
  addEventListener: (EventType, EventHandler) => void,
  removeEventListener: (EventType, EventHandler) => void,
}

const NativeEvent: TNativeEvent = {
  ...NativeEventModule,
  addEventListener (eventType, handler) {
    EventEmitter.addListener(eventType, handler)
  },
  removeEventListener (eventType, handler) {
    EventEmitter.removeListener(eventType, handler)
  },
}

export default NativeEvent
