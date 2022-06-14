import Foundation

@objc class EventToJS: NSObject {
  
  @objc static let shared = EventToJS()
  var eventToJSBridge: EventToJSBridge?
  
  override init() {
    super.init()
  }
   
  @objc func registerNativeModule(bridge: EventToJSBridge) {
    self.eventToJSBridge = bridge;
  }
  
  @objc func dispatchEvent(_ eventType: String, _ eventData: Dictionary<String, Any>) {
    if let bridge = self.eventToJSBridge {
      bridge.dispatchEvent(eventType, withEventData: eventData)
    }
  }
}
