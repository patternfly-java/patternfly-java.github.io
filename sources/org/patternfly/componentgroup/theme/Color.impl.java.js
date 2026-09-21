goog.module('org.patternfly.componentgroup.theme.Color$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SystemValue = goog.require('org.patternfly.componentgroup.theme.SystemValue$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let J2clSealedTypeMarker = goog.forwardDeclare('javaemul.internal.J2clSealedTypeMarker');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SVG = goog.forwardDeclare('org.jboss.elemento.svg.SVG$impl');
let SVGContainerBuilder = goog.forwardDeclare('org.jboss.elemento.svg.SVGContainerBuilder$impl');
let $1 = goog.forwardDeclare('org.patternfly.componentgroup.theme.Color.$1$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Token = goog.forwardDeclare('org.patternfly.token.Token$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Enum<Color>}
 * @implements {SystemValue}
 * @implements {J2clSealedTypeMarker}
 */
class Color extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_componentgroup_theme_Color;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_componentgroup_theme_Color;
  /**@type {?string} @nodts*/
  this.f_description__org_patternfly_componentgroup_theme_Color;
  /**@type {?string} @nodts*/
  this.f_path__org_patternfly_componentgroup_theme_Color;
 }
 /** @nodts @return {Color} */
 static m_fromIdentifier__java_lang_String__org_patternfly_componentgroup_theme_Color(/** ?string */ identifier) {
  Color.$clinit();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(Color.$static_SYSTEM__org_patternfly_componentgroup_theme_Color.f_identifier__org_patternfly_componentgroup_theme_Color, identifier)) {
   return Color.$static_SYSTEM__org_patternfly_componentgroup_theme_Color;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(Color.$static_LIGHT__org_patternfly_componentgroup_theme_Color.f_identifier__org_patternfly_componentgroup_theme_Color, identifier)) {
   return Color.$static_LIGHT__org_patternfly_componentgroup_theme_Color;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(Color.$static_DARK__org_patternfly_componentgroup_theme_Color.f_identifier__org_patternfly_componentgroup_theme_Color, identifier)) {
   return Color.$static_DARK__org_patternfly_componentgroup_theme_Color;
  } else {
   return Color.$static_SYSTEM__org_patternfly_componentgroup_theme_Color;
  }
 }
 /** @nodts @return {!Color} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text, /** ?string */ description, /** ?string */ path) {
  let $instance = new Color();
  $instance.$ctor__org_patternfly_componentgroup_theme_Color__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String__void($name, $ordinal, identifier, text, description, path);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_theme_Color__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ identifier, /** ?string */ text, /** ?string */ description, /** ?string */ path) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_identifier__org_patternfly_componentgroup_theme_Color = identifier;
  this.f_text__org_patternfly_componentgroup_theme_Color = text;
  this.f_description__org_patternfly_componentgroup_theme_Color = description;
  this.f_path__org_patternfly_componentgroup_theme_Color = path;
 }
 /** @nodts @return {?string} */
 m_identifier__java_lang_String_$pp_org_patternfly_componentgroup_theme() {
  return this.f_identifier__org_patternfly_componentgroup_theme_Color;
 }
 /** @nodts @return {Element} */
 m_icon__elemental2_dom_Element_$pp_org_patternfly_componentgroup_theme() {
  return (/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to((/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(SVG.m_svg__org_jboss_elemento_svg_SVGContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_svg__org_patternfly_style_Classes], j_l_String))), SVGContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('viewBox', '0 0 32 32'), SVGContainerBuilder))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('fill', Token.f_globalIconColorRegular__org_patternfly_token_Token.f_var__org_patternfly_token_Token), SVGContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SVGContainerBuilder<SVGPathElement>}*/ ($Casts.$to(SVG.m_path__org_jboss_elemento_svg_SVGContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('d', this.f_path__org_patternfly_componentgroup_theme_Color), SVGContainerBuilder))), SVGContainerBuilder))).m_element__org_jboss_elemento_svg_SVGElement();
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_systemValue__boolean() {
  return SystemValue.m_systemValue__$default__org_patternfly_componentgroup_theme_SystemValue__boolean(this);
 }
 /** @nodts @return {!Color} */
 static m_valueOf__java_lang_String__org_patternfly_componentgroup_theme_Color(/** string */ name) {
  Color.$clinit();
  if ($Equality.$same(Color.f_namesToValuesMap__org_patternfly_componentgroup_theme_Color_, null)) {
   Color.f_namesToValuesMap__org_patternfly_componentgroup_theme_Color_ = (/**@type {Map<?string, !Color>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(Color.m_values__arrayOf_org_patternfly_componentgroup_theme_Color())));
  }
  return /**@type {Color}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, Color.f_namesToValuesMap__org_patternfly_componentgroup_theme_Color_));
 }
 /** @nodts @return {!Array<!Color>} */
 static m_values__arrayOf_org_patternfly_componentgroup_theme_Color() {
  Color.$clinit();
  return /**@type {!Array<!Color>}*/ ($Arrays.$stampType([Color.$static_SYSTEM__org_patternfly_componentgroup_theme_Color, Color.$static_LIGHT__org_patternfly_componentgroup_theme_Color, Color.$static_DARK__org_patternfly_componentgroup_theme_Color], Color));
 }
 /** @nodts @return {!Color} */
 static get f_SYSTEM__org_patternfly_componentgroup_theme_Color() {
  return (Color.$clinit(), Color.$static_SYSTEM__org_patternfly_componentgroup_theme_Color);
 }
 /** @nodts @return {!Color} */
 static get f_LIGHT__org_patternfly_componentgroup_theme_Color() {
  return (Color.$clinit(), Color.$static_LIGHT__org_patternfly_componentgroup_theme_Color);
 }
 /** @nodts @return {!Color} */
 static get f_DARK__org_patternfly_componentgroup_theme_Color() {
  return (Color.$clinit(), Color.$static_DARK__org_patternfly_componentgroup_theme_Color);
 }
 /** @nodts */
 static $clinit() {
  Color.$clinit = () =>{};
  Color.$loadModules();
  Enum.$clinit();
  SystemValue.$clinit();
  Color.$static_SYSTEM__org_patternfly_componentgroup_theme_Color = $1.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName('SYSTEM'), Color.$ordinal_SYSTEM__org_patternfly_componentgroup_theme_Color, 'system', 'System', 'Follow system preference', 'M23.94 16a1 1 0 0 1-.992-.876 6.957 6.957 0 0 0-6.069-6.062 1 1 0 1 1 .242-1.985 8.953 8.953 0 0 1 7.812 7.8A.999.999 0 0 1 23.94 16ZM16 5a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm0 27a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1ZM4 17H1a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm27 0h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2ZM5.394 27.606a1 1 0 0 1-.707-1.707l2.12-2.12a1 1 0 1 1 1.415 1.413L6.1 27.313a.997.997 0 0 1-.707.293ZM24.485 8.515a1 1 0 0 1-.707-1.707L25.9 4.686a1 1 0 1 1 1.415 1.415l-2.122 2.12a.997.997 0 0 1-.707.294Zm-16.97 0a.997.997 0 0 1-.707-.293L4.686 6.1a1 1 0 1 1 1.415-1.415l2.12 2.122a1 1 0 0 1-.706 1.707Zm19.091 19.091a.997.997 0 0 1-.707-.293l-2.12-2.12a1 1 0 1 1 1.413-1.415l2.122 2.121a1 1 0 0 1-.707 1.707ZM16 24.875c-4.894 0-8.875-3.981-8.875-8.875a8.879 8.879 0 0 1 5.227-8.088.876.876 0 0 1 1.153 1.163 6.945 6.945 0 0 0-.63 2.925A7.133 7.133 0 0 0 20 19.125a6.948 6.948 0 0 0 2.925-.63.876.876 0 0 1 1.163 1.154A8.88 8.88 0 0 1 16 24.875Zm-4.785-14.153A7.135 7.135 0 0 0 8.875 16 7.133 7.133 0 0 0 16 23.125a7.13 7.13 0 0 0 5.278-2.34c-.419.06-.845.09-1.278.09-4.894 0-8.875-3.981-8.875-8.875 0-.433.03-.86.09-1.278Z');
  Color.$static_LIGHT__org_patternfly_componentgroup_theme_Color = Color.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName('LIGHT'), Color.$ordinal_LIGHT__org_patternfly_componentgroup_theme_Color, 'light', 'Light', 'Always use light mode', 'M16 25c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9Zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0-4a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm0 27a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1ZM4 17H1a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm27 0h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2ZM5.394 27.606a1 1 0 0 1-.707-1.707l2.12-2.12a1 1 0 1 1 1.415 1.413L6.1 27.313a.997.997 0 0 1-.707.293ZM24.485 8.515a1 1 0 0 1-.707-1.707L25.9 4.686a1 1 0 1 1 1.415 1.415l-2.122 2.12a.997.997 0 0 1-.707.294Zm-16.97 0a.997.997 0 0 1-.707-.293L4.686 6.1a1 1 0 1 1 1.415-1.415l2.12 2.122a1 1 0 0 1-.706 1.707Zm19.091 19.091a.997.997 0 0 1-.707-.293l-2.12-2.12a1 1 0 1 1 1.413-1.415l2.122 2.121a1 1 0 0 1-.707 1.707Z');
  Color.$static_DARK__org_patternfly_componentgroup_theme_Color = Color.$create__java_lang_String__int__java_lang_String__java_lang_String__java_lang_String__java_lang_String($Util.$makeEnumName('DARK'), Color.$ordinal_DARK__org_patternfly_componentgroup_theme_Color, 'dark', 'Dark', 'Always use light mode', 'M16.457 30C8.485 30 2 23.515 2 15.543c0-5.93 3.715-11.345 9.243-13.476a.999.999 0 0 1 1.289 1.3 12.185 12.185 0 0 0-.843 4.487c0 6.869 5.588 12.457 12.457 12.457 1.56 0 3.07-.284 4.487-.844a.998.998 0 0 1 1.3 1.29C27.802 26.285 22.387 30 16.456 30ZM9.992 4.904C6.338 7.134 4 11.177 4 15.544 4 22.412 9.588 28 16.457 28c4.367 0 8.41-2.338 10.639-5.992a14.39 14.39 0 0 1-2.95.302c-7.971 0-14.457-6.485-14.457-14.456 0-1.003.102-1.989.303-2.95Z');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Color;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SVG = goog.module.get('org.jboss.elemento.svg.SVG$impl');
  SVGContainerBuilder = goog.module.get('org.jboss.elemento.svg.SVGContainerBuilder$impl');
  $1 = goog.module.get('org.patternfly.componentgroup.theme.Color.$1$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Token = goog.module.get('org.patternfly.token.Token$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
Color.$ordinal_SYSTEM__org_patternfly_componentgroup_theme_Color = 0;
/**@const {number} @nodts*/
Color.$ordinal_LIGHT__org_patternfly_componentgroup_theme_Color = 1;
/**@const {number} @nodts*/
Color.$ordinal_DARK__org_patternfly_componentgroup_theme_Color = 2;
/**@private {!Color} @nodts*/
Color.$static_SYSTEM__org_patternfly_componentgroup_theme_Color;
/**@private {!Color} @nodts*/
Color.$static_LIGHT__org_patternfly_componentgroup_theme_Color;
/**@private {!Color} @nodts*/
Color.$static_DARK__org_patternfly_componentgroup_theme_Color;
/**@type {Map<?string, !Color>} @nodts*/
Color.f_namesToValuesMap__org_patternfly_componentgroup_theme_Color_;
SystemValue.$markImplementor(Color);
$Util.$setClassMetadataForEnum(Color, 'org.patternfly.componentgroup.theme.Color');

exports = Color;

//# sourceMappingURL=Color.js.map
