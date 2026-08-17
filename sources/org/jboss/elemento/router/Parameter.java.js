goog.module('org.jboss.elemento.router.Parameter');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.ArrayList');
goog.require('java.util.Collections');
goog.require('java.util.Comparator');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.router.JsUrlEncoder');
goog.require('org.jboss.elemento.router.Path');
goog.require('org.jboss.elemento.router.UrlEncoder');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Parameter = goog.require('org.jboss.elemento.router.Parameter$impl');
exports = Parameter;
