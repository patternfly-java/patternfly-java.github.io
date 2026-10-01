goog.module('org.patternfly.showcase.model.Server.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let Status = goog.forwardDeclare('org.patternfly.showcase.model.Server.Status$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Status} */
 static m_status__$devirt__org_patternfly_showcase_model_Server__org_patternfly_showcase_model_Server_Status(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  try {
   return Status.m_valueOf__java_lang_String__org_patternfly_showcase_model_Server_Status($thisArg.status);
  } catch (__$jsexc) {
   let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
   if (IllegalArgumentException.$isInstance(__$exc)) {
    let ignore = /**@type {IllegalArgumentException}*/ (__$exc);
    return Status.f_UNKNOWN__org_patternfly_showcase_model_Server_Status;
   } else {
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
   }
  }
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
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  Status = goog.module.get('org.patternfly.showcase.model.Server.Status$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=Server$$Overlay.js.map
