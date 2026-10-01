goog.module('org.patternfly.extension.finder.FinderClasses$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class FinderClasses {
 /** @nodts */
 static $clinit() {
  FinderClasses.$clinit = () =>{};
  FinderClasses.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_extension_finder_FinderClasses = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_extension_finder_FinderClasses;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
FinderClasses.f_column__org_patternfly_extension_finder_FinderClasses = 'column';
/**@const {string} @nodts*/
FinderClasses.f_columns__org_patternfly_extension_finder_FinderClasses = 'columns';
/**@const {string} @nodts*/
FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses = 'finder';
/**@const {string} @nodts*/
FinderClasses.f_folder__org_patternfly_extension_finder_FinderClasses = 'folder';
/**@const {string} @nodts*/
FinderClasses.f_items__org_patternfly_extension_finder_FinderClasses = 'items';
/**@const {string} @nodts*/
FinderClasses.f_pin__org_patternfly_extension_finder_FinderClasses = 'pin';
/**@const {string} @nodts*/
FinderClasses.f_pinnable__org_patternfly_extension_finder_FinderClasses = 'pinnable';
/**@const {string} @nodts*/
FinderClasses.f_preview__org_patternfly_extension_finder_FinderClasses = 'preview';
FinderClasses.$markImplementor(/**@type {Function}*/ (FinderClasses));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (FinderClasses), 'org.patternfly.extension.finder.FinderClasses');

exports = FinderClasses;

//# sourceMappingURL=FinderClasses.js.map
