#import "EventToJSBridge.h"
#import "RnBase-Swift.h"

@implementation EventToJSBridge {
  bool hasListeners;
}

- (instancetype) init
{
  self = [super init];

  if (self) {
      [EventToJS.shared registerNativeModuleWithBridge:self];
  }

  return self;
}

RCT_EXPORT_MODULE(EventToJS)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[CUSTOM_EVENT];
}

- (void)dispatchEvent:(NSString *)eventType
        withEventData:(NSDictionary *)eventData
{
  if(hasListeners) {
    [self sendEventWithName:eventType body:eventData];
  }
}
// Will be called when this module's first listener is added.
- (void)startObserving
{
  hasListeners = YES;
}

// Will be called when this module's last listener is removed, or on dealloc.
- (void)stopObserving
{
  hasListeners = NO;
}

@end
