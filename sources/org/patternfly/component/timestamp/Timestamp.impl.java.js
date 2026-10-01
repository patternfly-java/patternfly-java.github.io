goog.module('org.patternfly.component.timestamp.Timestamp$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let JsDate_$Overlay = goog.forwardDeclare('elemental2.core.JsDate.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_Date = goog.forwardDeclare('java.util.Date$impl');
let Primitives = goog.forwardDeclare('javaemul.internal.Primitives$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let LocaleOptions_$Overlay = goog.forwardDeclare('org.patternfly.component.timestamp.LocaleOptions.$Overlay$impl');
let TimestampFormat = goog.forwardDeclare('org.patternfly.component.timestamp.TimestampFormat$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Timestamp>}
 * @implements {ElementTextDelegate<HTMLElement, Timestamp>}
 */
class Timestamp extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLContainerBuilder<HTMLElement>} @nodts*/
  this.f_timeElement__org_patternfly_component_timestamp_Timestamp_;
  /**@type {j_u_Date} @nodts*/
  this.f_dateTime__org_patternfly_component_timestamp_Timestamp_;
  /**@type {TimestampFormat} @nodts*/
  this.f_dateFormat__org_patternfly_component_timestamp_Timestamp_;
  /**@type {TimestampFormat} @nodts*/
  this.f_timeFormat__org_patternfly_component_timestamp_Timestamp_;
  /**@type {Object} @nodts*/
  this.f_customFormat__org_patternfly_component_timestamp_Timestamp_;
  /**@type {?string} @nodts*/
  this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_;
  /**@type {boolean} @nodts*/
  this.f_is12Hour__org_patternfly_component_timestamp_Timestamp_ = false;
  /**@type {?string} @nodts*/
  this.f_locale__org_patternfly_component_timestamp_Timestamp_;
  /**@type {boolean} @nodts*/
  this.f_shouldDisplayUTC__org_patternfly_component_timestamp_Timestamp_ = false;
  /**@type {boolean} @nodts*/
  this.f_showDateTimeAsTextFlag__org_patternfly_component_timestamp_Timestamp_ = false;
 }
 /** @nodts @return {Timestamp} */
 static m_timestamp__org_patternfly_component_timestamp_Timestamp() {
  Timestamp.$clinit();
  return Timestamp.$create__();
 }
 /** @nodts @return {Timestamp} */
 static m_timestamp__java_lang_String__org_patternfly_component_timestamp_Timestamp(/** ?string */ text) {
  Timestamp.$clinit();
  return Timestamp.$create__().m_text__java_lang_String__org_patternfly_component_timestamp_Timestamp(text);
 }
 /** @nodts @return {Timestamp} */
 static m_timestamp__java_util_Date__org_patternfly_component_timestamp_Timestamp(/** j_u_Date */ dateTime) {
  Timestamp.$clinit();
  return Timestamp.$create__().m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(dateTime);
 }
 /** @nodts @return {Timestamp} */
 static m_timestamp__java_lang_String__java_util_Date__org_patternfly_component_timestamp_Timestamp(/** ?string */ text, /** j_u_Date */ dateTime) {
  Timestamp.$clinit();
  return Timestamp.$create__().m_text__java_lang_String__org_patternfly_component_timestamp_Timestamp(text).m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(dateTime);
 }
 /** @nodts @return {!Timestamp} */
 static $create__() {
  Timestamp.$clinit();
  let $instance = new Timestamp();
  $instance.$ctor__org_patternfly_component_timestamp_Timestamp__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_Timestamp__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Timestamp__org_patternfly_component_ComponentType, (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_timestamp__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  this.$init__void_$p_org_patternfly_component_timestamp_Timestamp();
  this.f_timeElement__org_patternfly_component_timestamp_Timestamp_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_time__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_timestamp__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_timeElement__org_patternfly_component_timestamp_Timestamp_.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts @return {Timestamp} */
 m_text__java_lang_String__org_patternfly_component_timestamp_Timestamp(/** ?string */ text) {
  this.f_showDateTimeAsTextFlag__org_patternfly_component_timestamp_Timestamp_ = $Equality.$same(text, null) || j_l_String.m_length__java_lang_String__int(j_l_String.m_trim__java_lang_String__java_lang_String(text)) == 0;
  this.m_textDelegate__elemental2_dom_Element().textContent = text;
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(/** j_u_Date */ dateTime) {
  this.f_dateTime__org_patternfly_component_timestamp_Timestamp_ = dateTime;
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_dateFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(/** TimestampFormat */ dateFormat) {
  if (!$Equality.$same(this.f_customFormat__org_patternfly_component_timestamp_Timestamp_, null)) {
   Timestamp.f_logger__org_patternfly_component_timestamp_Timestamp_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Setting dateFormat while customFormat is already set. CustomFormat will be cleared to avoid conflicting format options. Use either dateFormat/timeFormat OR customFormat, not both.', []);
  }
  this.f_dateFormat__org_patternfly_component_timestamp_Timestamp_ = dateFormat;
  this.f_customFormat__org_patternfly_component_timestamp_Timestamp_ = null;
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_timeFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(/** TimestampFormat */ timeFormat) {
  if (!$Equality.$same(this.f_customFormat__org_patternfly_component_timestamp_Timestamp_, null)) {
   Timestamp.f_logger__org_patternfly_component_timestamp_Timestamp_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Setting timeFormat while customFormat is already set. CustomFormat will be cleared to avoid conflicting format options. Use either dateFormat/timeFormat OR customFormat, not both.', []);
  }
  this.f_timeFormat__org_patternfly_component_timestamp_Timestamp_ = timeFormat;
  this.f_customFormat__org_patternfly_component_timestamp_Timestamp_ = null;
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_customFormat__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_Timestamp(/** Object */ customFormat) {
  if (!$Equality.$same(this.f_dateFormat__org_patternfly_component_timestamp_Timestamp_, null) || !$Equality.$same(this.f_timeFormat__org_patternfly_component_timestamp_Timestamp_, null)) {
   Timestamp.f_logger__org_patternfly_component_timestamp_Timestamp_.m_warn__java_lang_String__arrayOf_java_lang_Object__void('Setting customFormat while dateFormat and/or timeFormat are already set. Standard formats will be cleared to avoid conflicting format options. Use either dateFormat/timeFormat OR customFormat, not both.', []);
  }
  this.f_customFormat__org_patternfly_component_timestamp_Timestamp_ = customFormat;
  this.f_dateFormat__org_patternfly_component_timestamp_Timestamp_ = null;
  this.f_timeFormat__org_patternfly_component_timestamp_Timestamp_ = null;
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_displaySuffix__java_lang_String__org_patternfly_component_timestamp_Timestamp(/** ?string */ displaySuffix) {
  this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_ = displaySuffix;
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_is12Hour__boolean__org_patternfly_component_timestamp_Timestamp(/** boolean */ is12Hour) {
  this.f_is12Hour__org_patternfly_component_timestamp_Timestamp_ = is12Hour;
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_locale__java_lang_String__org_patternfly_component_timestamp_Timestamp(/** ?string */ locale) {
  this.f_locale__org_patternfly_component_timestamp_Timestamp_ = locale;
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_utc__boolean__org_patternfly_component_timestamp_Timestamp(/** boolean */ shouldDisplayUTC) {
  this.f_shouldDisplayUTC__org_patternfly_component_timestamp_Timestamp_ = shouldDisplayUTC;
  this.m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp();
  return this;
 }
 /** @nodts @return {Timestamp} */
 m_that__org_patternfly_component_timestamp_Timestamp() {
  return this;
 }
 /** @nodts @return {j_u_Date} */
 m_dateTime__java_util_Date() {
  return this.f_dateTime__org_patternfly_component_timestamp_Timestamp_;
 }
 /** @nodts */
 m_updateDisplayAndDatetime__void_$p_org_patternfly_component_timestamp_Timestamp() {
  this.f_timeElement__org_patternfly_component_timestamp_Timestamp_.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Timestamp.f_DATETIME_ATTR__org_patternfly_component_timestamp_Timestamp_, this.m_formatDateTimeAttribute__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp());
  if (this.f_showDateTimeAsTextFlag__org_patternfly_component_timestamp_Timestamp_) {
   this.f_timeElement__org_patternfly_component_timestamp_Timestamp_.m_text__java_lang_String__org_jboss_elemento_TypedBuilder(this.m_formatDisplayText__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp());
  }
  Element_$Overlay.m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.m_element__elemental2_dom_HTMLElement(), [this.f_timeElement__org_patternfly_component_timestamp_Timestamp_.m_element__elemental2_dom_HTMLElement()]);
 }
 /** @nodts @return {?string} */
 m_formatDisplayText__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp() {
  let dateToFormat = !$Equality.$same(this.f_dateTime__org_patternfly_component_timestamp_Timestamp_, null) ? this.f_dateTime__org_patternfly_component_timestamp_Timestamp_ : j_u_Date.$create__();
  let jsDate = new Date(Primitives.m_widenLongToDouble__long__double(dateToFormat.m_getTime__long()));
  let /** ?string */ formattedText;
  if (!$Equality.$same(this.f_customFormat__org_patternfly_component_timestamp_Timestamp_, null)) {
   formattedText = this.m_formatWithCustomFormat__elemental2_core_JsDate__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(jsDate);
  } else {
   formattedText = this.m_formatWithStandardOptions__elemental2_core_JsDate__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(jsDate);
  }
  if (!this.f_shouldDisplayUTC__org_patternfly_component_timestamp_Timestamp_) {
   return this.m_appendSuffix__java_lang_String__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(formattedText);
  }
  return formattedText;
 }
 /** @nodts @return {?string} */
 m_formatWithCustomFormat__elemental2_core_JsDate__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(/** Date */ jsDate) {
  if (this.f_shouldDisplayUTC__org_patternfly_component_timestamp_Timestamp_) {
   return this.m_formatAsUTC__elemental2_core_JsDate__org_patternfly_component_timestamp_FormatOptions__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(jsDate, this.f_customFormat__org_patternfly_component_timestamp_Timestamp_);
  }
  return JsDate_$Overlay.m_toLocaleString__$devirt__elemental2_core_JsDate__java_lang_String__java_lang_Object__java_lang_String(jsDate, this.f_locale__org_patternfly_component_timestamp_Timestamp_, this.f_customFormat__org_patternfly_component_timestamp_Timestamp_);
 }
 /** @nodts @return {?string} */
 m_formatWithStandardOptions__elemental2_core_JsDate__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(/** Date */ jsDate) {
  let formatOptions = LocaleOptions_$Overlay.m_create__org_patternfly_component_timestamp_LocaleOptions();
  if (!$Equality.$same(this.f_dateFormat__org_patternfly_component_timestamp_Timestamp_, null)) {
   LocaleOptions_$Overlay.m_dateStyle__$devirt__org_patternfly_component_timestamp_LocaleOptions__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_LocaleOptions(formatOptions, this.f_dateFormat__org_patternfly_component_timestamp_Timestamp_);
  }
  LocaleOptions_$Overlay.m_hour12__$devirt__org_patternfly_component_timestamp_LocaleOptions__boolean__org_patternfly_component_timestamp_LocaleOptions(formatOptions, this.f_is12Hour__org_patternfly_component_timestamp_Timestamp_);
  if (!$Equality.$same(this.f_timeFormat__org_patternfly_component_timestamp_Timestamp_, null)) {
   LocaleOptions_$Overlay.m_timeStyle__$devirt__org_patternfly_component_timestamp_LocaleOptions__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_LocaleOptions(formatOptions, this.f_timeFormat__org_patternfly_component_timestamp_Timestamp_);
  }
  if (this.f_shouldDisplayUTC__org_patternfly_component_timestamp_Timestamp_) {
   return this.m_formatAsUTC__elemental2_core_JsDate__org_patternfly_component_timestamp_FormatOptions__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(jsDate, formatOptions);
  }
  return JsDate_$Overlay.m_toLocaleString__$devirt__elemental2_core_JsDate__java_lang_String__java_lang_Object__java_lang_String(jsDate, this.f_locale__org_patternfly_component_timestamp_Timestamp_, formatOptions);
 }
 /** @nodts @return {?string} */
 m_formatAsUTC__elemental2_core_JsDate__org_patternfly_component_timestamp_FormatOptions__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(/** Date */ jsDate, /** FormatOptions */ formatOptions) {
  let utcDate = this.m_convertToUtcDate__elemental2_core_JsDate__elemental2_core_JsDate_$p_org_patternfly_component_timestamp_Timestamp(jsDate);
  let utcDateString = JsDate_$Overlay.m_toLocaleString__$devirt__elemental2_core_JsDate__java_lang_String__java_lang_Object__java_lang_String(utcDate, this.f_locale__org_patternfly_component_timestamp_Timestamp_, formatOptions);
  return this.m_appendSuffix__java_lang_String__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(utcDateString);
 }
 /** @nodts @return {Date} */
 m_convertToUtcDate__elemental2_core_JsDate__elemental2_core_JsDate_$p_org_patternfly_component_timestamp_Timestamp(/** Date */ jsDate) {
  let utcString = jsDate.toUTCString();
  let convertToUTCString = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(utcString, 0, j_l_String.m_length__java_lang_String__int(utcString) - 3 | 0);
  return new Date(convertToUTCString);
 }
 /** @nodts @return {?string} */
 m_determineUtcSuffix__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp() {
  if (!$Equality.$same(this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_)) {
   return this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_;
  }
  return TimestampFormat.f_full__org_patternfly_component_timestamp_TimestampFormat.equals(this.f_timeFormat__org_patternfly_component_timestamp_Timestamp_) ? Timestamp.f_COORDINATED_UNIVERSAL_TIME__org_patternfly_component_timestamp_Timestamp_ : Timestamp.f_UTC__org_patternfly_component_timestamp_Timestamp_;
 }
 /** @nodts @return {?string} */
 m_appendSuffix__java_lang_String__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp(/** ?string */ dateAsString) {
  let suffixToUse = '';
  if (this.f_shouldDisplayUTC__org_patternfly_component_timestamp_Timestamp_) {
   suffixToUse = this.m_determineUtcSuffix__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp();
  } else if (!$Equality.$same(this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_)) {
   suffixToUse = this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_;
  }
  if (!j_l_String.m_isEmpty__java_lang_String__boolean(suffixToUse)) {
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(dateAsString) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(suffixToUse);
  }
  return dateAsString;
 }
 /** @nodts @return {?string} */
 m_formatDateTimeAttribute__java_lang_String_$p_org_patternfly_component_timestamp_Timestamp() {
  let dateToFormat = !$Equality.$same(this.f_dateTime__org_patternfly_component_timestamp_Timestamp_, null) ? this.f_dateTime__org_patternfly_component_timestamp_Timestamp_ : j_u_Date.$create__();
  let jsDate = new Date(Primitives.m_widenLongToDouble__long__double(dateToFormat.m_getTime__long()));
  return jsDate.toISOString();
 }
 //Bridge method.
 /** @final @override @nodts @return {Timestamp} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_timestamp_Timestamp();
 }
 //Bridge method.
 /** @final @override @nodts @return {Timestamp} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_timestamp_Timestamp(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 /** @private @nodts */
 $init__void_$p_org_patternfly_component_timestamp_Timestamp() {
  this.f_displaySuffix__org_patternfly_component_timestamp_Timestamp_ = '';
  this.f_is12Hour__org_patternfly_component_timestamp_Timestamp_ = true;
  this.f_shouldDisplayUTC__org_patternfly_component_timestamp_Timestamp_ = false;
  this.f_showDateTimeAsTextFlag__org_patternfly_component_timestamp_Timestamp_ = true;
 }
 /** @nodts */
 static $clinit() {
  Timestamp.$clinit = () =>{};
  Timestamp.$loadModules();
  BaseComponent.$clinit();
  ElementTextDelegate.$clinit();
  Timestamp.f_logger__org_patternfly_component_timestamp_Timestamp_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Timestamp).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Timestamp;
 }
 
 /** @nodts */
 static $loadModules() {
  JsDate_$Overlay = goog.module.get('elemental2.core.JsDate.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_Date = goog.module.get('java.util.Date$impl');
  Primitives = goog.module.get('javaemul.internal.Primitives$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  LocaleOptions_$Overlay = goog.module.get('org.patternfly.component.timestamp.LocaleOptions.$Overlay$impl');
  TimestampFormat = goog.module.get('org.patternfly.component.timestamp.TimestampFormat$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
Timestamp.f_logger__org_patternfly_component_timestamp_Timestamp_;
/**@const {string} @nodts*/
Timestamp.f_DATETIME_ATTR__org_patternfly_component_timestamp_Timestamp_ = 'datetime';
/**@const {string} @nodts*/
Timestamp.f_COORDINATED_UNIVERSAL_TIME__org_patternfly_component_timestamp_Timestamp_ = 'Coordinated Universal Time';
/**@const {string} @nodts*/
Timestamp.f_UTC__org_patternfly_component_timestamp_Timestamp_ = 'UTC';
ElementTextDelegate.$markImplementor(Timestamp);
$Util.$setClassMetadata(Timestamp, 'org.patternfly.component.timestamp.Timestamp');

exports = Timestamp;

//# sourceMappingURL=Timestamp.js.map
