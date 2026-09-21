goog.module('org.patternfly.style.Placement$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedModifier = goog.require('org.patternfly.style.TypedModifier$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Alignment = goog.forwardDeclare('org.patternfly.style.Placement.Alignment$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 * @extends {Enum<Placement>}
 * @implements {TypedModifier}
 */
class Placement extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_style_Placement_;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_style_Placement_;
  /**@type {Alignment} @nodts*/
  this.f_alignment__org_patternfly_style_Placement_;
 }
 /** @nodts @return {!Placement} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ modifier, /** Alignment */ alignment) {
  let $instance = new Placement();
  $instance.$ctor__org_patternfly_style_Placement__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment__void($name, $ordinal, value, modifier, alignment);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Placement__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ modifier, /** Alignment */ alignment) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_style_Placement_ = value;
  this.f_modifier__org_patternfly_style_Placement_ = modifier;
  this.f_alignment__org_patternfly_style_Placement_ = alignment;
 }
 /** @override @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_value__org_patternfly_style_Placement_;
 }
 /** @override @nodts @return {?string} */
 m_modifier__java_lang_String() {
  return this.f_modifier__org_patternfly_style_Placement_;
 }
 /** @nodts @return {Placement} */
 m_base__org_patternfly_style_Placement() {
  return (() =>{
   switch (this.ordinal()) {
    case Placement.$ordinal_topStart__org_patternfly_style_Placement:case Placement.$ordinal_topEnd__org_patternfly_style_Placement:
     return Placement.$static_top__org_patternfly_style_Placement;
    case Placement.$ordinal_bottomStart__org_patternfly_style_Placement:case Placement.$ordinal_bottomEnd__org_patternfly_style_Placement:
     return Placement.$static_bottom__org_patternfly_style_Placement;
    case Placement.$ordinal_leftStart__org_patternfly_style_Placement:case Placement.$ordinal_leftEnd__org_patternfly_style_Placement:
     return Placement.$static_left__org_patternfly_style_Placement;
    case Placement.$ordinal_rightStart__org_patternfly_style_Placement:case Placement.$ordinal_rightEnd__org_patternfly_style_Placement:
     return Placement.$static_right__org_patternfly_style_Placement;
    default:
     return this;
   }
  })();
 }
 /** @nodts @return {Placement} */
 m_withBase__org_patternfly_style_Placement__org_patternfly_style_Placement(/** Placement */ newBase) {
  let base = newBase.m_base__org_patternfly_style_Placement();
  return (() =>{
   switch (this.f_alignment__org_patternfly_style_Placement_.ordinal()) {
    case Alignment.$ordinal_START__org_patternfly_style_Placement_Alignment:
     {
      if ($Equality.$same(base, Placement.$static_top__org_patternfly_style_Placement)) {
       return Placement.$static_topStart__org_patternfly_style_Placement;
      }
      if ($Equality.$same(base, Placement.$static_bottom__org_patternfly_style_Placement)) {
       return Placement.$static_bottomStart__org_patternfly_style_Placement;
      }
      if ($Equality.$same(base, Placement.$static_left__org_patternfly_style_Placement)) {
       return Placement.$static_leftStart__org_patternfly_style_Placement;
      }
      return Placement.$static_rightStart__org_patternfly_style_Placement;
     }
    case Alignment.$ordinal_END__org_patternfly_style_Placement_Alignment:
     {
      if ($Equality.$same(base, Placement.$static_top__org_patternfly_style_Placement)) {
       return Placement.$static_topEnd__org_patternfly_style_Placement;
      }
      if ($Equality.$same(base, Placement.$static_bottom__org_patternfly_style_Placement)) {
       return Placement.$static_bottomEnd__org_patternfly_style_Placement;
      }
      if ($Equality.$same(base, Placement.$static_left__org_patternfly_style_Placement)) {
       return Placement.$static_leftEnd__org_patternfly_style_Placement;
      }
      return Placement.$static_rightEnd__org_patternfly_style_Placement;
     }
    default:
     return base;
   }
  })();
 }
 /** @nodts @return {!Placement} */
 static m_valueOf__java_lang_String__org_patternfly_style_Placement(/** string */ name) {
  Placement.$clinit();
  if ($Equality.$same(Placement.f_namesToValuesMap__org_patternfly_style_Placement_, null)) {
   Placement.f_namesToValuesMap__org_patternfly_style_Placement_ = (/**@type {Map<?string, !Placement>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Placement.m_values__arrayOf_org_patternfly_style_Placement())));
  }
  return /**@type {Placement}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Placement.f_namesToValuesMap__org_patternfly_style_Placement_));
 }
 /** @nodts @return {!Array<!Placement>} */
 static m_values__arrayOf_org_patternfly_style_Placement() {
  Placement.$clinit();
  return /**@type {!Array<!Placement>}*/ ($Arrays.$stampType([Placement.$static_top__org_patternfly_style_Placement, Placement.$static_topStart__org_patternfly_style_Placement, Placement.$static_topEnd__org_patternfly_style_Placement, Placement.$static_bottom__org_patternfly_style_Placement, Placement.$static_bottomStart__org_patternfly_style_Placement, Placement.$static_bottomEnd__org_patternfly_style_Placement, Placement.$static_left__org_patternfly_style_Placement, Placement.$static_leftStart__org_patternfly_style_Placement, Placement.$static_leftEnd__org_patternfly_style_Placement, Placement.$static_right__org_patternfly_style_Placement, Placement.$static_rightStart__org_patternfly_style_Placement, Placement.$static_rightEnd__org_patternfly_style_Placement], Placement));
 }
 /** @nodts @return {!Placement} */
 static get f_top__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_top__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_topStart__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_topStart__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_topEnd__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_topEnd__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_bottom__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_bottom__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_bottomStart__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_bottomStart__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_bottomEnd__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_bottomEnd__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_left__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_left__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_leftStart__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_leftStart__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_leftEnd__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_leftEnd__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_right__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_right__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_rightStart__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_rightStart__org_patternfly_style_Placement);
 }
 /** @nodts @return {!Placement} */
 static get f_rightEnd__org_patternfly_style_Placement() {
  return (Placement.$clinit(), Placement.$static_rightEnd__org_patternfly_style_Placement);
 }
 /** @nodts */
 static $clinit() {
  Placement.$clinit = () =>{};
  Placement.$loadModules();
  Enum.$clinit();
  Placement.$static_top__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('top'), Placement.$ordinal_top__org_patternfly_style_Placement, 'top', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes), Alignment.f_NONE__org_patternfly_style_Placement_Alignment);
  Placement.$static_topStart__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('topStart'), Placement.$ordinal_topStart__org_patternfly_style_Placement, 'top-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes)) + '-left', Alignment.f_START__org_patternfly_style_Placement_Alignment);
  Placement.$static_topEnd__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('topEnd'), Placement.$ordinal_topEnd__org_patternfly_style_Placement, 'top-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_style_Classes)) + '-right', Alignment.f_END__org_patternfly_style_Placement_Alignment);
  Placement.$static_bottom__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('bottom'), Placement.$ordinal_bottom__org_patternfly_style_Placement, 'bottom', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes), Alignment.f_NONE__org_patternfly_style_Placement_Alignment);
  Placement.$static_bottomStart__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('bottomStart'), Placement.$ordinal_bottomStart__org_patternfly_style_Placement, 'bottom-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes)) + '-left', Alignment.f_START__org_patternfly_style_Placement_Alignment);
  Placement.$static_bottomEnd__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('bottomEnd'), Placement.$ordinal_bottomEnd__org_patternfly_style_Placement, 'bottom-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_style_Classes)) + '-right', Alignment.f_END__org_patternfly_style_Placement_Alignment);
  Placement.$static_left__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('left'), Placement.$ordinal_left__org_patternfly_style_Placement, 'left', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes), Alignment.f_NONE__org_patternfly_style_Placement_Alignment);
  Placement.$static_leftStart__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('leftStart'), Placement.$ordinal_leftStart__org_patternfly_style_Placement, 'left-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes)) + '-top', Alignment.f_START__org_patternfly_style_Placement_Alignment);
  Placement.$static_leftEnd__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('leftEnd'), Placement.$ordinal_leftEnd__org_patternfly_style_Placement, 'left-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_style_Classes)) + '-bottom', Alignment.f_END__org_patternfly_style_Placement_Alignment);
  Placement.$static_right__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('right'), Placement.$ordinal_right__org_patternfly_style_Placement, 'right', Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes), Alignment.f_NONE__org_patternfly_style_Placement_Alignment);
  Placement.$static_rightStart__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('rightStart'), Placement.$ordinal_rightStart__org_patternfly_style_Placement, 'right-start', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes)) + '-bottom', Alignment.f_START__org_patternfly_style_Placement_Alignment);
  Placement.$static_rightEnd__org_patternfly_style_Placement = Placement.$create__java_lang_String__int__java_lang_String__java_lang_String__org_patternfly_style_Placement_Alignment($Util.$makeEnumName('rightEnd'), Placement.$ordinal_rightEnd__org_patternfly_style_Placement, 'right-end', j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_style_Classes)) + '-bottom', Alignment.f_END__org_patternfly_style_Placement_Alignment);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Placement;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Alignment = goog.module.get('org.patternfly.style.Placement.Alignment$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Placement.$ordinal_top__org_patternfly_style_Placement = 0;
/**@const {number} @nodts*/
Placement.$ordinal_topStart__org_patternfly_style_Placement = 1;
/**@const {number} @nodts*/
Placement.$ordinal_topEnd__org_patternfly_style_Placement = 2;
/**@const {number} @nodts*/
Placement.$ordinal_bottom__org_patternfly_style_Placement = 3;
/**@const {number} @nodts*/
Placement.$ordinal_bottomStart__org_patternfly_style_Placement = 4;
/**@const {number} @nodts*/
Placement.$ordinal_bottomEnd__org_patternfly_style_Placement = 5;
/**@const {number} @nodts*/
Placement.$ordinal_left__org_patternfly_style_Placement = 6;
/**@const {number} @nodts*/
Placement.$ordinal_leftStart__org_patternfly_style_Placement = 7;
/**@const {number} @nodts*/
Placement.$ordinal_leftEnd__org_patternfly_style_Placement = 8;
/**@const {number} @nodts*/
Placement.$ordinal_right__org_patternfly_style_Placement = 9;
/**@const {number} @nodts*/
Placement.$ordinal_rightStart__org_patternfly_style_Placement = 10;
/**@const {number} @nodts*/
Placement.$ordinal_rightEnd__org_patternfly_style_Placement = 11;
/**@private {!Placement} @nodts*/
Placement.$static_top__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_topStart__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_topEnd__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_bottom__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_bottomStart__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_bottomEnd__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_left__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_leftStart__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_leftEnd__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_right__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_rightStart__org_patternfly_style_Placement;
/**@private {!Placement} @nodts*/
Placement.$static_rightEnd__org_patternfly_style_Placement;
/**@type {Map<?string, !Placement>} @nodts*/
Placement.f_namesToValuesMap__org_patternfly_style_Placement_;
TypedModifier.$markImplementor(Placement);
$Util.$setClassMetadataForEnum(Placement, 'org.patternfly.style.Placement');

exports = Placement;

//# sourceMappingURL=Placement.js.map
