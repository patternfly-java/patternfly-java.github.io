goog.module('org.jboss.elemento.AttachableElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

/**
 * @interface
 * @template E
 * @extends {Attachable}
 * @extends {IsElement<E>}
 */
class AttachableElement {
 /** @nodts */
 static $clinit() {
  AttachableElement.$clinit = () =>{};
  AttachableElement.$loadModules();
  Attachable.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Attachable.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_AttachableElement = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_AttachableElement;
 }
 
 /** @nodts */
 static $loadModules() {}
}
AttachableElement.$markImplementor(/**@type {Function}*/ (AttachableElement));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (AttachableElement), 'org.jboss.elemento.AttachableElement');

exports = AttachableElement;

//# sourceMappingURL=AttachableElement.js.map
