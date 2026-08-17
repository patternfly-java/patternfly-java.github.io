goog.module('org.patternfly.component.menu.SingleTypeahead');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuToggle');
goog.require('org.patternfly.component.menu.NoResults');
goog.require('org.patternfly.component.menu.SearchFilter');
goog.require('org.patternfly.component.menu.SingleMenuToggleMenu');
goog.require('org.patternfly.component.menu.StayOpenPredicate');
goog.require('org.patternfly.component.menu.Typeahead');
goog.require('org.patternfly.component.menu.TypeaheadSupport');
goog.require('org.patternfly.component.textinputgroup.BaseSearchInput');
goog.require('org.patternfly.component.textinputgroup.BaseTextInputGroup');
goog.require('org.patternfly.component.textinputgroup.SearchInput');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('vmbootstrap.Casts');

const SingleTypeahead = goog.require('org.patternfly.component.menu.SingleTypeahead$impl');
exports = SingleTypeahead;
