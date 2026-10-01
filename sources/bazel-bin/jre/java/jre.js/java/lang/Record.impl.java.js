goog.module('java.lang.Record$impl');

const ValueType = goog.require('javaemul.internal.ValueType$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @abstract
 */
class Record extends ValueType {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_lang_Record__void() {
  this.$ctor__javaemul_internal_ValueType__void();
 }
 /** @nodts */
 static $clinit() {
  Record.$clinit = () =>{};
  Record.$loadModules();
  ValueType.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Record;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(Record, 'java.lang.Record');

exports = Record;

//# sourceMappingURL=Record.js.map
