goog.module('org.patternfly.extension.codeeditor.CodeEditorLink');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.EventType');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.extension.codeeditor.CodeEditor');
goog.require('org.patternfly.extension.codeeditor.CodeEditorSubComponent');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.icon.IconSets.patternfly');
goog.require('vmbootstrap.Casts');

const CodeEditorLink = goog.require('org.patternfly.extension.codeeditor.CodeEditorLink$impl');
exports = CodeEditorLink;
