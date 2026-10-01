goog.module('org.patternfly.extension.codeeditor.CodeEditorHeader');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.extension.codeeditor.CodeEditorActions');
goog.require('org.patternfly.extension.codeeditor.CodeEditorHeaderMain');
goog.require('org.patternfly.extension.codeeditor.CodeEditorLinks');
goog.require('org.patternfly.extension.codeeditor.CodeEditorSubComponent');
goog.require('org.patternfly.extension.codeeditor.CodeEditorTab');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Plain');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const CodeEditorHeader = goog.require('org.patternfly.extension.codeeditor.CodeEditorHeader$impl');
exports = CodeEditorHeader;
