goog.module('org.patternfly.core.Dataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Dataset {
 /** @nodts */
 static $clinit() {
  Dataset.$clinit = () =>{};
  Dataset.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_Dataset = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Dataset;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Dataset.f_identifier__org_patternfly_core_Dataset = 'identifier';
/**@const {string} @nodts*/
Dataset.f_label__org_patternfly_core_Dataset = 'label';
/**@const {string} @nodts*/
Dataset.f_placeholder__org_patternfly_core_Dataset = 'placeholder';
/**@const {string} @nodts*/
Dataset.f_sliderStepValue__org_patternfly_core_Dataset = 'sliderStepValue';
Dataset.$markImplementor(/**@type {Function}*/ (Dataset));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Dataset), 'org.patternfly.core.Dataset');

exports = Dataset;

//# sourceMappingURL=Dataset.js.map
