goog.module('org.patternfly.showcase.markdown.Markdown$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let MarkdownData_$Overlay = goog.forwardDeclare('org.patternfly.showcase.markdown.MarkdownData.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class Markdown extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Promise<Object>} */
 static m_load__java_lang_String__elemental2_promise_Promise(/** ?string */ id) {
  Markdown.$clinit();
  if (Markdown.f_cache__org_patternfly_showcase_markdown_Markdown_.containsKey(id)) {
   return /**@type {!Promise<!Object>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {Object}*/ ($Casts.$to(Markdown.f_cache__org_patternfly_showcase_markdown_Markdown_.get(id), MarkdownData_$Overlay))));
  }
  return /**@type {!Promise<!Object>}*/ ((/**@type {!Promise<!*>}*/ (DomGlobal_$Overlay.m_fetch__java_lang_String__elemental2_promise_Promise('/markdown/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id) + '.json').then(/**  @return {IThenable<*>}*/ ((/** Response */ arg0) =>{
   let arg0_1 = /**@type {Response}*/ ($Casts.$to(arg0, Response_$Overlay));
   return arg0_1.json();
  })))).then(/**  @return {IThenable<Object>}*/ ((/** * */ json) =>{
   let data = /**@type {Object}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object(json), MarkdownData_$Overlay));
   Markdown.f_cache__org_patternfly_showcase_markdown_Markdown_.put(id, data);
   return /**@type {!Promise<!Object>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(data));
  })));
 }
 /** @nodts @return {!Markdown} */
 static $create__() {
  let $instance = new Markdown();
  $instance.$ctor__org_patternfly_showcase_markdown_Markdown__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_markdown_Markdown__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Markdown.$clinit = () =>{};
  Markdown.$loadModules();
  j_l_Object.$clinit();
  Markdown.f_cache__org_patternfly_showcase_markdown_Markdown_ = (/**@type {!HashMap<?string, Object>}*/ (HashMap.$create__()));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Markdown;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Response_$Overlay = goog.module.get('elemental2.dom.Response.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  MarkdownData_$Overlay = goog.module.get('org.patternfly.showcase.markdown.MarkdownData.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Map<?string, Object>} @nodts*/
Markdown.f_cache__org_patternfly_showcase_markdown_Markdown_;
$Util.$setClassMetadata(Markdown, 'org.patternfly.showcase.markdown.Markdown');

exports = Markdown;

//# sourceMappingURL=Markdown.js.map
