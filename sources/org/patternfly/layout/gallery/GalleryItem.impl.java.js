goog.module('org.patternfly.layout.gallery.GalleryItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubLayout = goog.require('org.patternfly.layout.SubLayout$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let LayoutType = goog.forwardDeclare('org.patternfly.layout.LayoutType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubLayout<HTMLElement, GalleryItem>}
 */
class GalleryItem extends SubLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {GalleryItem} */
 static m_galleryItem__org_patternfly_layout_gallery_GalleryItem() {
  GalleryItem.$clinit();
  return GalleryItem.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {GalleryItem} */
 static m_galleryItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_gallery_GalleryItem(/** HTMLContainerBuilder<E> */ builder) {
  GalleryItem.$clinit();
  return GalleryItem.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!GalleryItem} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  GalleryItem.$clinit();
  let $instance = new GalleryItem();
  $instance.$ctor__org_patternfly_layout_gallery_GalleryItem__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_gallery_GalleryItem__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_SubLayout__org_patternfly_layout_LayoutType__java_lang_String__elemental2_dom_HTMLElement__void(LayoutType.f_Gallery__org_patternfly_layout_LayoutType, GalleryItem.f_SUB_LAYOUT_NAME__org_patternfly_layout_gallery_GalleryItem, /**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_gallery__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {GalleryItem} */
 m_that__org_patternfly_layout_gallery_GalleryItem() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {GalleryItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_gallery_GalleryItem();
 }
 /** @nodts */
 static $clinit() {
  GalleryItem.$clinit = () =>{};
  GalleryItem.$loadModules();
  SubLayout.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GalleryItem;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  LayoutType = goog.module.get('org.patternfly.layout.LayoutType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
GalleryItem.f_SUB_LAYOUT_NAME__org_patternfly_layout_gallery_GalleryItem = 'gyi';
$Util.$setClassMetadata(GalleryItem, 'org.patternfly.layout.gallery.GalleryItem');

exports = GalleryItem;

//# sourceMappingURL=GalleryItem.js.map
