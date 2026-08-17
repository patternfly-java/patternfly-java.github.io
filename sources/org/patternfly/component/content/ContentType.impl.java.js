goog.module('org.patternfly.component.content.ContentType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enums = goog.forwardDeclare('javaemul.internal.Enums$impl');
let J2clSealedTypeMarker = goog.forwardDeclare('javaemul.internal.J2clSealedTypeMarker');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$1$impl');
let $10 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$10$impl');
let $11 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$11$impl');
let $12 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$12$impl');
let $13 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$13$impl');
let $14 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$14$impl');
let $15 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$15$impl');
let $16 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$16$impl');
let $17 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$17$impl');
let $18 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$18$impl');
let $19 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$19$impl');
let $2 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$2$impl');
let $3 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$3$impl');
let $4 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$4$impl');
let $5 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$5$impl');
let $6 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$6$impl');
let $7 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$7$impl');
let $8 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$8$impl');
let $9 = goog.forwardDeclare('org.patternfly.component.content.ContentType.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @abstract
 * @extends {Enum<ContentType>}
 * @implements {J2clSealedTypeMarker}
 */
class ContentType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_content_ContentType__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @abstract @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {}
 /** @nodts @return {!ContentType} */
 static m_valueOf__java_lang_String__org_patternfly_component_content_ContentType(/** string */ name) {
  ContentType.$clinit();
  if ($Equality.$same(ContentType.f_namesToValuesMap__org_patternfly_component_content_ContentType_, null)) {
   ContentType.f_namesToValuesMap__org_patternfly_component_content_ContentType_ = (/**@type {Map<?string, !ContentType>}*/ (Enums.m_createMapFromValues__arrayOf_java_lang_Enum__javaemul_internal_Enums_NativeMap(ContentType.m_values__arrayOf_org_patternfly_component_content_ContentType())));
  }
  return /**@type {ContentType}*/ (Enums.m_getValueFromNameAndMap__java_lang_String__javaemul_internal_Enums_NativeMap__java_lang_Object(name, ContentType.f_namesToValuesMap__org_patternfly_component_content_ContentType_));
 }
 /** @nodts @return {!Array<!ContentType>} */
 static m_values__arrayOf_org_patternfly_component_content_ContentType() {
  ContentType.$clinit();
  return /**@type {!Array<!ContentType>}*/ ($Arrays.$stampType([ContentType.$static__default__org_patternfly_component_content_ContentType, ContentType.$static_h1__org_patternfly_component_content_ContentType, ContentType.$static_h2__org_patternfly_component_content_ContentType, ContentType.$static_h3__org_patternfly_component_content_ContentType, ContentType.$static_h4__org_patternfly_component_content_ContentType, ContentType.$static_h5__org_patternfly_component_content_ContentType, ContentType.$static_h6__org_patternfly_component_content_ContentType, ContentType.$static_p__org_patternfly_component_content_ContentType, ContentType.$static_a__org_patternfly_component_content_ContentType, ContentType.$static_small__org_patternfly_component_content_ContentType, ContentType.$static_blockquote__org_patternfly_component_content_ContentType, ContentType.$static_pre__org_patternfly_component_content_ContentType, ContentType.$static_hr__org_patternfly_component_content_ContentType, ContentType.$static_ul__org_patternfly_component_content_ContentType, ContentType.$static_ol__org_patternfly_component_content_ContentType, ContentType.$static_dl__org_patternfly_component_content_ContentType, ContentType.$static_li__org_patternfly_component_content_ContentType, ContentType.$static_dt__org_patternfly_component_content_ContentType, ContentType.$static_dd__org_patternfly_component_content_ContentType], ContentType));
 }
 /** @nodts @return {!ContentType} */
 static get f__default__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static__default__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_h1__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_h1__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_h2__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_h2__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_h3__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_h3__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_h4__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_h4__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_h5__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_h5__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_h6__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_h6__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_p__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_p__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_a__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_a__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_small__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_small__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_blockquote__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_blockquote__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_pre__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_pre__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_hr__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_hr__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_ul__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_ul__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_ol__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_ol__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_dl__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_dl__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_li__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_li__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_dt__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_dt__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {!ContentType} */
 static get f_dd__org_patternfly_component_content_ContentType() {
  return (ContentType.$clinit(), ContentType.$static_dd__org_patternfly_component_content_ContentType);
 }
 /** @nodts */
 static $clinit() {
  ContentType.$clinit = () =>{};
  ContentType.$loadModules();
  Enum.$clinit();
  ContentType.$static__default__org_patternfly_component_content_ContentType = $1.$create__java_lang_String__int($Util.$makeEnumName('_default'), ContentType.$ordinal__default__org_patternfly_component_content_ContentType);
  ContentType.$static_h1__org_patternfly_component_content_ContentType = $2.$create__java_lang_String__int($Util.$makeEnumName('h1'), ContentType.$ordinal_h1__org_patternfly_component_content_ContentType);
  ContentType.$static_h2__org_patternfly_component_content_ContentType = $3.$create__java_lang_String__int($Util.$makeEnumName('h2'), ContentType.$ordinal_h2__org_patternfly_component_content_ContentType);
  ContentType.$static_h3__org_patternfly_component_content_ContentType = $4.$create__java_lang_String__int($Util.$makeEnumName('h3'), ContentType.$ordinal_h3__org_patternfly_component_content_ContentType);
  ContentType.$static_h4__org_patternfly_component_content_ContentType = $5.$create__java_lang_String__int($Util.$makeEnumName('h4'), ContentType.$ordinal_h4__org_patternfly_component_content_ContentType);
  ContentType.$static_h5__org_patternfly_component_content_ContentType = $6.$create__java_lang_String__int($Util.$makeEnumName('h5'), ContentType.$ordinal_h5__org_patternfly_component_content_ContentType);
  ContentType.$static_h6__org_patternfly_component_content_ContentType = $7.$create__java_lang_String__int($Util.$makeEnumName('h6'), ContentType.$ordinal_h6__org_patternfly_component_content_ContentType);
  ContentType.$static_p__org_patternfly_component_content_ContentType = $8.$create__java_lang_String__int($Util.$makeEnumName('p'), ContentType.$ordinal_p__org_patternfly_component_content_ContentType);
  ContentType.$static_a__org_patternfly_component_content_ContentType = $9.$create__java_lang_String__int($Util.$makeEnumName('a'), ContentType.$ordinal_a__org_patternfly_component_content_ContentType);
  ContentType.$static_small__org_patternfly_component_content_ContentType = $10.$create__java_lang_String__int($Util.$makeEnumName('small'), ContentType.$ordinal_small__org_patternfly_component_content_ContentType);
  ContentType.$static_blockquote__org_patternfly_component_content_ContentType = $11.$create__java_lang_String__int($Util.$makeEnumName('blockquote'), ContentType.$ordinal_blockquote__org_patternfly_component_content_ContentType);
  ContentType.$static_pre__org_patternfly_component_content_ContentType = $12.$create__java_lang_String__int($Util.$makeEnumName('pre'), ContentType.$ordinal_pre__org_patternfly_component_content_ContentType);
  ContentType.$static_hr__org_patternfly_component_content_ContentType = $13.$create__java_lang_String__int($Util.$makeEnumName('hr'), ContentType.$ordinal_hr__org_patternfly_component_content_ContentType);
  ContentType.$static_ul__org_patternfly_component_content_ContentType = $14.$create__java_lang_String__int($Util.$makeEnumName('ul'), ContentType.$ordinal_ul__org_patternfly_component_content_ContentType);
  ContentType.$static_ol__org_patternfly_component_content_ContentType = $15.$create__java_lang_String__int($Util.$makeEnumName('ol'), ContentType.$ordinal_ol__org_patternfly_component_content_ContentType);
  ContentType.$static_dl__org_patternfly_component_content_ContentType = $16.$create__java_lang_String__int($Util.$makeEnumName('dl'), ContentType.$ordinal_dl__org_patternfly_component_content_ContentType);
  ContentType.$static_li__org_patternfly_component_content_ContentType = $17.$create__java_lang_String__int($Util.$makeEnumName('li'), ContentType.$ordinal_li__org_patternfly_component_content_ContentType);
  ContentType.$static_dt__org_patternfly_component_content_ContentType = $18.$create__java_lang_String__int($Util.$makeEnumName('dt'), ContentType.$ordinal_dt__org_patternfly_component_content_ContentType);
  ContentType.$static_dd__org_patternfly_component_content_ContentType = $19.$create__java_lang_String__int($Util.$makeEnumName('dd'), ContentType.$ordinal_dd__org_patternfly_component_content_ContentType);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ContentType;
 }
 
 /** @nodts */
 static $loadModules() {
  Enums = goog.module.get('javaemul.internal.Enums$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.component.content.ContentType.$1$impl');
  $10 = goog.module.get('org.patternfly.component.content.ContentType.$10$impl');
  $11 = goog.module.get('org.patternfly.component.content.ContentType.$11$impl');
  $12 = goog.module.get('org.patternfly.component.content.ContentType.$12$impl');
  $13 = goog.module.get('org.patternfly.component.content.ContentType.$13$impl');
  $14 = goog.module.get('org.patternfly.component.content.ContentType.$14$impl');
  $15 = goog.module.get('org.patternfly.component.content.ContentType.$15$impl');
  $16 = goog.module.get('org.patternfly.component.content.ContentType.$16$impl');
  $17 = goog.module.get('org.patternfly.component.content.ContentType.$17$impl');
  $18 = goog.module.get('org.patternfly.component.content.ContentType.$18$impl');
  $19 = goog.module.get('org.patternfly.component.content.ContentType.$19$impl');
  $2 = goog.module.get('org.patternfly.component.content.ContentType.$2$impl');
  $3 = goog.module.get('org.patternfly.component.content.ContentType.$3$impl');
  $4 = goog.module.get('org.patternfly.component.content.ContentType.$4$impl');
  $5 = goog.module.get('org.patternfly.component.content.ContentType.$5$impl');
  $6 = goog.module.get('org.patternfly.component.content.ContentType.$6$impl');
  $7 = goog.module.get('org.patternfly.component.content.ContentType.$7$impl');
  $8 = goog.module.get('org.patternfly.component.content.ContentType.$8$impl');
  $9 = goog.module.get('org.patternfly.component.content.ContentType.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
ContentType.$ordinal__default__org_patternfly_component_content_ContentType = 0;
/**@const {number} @nodts*/
ContentType.$ordinal_h1__org_patternfly_component_content_ContentType = 1;
/**@const {number} @nodts*/
ContentType.$ordinal_h2__org_patternfly_component_content_ContentType = 2;
/**@const {number} @nodts*/
ContentType.$ordinal_h3__org_patternfly_component_content_ContentType = 3;
/**@const {number} @nodts*/
ContentType.$ordinal_h4__org_patternfly_component_content_ContentType = 4;
/**@const {number} @nodts*/
ContentType.$ordinal_h5__org_patternfly_component_content_ContentType = 5;
/**@const {number} @nodts*/
ContentType.$ordinal_h6__org_patternfly_component_content_ContentType = 6;
/**@const {number} @nodts*/
ContentType.$ordinal_p__org_patternfly_component_content_ContentType = 7;
/**@const {number} @nodts*/
ContentType.$ordinal_a__org_patternfly_component_content_ContentType = 8;
/**@const {number} @nodts*/
ContentType.$ordinal_small__org_patternfly_component_content_ContentType = 9;
/**@const {number} @nodts*/
ContentType.$ordinal_blockquote__org_patternfly_component_content_ContentType = 10;
/**@const {number} @nodts*/
ContentType.$ordinal_pre__org_patternfly_component_content_ContentType = 11;
/**@const {number} @nodts*/
ContentType.$ordinal_hr__org_patternfly_component_content_ContentType = 12;
/**@const {number} @nodts*/
ContentType.$ordinal_ul__org_patternfly_component_content_ContentType = 13;
/**@const {number} @nodts*/
ContentType.$ordinal_ol__org_patternfly_component_content_ContentType = 14;
/**@const {number} @nodts*/
ContentType.$ordinal_dl__org_patternfly_component_content_ContentType = 15;
/**@const {number} @nodts*/
ContentType.$ordinal_li__org_patternfly_component_content_ContentType = 16;
/**@const {number} @nodts*/
ContentType.$ordinal_dt__org_patternfly_component_content_ContentType = 17;
/**@const {number} @nodts*/
ContentType.$ordinal_dd__org_patternfly_component_content_ContentType = 18;
/**@private {!ContentType} @nodts*/
ContentType.$static__default__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_h1__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_h2__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_h3__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_h4__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_h5__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_h6__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_p__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_a__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_small__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_blockquote__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_pre__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_hr__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_ul__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_ol__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_dl__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_li__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_dt__org_patternfly_component_content_ContentType;
/**@private {!ContentType} @nodts*/
ContentType.$static_dd__org_patternfly_component_content_ContentType;
/**@type {Map<?string, !ContentType>} @nodts*/
ContentType.f_namesToValuesMap__org_patternfly_component_content_ContentType_;
$Util.$setClassMetadataForEnum(ContentType, 'org.patternfly.component.content.ContentType');

exports = ContentType;

//# sourceMappingURL=ContentType.js.map
