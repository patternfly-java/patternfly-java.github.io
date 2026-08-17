goog.module('org.jboss.elemento.router.AnnotatedPlaces$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Places = goog.require('org.jboss.elemento.router.Places$impl');

let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let BulletChart = goog.forwardDeclare('org.patternfly.showcase.chart.BulletChart$impl');
let ChartsPage = goog.forwardDeclare('org.patternfly.showcase.chart.ChartsPage$impl');
let DonutChart = goog.forwardDeclare('org.patternfly.showcase.chart.DonutChart$impl');
let DonutUtilizationChart = goog.forwardDeclare('org.patternfly.showcase.chart.DonutUtilizationChart$impl');
let PieChart = goog.forwardDeclare('org.patternfly.showcase.chart.PieChart$impl');
let AccordionComponent = goog.forwardDeclare('org.patternfly.showcase.component.AccordionComponent$impl');
let ActionListComponent = goog.forwardDeclare('org.patternfly.showcase.component.ActionListComponent$impl');
let AlertComponent = goog.forwardDeclare('org.patternfly.showcase.component.AlertComponent$impl');
let AvatarComponent = goog.forwardDeclare('org.patternfly.showcase.component.AvatarComponent$impl');
let BackToTopComponent = goog.forwardDeclare('org.patternfly.showcase.component.BackToTopComponent$impl');
let BadgeComponent = goog.forwardDeclare('org.patternfly.showcase.component.BadgeComponent$impl');
let BannerComponent = goog.forwardDeclare('org.patternfly.showcase.component.BannerComponent$impl');
let BrandComponent = goog.forwardDeclare('org.patternfly.showcase.component.BrandComponent$impl');
let BreadcrumbComponent = goog.forwardDeclare('org.patternfly.showcase.component.BreadcrumbComponent$impl');
let ButtonComponent = goog.forwardDeclare('org.patternfly.showcase.component.ButtonComponent$impl');
let CardComponent = goog.forwardDeclare('org.patternfly.showcase.component.CardComponent$impl');
let CheckboxComponent = goog.forwardDeclare('org.patternfly.showcase.component.CheckboxComponent$impl');
let CodeBlockComponent = goog.forwardDeclare('org.patternfly.showcase.component.CodeBlockComponent$impl');
let CodeEditorComponent = goog.forwardDeclare('org.patternfly.showcase.component.CodeEditorComponent$impl');
let ComponentsPage = goog.forwardDeclare('org.patternfly.showcase.component.ComponentsPage$impl');
let ContentComponent = goog.forwardDeclare('org.patternfly.showcase.component.ContentComponent$impl');
let DataListComponent = goog.forwardDeclare('org.patternfly.showcase.component.DataListComponent$impl');
let DescriptionListComponent = goog.forwardDeclare('org.patternfly.showcase.component.DescriptionListComponent$impl');
let DividerComponent = goog.forwardDeclare('org.patternfly.showcase.component.DividerComponent$impl');
let DrawerComponent = goog.forwardDeclare('org.patternfly.showcase.component.DrawerComponent$impl');
let DropdownComponent = goog.forwardDeclare('org.patternfly.showcase.component.DropdownComponent$impl');
let EmptyStateComponent = goog.forwardDeclare('org.patternfly.showcase.component.EmptyStateComponent$impl');
let ExpandableSectionComponent = goog.forwardDeclare('org.patternfly.showcase.component.ExpandableSectionComponent$impl');
let FormComponent = goog.forwardDeclare('org.patternfly.showcase.component.FormComponent$impl');
let FormControlComponent = goog.forwardDeclare('org.patternfly.showcase.component.FormControlComponent$impl');
let FormSelectComponent = goog.forwardDeclare('org.patternfly.showcase.component.FormSelectComponent$impl');
let HelperTextComponent = goog.forwardDeclare('org.patternfly.showcase.component.HelperTextComponent$impl');
let HintComponent = goog.forwardDeclare('org.patternfly.showcase.component.HintComponent$impl');
let IconComponent = goog.forwardDeclare('org.patternfly.showcase.component.IconComponent$impl');
let InputGroupComponent = goog.forwardDeclare('org.patternfly.showcase.component.InputGroupComponent$impl');
let JumpLinksComponent = goog.forwardDeclare('org.patternfly.showcase.component.JumpLinksComponent$impl');
let LabelComponent = goog.forwardDeclare('org.patternfly.showcase.component.LabelComponent$impl');
let ListComponent = goog.forwardDeclare('org.patternfly.showcase.component.ListComponent$impl');
let MastheadComponent = goog.forwardDeclare('org.patternfly.showcase.component.MastheadComponent$impl');
let MenuComponent = goog.forwardDeclare('org.patternfly.showcase.component.MenuComponent$impl');
let MenuToggleComponent = goog.forwardDeclare('org.patternfly.showcase.component.MenuToggleComponent$impl');
let ModalComponent = goog.forwardDeclare('org.patternfly.showcase.component.ModalComponent$impl');
let NavigationComponent = goog.forwardDeclare('org.patternfly.showcase.component.NavigationComponent$impl');
let NotificationBadgeComponent = goog.forwardDeclare('org.patternfly.showcase.component.NotificationBadgeComponent$impl');
let NotificationDrawerComponent = goog.forwardDeclare('org.patternfly.showcase.component.NotificationDrawerComponent$impl');
let NumberInputComponent = goog.forwardDeclare('org.patternfly.showcase.component.NumberInputComponent$impl');
let PageComponent = goog.forwardDeclare('org.patternfly.showcase.component.PageComponent$impl');
let PanelComponent = goog.forwardDeclare('org.patternfly.showcase.component.PanelComponent$impl');
let PopoverComponent = goog.forwardDeclare('org.patternfly.showcase.component.PopoverComponent$impl');
let ProgressComponent = goog.forwardDeclare('org.patternfly.showcase.component.ProgressComponent$impl');
let ProgressStepperComponent = goog.forwardDeclare('org.patternfly.showcase.component.ProgressStepperComponent$impl');
let RadioComponent = goog.forwardDeclare('org.patternfly.showcase.component.RadioComponent$impl');
let SelectComponent = goog.forwardDeclare('org.patternfly.showcase.component.SelectComponent$impl');
let SimpleListComponent = goog.forwardDeclare('org.patternfly.showcase.component.SimpleListComponent$impl');
let SkeletonComponent = goog.forwardDeclare('org.patternfly.showcase.component.SkeletonComponent$impl');
let SliderComponent = goog.forwardDeclare('org.patternfly.showcase.component.SliderComponent$impl');
let SpinnerComponent = goog.forwardDeclare('org.patternfly.showcase.component.SpinnerComponent$impl');
let SwitchComponent = goog.forwardDeclare('org.patternfly.showcase.component.SwitchComponent$impl');
let TableComponent = goog.forwardDeclare('org.patternfly.showcase.component.TableComponent$impl');
let TabsComponent = goog.forwardDeclare('org.patternfly.showcase.component.TabsComponent$impl');
let TextAreaComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextAreaComponent$impl');
let TextInputComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextInputComponent$impl');
let TextInputGroupComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextInputGroupComponent$impl');
let TimestampComponent = goog.forwardDeclare('org.patternfly.showcase.component.TimestampComponent$impl');
let TitleComponent = goog.forwardDeclare('org.patternfly.showcase.component.TitleComponent$impl');
let ToggleGroupComponent = goog.forwardDeclare('org.patternfly.showcase.component.ToggleGroupComponent$impl');
let ToolbarComponent = goog.forwardDeclare('org.patternfly.showcase.component.ToolbarComponent$impl');
let TooltipComponent = goog.forwardDeclare('org.patternfly.showcase.component.TooltipComponent$impl');
let TreeViewComponent = goog.forwardDeclare('org.patternfly.showcase.component.TreeViewComponent$impl');
let TruncateComponent = goog.forwardDeclare('org.patternfly.showcase.component.TruncateComponent$impl');
let WizardComponent = goog.forwardDeclare('org.patternfly.showcase.component.WizardComponent$impl');
let ExtensionsPage = goog.forwardDeclare('org.patternfly.showcase.extension.ExtensionsPage$impl');
let FinderExtension = goog.forwardDeclare('org.patternfly.showcase.extension.FinderExtension$impl');
let BullseyeLayout = goog.forwardDeclare('org.patternfly.showcase.layout.BullseyeLayout$impl');
let FlexLayout = goog.forwardDeclare('org.patternfly.showcase.layout.FlexLayout$impl');
let GalleryLayout = goog.forwardDeclare('org.patternfly.showcase.layout.GalleryLayout$impl');
let GridLayout = goog.forwardDeclare('org.patternfly.showcase.layout.GridLayout$impl');
let LayoutsPage = goog.forwardDeclare('org.patternfly.showcase.layout.LayoutsPage$impl');
let LevelLayout = goog.forwardDeclare('org.patternfly.showcase.layout.LevelLayout$impl');
let SplitLayout = goog.forwardDeclare('org.patternfly.showcase.layout.SplitLayout$impl');
let StackLayout = goog.forwardDeclare('org.patternfly.showcase.layout.StackLayout$impl');

class AnnotatedPlaces extends Places {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!AnnotatedPlaces} */
 static $create__() {
  AnnotatedPlaces.$clinit();
  let $instance = new AnnotatedPlaces();
  $instance.$ctor__org_jboss_elemento_router_AnnotatedPlaces__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_AnnotatedPlaces__void() {
  this.$ctor__org_jboss_elemento_router_Places__void();
  let place0 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/charts/about-charts').m_title__java_lang_String__org_jboss_elemento_router_Place('Charts');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place0, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ChartsPage.$create__();
  })));
  let place1 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/charts/bullet').m_title__java_lang_String__org_jboss_elemento_router_Place('Bullet');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place1, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return BulletChart.$create__();
  })));
  let place2 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/charts/donut').m_title__java_lang_String__org_jboss_elemento_router_Place('Donut');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place2, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return DonutChart.$create__();
  })));
  let place3 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/charts/donut-utilization').m_title__java_lang_String__org_jboss_elemento_router_Place('Donut utilization');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place3, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return DonutUtilizationChart.$create__();
  })));
  let place4 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/charts/pie').m_title__java_lang_String__org_jboss_elemento_router_Place('Pie');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place4, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return PieChart.$create__();
  })));
  let place5 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/accordion').m_title__java_lang_String__org_jboss_elemento_router_Place('Accordion');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place5, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return AccordionComponent.$create__();
  })));
  let place6 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/action-list').m_title__java_lang_String__org_jboss_elemento_router_Place('Action list');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place6, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ActionListComponent.$create__();
  })));
  let place7 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/alert').m_title__java_lang_String__org_jboss_elemento_router_Place('Alert');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place7, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return AlertComponent.$create__();
  })));
  let place8 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/all-components').m_title__java_lang_String__org_jboss_elemento_router_Place('All components');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place8, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ComponentsPage.$create__();
  })));
  let place9 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/avatar').m_title__java_lang_String__org_jboss_elemento_router_Place('Avatar');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place9, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return AvatarComponent.$create__();
  })));
  let place10 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/back-to-top').m_title__java_lang_String__org_jboss_elemento_router_Place('Back to top');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place10, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return BackToTopComponent.$create__();
  })));
  let place11 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/badge').m_title__java_lang_String__org_jboss_elemento_router_Place('Badge');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place11, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return BadgeComponent.$create__();
  })));
  let place12 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/banner').m_title__java_lang_String__org_jboss_elemento_router_Place('Banner');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place12, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return BannerComponent.$create__();
  })));
  let place13 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/brand').m_title__java_lang_String__org_jboss_elemento_router_Place('Brand');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place13, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return BrandComponent.$create__();
  })));
  let place14 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/breadcrumb').m_title__java_lang_String__org_jboss_elemento_router_Place('Breadcrumb');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place14, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return BreadcrumbComponent.$create__();
  })));
  let place15 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/button').m_title__java_lang_String__org_jboss_elemento_router_Place('Button');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place15, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ButtonComponent.$create__();
  })));
  let place16 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/card').m_title__java_lang_String__org_jboss_elemento_router_Place('Card');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place16, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return CardComponent.$create__();
  })));
  let place17 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/code-block').m_title__java_lang_String__org_jboss_elemento_router_Place('Code block');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place17, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return CodeBlockComponent.$create__();
  })));
  let place18 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/code-editor').m_title__java_lang_String__org_jboss_elemento_router_Place('Code editor');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place18, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return CodeEditorComponent.$create__();
  })));
  let place19 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/content').m_title__java_lang_String__org_jboss_elemento_router_Place('Content');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place19, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ContentComponent.$create__();
  })));
  let place20 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/data-list').m_title__java_lang_String__org_jboss_elemento_router_Place('Data list');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place20, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return DataListComponent.$create__();
  })));
  let place21 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/description-list').m_title__java_lang_String__org_jboss_elemento_router_Place('Description list');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place21, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return DescriptionListComponent.$create__();
  })));
  let place22 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/divider').m_title__java_lang_String__org_jboss_elemento_router_Place('Divider');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place22, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return DividerComponent.$create__();
  })));
  let place23 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/drawer').m_title__java_lang_String__org_jboss_elemento_router_Place('Drawer');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place23, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return DrawerComponent.$create__();
  })));
  let place24 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/empty-state').m_title__java_lang_String__org_jboss_elemento_router_Place('Empty state');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place24, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return EmptyStateComponent.$create__();
  })));
  let place25 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/expandable-section').m_title__java_lang_String__org_jboss_elemento_router_Place('Expandable section');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place25, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ExpandableSectionComponent.$create__();
  })));
  let place26 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/forms/checkbox').m_title__java_lang_String__org_jboss_elemento_router_Place('Checkbox');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place26, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return CheckboxComponent.$create__();
  })));
  let place27 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/forms/form').m_title__java_lang_String__org_jboss_elemento_router_Place('Form');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place27, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return FormComponent.$create__();
  })));
  let place28 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/forms/form-control').m_title__java_lang_String__org_jboss_elemento_router_Place('Form control');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place28, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return FormControlComponent.$create__();
  })));
  let place29 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/forms/form-select').m_title__java_lang_String__org_jboss_elemento_router_Place('Form select');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place29, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return FormSelectComponent.$create__();
  })));
  let place30 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/forms/radio').m_title__java_lang_String__org_jboss_elemento_router_Place('Radio');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place30, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return RadioComponent.$create__();
  })));
  let place31 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/forms/text-area').m_title__java_lang_String__org_jboss_elemento_router_Place('Text area');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place31, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TextAreaComponent.$create__();
  })));
  let place32 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/forms/text-input').m_title__java_lang_String__org_jboss_elemento_router_Place('Text input');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place32, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TextInputComponent.$create__();
  })));
  let place33 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/helper-text').m_title__java_lang_String__org_jboss_elemento_router_Place('Helper text');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place33, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return HelperTextComponent.$create__();
  })));
  let place34 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/hint').m_title__java_lang_String__org_jboss_elemento_router_Place('Hint');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place34, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return HintComponent.$create__();
  })));
  let place35 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/icon').m_title__java_lang_String__org_jboss_elemento_router_Place('Icon');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place35, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return IconComponent.$create__();
  })));
  let place36 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/input-group').m_title__java_lang_String__org_jboss_elemento_router_Place('Input group');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place36, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return InputGroupComponent.$create__();
  })));
  let place37 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/jump-links').m_title__java_lang_String__org_jboss_elemento_router_Place('Jump links');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place37, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return JumpLinksComponent.$create__();
  })));
  let place38 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/label').m_title__java_lang_String__org_jboss_elemento_router_Place('Label');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place38, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return LabelComponent.$create__();
  })));
  let place39 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/list').m_title__java_lang_String__org_jboss_elemento_router_Place('List');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place39, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ListComponent.$create__();
  })));
  let place40 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/masthead').m_title__java_lang_String__org_jboss_elemento_router_Place('Masthead');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place40, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return MastheadComponent.$create__();
  })));
  let place41 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/menus/dropdown').m_title__java_lang_String__org_jboss_elemento_router_Place('Dropdown');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place41, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return DropdownComponent.$create__();
  })));
  let place42 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/menus/menu').m_title__java_lang_String__org_jboss_elemento_router_Place('Menu');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place42, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return MenuComponent.$create__();
  })));
  let place43 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/menus/menu-toggle').m_title__java_lang_String__org_jboss_elemento_router_Place('Menu toggle');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place43, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return MenuToggleComponent.$create__();
  })));
  let place44 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/menus/select').m_title__java_lang_String__org_jboss_elemento_router_Place('Select');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place44, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return SelectComponent.$create__();
  })));
  let place45 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/modal').m_title__java_lang_String__org_jboss_elemento_router_Place('Modal');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place45, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ModalComponent.$create__();
  })));
  let place46 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/navigation').m_title__java_lang_String__org_jboss_elemento_router_Place('Navigation');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place46, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return NavigationComponent.$create__();
  })));
  let place47 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/notification-badge').m_title__java_lang_String__org_jboss_elemento_router_Place('Notification badge');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place47, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return NotificationBadgeComponent.$create__();
  })));
  let place48 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/notification-drawer').m_title__java_lang_String__org_jboss_elemento_router_Place('Notification drawer');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place48, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return NotificationDrawerComponent.$create__();
  })));
  let place49 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/number-input').m_title__java_lang_String__org_jboss_elemento_router_Place('Number input');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place49, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return NumberInputComponent.$create__();
  })));
  let place50 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/page').m_title__java_lang_String__org_jboss_elemento_router_Place('Page');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place50, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return PageComponent.$create__();
  })));
  let place51 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/panel').m_title__java_lang_String__org_jboss_elemento_router_Place('Panel');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place51, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return PanelComponent.$create__();
  })));
  let place52 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/popover').m_title__java_lang_String__org_jboss_elemento_router_Place('Popover');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place52, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return PopoverComponent.$create__();
  })));
  let place53 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/progress').m_title__java_lang_String__org_jboss_elemento_router_Place('Progress');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place53, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ProgressComponent.$create__();
  })));
  let place54 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/progress-stepper').m_title__java_lang_String__org_jboss_elemento_router_Place('Progress stepper');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place54, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ProgressStepperComponent.$create__();
  })));
  let place55 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/simple-list').m_title__java_lang_String__org_jboss_elemento_router_Place('Simple list');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place55, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return SimpleListComponent.$create__();
  })));
  let place56 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/skeleton').m_title__java_lang_String__org_jboss_elemento_router_Place('Skeleton');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place56, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return SkeletonComponent.$create__();
  })));
  let place57 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/slider').m_title__java_lang_String__org_jboss_elemento_router_Place('Slider');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place57, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return SliderComponent.$create__();
  })));
  let place58 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/spinner').m_title__java_lang_String__org_jboss_elemento_router_Place('Spinner');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place58, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return SpinnerComponent.$create__();
  })));
  let place59 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/switch').m_title__java_lang_String__org_jboss_elemento_router_Place('Switch');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place59, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return SwitchComponent.$create__();
  })));
  let place60 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/table').m_title__java_lang_String__org_jboss_elemento_router_Place('Table');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place60, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TableComponent.$create__();
  })));
  let place61 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/tabs').m_title__java_lang_String__org_jboss_elemento_router_Place('Tabs');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place61, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TabsComponent.$create__();
  })));
  let place62 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/text-input-group').m_title__java_lang_String__org_jboss_elemento_router_Place('Text input group');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place62, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TextInputGroupComponent.$create__();
  })));
  let place63 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/timestamp').m_title__java_lang_String__org_jboss_elemento_router_Place('Timestamp');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place63, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TimestampComponent.$create__();
  })));
  let place64 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/title').m_title__java_lang_String__org_jboss_elemento_router_Place('Title');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place64, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TitleComponent.$create__();
  })));
  let place65 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/toggle-group').m_title__java_lang_String__org_jboss_elemento_router_Place('Toggle group');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place65, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ToggleGroupComponent.$create__();
  })));
  let place66 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/toolbar').m_title__java_lang_String__org_jboss_elemento_router_Place('Toolbar');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place66, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ToolbarComponent.$create__();
  })));
  let place67 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/tooltip').m_title__java_lang_String__org_jboss_elemento_router_Place('Tooltip');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place67, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TooltipComponent.$create__();
  })));
  let place68 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/tree-view').m_title__java_lang_String__org_jboss_elemento_router_Place('Tree view');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place68, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TreeViewComponent.$create__();
  })));
  let place69 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/truncate').m_title__java_lang_String__org_jboss_elemento_router_Place('Truncate');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place69, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return TruncateComponent.$create__();
  })));
  let place70 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/components/wizard').m_title__java_lang_String__org_jboss_elemento_router_Place('Wizard');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place70, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return WizardComponent.$create__();
  })));
  let place71 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/extensions/about-extensions').m_title__java_lang_String__org_jboss_elemento_router_Place('Extensions');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place71, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return ExtensionsPage.$create__();
  })));
  let place72 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/extensions/finder').m_title__java_lang_String__org_jboss_elemento_router_Place('Finder');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place72, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return FinderExtension.$create__();
  })));
  let place73 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/about-layouts').m_title__java_lang_String__org_jboss_elemento_router_Place('Layouts');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place73, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return LayoutsPage.$create__();
  })));
  let place74 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/bullseye').m_title__java_lang_String__org_jboss_elemento_router_Place('Bullseye');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place74, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return BullseyeLayout.$create__();
  })));
  let place75 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/flex').m_title__java_lang_String__org_jboss_elemento_router_Place('Flex');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place75, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return FlexLayout.$create__();
  })));
  let place76 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/gallery').m_title__java_lang_String__org_jboss_elemento_router_Place('Gallery');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place76, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return GalleryLayout.$create__();
  })));
  let place77 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/grid').m_title__java_lang_String__org_jboss_elemento_router_Place('Grid');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place77, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return GridLayout.$create__();
  })));
  let place78 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/level').m_title__java_lang_String__org_jboss_elemento_router_Place('Level');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place78, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return LevelLayout.$create__();
  })));
  let place79 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/split').m_title__java_lang_String__org_jboss_elemento_router_Place('Split');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place79, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return SplitLayout.$create__();
  })));
  let place80 = Place.m_place__java_lang_String__org_jboss_elemento_router_Place('/layouts/stack').m_title__java_lang_String__org_jboss_elemento_router_Place('Stack');
  this.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(place80, Supplier.$adapt(/**  @return {Page}*/ (() =>{
   return StackLayout.$create__();
  })));
 }
 /** @nodts */
 static $clinit() {
  AnnotatedPlaces.$clinit = () =>{};
  AnnotatedPlaces.$loadModules();
  Places.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotatedPlaces;
 }
 
 /** @nodts */
 static $loadModules() {
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Place = goog.module.get('org.jboss.elemento.router.Place$impl');
  BulletChart = goog.module.get('org.patternfly.showcase.chart.BulletChart$impl');
  ChartsPage = goog.module.get('org.patternfly.showcase.chart.ChartsPage$impl');
  DonutChart = goog.module.get('org.patternfly.showcase.chart.DonutChart$impl');
  DonutUtilizationChart = goog.module.get('org.patternfly.showcase.chart.DonutUtilizationChart$impl');
  PieChart = goog.module.get('org.patternfly.showcase.chart.PieChart$impl');
  AccordionComponent = goog.module.get('org.patternfly.showcase.component.AccordionComponent$impl');
  ActionListComponent = goog.module.get('org.patternfly.showcase.component.ActionListComponent$impl');
  AlertComponent = goog.module.get('org.patternfly.showcase.component.AlertComponent$impl');
  AvatarComponent = goog.module.get('org.patternfly.showcase.component.AvatarComponent$impl');
  BackToTopComponent = goog.module.get('org.patternfly.showcase.component.BackToTopComponent$impl');
  BadgeComponent = goog.module.get('org.patternfly.showcase.component.BadgeComponent$impl');
  BannerComponent = goog.module.get('org.patternfly.showcase.component.BannerComponent$impl');
  BrandComponent = goog.module.get('org.patternfly.showcase.component.BrandComponent$impl');
  BreadcrumbComponent = goog.module.get('org.patternfly.showcase.component.BreadcrumbComponent$impl');
  ButtonComponent = goog.module.get('org.patternfly.showcase.component.ButtonComponent$impl');
  CardComponent = goog.module.get('org.patternfly.showcase.component.CardComponent$impl');
  CheckboxComponent = goog.module.get('org.patternfly.showcase.component.CheckboxComponent$impl');
  CodeBlockComponent = goog.module.get('org.patternfly.showcase.component.CodeBlockComponent$impl');
  CodeEditorComponent = goog.module.get('org.patternfly.showcase.component.CodeEditorComponent$impl');
  ComponentsPage = goog.module.get('org.patternfly.showcase.component.ComponentsPage$impl');
  ContentComponent = goog.module.get('org.patternfly.showcase.component.ContentComponent$impl');
  DataListComponent = goog.module.get('org.patternfly.showcase.component.DataListComponent$impl');
  DescriptionListComponent = goog.module.get('org.patternfly.showcase.component.DescriptionListComponent$impl');
  DividerComponent = goog.module.get('org.patternfly.showcase.component.DividerComponent$impl');
  DrawerComponent = goog.module.get('org.patternfly.showcase.component.DrawerComponent$impl');
  DropdownComponent = goog.module.get('org.patternfly.showcase.component.DropdownComponent$impl');
  EmptyStateComponent = goog.module.get('org.patternfly.showcase.component.EmptyStateComponent$impl');
  ExpandableSectionComponent = goog.module.get('org.patternfly.showcase.component.ExpandableSectionComponent$impl');
  FormComponent = goog.module.get('org.patternfly.showcase.component.FormComponent$impl');
  FormControlComponent = goog.module.get('org.patternfly.showcase.component.FormControlComponent$impl');
  FormSelectComponent = goog.module.get('org.patternfly.showcase.component.FormSelectComponent$impl');
  HelperTextComponent = goog.module.get('org.patternfly.showcase.component.HelperTextComponent$impl');
  HintComponent = goog.module.get('org.patternfly.showcase.component.HintComponent$impl');
  IconComponent = goog.module.get('org.patternfly.showcase.component.IconComponent$impl');
  InputGroupComponent = goog.module.get('org.patternfly.showcase.component.InputGroupComponent$impl');
  JumpLinksComponent = goog.module.get('org.patternfly.showcase.component.JumpLinksComponent$impl');
  LabelComponent = goog.module.get('org.patternfly.showcase.component.LabelComponent$impl');
  ListComponent = goog.module.get('org.patternfly.showcase.component.ListComponent$impl');
  MastheadComponent = goog.module.get('org.patternfly.showcase.component.MastheadComponent$impl');
  MenuComponent = goog.module.get('org.patternfly.showcase.component.MenuComponent$impl');
  MenuToggleComponent = goog.module.get('org.patternfly.showcase.component.MenuToggleComponent$impl');
  ModalComponent = goog.module.get('org.patternfly.showcase.component.ModalComponent$impl');
  NavigationComponent = goog.module.get('org.patternfly.showcase.component.NavigationComponent$impl');
  NotificationBadgeComponent = goog.module.get('org.patternfly.showcase.component.NotificationBadgeComponent$impl');
  NotificationDrawerComponent = goog.module.get('org.patternfly.showcase.component.NotificationDrawerComponent$impl');
  NumberInputComponent = goog.module.get('org.patternfly.showcase.component.NumberInputComponent$impl');
  PageComponent = goog.module.get('org.patternfly.showcase.component.PageComponent$impl');
  PanelComponent = goog.module.get('org.patternfly.showcase.component.PanelComponent$impl');
  PopoverComponent = goog.module.get('org.patternfly.showcase.component.PopoverComponent$impl');
  ProgressComponent = goog.module.get('org.patternfly.showcase.component.ProgressComponent$impl');
  ProgressStepperComponent = goog.module.get('org.patternfly.showcase.component.ProgressStepperComponent$impl');
  RadioComponent = goog.module.get('org.patternfly.showcase.component.RadioComponent$impl');
  SelectComponent = goog.module.get('org.patternfly.showcase.component.SelectComponent$impl');
  SimpleListComponent = goog.module.get('org.patternfly.showcase.component.SimpleListComponent$impl');
  SkeletonComponent = goog.module.get('org.patternfly.showcase.component.SkeletonComponent$impl');
  SliderComponent = goog.module.get('org.patternfly.showcase.component.SliderComponent$impl');
  SpinnerComponent = goog.module.get('org.patternfly.showcase.component.SpinnerComponent$impl');
  SwitchComponent = goog.module.get('org.patternfly.showcase.component.SwitchComponent$impl');
  TableComponent = goog.module.get('org.patternfly.showcase.component.TableComponent$impl');
  TabsComponent = goog.module.get('org.patternfly.showcase.component.TabsComponent$impl');
  TextAreaComponent = goog.module.get('org.patternfly.showcase.component.TextAreaComponent$impl');
  TextInputComponent = goog.module.get('org.patternfly.showcase.component.TextInputComponent$impl');
  TextInputGroupComponent = goog.module.get('org.patternfly.showcase.component.TextInputGroupComponent$impl');
  TimestampComponent = goog.module.get('org.patternfly.showcase.component.TimestampComponent$impl');
  TitleComponent = goog.module.get('org.patternfly.showcase.component.TitleComponent$impl');
  ToggleGroupComponent = goog.module.get('org.patternfly.showcase.component.ToggleGroupComponent$impl');
  ToolbarComponent = goog.module.get('org.patternfly.showcase.component.ToolbarComponent$impl');
  TooltipComponent = goog.module.get('org.patternfly.showcase.component.TooltipComponent$impl');
  TreeViewComponent = goog.module.get('org.patternfly.showcase.component.TreeViewComponent$impl');
  TruncateComponent = goog.module.get('org.patternfly.showcase.component.TruncateComponent$impl');
  WizardComponent = goog.module.get('org.patternfly.showcase.component.WizardComponent$impl');
  ExtensionsPage = goog.module.get('org.patternfly.showcase.extension.ExtensionsPage$impl');
  FinderExtension = goog.module.get('org.patternfly.showcase.extension.FinderExtension$impl');
  BullseyeLayout = goog.module.get('org.patternfly.showcase.layout.BullseyeLayout$impl');
  FlexLayout = goog.module.get('org.patternfly.showcase.layout.FlexLayout$impl');
  GalleryLayout = goog.module.get('org.patternfly.showcase.layout.GalleryLayout$impl');
  GridLayout = goog.module.get('org.patternfly.showcase.layout.GridLayout$impl');
  LayoutsPage = goog.module.get('org.patternfly.showcase.layout.LayoutsPage$impl');
  LevelLayout = goog.module.get('org.patternfly.showcase.layout.LevelLayout$impl');
  SplitLayout = goog.module.get('org.patternfly.showcase.layout.SplitLayout$impl');
  StackLayout = goog.module.get('org.patternfly.showcase.layout.StackLayout$impl');
 }
}
$Util.$setClassMetadata(AnnotatedPlaces, 'org.jboss.elemento.router.AnnotatedPlaces');

exports = AnnotatedPlaces;

//# sourceMappingURL=AnnotatedPlaces.js.map
