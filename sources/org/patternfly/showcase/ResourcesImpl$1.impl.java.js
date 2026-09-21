goog.module('org.patternfly.showcase.ResourcesImpl.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.impl.TextResourcePrototype$impl');

let ResourcesImpl = goog.forwardDeclare('org.patternfly.showcase.ResourcesImpl$impl');

class $1 extends TextResourcePrototype {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!ResourcesImpl} @nodts*/
  this.$outer_this__org_patternfly_showcase_ResourcesImpl_1;
 }
 /** @nodts @return {!$1} */
 static $create__org_patternfly_showcase_ResourcesImpl(/** !ResourcesImpl */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_patternfly_showcase_ResourcesImpl_1__org_patternfly_showcase_ResourcesImpl__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ResourcesImpl_1__org_patternfly_showcase_ResourcesImpl__void(/** !ResourcesImpl */ $outer_this) {
  this.$outer_this__org_patternfly_showcase_ResourcesImpl_1 = $outer_this;
  this.$ctor__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype__void();
 }
 /** @override @nodts @return {?string} */
 m_getText__java_lang_String() {
  return '<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 24.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 36 36\" style=\"enable-background:new 0 0 36 36;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#F0F0F0;}\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#D2D2D2;}\n\t.st2{fill:#B8BBBE;}\n\t.st3{fill:#D2D2D2;}\n</style>\n<rect class=\"st0\" width=\"36\" height=\"36\"/>\n<path class=\"st1\" d=\"M17.7,20.1c-3.5,0-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4s6.4,2.9,6.4,6.4S21.3,20.1,17.7,20.1z\"/>\n<path class=\"st2\" d=\"M13.3,36l0-6.7c-2,0.4-2.9,1.4-3.1,3.5L10.1,36H13.3z\"/>\n<path class=\"st3\" d=\"M10.1,36l0.1-3.2c0.2-2.1,1.1-3.1,3.1-3.5l0,6.7h9.4l0-6.7c2,0.4,2.9,1.4,3.1,3.5l0.1,3.2h4.7\n\tc-0.4-3.9-1.3-9-2.9-11c-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-0.6-6.3-0.6s-6.1,0.7-6.1,0.7c-1.2,0.4-2.4,1.2-3.4,2.6\n\tC6.7,27,5.8,32.2,5.4,36H10.1z\"/>\n<path class=\"st2\" d=\"M25.9,36l-0.1-3.2c-0.2-2.1-1.1-3.1-3.1-3.5l0,6.7H25.9z\"/>\n</svg>\n';
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'avatar';
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  TextResourcePrototype.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'org.patternfly.showcase.ResourcesImpl$1');

exports = $1;

//# sourceMappingURL=ResourcesImpl$1.js.map
