goog.module('org.patternfly.component.timestamp.LocaleOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Objects = goog.forwardDeclare('java.util.Objects$impl');
let TimestampFormat = goog.forwardDeclare('org.patternfly.component.timestamp.TimestampFormat$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Object} */
 static m_create__org_patternfly_component_timestamp_LocaleOptions() {
  $Overlay.$clinit();
  return new Object();
 }
 /** @final @nodts @return {Object} */
 static m_dateStyle__$devirt__org_patternfly_component_timestamp_LocaleOptions__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_LocaleOptions(/** !Object */ $thisArg, /** TimestampFormat */ dateStyle) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.dateStyle, dateStyle.f_value__org_patternfly_component_timestamp_TimestampFormat)) {
   $thisArg.dateStyle = dateStyle.f_value__org_patternfly_component_timestamp_TimestampFormat;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_timeStyle__$devirt__org_patternfly_component_timestamp_LocaleOptions__org_patternfly_component_timestamp_TimestampFormat__org_patternfly_component_timestamp_LocaleOptions(/** !Object */ $thisArg, /** TimestampFormat */ timeStyle) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.timeStyle, timeStyle.f_value__org_patternfly_component_timestamp_TimestampFormat)) {
   $thisArg.timeStyle = timeStyle.f_value__org_patternfly_component_timestamp_TimestampFormat;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_hour12__$devirt__org_patternfly_component_timestamp_LocaleOptions__boolean__org_patternfly_component_timestamp_LocaleOptions(/** !Object */ $thisArg, /** boolean */ hour12) {
  $Overlay.$clinit();
  if ($thisArg.hour12 != hour12) {
   $thisArg.hour12 = hour12;
  }
  return $thisArg;
 }
 /** @final @nodts @return {Object} */
 static m_timeZone__$devirt__org_patternfly_component_timestamp_LocaleOptions__java_lang_String__org_patternfly_component_timestamp_LocaleOptions(/** !Object */ $thisArg, /** ?string */ timeZone) {
  $Overlay.$clinit();
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean($thisArg.timeZone, timeZone)) {
   $thisArg.timeZone = timeZone;
  }
  return $thisArg;
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=LocaleOptions$$Overlay.js.map
