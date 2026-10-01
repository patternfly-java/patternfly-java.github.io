goog.module('org.gwtproject.event.shared.SimpleEventBus');

goog.require('java.lang.NullPointerException');
goog.require('java.lang.Throwable');
goog.require('java.util.ArrayList');
goog.require('java.util.Collections');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('java.util.Set');
goog.require('java.util.function.Function');
goog.require('javaemul.internal.Asserts');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.Event');
goog.require('org.gwtproject.event.shared.Event.Type');
goog.require('org.gwtproject.event.shared.EventBus');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.event.shared.SimpleEventBus.Command');
goog.require('org.gwtproject.event.shared.UmbrellaException');
goog.require('vmbootstrap.Casts');

const SimpleEventBus = goog.require('org.gwtproject.event.shared.SimpleEventBus$impl');
exports = SimpleEventBus;
