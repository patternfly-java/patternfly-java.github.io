goog.module('org.patternfly.component.timestamp.DateTimeFormatOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class DateTimeFormatOptions extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!DateTimeFormatOptions} */
 static $create__() {
  DateTimeFormatOptions.$clinit();
  let $instance = new DateTimeFormatOptions();
  $instance.$ctor__org_patternfly_component_timestamp_DateTimeFormatOptions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_timestamp_DateTimeFormatOptions__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  DateTimeFormatOptions.$clinit = () =>{};
  DateTimeFormatOptions.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatOptions;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(DateTimeFormatOptions, 'org.patternfly.component.timestamp.DateTimeFormatOptions');

exports = DateTimeFormatOptions;

//# sourceMappingURL=DateTimeFormatOptions.js.map
