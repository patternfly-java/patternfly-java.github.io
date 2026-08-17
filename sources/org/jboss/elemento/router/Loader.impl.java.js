goog.module('org.jboss.elemento.router.Loader$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Loader {
 /** @abstract @nodts @return {string} */
 m_value__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  Loader.$clinit = () =>{};
  Loader.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_router_Loader = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_router_Loader;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Loader.$markImplementor(/**@type {Function}*/ (Loader));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Loader), 'org.jboss.elemento.router.Loader');

exports = Loader;

//# sourceMappingURL=Loader.js.map
