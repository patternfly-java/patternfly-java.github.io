goog.module('org.patternfly.handler.ChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.ChangeHandler.$LambdaAdaptor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template C, T
 */
class ChangeHandler {
 /** @nodts @template C_1, T_1 */
 static m_fireIfChanged__java_lang_Object__java_lang_Object__java_lang_Object__java_util_List__void(/** C_1 */ component, /** T_1 */ oldValue, /** T_1 */ value, /** List<ChangeHandler<C_1, T_1>> */ changeHandlers) {
  ChangeHandler.$clinit();
  let changed = !Objects.m_equals__java_lang_Object__java_lang_Object__boolean(oldValue, value);
  if (changed && !changeHandlers.isEmpty()) {
   changeHandlers.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<C_1, T_1> */ ch) =>{
    let ch_1 = /**@type {ChangeHandler<C_1, T_1>}*/ ($Casts.$to(ch, /**@type {Function}*/ (ChangeHandler)));
    ch_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), component, value);
   }));
  }
 }
 /** @abstract @nodts */
 m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(/** Event */ event, /** C */ component, /** T */ value) {}
 /** @nodts @template C, T @return {!ChangeHandler<C, T>} */
 static $adapt(/** ?function(Event, C, T):void */ fn) {
  ChangeHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C, T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  ChangeHandler.$clinit = () =>{};
  ChangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_ChangeHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_ChangeHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.ChangeHandler.$LambdaAdaptor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ChangeHandler.$markImplementor(/**@type {Function}*/ (ChangeHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (ChangeHandler), 'org.patternfly.handler.ChangeHandler');

exports = ChangeHandler;

//# sourceMappingURL=ChangeHandler.js.map
