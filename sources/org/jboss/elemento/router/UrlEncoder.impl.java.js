goog.module('org.jboss.elemento.router.UrlEncoder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class UrlEncoder {
 /** @abstract @nodts @return {?string} */
 m_encode__java_lang_String__java_lang_String(/** ?string */ value) {}
 /** @abstract @nodts @return {?string} */
 m_decode__java_lang_String__java_lang_String(/** ?string */ value) {}
 /** @nodts */
 static $clinit() {
  UrlEncoder.$clinit = () =>{};
  UrlEncoder.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_router_UrlEncoder = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_router_UrlEncoder;
 }
 
 /** @nodts */
 static $loadModules() {}
}
UrlEncoder.$markImplementor(/**@type {Function}*/ (UrlEncoder));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (UrlEncoder), 'org.jboss.elemento.router.UrlEncoder');

exports = UrlEncoder;

//# sourceMappingURL=UrlEncoder.js.map
