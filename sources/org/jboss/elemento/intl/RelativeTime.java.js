goog.module('org.jboss.elemento.intl.RelativeTime');

goog.require('elemental2.core.JsDate.$Overlay');
goog.require('java.lang.Long');
goog.require('java.lang.Math');
goog.require('java.lang.Object');
goog.require('java.util.Date');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.intl.Locale.$Overlay');
goog.require('org.jboss.elemento.intl.RelativeTimeFormat.$Overlay');
goog.require('org.jboss.elemento.intl.RelativeTimeFormatOptions.$Overlay');
goog.require('org.jboss.elemento.intl.Unit');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');

const RelativeTime = goog.require('org.jboss.elemento.intl.RelativeTime$impl');
exports = RelativeTime;
