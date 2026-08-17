package org.jboss.elemento.router;

public class AnnotatedPlaces extends Places {
  public AnnotatedPlaces() {
    super();
    Place place0 = Place.place("/charts/about-charts")
        .title("Charts");
    add(place0, () -> new org.patternfly.showcase.chart.ChartsPage());
    Place place1 = Place.place("/charts/bullet")
        .title("Bullet");
    add(place1, () -> new org.patternfly.showcase.chart.BulletChart());
    Place place2 = Place.place("/charts/donut")
        .title("Donut");
    add(place2, () -> new org.patternfly.showcase.chart.DonutChart());
    Place place3 = Place.place("/charts/donut-utilization")
        .title("Donut utilization");
    add(place3, () -> new org.patternfly.showcase.chart.DonutUtilizationChart());
    Place place4 = Place.place("/charts/pie")
        .title("Pie");
    add(place4, () -> new org.patternfly.showcase.chart.PieChart());
    Place place5 = Place.place("/components/accordion")
        .title("Accordion");
    add(place5, () -> new org.patternfly.showcase.component.AccordionComponent());
    Place place6 = Place.place("/components/action-list")
        .title("Action list");
    add(place6, () -> new org.patternfly.showcase.component.ActionListComponent());
    Place place7 = Place.place("/components/alert")
        .title("Alert");
    add(place7, () -> new org.patternfly.showcase.component.AlertComponent());
    Place place8 = Place.place("/components/all-components")
        .title("All components");
    add(place8, () -> new org.patternfly.showcase.component.ComponentsPage());
    Place place9 = Place.place("/components/avatar")
        .title("Avatar");
    add(place9, () -> new org.patternfly.showcase.component.AvatarComponent());
    Place place10 = Place.place("/components/back-to-top")
        .title("Back to top");
    add(place10, () -> new org.patternfly.showcase.component.BackToTopComponent());
    Place place11 = Place.place("/components/badge")
        .title("Badge");
    add(place11, () -> new org.patternfly.showcase.component.BadgeComponent());
    Place place12 = Place.place("/components/banner")
        .title("Banner");
    add(place12, () -> new org.patternfly.showcase.component.BannerComponent());
    Place place13 = Place.place("/components/brand")
        .title("Brand");
    add(place13, () -> new org.patternfly.showcase.component.BrandComponent());
    Place place14 = Place.place("/components/breadcrumb")
        .title("Breadcrumb");
    add(place14, () -> new org.patternfly.showcase.component.BreadcrumbComponent());
    Place place15 = Place.place("/components/button")
        .title("Button");
    add(place15, () -> new org.patternfly.showcase.component.ButtonComponent());
    Place place16 = Place.place("/components/card")
        .title("Card");
    add(place16, () -> new org.patternfly.showcase.component.CardComponent());
    Place place17 = Place.place("/components/code-block")
        .title("Code block");
    add(place17, () -> new org.patternfly.showcase.component.CodeBlockComponent());
    Place place18 = Place.place("/components/code-editor")
        .title("Code editor");
    add(place18, () -> new org.patternfly.showcase.component.CodeEditorComponent());
    Place place19 = Place.place("/components/content")
        .title("Content");
    add(place19, () -> new org.patternfly.showcase.component.ContentComponent());
    Place place20 = Place.place("/components/data-list")
        .title("Data list");
    add(place20, () -> new org.patternfly.showcase.component.DataListComponent());
    Place place21 = Place.place("/components/description-list")
        .title("Description list");
    add(place21, () -> new org.patternfly.showcase.component.DescriptionListComponent());
    Place place22 = Place.place("/components/divider")
        .title("Divider");
    add(place22, () -> new org.patternfly.showcase.component.DividerComponent());
    Place place23 = Place.place("/components/drawer")
        .title("Drawer");
    add(place23, () -> new org.patternfly.showcase.component.DrawerComponent());
    Place place24 = Place.place("/components/empty-state")
        .title("Empty state");
    add(place24, () -> new org.patternfly.showcase.component.EmptyStateComponent());
    Place place25 = Place.place("/components/expandable-section")
        .title("Expandable section");
    add(place25, () -> new org.patternfly.showcase.component.ExpandableSectionComponent());
    Place place26 = Place.place("/components/forms/checkbox")
        .title("Checkbox");
    add(place26, () -> new org.patternfly.showcase.component.CheckboxComponent());
    Place place27 = Place.place("/components/forms/form")
        .title("Form");
    add(place27, () -> new org.patternfly.showcase.component.FormComponent());
    Place place28 = Place.place("/components/forms/form-control")
        .title("Form control");
    add(place28, () -> new org.patternfly.showcase.component.FormControlComponent());
    Place place29 = Place.place("/components/forms/form-select")
        .title("Form select");
    add(place29, () -> new org.patternfly.showcase.component.FormSelectComponent());
    Place place30 = Place.place("/components/forms/radio")
        .title("Radio");
    add(place30, () -> new org.patternfly.showcase.component.RadioComponent());
    Place place31 = Place.place("/components/forms/text-area")
        .title("Text area");
    add(place31, () -> new org.patternfly.showcase.component.TextAreaComponent());
    Place place32 = Place.place("/components/forms/text-input")
        .title("Text input");
    add(place32, () -> new org.patternfly.showcase.component.TextInputComponent());
    Place place33 = Place.place("/components/helper-text")
        .title("Helper text");
    add(place33, () -> new org.patternfly.showcase.component.HelperTextComponent());
    Place place34 = Place.place("/components/hint")
        .title("Hint");
    add(place34, () -> new org.patternfly.showcase.component.HintComponent());
    Place place35 = Place.place("/components/icon")
        .title("Icon");
    add(place35, () -> new org.patternfly.showcase.component.IconComponent());
    Place place36 = Place.place("/components/input-group")
        .title("Input group");
    add(place36, () -> new org.patternfly.showcase.component.InputGroupComponent());
    Place place37 = Place.place("/components/jump-links")
        .title("Jump links");
    add(place37, () -> new org.patternfly.showcase.component.JumpLinksComponent());
    Place place38 = Place.place("/components/label")
        .title("Label");
    add(place38, () -> new org.patternfly.showcase.component.LabelComponent());
    Place place39 = Place.place("/components/list")
        .title("List");
    add(place39, () -> new org.patternfly.showcase.component.ListComponent());
    Place place40 = Place.place("/components/masthead")
        .title("Masthead");
    add(place40, () -> new org.patternfly.showcase.component.MastheadComponent());
    Place place41 = Place.place("/components/menus/dropdown")
        .title("Dropdown");
    add(place41, () -> new org.patternfly.showcase.component.DropdownComponent());
    Place place42 = Place.place("/components/menus/menu")
        .title("Menu");
    add(place42, () -> new org.patternfly.showcase.component.MenuComponent());
    Place place43 = Place.place("/components/menus/menu-toggle")
        .title("Menu toggle");
    add(place43, () -> new org.patternfly.showcase.component.MenuToggleComponent());
    Place place44 = Place.place("/components/menus/select")
        .title("Select");
    add(place44, () -> new org.patternfly.showcase.component.SelectComponent());
    Place place45 = Place.place("/components/modal")
        .title("Modal");
    add(place45, () -> new org.patternfly.showcase.component.ModalComponent());
    Place place46 = Place.place("/components/navigation")
        .title("Navigation");
    add(place46, () -> new org.patternfly.showcase.component.NavigationComponent());
    Place place47 = Place.place("/components/notification-badge")
        .title("Notification badge");
    add(place47, () -> new org.patternfly.showcase.component.NotificationBadgeComponent());
    Place place48 = Place.place("/components/notification-drawer")
        .title("Notification drawer");
    add(place48, () -> new org.patternfly.showcase.component.NotificationDrawerComponent());
    Place place49 = Place.place("/components/number-input")
        .title("Number input");
    add(place49, () -> new org.patternfly.showcase.component.NumberInputComponent());
    Place place50 = Place.place("/components/page")
        .title("Page");
    add(place50, () -> new org.patternfly.showcase.component.PageComponent());
    Place place51 = Place.place("/components/panel")
        .title("Panel");
    add(place51, () -> new org.patternfly.showcase.component.PanelComponent());
    Place place52 = Place.place("/components/popover")
        .title("Popover");
    add(place52, () -> new org.patternfly.showcase.component.PopoverComponent());
    Place place53 = Place.place("/components/progress")
        .title("Progress");
    add(place53, () -> new org.patternfly.showcase.component.ProgressComponent());
    Place place54 = Place.place("/components/progress-stepper")
        .title("Progress stepper");
    add(place54, () -> new org.patternfly.showcase.component.ProgressStepperComponent());
    Place place55 = Place.place("/components/simple-list")
        .title("Simple list");
    add(place55, () -> new org.patternfly.showcase.component.SimpleListComponent());
    Place place56 = Place.place("/components/skeleton")
        .title("Skeleton");
    add(place56, () -> new org.patternfly.showcase.component.SkeletonComponent());
    Place place57 = Place.place("/components/slider")
        .title("Slider");
    add(place57, () -> new org.patternfly.showcase.component.SliderComponent());
    Place place58 = Place.place("/components/spinner")
        .title("Spinner");
    add(place58, () -> new org.patternfly.showcase.component.SpinnerComponent());
    Place place59 = Place.place("/components/switch")
        .title("Switch");
    add(place59, () -> new org.patternfly.showcase.component.SwitchComponent());
    Place place60 = Place.place("/components/table")
        .title("Table");
    add(place60, () -> new org.patternfly.showcase.component.TableComponent());
    Place place61 = Place.place("/components/tabs")
        .title("Tabs");
    add(place61, () -> new org.patternfly.showcase.component.TabsComponent());
    Place place62 = Place.place("/components/text-input-group")
        .title("Text input group");
    add(place62, () -> new org.patternfly.showcase.component.TextInputGroupComponent());
    Place place63 = Place.place("/components/timestamp")
        .title("Timestamp");
    add(place63, () -> new org.patternfly.showcase.component.TimestampComponent());
    Place place64 = Place.place("/components/title")
        .title("Title");
    add(place64, () -> new org.patternfly.showcase.component.TitleComponent());
    Place place65 = Place.place("/components/toggle-group")
        .title("Toggle group");
    add(place65, () -> new org.patternfly.showcase.component.ToggleGroupComponent());
    Place place66 = Place.place("/components/toolbar")
        .title("Toolbar");
    add(place66, () -> new org.patternfly.showcase.component.ToolbarComponent());
    Place place67 = Place.place("/components/tooltip")
        .title("Tooltip");
    add(place67, () -> new org.patternfly.showcase.component.TooltipComponent());
    Place place68 = Place.place("/components/tree-view")
        .title("Tree view");
    add(place68, () -> new org.patternfly.showcase.component.TreeViewComponent());
    Place place69 = Place.place("/components/truncate")
        .title("Truncate");
    add(place69, () -> new org.patternfly.showcase.component.TruncateComponent());
    Place place70 = Place.place("/components/wizard")
        .title("Wizard");
    add(place70, () -> new org.patternfly.showcase.component.WizardComponent());
    Place place71 = Place.place("/extensions/about-extensions")
        .title("Extensions");
    add(place71, () -> new org.patternfly.showcase.extension.ExtensionsPage());
    Place place72 = Place.place("/extensions/finder")
        .title("Finder");
    add(place72, () -> new org.patternfly.showcase.extension.FinderExtension());
    Place place73 = Place.place("/layouts/about-layouts")
        .title("Layouts");
    add(place73, () -> new org.patternfly.showcase.layout.LayoutsPage());
    Place place74 = Place.place("/layouts/bullseye")
        .title("Bullseye");
    add(place74, () -> new org.patternfly.showcase.layout.BullseyeLayout());
    Place place75 = Place.place("/layouts/flex")
        .title("Flex");
    add(place75, () -> new org.patternfly.showcase.layout.FlexLayout());
    Place place76 = Place.place("/layouts/gallery")
        .title("Gallery");
    add(place76, () -> new org.patternfly.showcase.layout.GalleryLayout());
    Place place77 = Place.place("/layouts/grid")
        .title("Grid");
    add(place77, () -> new org.patternfly.showcase.layout.GridLayout());
    Place place78 = Place.place("/layouts/level")
        .title("Level");
    add(place78, () -> new org.patternfly.showcase.layout.LevelLayout());
    Place place79 = Place.place("/layouts/split")
        .title("Split");
    add(place79, () -> new org.patternfly.showcase.layout.SplitLayout());
    Place place80 = Place.place("/layouts/stack")
        .title("Stack");
    add(place80, () -> new org.patternfly.showcase.layout.StackLayout());
  }
}
