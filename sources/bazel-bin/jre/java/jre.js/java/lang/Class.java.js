goog.module('java.lang.Class');

goog.require('java.io.Serializable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.lang.reflect.Type');
goog.require('javaemul.internal.Constructor');
goog.require('javaemul.internal.Constructor.$Overlay');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const Class = goog.require('java.lang.Class$impl');
exports = Class;
