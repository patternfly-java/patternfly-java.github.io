goog.module('org.gwtproject.safehtml.shared.SafeHtmlString');

goog.require('java.lang.NullPointerException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('vmbootstrap.Casts');

const SafeHtmlString = goog.require('org.gwtproject.safehtml.shared.SafeHtmlString$impl');
exports = SafeHtmlString;
