goog.module('org.patternfly.component.table.Wrap$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Wrap>}
 * @implements {TypedModifier}
 */
class Wrap extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_component_table_Wrap_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_component_table_Wrap_;
 }
 /** @nodts @return {!Wrap} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Wrap();
  $instance.$ctor__org_patternfly_component_table_Wrap__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_table_Wrap__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_component_table_Wrap_ = value;
  this.f_modifier__org_patternfly_component_table_Wrap_ = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_component_table_Wrap_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_component_table_Wrap_;
 }
 /** @nodts @return {!Wrap} */
 static m_valueOf__java_lang_String__org_patternfly_component_table_Wrap(/** string */ name) {
  Wrap.$clinit();
  if ($Equality.$same(Wrap.f_namesToValuesMap__org_patternfly_component_table_Wrap_, null)) {
   Wrap.f_namesToValuesMap__org_patternfly_component_table_Wrap_ = (/**@type {Map<?string, !Wrap>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Wrap.m_values__arrayOf_org_patternfly_component_table_Wrap())));
  }
  return /**@type {Wrap}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Wrap.f_namesToValuesMap__org_patternfly_component_table_Wrap_));
 }
 /** @nodts @return {!Array<!Wrap>} */
 static m_values__arrayOf_org_patternfly_component_table_Wrap() {
  Wrap.$clinit();
  return /**@type {!Array<!Wrap>}*/ ($Arrays.$stampType([Wrap.$static_wrap__org_patternfly_component_table_Wrap, Wrap.$static_nowrap__org_patternfly_component_table_Wrap, Wrap.$static_truncate__org_patternfly_component_table_Wrap, Wrap.$static_breakWord__org_patternfly_component_table_Wrap, Wrap.$static_fitContent__org_patternfly_component_table_Wrap], Wrap));
 }
 /** @nodts @return {!Wrap} */
 static get f_wrap__org_patternfly_component_table_Wrap() {
  return (Wrap.$clinit(), Wrap.$static_wrap__org_patternfly_component_table_Wrap);
 }
 /** @nodts @return {!Wrap} */
 static get f_nowrap__org_patternfly_component_table_Wrap() {
  return (Wrap.$clinit(), Wrap.$static_nowrap__org_patternfly_component_table_Wrap);
 }
 /** @nodts @return {!Wrap} */
 static get f_truncate__org_patternfly_component_table_Wrap() {
  return (Wrap.$clinit(), Wrap.$static_truncate__org_patternfly_component_table_Wrap);
 }
 /** @nodts @return {!Wrap} */
 static get f_breakWord__org_patternfly_component_table_Wrap() {
  return (Wrap.$clinit(), Wrap.$static_breakWord__org_patternfly_component_table_Wrap);
 }
 /** @nodts @return {!Wrap} */
 static get f_fitContent__org_patternfly_component_table_Wrap() {
  return (Wrap.$clinit(), Wrap.$static_fitContent__org_patternfly_component_table_Wrap);
 }
 /** @nodts */
 static $clinit() {
  Wrap.$clinit = () =>{};
  Wrap.$loadModules();
  Enum.$clinit();
  Wrap.$static_wrap__org_patternfly_component_table_Wrap = Wrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('wrap'), Wrap.$ordinal_wrap__org_patternfly_component_table_Wrap, 'wrap');
  Wrap.$static_nowrap__org_patternfly_component_table_Wrap = Wrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('nowrap'), Wrap.$ordinal_nowrap__org_patternfly_component_table_Wrap, 'nowrap');
  Wrap.$static_truncate__org_patternfly_component_table_Wrap = Wrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('truncate'), Wrap.$ordinal_truncate__org_patternfly_component_table_Wrap, 'truncate');
  Wrap.$static_breakWord__org_patternfly_component_table_Wrap = Wrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('breakWord'), Wrap.$ordinal_breakWord__org_patternfly_component_table_Wrap, 'break-word');
  Wrap.$static_fitContent__org_patternfly_component_table_Wrap = Wrap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('fitContent'), Wrap.$ordinal_fitContent__org_patternfly_component_table_Wrap, 'fit-content');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Wrap;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Wrap.$ordinal_wrap__org_patternfly_component_table_Wrap = 0;
/**@const {number} @nodts*/
Wrap.$ordinal_nowrap__org_patternfly_component_table_Wrap = 1;
/**@const {number} @nodts*/
Wrap.$ordinal_truncate__org_patternfly_component_table_Wrap = 2;
/**@const {number} @nodts*/
Wrap.$ordinal_breakWord__org_patternfly_component_table_Wrap = 3;
/**@const {number} @nodts*/
Wrap.$ordinal_fitContent__org_patternfly_component_table_Wrap = 4;
/**@private {!Wrap} @nodts*/
Wrap.$static_wrap__org_patternfly_component_table_Wrap;
/**@private {!Wrap} @nodts*/
Wrap.$static_nowrap__org_patternfly_component_table_Wrap;
/**@private {!Wrap} @nodts*/
Wrap.$static_truncate__org_patternfly_component_table_Wrap;
/**@private {!Wrap} @nodts*/
Wrap.$static_breakWord__org_patternfly_component_table_Wrap;
/**@private {!Wrap} @nodts*/
Wrap.$static_fitContent__org_patternfly_component_table_Wrap;
/**@type {Map<?string, !Wrap>} @nodts*/
Wrap.f_namesToValuesMap__org_patternfly_component_table_Wrap_;
TypedModifier.$markImplementor(Wrap);
$Util.$setClassMetadataForEnum(Wrap, 'org.patternfly.component.table.Wrap');

exports = Wrap;

//# sourceMappingURL=Wrap.js.map
