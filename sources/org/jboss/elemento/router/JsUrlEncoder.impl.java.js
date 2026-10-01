goog.module('org.jboss.elemento.router.JsUrlEncoder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UrlEncoder = goog.require('org.jboss.elemento.router.UrlEncoder$impl');

/**
 * @implements {UrlEncoder}
 */
class JsUrlEncoder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!JsUrlEncoder} */
 static $create__() {
  JsUrlEncoder.$clinit();
  let $instance = new JsUrlEncoder();
  $instance.$ctor__org_jboss_elemento_router_JsUrlEncoder__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_JsUrlEncoder__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts @return {?string} */
 m_encode__java_lang_String__java_lang_String(/** ?string */ value) {
  return goog.global.encodeURIComponent(value);
 }
 /** @override @nodts @return {?string} */
 m_decode__java_lang_String__java_lang_String(/** ?string */ value) {
  return goog.global.decodeURIComponent(value);
 }
 /** @nodts */
 static $clinit() {
  JsUrlEncoder.$clinit = () =>{};
  JsUrlEncoder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsUrlEncoder;
 }
 
 /** @nodts */
 static $loadModules() {}
}
UrlEncoder.$markImplementor(JsUrlEncoder);
$Util.$setClassMetadata(JsUrlEncoder, 'org.jboss.elemento.router.JsUrlEncoder');

exports = JsUrlEncoder;

//# sourceMappingURL=JsUrlEncoder.js.map
