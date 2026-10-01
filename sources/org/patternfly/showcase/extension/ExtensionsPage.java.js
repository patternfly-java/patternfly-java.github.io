goog.module('org.patternfly.showcase.extension.ExtensionsPage');

goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.card.Card');
goog.require('org.patternfly.component.card.CardBody');
goog.require('org.patternfly.component.card.CardTitle');
goog.require('org.patternfly.component.content.Content');
goog.require('org.patternfly.component.content.ContentType');
goog.require('org.patternfly.layout.flex.AlignItems');
goog.require('org.patternfly.layout.flex.Flex');
goog.require('org.patternfly.layout.flex.SpaceItems');
goog.require('org.patternfly.layout.gallery.Gallery');
goog.require('org.patternfly.layout.gallery.GalleryItem');
goog.require('org.patternfly.layout.stack.Stack');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.OverviewPage');
goog.require('org.patternfly.showcase.extension.Extension.$Overlay');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ExtensionsPage = goog.require('org.patternfly.showcase.extension.ExtensionsPage$impl');
exports = ExtensionsPage;
