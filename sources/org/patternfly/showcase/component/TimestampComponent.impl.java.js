goog.module('org.patternfly.showcase.component.TimestampComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CustomFormat_$Overlay = goog.forwardDeclare('org.patternfly.component.timestamp.CustomFormat.$Overlay$impl');
let Day = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Day$impl');
let Hour = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Hour$impl');
let Month = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Month$impl');
let Weekday = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Weekday$impl');
let Year = goog.forwardDeclare('org.patternfly.component.timestamp.DateTimeFormatOptions.Year$impl');
let Timestamp = goog.forwardDeclare('org.patternfly.component.timestamp.Timestamp$impl');
let TimestampFormat = goog.forwardDeclare('org.patternfly.component.timestamp.TimestampFormat$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TimestampComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TimestampComponent} */
 static $create__() {
  TimestampComponent.$clinit();
  let $instance = new TimestampComponent();
  $instance.$ctor__org_patternfly_showcase_component_TimestampComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TimestampComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, Classes.f_timestamp__org_patternfly_style_Classes), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('timestamp-default', 'Default', Code.m_code__java_lang_String__java_lang_String('timestamp-default'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__org_patternfly_component_timestamp_Timestamp()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__org_patternfly_component_timestamp_Timestamp().m_utc__boolean__org_patternfly_component_timestamp_Timestamp(true)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__org_patternfly_component_timestamp_Timestamp().m_timeFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(TimestampFormat.f__short__org_patternfly_component_timestamp_TimestampFormat)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('timestamp-basic-formats', 'Basic formats', Code.m_code__java_lang_String__java_lang_String('timestamp-basic-formats'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let currentDateTime = Date.$create__();
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__org_patternfly_component_timestamp_Timestamp().m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(currentDateTime).m_dateFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(TimestampFormat.f_full__org_patternfly_component_timestamp_TimestampFormat).m_timeFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(TimestampFormat.f_full__org_patternfly_component_timestamp_TimestampFormat)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__org_patternfly_component_timestamp_Timestamp().m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(currentDateTime).m_dateFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(TimestampFormat.f_full__org_patternfly_component_timestamp_TimestampFormat)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__org_patternfly_component_timestamp_Timestamp().m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(currentDateTime).m_timeFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(TimestampFormat.f_full__org_patternfly_component_timestamp_TimestampFormat)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__org_patternfly_component_timestamp_Timestamp().m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(currentDateTime).m_dateFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(TimestampFormat.f_medium__org_patternfly_component_timestamp_TimestampFormat).m_timeFormat__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_Timestamp(TimestampFormat.f__short__org_patternfly_component_timestamp_TimestampFormat).m_displaySuffix__java_lang_String__org_patternfly_component_timestamp_Timestamp('US Eastern')), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('timestamp-custom-format', 'Custom format', Code.m_code__java_lang_String__java_lang_String('timestamp-custom-format'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let currentDate = Date.$create__();
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__org_patternfly_component_timestamp_Timestamp().m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(currentDate).m_customFormat__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_Timestamp(CustomFormat_$Overlay.m_hour__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour__org_patternfly_component_timestamp_CustomFormat(CustomFormat_$Overlay.m_year__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Year__org_patternfly_component_timestamp_CustomFormat(CustomFormat_$Overlay.m_month__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Month__org_patternfly_component_timestamp_CustomFormat(CustomFormat_$Overlay.m_day__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Day__org_patternfly_component_timestamp_CustomFormat(CustomFormat_$Overlay.m_weekday__$devirt__org_patternfly_component_timestamp_CustomFormat__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday__org_patternfly_component_timestamp_CustomFormat(CustomFormat_$Overlay.m_create__org_patternfly_component_timestamp_CustomFormat(), Weekday.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Weekday), Day.f_numeric__org_patternfly_component_timestamp_DateTimeFormatOptions_Day), Month.f__short__org_patternfly_component_timestamp_DateTimeFormatOptions_Month), Year.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Year), Hour.f__2digit__org_patternfly_component_timestamp_DateTimeFormatOptions_Hour))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('timestamp-custom-content', 'Custom content', Code.m_code__java_lang_String__java_lang_String('timestamp-custom-content'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let pastDateTime = Date.$create__int__int__int__int__int(122, 7, 9, 14, 57);
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__java_lang_String__org_patternfly_component_timestamp_Timestamp('1 hour ago').m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(pastDateTime)), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Timestamp.m_timestamp__java_lang_String__org_patternfly_component_timestamp_Timestamp('Last updated August 9th, 2022 at 2:57 PM EDT').m_dateTime__java_util_Date__org_patternfly_component_timestamp_Timestamp(pastDateTime)), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Timestamp));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Timestamp), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  TimestampComponent.$clinit = () =>{};
  TimestampComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimestampComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Date = goog.module.get('java.util.Date$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CustomFormat_$Overlay = goog.module.get('org.patternfly.component.timestamp.CustomFormat.$Overlay$impl');
  Day = goog.module.get('org.patternfly.component.timestamp.DateTimeFormatOptions.Day$impl');
  Hour = goog.module.get('org.patternfly.component.timestamp.DateTimeFormatOptions.Hour$impl');
  Month = goog.module.get('org.patternfly.component.timestamp.DateTimeFormatOptions.Month$impl');
  Weekday = goog.module.get('org.patternfly.component.timestamp.DateTimeFormatOptions.Weekday$impl');
  Year = goog.module.get('org.patternfly.component.timestamp.DateTimeFormatOptions.Year$impl');
  Timestamp = goog.module.get('org.patternfly.component.timestamp.Timestamp$impl');
  TimestampFormat = goog.module.get('org.patternfly.component.timestamp.TimestampFormat$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TimestampComponent, 'org.patternfly.showcase.component.TimestampComponent');

exports = TimestampComponent;

//# sourceMappingURL=TimestampComponent.js.map
