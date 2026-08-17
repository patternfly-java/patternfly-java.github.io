goog.module('org.patternfly.component.menu.Typeahead');

goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuToggleMenu');
goog.require('org.patternfly.component.menu.NoResults');
goog.require('org.patternfly.component.menu.SearchFilter');
goog.require('vmbootstrap.Casts');

const Typeahead = goog.require('org.patternfly.component.menu.Typeahead$impl');
exports = Typeahead;
