goog.module('org.jboss.elemento.Elements.JsArrayNodeIterator');

goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.JsIterableHelper.IIterableResult.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const JsArrayNodeIterator = goog.require('org.jboss.elemento.Elements.JsArrayNodeIterator$impl');
exports = JsArrayNodeIterator;
