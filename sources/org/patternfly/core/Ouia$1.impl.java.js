goog.module('org.patternfly.core.Ouia.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Ouia = goog.forwardDeclare('org.patternfly.core.Ouia$impl');

/**
 * @implements {EventListener}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.$captured_guard__org_patternfly_core_Ouia_1;
  /**@type {HTMLElement} @nodts*/
  this.$captured_element__org_patternfly_core_Ouia_1;
 }
 /** @nodts @return {!$1} */
 static $create__arrayOf_double__elemental2_dom_HTMLElement(/** Array<number> */ $captured_guard, /** HTMLElement */ $captured_element) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_patternfly_core_Ouia_1__arrayOf_double__elemental2_dom_HTMLElement__void($captured_guard, $captured_element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Ouia_1__arrayOf_double__elemental2_dom_HTMLElement__void(/** Array<number> */ $captured_guard, /** HTMLElement */ $captured_element) {
  this.$captured_guard__org_patternfly_core_Ouia_1 = $captured_guard;
  this.$captured_element__org_patternfly_core_Ouia_1 = $captured_element;
  this.$ctor__java_lang_Object__void();
 }
 /** @override */
 handleEvent(/** Event */ evt) {
  goog.global.clearTimeout(this.$captured_guard__org_patternfly_core_Ouia_1[0]);
  Ouia.m_ouiaSafe__elemental2_dom_HTMLElement__boolean__void(this.$captured_element__org_patternfly_core_Ouia_1, true);
  this.$captured_element__org_patternfly_core_Ouia_1.removeEventListener('transitionend', this);
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  Ouia = goog.module.get('org.patternfly.core.Ouia$impl');
 }
}
$Util.$setClassMetadata($1, 'org.patternfly.core.Ouia$1');

exports = $1;

//# sourceMappingURL=Ouia$1.js.map
