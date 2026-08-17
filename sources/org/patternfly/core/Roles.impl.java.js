goog.module('org.patternfly.core.Roles$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Roles {
 /** @nodts */
 static $clinit() {
  Roles.$clinit = () =>{};
  Roles.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_Roles = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Roles;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Roles.f_button__org_patternfly_core_Roles = 'button';
/**@const {string} @nodts*/
Roles.f_cell__org_patternfly_core_Roles = 'cell';
/**@const {string} @nodts*/
Roles.f_columnheader__org_patternfly_core_Roles = 'columnheader';
/**@const {string} @nodts*/
Roles.f_combobox__org_patternfly_core_Roles = 'combobox';
/**@const {string} @nodts*/
Roles.f_dialog__org_patternfly_core_Roles = 'dialog';
/**@const {string} @nodts*/
Roles.f_grid__org_patternfly_core_Roles = 'grid';
/**@const {string} @nodts*/
Roles.f_gridcell__org_patternfly_core_Roles = 'gridcell';
/**@const {string} @nodts*/
Roles.f_group__org_patternfly_core_Roles = 'group';
/**@const {string} @nodts*/
Roles.f_img__org_patternfly_core_Roles = 'img';
/**@const {string} @nodts*/
Roles.f_link__org_patternfly_core_Roles = 'link';
/**@const {string} @nodts*/
Roles.f_list__org_patternfly_core_Roles = 'list';
/**@const {string} @nodts*/
Roles.f_listbox__org_patternfly_core_Roles = 'listbox';
/**@const {string} @nodts*/
Roles.f_main__org_patternfly_core_Roles = 'main';
/**@const {string} @nodts*/
Roles.f_menuitem__org_patternfly_core_Roles = 'menuitem';
/**@const {string} @nodts*/
Roles.f_menu__org_patternfly_core_Roles = 'menu';
/**@const {string} @nodts*/
Roles.f_none__org_patternfly_core_Roles = 'none';
/**@const {string} @nodts*/
Roles.f_option__org_patternfly_core_Roles = 'option';
/**@const {string} @nodts*/
Roles.f_presentation__org_patternfly_core_Roles = 'presentation';
/**@const {string} @nodts*/
Roles.f_progressbar__org_patternfly_core_Roles = 'progressbar';
/**@const {string} @nodts*/
Roles.f_radiogroup__org_patternfly_core_Roles = 'radiogroup';
/**@const {string} @nodts*/
Roles.f_region__org_patternfly_core_Roles = 'region';
/**@const {string} @nodts*/
Roles.f_row__org_patternfly_core_Roles = 'row';
/**@const {string} @nodts*/
Roles.f_rowgroup__org_patternfly_core_Roles = 'rowgroup';
/**@const {string} @nodts*/
Roles.f_separator__org_patternfly_core_Roles = 'separator';
/**@const {string} @nodts*/
Roles.f_slider__org_patternfly_core_Roles = 'slider';
/**@const {string} @nodts*/
Roles.f_switch___org_patternfly_core_Roles = 'switch';
/**@const {string} @nodts*/
Roles.f_tab__org_patternfly_core_Roles = 'tab';
/**@const {string} @nodts*/
Roles.f_tablist__org_patternfly_core_Roles = 'tablist';
/**@const {string} @nodts*/
Roles.f_tabpanel__org_patternfly_core_Roles = 'tabpanel';
/**@const {string} @nodts*/
Roles.f_tooltip__org_patternfly_core_Roles = 'tooltip';
/**@const {string} @nodts*/
Roles.f_tree__org_patternfly_core_Roles = 'tree';
/**@const {string} @nodts*/
Roles.f_treeItem__org_patternfly_core_Roles = 'treeitem';
Roles.$markImplementor(/**@type {Function}*/ (Roles));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (Roles), 'org.patternfly.core.Roles');

exports = Roles;

//# sourceMappingURL=Roles.js.map
