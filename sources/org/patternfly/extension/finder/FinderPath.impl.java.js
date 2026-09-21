goog.module('org.patternfly.extension.finder.FinderPath$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FinderSegment = goog.forwardDeclare('org.patternfly.extension.finder.FinderSegment$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Iterable<FinderSegment>}
 */
class FinderPath extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<FinderSegment>} @nodts*/
  this.f_segments__org_patternfly_extension_finder_FinderPath_;
 }
 /** @nodts @return {FinderPath} */
 static m_parse__java_lang_String__org_patternfly_extension_finder_FinderPath(/** ?string */ path) {
  FinderPath.$clinit();
  let segments = /**@type {!LinkedList<FinderSegment>}*/ (LinkedList.$create__());
  if (!$Equality.$same(path, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(path)) {
   for (let $array = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(path, '/'), $index = 0; $index < $array.length; $index++) {
    let part = $array[$index];
    {
     let eq = j_l_String.m_indexOf__java_lang_String__int__int(part, 61 /* '=' */);
     if (eq > 0 && eq < (j_l_String.m_length__java_lang_String__int(part) - 1 | 0)) {
      segments.add(FinderSegment.$create__java_lang_String__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(part, 0, eq), j_l_String.m_substring__java_lang_String__int__java_lang_String(part, eq + 1 | 0)));
     } else if (!j_l_String.m_isEmpty__java_lang_String__boolean(part) && eq == -1) {
      segments.add(FinderSegment.$create__java_lang_String__java_lang_String(part, null));
     }
    }
   }
  }
  return FinderPath.$create__java_util_List(segments);
 }
 /** @nodts @return {!FinderPath} */
 static $create__java_util_List(/** List<FinderSegment> */ segments) {
  FinderPath.$clinit();
  let $instance = new FinderPath();
  $instance.$ctor__org_patternfly_extension_finder_FinderPath__java_util_List__void(segments);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderPath__java_util_List__void(/** List<FinderSegment> */ segments) {
  this.$ctor__java_lang_Object__void();
  this.f_segments__org_patternfly_extension_finder_FinderPath_ = segments;
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_segments__org_patternfly_extension_finder_FinderPath_.isEmpty();
 }
 /** @nodts @return {number} */
 m_size__int() {
  return this.f_segments__org_patternfly_extension_finder_FinderPath_.size();
 }
 /** @override @nodts @return {Iterator<FinderSegment>} */
 m_iterator__java_util_Iterator() {
  return this.f_segments__org_patternfly_extension_finder_FinderPath_.m_iterator__java_util_Iterator();
 }
 /** @override @return {?string} */
 toString() {
  return /**@type {?string}*/ ($Casts.$to((/**@type {Stream<?string>}*/ (this.f_segments__org_patternfly_extension_finder_FinderPath_.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** FinderSegment */ arg0) =>{
   let arg0_1 = /**@type {FinderSegment}*/ ($Casts.$to(arg0, FinderSegment));
   return arg0_1.toString();
  }))))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector('/')), j_l_String));
 }
 /** @nodts @return {FinderSegment} */
 m_findColumn__java_lang_String__org_patternfly_extension_finder_FinderSegment(/** ?string */ identifier) {
  return this.m_findSegment__java_util_function_Predicate__org_patternfly_extension_finder_FinderSegment_$p_org_patternfly_extension_finder_FinderPath(Predicate.$adapt(/**  @return {boolean}*/ ((/** FinderSegment */ segment) =>{
   let segment_1 = /**@type {FinderSegment}*/ ($Casts.$to(segment, FinderSegment));
   return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(segment_1.f_columnId__org_patternfly_extension_finder_FinderSegment, identifier);
  })));
 }
 /** @nodts @return {FinderSegment} */
 m_findItem__java_lang_String__org_patternfly_extension_finder_FinderSegment(/** ?string */ identifier) {
  return this.m_findSegment__java_util_function_Predicate__org_patternfly_extension_finder_FinderSegment_$p_org_patternfly_extension_finder_FinderPath(Predicate.$adapt(/**  @return {boolean}*/ ((/** FinderSegment */ segment) =>{
   let segment_1 = /**@type {FinderSegment}*/ ($Casts.$to(segment, FinderSegment));
   return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(identifier, segment_1.f_itemId__org_patternfly_extension_finder_FinderSegment);
  })));
 }
 /** @nodts @return {FinderSegment} */
 m_findSegment__java_util_function_Predicate__org_patternfly_extension_finder_FinderSegment_$p_org_patternfly_extension_finder_FinderPath(/** Predicate<FinderSegment> */ condition) {
  for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let segment = /**@type {FinderSegment}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FinderSegment));
   {
    if (condition.m_test__java_lang_Object__boolean(segment)) {
     return segment;
    }
   }
  }
  return null;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<FinderSegment>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<FinderSegment>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  FinderPath.$clinit = () =>{};
  FinderPath.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderPath;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FinderSegment = goog.module.get('org.patternfly.extension.finder.FinderSegment$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterable.$markImplementor(FinderPath);
$Util.$setClassMetadata(FinderPath, 'org.patternfly.extension.finder.FinderPath');

exports = FinderPath;

//# sourceMappingURL=FinderPath.js.map
