goog.module('org.patternfly.extension.finder.FinderSegment$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class FinderSegment extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_columnId__org_patternfly_extension_finder_FinderSegment;
  /**@type {?string} @nodts*/
  this.f_itemId__org_patternfly_extension_finder_FinderSegment;
 }
 /** @nodts @return {!FinderSegment} */
 static $create__java_lang_String__java_lang_String(/** ?string */ columnId, /** ?string */ itemId) {
  FinderSegment.$clinit();
  let $instance = new FinderSegment();
  $instance.$ctor__org_patternfly_extension_finder_FinderSegment__java_lang_String__java_lang_String__void(columnId, itemId);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderSegment__java_lang_String__java_lang_String__void(/** ?string */ columnId, /** ?string */ itemId) {
  this.$ctor__java_lang_Object__void();
  this.f_columnId__org_patternfly_extension_finder_FinderSegment = columnId;
  this.f_itemId__org_patternfly_extension_finder_FinderSegment = itemId;
 }
 /** @override @return {?string} */
 toString() {
  return !$Equality.$same(this.f_itemId__org_patternfly_extension_finder_FinderSegment, null) ? j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_columnId__org_patternfly_extension_finder_FinderSegment) + '=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_itemId__org_patternfly_extension_finder_FinderSegment) : this.f_columnId__org_patternfly_extension_finder_FinderSegment;
 }
 /** @nodts */
 static $clinit() {
  FinderSegment.$clinit = () =>{};
  FinderSegment.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderSegment;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(FinderSegment, 'org.patternfly.extension.finder.FinderSegment');

exports = FinderSegment;

//# sourceMappingURL=FinderSegment.js.map
