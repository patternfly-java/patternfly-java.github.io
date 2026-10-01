goog.module('java.lang.runtime.SwitchBootstraps');

goog.require('java.lang.Object');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.lang.invoke.CallSite');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Util');

const SwitchBootstraps = goog.require('java.lang.runtime.SwitchBootstraps$impl');
exports = SwitchBootstraps;
