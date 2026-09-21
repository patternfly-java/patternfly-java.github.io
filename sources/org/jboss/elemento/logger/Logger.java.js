goog.module('org.jboss.elemento.logger.Logger');

goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.dom.Location.$Overlay');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.logger.Category');
goog.require('org.jboss.elemento.logger.Level');
goog.require('org.jboss.elemento.logger.LevelOverrides');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Logger = goog.require('org.jboss.elemento.logger.Logger$impl');
exports = Logger;
