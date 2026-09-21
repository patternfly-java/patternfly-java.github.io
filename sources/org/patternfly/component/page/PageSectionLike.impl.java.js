goog.module('org.patternfly.component.page.PageSectionLike$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementAttributeMethods = goog.require('org.jboss.elemento.ElementAttributeMethods$impl');
const ElementClassListMethods = goog.require('org.jboss.elemento.ElementClassListMethods$impl');
const ElementConsumerMethods = goog.require('org.jboss.elemento.ElementConsumerMethods$impl');
const ElementContainerMethods = goog.require('org.jboss.elemento.ElementContainerMethods$impl');
const ElementEventMethods = goog.require('org.jboss.elemento.ElementEventMethods$impl');
const ElementIdMethods = goog.require('org.jboss.elemento.ElementIdMethods$impl');
const ElementQueryMethods = goog.require('org.jboss.elemento.ElementQueryMethods$impl');
const ElementTextMethods = goog.require('org.jboss.elemento.ElementTextMethods$impl');
const HTMLElementAttributeMethods = goog.require('org.jboss.elemento.HTMLElementAttributeMethods$impl');
const HTMLElementDataMethods = goog.require('org.jboss.elemento.HTMLElementDataMethods$impl');
const HTMLElementStyleMethods = goog.require('org.jboss.elemento.HTMLElementStyleMethods$impl');
const HTMLElementVisibilityMethods = goog.require('org.jboss.elemento.HTMLElementVisibilityMethods$impl');

/**
 * @interface
 * @template E, P
 * @extends {ElementAttributeMethods<E, P>}
 * @extends {ElementClassListMethods<E, P>}
 * @extends {ElementContainerMethods<E, P>}
 * @extends {ElementConsumerMethods<E, P>}
 * @extends {ElementEventMethods<E, P>}
 * @extends {ElementIdMethods<E, P>}
 * @extends {ElementQueryMethods<E>}
 * @extends {ElementTextMethods<E, P>}
 * @extends {HTMLElementAttributeMethods<E, P>}
 * @extends {HTMLElementDataMethods<E, P>}
 * @extends {HTMLElementStyleMethods<E, P>}
 * @extends {HTMLElementVisibilityMethods<E, P>}
 */
class PageSectionLike {
 /** @nodts */
 static $clinit() {
  PageSectionLike.$clinit = () =>{};
  PageSectionLike.$loadModules();
  ElementAttributeMethods.$clinit();
  ElementClassListMethods.$clinit();
  ElementContainerMethods.$clinit();
  ElementConsumerMethods.$clinit();
  ElementEventMethods.$clinit();
  ElementIdMethods.$clinit();
  ElementQueryMethods.$clinit();
  ElementTextMethods.$clinit();
  HTMLElementAttributeMethods.$clinit();
  HTMLElementDataMethods.$clinit();
  HTMLElementStyleMethods.$clinit();
  HTMLElementVisibilityMethods.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ElementAttributeMethods.$markImplementor(ctor);
  ElementClassListMethods.$markImplementor(ctor);
  ElementContainerMethods.$markImplementor(ctor);
  ElementConsumerMethods.$markImplementor(ctor);
  ElementEventMethods.$markImplementor(ctor);
  ElementIdMethods.$markImplementor(ctor);
  ElementQueryMethods.$markImplementor(ctor);
  ElementTextMethods.$markImplementor(ctor);
  HTMLElementAttributeMethods.$markImplementor(ctor);
  HTMLElementDataMethods.$markImplementor(ctor);
  HTMLElementStyleMethods.$markImplementor(ctor);
  HTMLElementVisibilityMethods.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_page_PageSectionLike = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_page_PageSectionLike;
 }
 
 /** @nodts */
 static $loadModules() {}
}
PageSectionLike.$markImplementor(/**@type {Function}*/ (PageSectionLike));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (PageSectionLike), 'org.patternfly.component.page.PageSectionLike');

exports = PageSectionLike;

//# sourceMappingURL=PageSectionLike.js.map
