#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

static NSString * const CUSTOM_EVENT = @"customEvent";

@interface EventToJSBridge : RCTEventEmitter <RCTBridgeModule>

- (void)dispatchEvent:(NSString *)eventType withEventData:(NSDictionary *)eventData;

@end
