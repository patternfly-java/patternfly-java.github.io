goog.module('org.patternfly.showcase.extension.FinderExtension$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let ResolveCallbackFn_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $int = goog.forwardDeclare('javaemul.internal.primitives.$int$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.component.AsyncItems$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let ContentType = goog.forwardDeclare('org.patternfly.component.content.ContentType$impl');
let EmptyState = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyState$impl');
let EmptyStateBody = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateBody$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.icon.Icon$impl');
let DescriptionList = goog.forwardDeclare('org.patternfly.component.list.DescriptionList$impl');
let DescriptionListDescription = goog.forwardDeclare('org.patternfly.component.list.DescriptionListDescription$impl');
let DescriptionListGroup = goog.forwardDeclare('org.patternfly.component.list.DescriptionListGroup$impl');
let DescriptionListTerm = goog.forwardDeclare('org.patternfly.component.list.DescriptionListTerm$impl');
let Finder = goog.forwardDeclare('org.patternfly.extension.finder.Finder$impl');
let FinderColumn = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumn$impl');
let FinderColumnActions = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumnActions$impl');
let FinderColumnHeader = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumnHeader$impl');
let FinderColumnSearch = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumnSearch$impl');
let FinderItem = goog.forwardDeclare('org.patternfly.extension.finder.FinderItem$impl');
let FinderItemActions = goog.forwardDeclare('org.patternfly.extension.finder.FinderItemActions$impl');
let FinderItemDescription = goog.forwardDeclare('org.patternfly.extension.finder.FinderItemDescription$impl');
let FinderPreview = goog.forwardDeclare('org.patternfly.extension.finder.FinderPreview$impl');
let PreviewHandler = goog.forwardDeclare('org.patternfly.extension.finder.PreviewHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let BuildingBlocks = goog.forwardDeclare('org.patternfly.showcase.BuildingBlocks$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Extension_$Overlay = goog.forwardDeclare('org.patternfly.showcase.extension.Extension.$Overlay$impl');
let Discography = goog.forwardDeclare('org.patternfly.showcase.model.Discography$impl');
let FileData_$Overlay = goog.forwardDeclare('org.patternfly.showcase.model.FileData.$Overlay$impl');
let Files = goog.forwardDeclare('org.patternfly.showcase.model.Files$impl');
let Record_$Overlay = goog.forwardDeclare('org.patternfly.showcase.model.Record.$Overlay$impl');
let Track_$Overlay = goog.forwardDeclare('org.patternfly.showcase.model.Track.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FinderExtension extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!FinderExtension} */
 static $create__() {
  FinderExtension.$clinit();
  let $instance = new FinderExtension();
  $instance.$ctor__org_patternfly_showcase_extension_FinderExtension__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_extension_FinderExtension__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_extension_Extension__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_extensions__org_patternfly_showcase_Data, 'finder'), Extension_$Overlay)));
  this.m_startExamples__org_patternfly_component_content_Content__void(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Some of the examples below rely on JSON data. Please see '), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('https://github.com/patternfly-java/patternfly-java/blob/main/showcase/src/main/resources/org/patternfly/showcase/files.json', '_blank').m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_code__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('files.json')), HTMLContainerBuilder))), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' and '), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('https://github.com/patternfly-java/patternfly-java/blob/main/showcase/src/main/resources/org/patternfly/showcase/rhcp.json', '_blank').m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_code__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('rhcp.json')), HTMLContainerBuilder))), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' for more information.'), Content)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('finder-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('finder-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let fileItem = /**@type {!Array<j_u_function_Function>}*/ ($Arrays.$create([1], /**@type {Function}*/ (j_u_function_Function)));
   let fileColumn = /**@type {!Array<j_u_function_Function>}*/ ($Arrays.$create([1], /**@type {Function}*/ (j_u_function_Function)));
   let demoHeader = j_u_function_Function.$adapt(/**  @return {FinderColumnHeader}*/ ((/** ?string */ text) =>{
    let text_1 = /**@type {?string}*/ ($Casts.$to(text, j_l_String));
    return FinderColumnHeader.m_finderColumnHeader__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader(text_1).m_addActions__org_patternfly_extension_finder_FinderColumnActions__org_patternfly_extension_finder_FinderColumnHeader(FinderColumnActions.m_finderColumnActions__org_patternfly_extension_finder_FinderColumnActions().m_addButton__org_patternfly_component_button_Button__org_patternfly_extension_finder_FinderColumnActions(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_icon_PredefinedIcon__org_patternfly_component_button_Button(fas.m_plus__org_patternfly_icon_PredefinedIcon()).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_addButton__org_patternfly_component_button_Button__org_patternfly_extension_finder_FinderColumnActions(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_icon_PredefinedIcon__org_patternfly_component_button_Button(rhUi.m_redo__org_patternfly_icon_PredefinedIcon()).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_addDropdown__org_patternfly_component_menu_Dropdown__org_patternfly_extension_finder_FinderColumnActions(BuildingBlocks.m_mixedKebab__java_lang_String__org_patternfly_component_menu_Dropdown(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('finder-basic', /**@type {!Array<?string>}*/ ($Arrays.$stampType([text_1, 'ca'], j_l_String))))));
   }));
   $Arrays.$set(fileColumn, 0, j_u_function_Function.$adapt(/**  @return {FinderColumn}*/ ((/** Object */ file) =>{
    let file_1 = /**@type {Object}*/ ($Casts.$to(file, FileData_$Overlay));
    return /**@type {FinderColumn}*/ ($Casts.$to(FinderColumn.m_finderColumn__java_lang_String__org_patternfly_extension_finder_FinderColumn(file_1.id).m_addHeader__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(/**@type {FinderColumnHeader}*/ ($Casts.$to(demoHeader.m_apply__java_lang_Object__java_lang_Object(file_1.name), FinderColumnHeader))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** FinderColumn */ column) =>{
     let column_1 = /**@type {FinderColumn}*/ ($Casts.$to(column, FinderColumn));
     if (!$Equality.$same(file_1.children, null)) {
      column_1.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Object>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List(file_1.children)), fileItem[0]);
     }
    })), FinderColumn));
   })));
   $Arrays.$set(fileItem, 0, j_u_function_Function.$adapt(/**  @return {FinderItem}*/ ((/** Object */ file_2) =>{
    let file_3 = /**@type {Object}*/ ($Casts.$to(file_2, FileData_$Overlay));
    return /**@type {FinderItem}*/ ($Casts.$to((/**@type {FinderItem}*/ ($Casts.$to(FinderItem.m_finderItem__java_lang_String__java_lang_String__org_patternfly_extension_finder_FinderItem(file_3.id, file_3.name).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.m_predefinedIcon__java_lang_String__org_patternfly_icon_PredefinedIcon(file_3.icon)), FinderItem))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** FinderItem */ item) =>{
     let item_1 = /**@type {FinderItem}*/ ($Casts.$to(item, FinderItem));
     if (!$Equality.$same(file_3.description, null)) {
      item_1.m_addDescription__java_lang_String__org_patternfly_extension_finder_FinderItem(file_3.description);
     }
     if (!$Equality.$same(file_3.actions, null)) {
      item_1.m_addActions__org_patternfly_extension_finder_FinderItemActions__org_patternfly_extension_finder_FinderItem(FileData_$Overlay.m_itemActions__$devirt__org_patternfly_showcase_model_FileData__org_patternfly_extension_finder_FinderItemActions(file_3));
     }
     if (!$Equality.$same(file_3.children, null)) {
      item_1.m_nextColumn__java_util_function_Supplier__org_patternfly_extension_finder_FinderItem(Supplier.$adapt(/**  @return {FinderColumn}*/ (() =>{
       return /**@type {FinderColumn}*/ ($Casts.$to(fileColumn[0].m_apply__java_lang_Object__java_lang_Object(file_3), FinderColumn));
      })));
     }
    })), FinderItem));
   })));
   return (/**@type {Finder}*/ ($Casts.$to((/**@type {Finder}*/ ($Casts.$to(Finder.m_finder__org_patternfly_extension_finder_Finder().m_bordered__org_jboss_elemento_TypedBuilder(), Finder))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {FinderColumn}*/ ($Casts.$to(FinderColumn.m_finderColumn__java_lang_String__org_patternfly_extension_finder_FinderColumn('root').m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** FinderColumn */ column_2) =>{
    let column_3 = /**@type {FinderColumn}*/ ($Casts.$to(column_2, FinderColumn));
    column_3.m_addHeader__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(/**@type {FinderColumnHeader}*/ ($Casts.$to(demoHeader.m_apply__java_lang_Object__java_lang_Object('Root'), FinderColumnHeader))).m_defaultSearch__org_patternfly_extension_finder_FinderColumn().m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Object>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List(Files.f_data__org_patternfly_showcase_model_Files)), fileItem[0]);
   })), FinderColumn))), Finder))).m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('finder-preview', 'With preview', Code.m_code__java_lang_String__java_lang_String('finder-preview'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return (/**@type {Finder}*/ ($Casts.$to((/**@type {Finder}*/ ($Casts.$to(Finder.m_finder__org_patternfly_extension_finder_Finder().m_bordered__org_jboss_elemento_TypedBuilder(), Finder))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems((/**@type {FinderColumn}*/ ($Casts.$to(FinderColumn.m_finderColumn__java_lang_String__org_patternfly_extension_finder_FinderColumn('root').m_addHeader__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(FinderColumnHeader.m_finderColumnHeader__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader('Root')).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Object>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List(Files.f_data__org_patternfly_showcase_model_Files)), j_u_function_Function.$adapt(/**  @return {FinderItem}*/ ((/** Object */ file_4) =>{
    let file_5 = /**@type {Object}*/ ($Casts.$to(file_4, FileData_$Overlay));
    return /**@type {FinderItem}*/ ($Casts.$to((/**@type {FinderItem}*/ ($Casts.$to(FinderItem.m_finderItem__java_lang_String__java_lang_String__org_patternfly_extension_finder_FinderItem(file_5.id, file_5.name).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.m_predefinedIcon__java_lang_String__org_patternfly_icon_PredefinedIcon(file_5.icon)), FinderItem))).m_store__java_lang_String__java_lang_Object__org_patternfly_extension_finder_FinderItem('file', file_5).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** FinderItem */ item_2) =>{
     let item_3 = /**@type {FinderItem}*/ ($Casts.$to(item_2, FinderItem));
     if (!$Equality.$same(file_5.description, null)) {
      item_3.m_addDescription__java_lang_String__org_patternfly_extension_finder_FinderItem(file_5.description);
     }
    })), FinderItem));
   }))), FinderColumn))).m_onPreview__org_patternfly_extension_finder_PreviewHandler__org_patternfly_extension_finder_FinderColumn(PreviewHandler.$adapt((/** FinderItem */ item_4, /** FinderPreview */ preview) =>{
    let file_6 = /**@type {Object}*/ ($Casts.$to(item_4.m_get__java_lang_String__java_lang_Object('file'), FileData_$Overlay));
    preview.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_h1__org_patternfly_component_content_ContentType).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.m_predefinedIcon__java_lang_String__org_patternfly_icon_PredefinedIcon(file_6.icon)).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(file_6.name)), Content)));
    if (!$Equality.$same(file_6.description, null)) {
     preview.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(file_6.description), Content)));
    }
    if (!$Equality.$same(file_6.meta, null)) {
     preview.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {DescriptionList}*/ ($Casts.$to(DescriptionList.m_descriptionList__org_patternfly_component_list_DescriptionList().m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** DescriptionList */ dl) =>{
      let dl_1 = /**@type {DescriptionList}*/ ($Casts.$to(dl, DescriptionList));
      $Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn__void(file_6.meta, (/** ?string */ key) =>{
       dl_1.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(DescriptionListGroup.m_descriptionListGroup__java_lang_String__org_patternfly_component_list_DescriptionListGroup(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('finder-preview', /**@type {!Array<?string>}*/ ($Arrays.$stampType([key], j_l_String)))).m_addTerm__org_patternfly_component_list_DescriptionListTerm__org_patternfly_component_list_DescriptionListGroup(DescriptionListTerm.m_descriptionListTerm__java_lang_String__org_patternfly_component_list_DescriptionListTerm(key)).m_addDescription__org_patternfly_component_list_DescriptionListDescription__org_patternfly_component_list_DescriptionListGroup(DescriptionListDescription.m_descriptionListDescription__java_lang_String__org_patternfly_component_list_DescriptionListDescription(/**@type {?string}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(file_6.meta, key), j_l_String)))));
      });
     })), DescriptionList)));
    }
   }))), Finder))).m_addPreview__org_patternfly_extension_finder_FinderPreview__org_patternfly_extension_finder_Finder(/**@type {FinderPreview}*/ ($Casts.$to((/**@type {FinderPreview}*/ ($Casts.$to(FinderPreview.m_finderPreview__org_patternfly_extension_finder_FinderPreview().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_h1__org_patternfly_component_content_ContentType).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Preview'), Content))), FinderPreview))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Please select an item to see the preview.'), Content))), FinderPreview))).m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__org_patternfly_component_content_Content__java_lang_String__java_util_function_Supplier('finder-async', 'Async items', /**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('The finder below contains the '), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers#Discography', '_blank').m_text__java_lang_String__org_jboss_elemento_TypedBuilder('discography'), HTMLContainerBuilder))), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' of the Red Hot Chili Peppers. The decades are added statically, the records are loaded '), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('asynchronously (with a random delay and error). If there are no records in a decade, an '), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('empty item is displayed. Once loaded the records won\'t be loaded again, until you reload them.'), Content)), Code.m_code__java_lang_String__java_lang_String('finder-async'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let decades = /**@type {!Array<Array<number>>}*/ ($Arrays.$stampType([/**@type {!Array<number>}*/ ($Arrays.$stampType([1970, 1979], $int)), /**@type {!Array<number>}*/ ($Arrays.$stampType([1980, 1989], $int)), /**@type {!Array<number>}*/ ($Arrays.$stampType([1990, 1999], $int)), /**@type {!Array<number>}*/ ($Arrays.$stampType([2000, 2009], $int)), /**@type {!Array<number>}*/ ($Arrays.$stampType([2010, 2019], $int)), /**@type {!Array<number>}*/ ($Arrays.$stampType([2020, 2029], $int)), /**@type {!Array<number>}*/ ($Arrays.$stampType([2030, 2039], $int))], $int, 2));
   let recordPreview = PreviewHandler.$adapt((/** FinderItem */ item_5, /** FinderPreview */ preview_1) =>{
    let record = /**@type {Object}*/ ($Casts.$to(item_5.m_get__java_lang_String__java_lang_Object('record'), Record_$Overlay));
    (/**@type {FinderPreview}*/ ($Casts.$to((/**@type {FinderPreview}*/ ($Casts.$to((/**@type {FinderPreview}*/ ($Casts.$to(preview_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_h1__org_patternfly_component_content_ContentType).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(record.title), Content))), FinderPreview))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Released ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(record.released)), Content))), FinderPreview))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_img__java_lang_String__org_jboss_elemento_HTMLElementBuilder(record.cover)), HTMLContainerBuilder))), FinderPreview))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('More infos: '), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(record.url, '_blank').m_text__java_lang_String__org_jboss_elemento_TypedBuilder(record.url), HTMLContainerBuilder))), Content)));
   });
   let trackPreview = PreviewHandler.$adapt((/** FinderItem */ item_6, /** FinderPreview */ preview_2) =>{
    let track = /**@type {Object}*/ ($Casts.$to(item_6.m_get__java_lang_String__java_lang_Object('track'), Track_$Overlay));
    (/**@type {FinderPreview}*/ ($Casts.$to(preview_2.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_h1__org_patternfly_component_content_ContentType).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(track.title), Content))), FinderPreview))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {DescriptionList}*/ ($Casts.$to((/**@type {DescriptionList}*/ ($Casts.$to((/**@type {DescriptionList}*/ ($Casts.$to((/**@type {DescriptionList}*/ ($Casts.$to((/**@type {DescriptionList}*/ ($Casts.$to(DescriptionList.m_descriptionList__org_patternfly_component_list_DescriptionList().m_horizontal__org_jboss_elemento_TypedBuilder(), DescriptionList))).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String('mt-sm')], j_l_String))), DescriptionList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(DescriptionListGroup.m_descriptionListGroup__org_patternfly_component_list_DescriptionListGroup().m_addTerm__org_patternfly_component_list_DescriptionListTerm__org_patternfly_component_list_DescriptionListGroup(DescriptionListTerm.m_descriptionListTerm__java_lang_String__org_patternfly_component_list_DescriptionListTerm('Title')).m_addDescription__org_patternfly_component_list_DescriptionListDescription__org_patternfly_component_list_DescriptionListGroup(DescriptionListDescription.m_descriptionListDescription__java_lang_String__org_patternfly_component_list_DescriptionListDescription(track.title))), DescriptionList))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(DescriptionListGroup.m_descriptionListGroup__org_patternfly_component_list_DescriptionListGroup().m_addTerm__org_patternfly_component_list_DescriptionListTerm__org_patternfly_component_list_DescriptionListGroup(DescriptionListTerm.m_descriptionListTerm__java_lang_String__org_patternfly_component_list_DescriptionListTerm('Length')).m_addDescription__org_patternfly_component_list_DescriptionListDescription__org_patternfly_component_list_DescriptionListGroup(DescriptionListDescription.m_descriptionListDescription__java_lang_String__org_patternfly_component_list_DescriptionListDescription(track.length))), DescriptionList))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** DescriptionList */ dl_2) =>{
     let dl_3 = /**@type {DescriptionList}*/ ($Casts.$to(dl_2, DescriptionList));
     if (!$Equality.$same(track.writer, null)) {
      dl_3.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(DescriptionListGroup.m_descriptionListGroup__org_patternfly_component_list_DescriptionListGroup().m_addTerm__org_patternfly_component_list_DescriptionListTerm__org_patternfly_component_list_DescriptionListGroup(DescriptionListTerm.m_descriptionListTerm__java_lang_String__org_patternfly_component_list_DescriptionListTerm('Writer')).m_addDescription__org_patternfly_component_list_DescriptionListDescription__org_patternfly_component_list_DescriptionListGroup(DescriptionListDescription.m_descriptionListDescription__java_lang_String__org_patternfly_component_list_DescriptionListDescription(j_l_String.m_join__java_lang_CharSequence__java_util_Collection__java_lang_String(', ', Track_$Overlay.m_writer__$devirt__org_patternfly_showcase_model_Track__java_util_List(track)))));
     }
    })), DescriptionList)));
   });
   let recordItem = j_u_function_Function.$adapt(/**  @return {FinderItem}*/ ((/** Object */ record_1) =>{
    let record_2 = /**@type {Object}*/ ($Casts.$to(record_1, Record_$Overlay));
    return (/**@type {FinderItem}*/ ($Casts.$to((/**@type {FinderItem}*/ ($Casts.$to(FinderItem.m_finderItem__java_lang_String__org_patternfly_extension_finder_FinderItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(record_2.title, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(record_2.title), FinderItem))).m_addDescription__java_lang_String__org_patternfly_extension_finder_FinderItem(j_l_String.m_valueOf__int__java_lang_String(record_2.year)).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_recordVinyl__org_patternfly_icon_PredefinedIcon()), FinderItem))).m_store__java_lang_String__java_lang_Object__org_patternfly_extension_finder_FinderItem('record', record_2).m_nextColumn__java_util_function_Supplier__org_patternfly_extension_finder_FinderItem(Supplier.$adapt(/**  @return {FinderColumn}*/ (() =>{
     return (/**@type {FinderColumn}*/ ($Casts.$to(FinderColumn.m_finderColumn__java_lang_String__org_patternfly_extension_finder_FinderColumn(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(record_2.title, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))).m_addHeader__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(FinderColumnHeader.m_finderColumnHeader__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader(record_2.title)).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Object>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List(record_2.tracks)), j_u_function_Function.$adapt(/**  @return {FinderItem}*/ ((/** Object */ track_1) =>{
      let track_2 = /**@type {Object}*/ ($Casts.$to(track_1, Track_$Overlay));
      return (/**@type {FinderItem}*/ ($Casts.$to((/**@type {FinderItem}*/ ($Casts.$to(FinderItem.m_finderItem__java_lang_String__org_patternfly_extension_finder_FinderItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(record_2.title, /**@type {!Array<?string>}*/ ($Arrays.$stampType([j_l_String.m_valueOf__int__java_lang_String(track_2.track)], j_l_String)))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(track_2.track + '. ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(track_2.title)), FinderItem))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_music__org_patternfly_icon_PredefinedIcon()), FinderItem))).m_store__java_lang_String__java_lang_Object__org_patternfly_extension_finder_FinderItem('track', track_2);
     }))), FinderColumn))).m_onPreview__org_patternfly_extension_finder_PreviewHandler__org_patternfly_extension_finder_FinderColumn(trackPreview);
    })));
   }));
   let decadeColumn = j_u_function_Function.$adapt(/**  @return {FinderColumn}*/ ((/** Array<number> */ decade) =>{
    let decade_1 = /**@type {Array<number>}*/ ($Arrays.$castTo(decade, $int, 1));
    return (/**@type {FinderColumn}*/ ($Casts.$to((/**@type {FinderColumn}*/ ($Casts.$to(FinderColumn.m_finderColumn__java_lang_String__org_patternfly_extension_finder_FinderColumn(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(j_l_String.m_valueOf__int__java_lang_String(decade_1[0]), /**@type {!Array<?string>}*/ ($Arrays.$stampType([j_l_String.m_valueOf__int__java_lang_String(decade_1[1])], j_l_String)))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** FinderColumn */ column_4) =>{
     let column_5 = /**@type {FinderColumn}*/ ($Casts.$to(column_4, FinderColumn));
     column_5.m_addHeader__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(FinderColumnHeader.m_finderColumnHeader__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader(decade_1[0] + ' - ' + decade_1[1]).m_addActions__org_patternfly_extension_finder_FinderColumnActions__org_patternfly_extension_finder_FinderColumnHeader(FinderColumnActions.m_finderColumnActions__org_patternfly_extension_finder_FinderColumnActions().m_addButton__org_patternfly_component_button_Button__org_patternfly_extension_finder_FinderColumnActions((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_icon_PredefinedIcon__org_patternfly_component_button_Button(rhUi.m_redo__org_patternfly_icon_PredefinedIcon()).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, /** Button */ b) =>{
      let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
      column_5.m_reload__elemental2_promise_Promise();
     })))));
    })), FinderColumn))).m_addItems__org_patternfly_component_AsyncItems__org_patternfly_component_HasItems(AsyncItems.$adapt(/**  @return {Promise<Iterable<FinderItem>>}*/ ((/** FinderColumn */ item_7) =>{
     let item_8 = /**@type {FinderColumn}*/ ($Casts.$to(item_7, FinderColumn));
     return /**@type {!Promise<!Iterable<!FinderItem>>}*/ (new Promise((/** function(?):void */ resolve, /** function(!*):void */ reject) =>{
      let boom = Math.random() < 0.25;
      let delay = Random.$create__().m_nextInt__int__int(2000);
      DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
       if (boom) {
        reject('Random error');
       } else {
        let items = /**@type {List<FinderItem>}*/ ($Casts.$to((/**@type {Stream<FinderItem>}*/ (Discography.m_records__java_util_function_Predicate__java_util_List(Predicate.$adapt(/**  @return {boolean}*/ ((/** Object */ r) =>{
         let r_1 = /**@type {Object}*/ ($Casts.$to(r, Record_$Overlay));
         return r_1.year >= decade_1[0] && r_1.year <= decade_1[1];
        }))).m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(recordItem))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<FinderItem, *, List<FinderItem>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List)));
        if (items.isEmpty()) {
         ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(resolve, /**@type {List<FinderItem>}*/ (Collections.m_singletonList__java_lang_Object__java_util_List(FinderItem.m_emptyItem__org_patternfly_component_emptystate_EmptyState__org_patternfly_extension_finder_FinderItem((/**@type {EmptyState}*/ ($Casts.$to((/**@type {EmptyState}*/ ($Casts.$to(EmptyState.m_emptyState__org_patternfly_component_emptystate_EmptyState().m_size__org_patternfly_style_Size__org_patternfly_component_emptystate_EmptyState(Size.f_xs__org_patternfly_style_Size).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('No records'), EmptyState))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_ban__org_patternfly_icon_PredefinedIcon()), EmptyState))).m_addBody__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(/**@type {EmptyStateBody}*/ ($Casts.$to(EmptyStateBody.m_emptyStateBody__org_patternfly_component_emptystate_EmptyStateBody().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('No records have been released in this decade.'), EmptyStateBody)))))));
        } else {
         ResolveCallbackFn_$Overlay.m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object__void(resolve, items);
        }
       }
      }, delay, []);
     }));
    }))), FinderColumn))).m_onPreview__org_patternfly_extension_finder_PreviewHandler__org_patternfly_extension_finder_FinderColumn(recordPreview);
   }));
   return (/**@type {Finder}*/ ($Casts.$to((/**@type {Finder}*/ ($Casts.$to((/**@type {Finder}*/ ($Casts.$to(Finder.m_finder__org_patternfly_extension_finder_Finder().m_bordered__org_jboss_elemento_TypedBuilder(), Finder))).m_style__java_lang_String__org_jboss_elemento_TypedBuilder('height: 500px;'), Finder))).m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(/**@type {FinderColumn}*/ ($Casts.$to(FinderColumn.m_finderColumn__java_lang_String__org_patternfly_extension_finder_FinderColumn('Decades').m_addHeader__org_patternfly_extension_finder_FinderColumnHeader__org_patternfly_extension_finder_FinderColumn(FinderColumnHeader.m_finderColumnHeader__java_lang_String__org_patternfly_extension_finder_FinderColumnHeader('Decades')).m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_HasItems(/**@type {List<Array<number>>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(decades)), j_u_function_Function.$adapt(/**  @return {FinderItem}*/ ((/** Array<number> */ decade_2) =>{
    let decade_3 = /**@type {Array<number>}*/ ($Arrays.$castTo(decade_2, $int, 1));
    return (/**@type {FinderItem}*/ ($Casts.$to((/**@type {FinderItem}*/ ($Casts.$to(FinderItem.m_finderItem__java_lang_String__org_patternfly_extension_finder_FinderItem(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(j_l_String.m_valueOf__int__java_lang_String(decade_3[0]), /**@type {!Array<?string>}*/ ($Arrays.$stampType([j_l_String.m_valueOf__int__java_lang_String(decade_3[1])], j_l_String)))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(decade_3[0] + ' - ' + decade_3[1]), FinderItem))).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_folder__org_patternfly_icon_PredefinedIcon()), FinderItem))).m_nextColumn__java_util_function_Supplier__org_patternfly_extension_finder_FinderItem(Supplier.$adapt(/**  @return {FinderColumn}*/ (() =>{
     return /**@type {FinderColumn}*/ ($Casts.$to(decadeColumn.m_apply__java_lang_Object__java_lang_Object(decade_3), FinderColumn));
    })));
   }))), FinderColumn))), Finder))).m_addPreview__org_patternfly_extension_finder_FinderPreview__org_patternfly_extension_finder_Finder(FinderPreview.m_finderPreview__org_patternfly_extension_finder_FinderPreview()).m_element__elemental2_dom_HTMLElement();
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Finder));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Finder), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FinderColumn), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FinderColumnHeader), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FinderColumnActions), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FinderColumnSearch), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FinderItem), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FinderItemActions), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FinderItemDescription), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FinderPreview), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  FinderExtension.$clinit = () =>{};
  FinderExtension.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderExtension;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  ResolveCallbackFn_$Overlay = goog.module.get('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  List = goog.module.get('java.util.List$impl');
  Random = goog.module.get('java.util.Random$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $int = goog.module.get('javaemul.internal.primitives.$int$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  AsyncItems = goog.module.get('org.patternfly.component.AsyncItems$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  ContentType = goog.module.get('org.patternfly.component.content.ContentType$impl');
  EmptyState = goog.module.get('org.patternfly.component.emptystate.EmptyState$impl');
  EmptyStateBody = goog.module.get('org.patternfly.component.emptystate.EmptyStateBody$impl');
  Icon = goog.module.get('org.patternfly.component.icon.Icon$impl');
  DescriptionList = goog.module.get('org.patternfly.component.list.DescriptionList$impl');
  DescriptionListDescription = goog.module.get('org.patternfly.component.list.DescriptionListDescription$impl');
  DescriptionListGroup = goog.module.get('org.patternfly.component.list.DescriptionListGroup$impl');
  DescriptionListTerm = goog.module.get('org.patternfly.component.list.DescriptionListTerm$impl');
  Finder = goog.module.get('org.patternfly.extension.finder.Finder$impl');
  FinderColumn = goog.module.get('org.patternfly.extension.finder.FinderColumn$impl');
  FinderColumnActions = goog.module.get('org.patternfly.extension.finder.FinderColumnActions$impl');
  FinderColumnHeader = goog.module.get('org.patternfly.extension.finder.FinderColumnHeader$impl');
  FinderColumnSearch = goog.module.get('org.patternfly.extension.finder.FinderColumnSearch$impl');
  FinderItem = goog.module.get('org.patternfly.extension.finder.FinderItem$impl');
  FinderItemActions = goog.module.get('org.patternfly.extension.finder.FinderItemActions$impl');
  FinderItemDescription = goog.module.get('org.patternfly.extension.finder.FinderItemDescription$impl');
  FinderPreview = goog.module.get('org.patternfly.extension.finder.FinderPreview$impl');
  PreviewHandler = goog.module.get('org.patternfly.extension.finder.PreviewHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  PredefinedIcon = goog.module.get('org.patternfly.icon.PredefinedIcon$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  BuildingBlocks = goog.module.get('org.patternfly.showcase.BuildingBlocks$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Extension_$Overlay = goog.module.get('org.patternfly.showcase.extension.Extension.$Overlay$impl');
  Discography = goog.module.get('org.patternfly.showcase.model.Discography$impl');
  FileData_$Overlay = goog.module.get('org.patternfly.showcase.model.FileData.$Overlay$impl');
  Files = goog.module.get('org.patternfly.showcase.model.Files$impl');
  Record_$Overlay = goog.module.get('org.patternfly.showcase.model.Record.$Overlay$impl');
  Track_$Overlay = goog.module.get('org.patternfly.showcase.model.Track.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FinderExtension, 'org.patternfly.showcase.extension.FinderExtension');

exports = FinderExtension;

//# sourceMappingURL=FinderExtension.js.map
