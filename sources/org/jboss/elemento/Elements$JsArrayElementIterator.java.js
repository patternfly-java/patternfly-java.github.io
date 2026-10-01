goog.module('org.jboss.elemento.Elements.JsArrayElementIterator');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.JsIterableHelper.IIterableResult.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const JsArrayElementIterator = goog.require('org.jboss.elemento.Elements.JsArrayElementIterator$impl');
exports = JsArrayElementIterator;
