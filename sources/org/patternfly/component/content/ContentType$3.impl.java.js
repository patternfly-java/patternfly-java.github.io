goog.module('org.patternfly.component.content.ContentType.$3$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ContentType = goog.require('org.patternfly.component.content.ContentType$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class $3 extends ContentType {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$3} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_patternfly_component_content_ContentType_3__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_content_ContentType_3__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_patternfly_component_content_ContentType__java_lang_String__int__void($name, $ordinal);
 }
 /** @override @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {
  let element = /**@type {HTMLHeadingElement}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(2).m_element__elemental2_dom_HTMLElement(), $Overlay));
  element.classList.add(j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_content__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))) + '--h2');
  return element;
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  ContentType.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($3, 'org.patternfly.component.content.ContentType$3');

exports = $3;

//# sourceMappingURL=ContentType$3.js.map
