goog.module('org.gwtproject.safehtml.shared.SafeUriString');

goog.require('java.lang.NullPointerException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeUri');
goog.require('vmbootstrap.Casts');

const SafeUriString = goog.require('org.gwtproject.safehtml.shared.SafeUriString$impl');
exports = SafeUriString;
