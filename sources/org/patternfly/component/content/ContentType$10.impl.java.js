goog.module('org.patternfly.component.content.ContentType.$10$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ContentType = goog.require('org.patternfly.component.content.ContentType$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 */
class $10 extends ContentType {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$10} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $10.$clinit();
  let $instance = new $10();
  $instance.$ctor__org_patternfly_component_content_ContentType_10__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_content_ContentType_10__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_patternfly_component_content_ContentType__java_lang_String__int__void($name, $ordinal);
 }
 /** @override @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {
  let element = Elements.m_small__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement();
  element.classList.add(j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_content__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))) + '--small');
  return element;
 }
 /** @nodts */
 static $clinit() {
  $10.$clinit = () =>{};
  $10.$loadModules();
  ContentType.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $10;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata($10, 'org.patternfly.component.content.ContentType$10');

exports = $10;

//# sourceMappingURL=ContentType$10.js.map
