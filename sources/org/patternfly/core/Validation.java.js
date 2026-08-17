goog.module('org.patternfly.core.Validation');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.Enum');
goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.EnumSet');
goog.require('java.util.function.Function');
goog.require('java.util.stream.Collectors');
goog.require('java.util.stream.Stream');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.logger.Logger');
goog.require('vmbootstrap.Casts');

const Validation = goog.require('org.patternfly.core.Validation$impl');
exports = Validation;
