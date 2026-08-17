goog.module('org.patternfly.component.textinputgroup.BaseSearchInput');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.BiFunction');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.textinputgroup.BaseTextInputGroup');
goog.require('org.patternfly.component.textinputgroup.TextInputGroupUtilities');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.icon.IconSets.rhMicrons');
goog.require('vmbootstrap.Casts');

const BaseSearchInput = goog.require('org.patternfly.component.textinputgroup.BaseSearchInput$impl');
exports = BaseSearchInput;
