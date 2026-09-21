goog.module('org.patternfly.extension.finder.ResolvedFinderPath$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FinderPath = goog.forwardDeclare('org.patternfly.extension.finder.FinderPath$impl');
let FinderSegment = goog.forwardDeclare('org.patternfly.extension.finder.FinderSegment$impl');
let ResolvedFinderSegment = goog.forwardDeclare('org.patternfly.extension.finder.ResolvedFinderSegment$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Iterable<ResolvedFinderSegment>}
 */
class ResolvedFinderPath extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<ResolvedFinderSegment>} @nodts*/
  this.f_segments__org_patternfly_extension_finder_ResolvedFinderPath_;
 }
 /** @nodts @return {!ResolvedFinderPath} */
 static $create__java_util_List(/** List<ResolvedFinderSegment> */ segments) {
  ResolvedFinderPath.$clinit();
  let $instance = new ResolvedFinderPath();
  $instance.$ctor__org_patternfly_extension_finder_ResolvedFinderPath__java_util_List__void(segments);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_ResolvedFinderPath__java_util_List__void(/** List<ResolvedFinderSegment> */ segments) {
  this.$ctor__java_lang_Object__void();
  this.f_segments__org_patternfly_extension_finder_ResolvedFinderPath_ = segments;
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_segments__org_patternfly_extension_finder_ResolvedFinderPath_.isEmpty();
 }
 /** @nodts @return {number} */
 m_size__int() {
  return this.f_segments__org_patternfly_extension_finder_ResolvedFinderPath_.size();
 }
 /** @override @nodts @return {Iterator<ResolvedFinderSegment>} */
 m_iterator__java_util_Iterator() {
  return this.f_segments__org_patternfly_extension_finder_ResolvedFinderPath_.m_iterator__java_util_Iterator();
 }
 /** @override @return {?string} */
 toString() {
  return /**@type {?string}*/ ($Casts.$to((/**@type {Stream<?string>}*/ (this.f_segments__org_patternfly_extension_finder_ResolvedFinderPath_.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** ResolvedFinderSegment */ arg0) =>{
   let arg0_1 = /**@type {ResolvedFinderSegment}*/ ($Casts.$to(arg0, ResolvedFinderSegment));
   return arg0_1.toString();
  }))))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector('/')), j_l_String));
 }
 /** @nodts @return {ResolvedFinderSegment} */
 m_findColumn__java_lang_String__org_patternfly_extension_finder_ResolvedFinderSegment(/** ?string */ identifier) {
  return this.m_findSegment__java_util_function_Predicate__org_patternfly_extension_finder_ResolvedFinderSegment_$p_org_patternfly_extension_finder_ResolvedFinderPath(Predicate.$adapt(/**  @return {boolean}*/ ((/** ResolvedFinderSegment */ segment) =>{
   let segment_1 = /**@type {ResolvedFinderSegment}*/ ($Casts.$to(segment, ResolvedFinderSegment));
   return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(segment_1.f_column__org_patternfly_extension_finder_ResolvedFinderSegment.m_identifier__java_lang_String(), identifier);
  })));
 }
 /** @nodts @return {ResolvedFinderSegment} */
 m_findItem__java_lang_String__org_patternfly_extension_finder_ResolvedFinderSegment(/** ?string */ identifier) {
  return this.m_findSegment__java_util_function_Predicate__org_patternfly_extension_finder_ResolvedFinderSegment_$p_org_patternfly_extension_finder_ResolvedFinderPath(Predicate.$adapt(/**  @return {boolean}*/ ((/** ResolvedFinderSegment */ segment) =>{
   let segment_1 = /**@type {ResolvedFinderSegment}*/ ($Casts.$to(segment, ResolvedFinderSegment));
   return !$Equality.$same(segment_1.f_item__org_patternfly_extension_finder_ResolvedFinderSegment, null) && j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(segment_1.f_item__org_patternfly_extension_finder_ResolvedFinderSegment.m_identifier__java_lang_String(), identifier);
  })));
 }
 /** @nodts @return {FinderPath} */
 m_toFinderPath__org_patternfly_extension_finder_FinderPath() {
  return FinderPath.$create__java_util_List(/**@type {List<FinderSegment>}*/ ($Casts.$to((/**@type {Stream<FinderSegment>}*/ (this.f_segments__org_patternfly_extension_finder_ResolvedFinderPath_.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {FinderSegment}*/ ((/** ResolvedFinderSegment */ s) =>{
   let s_1 = /**@type {ResolvedFinderSegment}*/ ($Casts.$to(s, ResolvedFinderSegment));
   return FinderSegment.$create__java_lang_String__java_lang_String(s_1.f_column__org_patternfly_extension_finder_ResolvedFinderSegment.m_identifier__java_lang_String(), !$Equality.$same(s_1.f_item__org_patternfly_extension_finder_ResolvedFinderSegment, null) ? s_1.f_item__org_patternfly_extension_finder_ResolvedFinderSegment.m_identifier__java_lang_String() : null);
  }))))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<FinderSegment, *, List<FinderSegment>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List))));
 }
 /** @nodts @return {ResolvedFinderSegment} */
 m_findSegment__java_util_function_Predicate__org_patternfly_extension_finder_ResolvedFinderSegment_$p_org_patternfly_extension_finder_ResolvedFinderPath(/** Predicate<ResolvedFinderSegment> */ condition) {
  for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let segment = /**@type {ResolvedFinderSegment}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ResolvedFinderSegment));
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
 /** @override @nodts @return {Spliterator<ResolvedFinderSegment>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<ResolvedFinderSegment>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  ResolvedFinderPath.$clinit = () =>{};
  ResolvedFinderPath.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResolvedFinderPath;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  List = goog.module.get('java.util.List$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FinderPath = goog.module.get('org.patternfly.extension.finder.FinderPath$impl');
  FinderSegment = goog.module.get('org.patternfly.extension.finder.FinderSegment$impl');
  ResolvedFinderSegment = goog.module.get('org.patternfly.extension.finder.ResolvedFinderSegment$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterable.$markImplementor(ResolvedFinderPath);
$Util.$setClassMetadata(ResolvedFinderPath, 'org.patternfly.extension.finder.ResolvedFinderPath');

exports = ResolvedFinderPath;

//# sourceMappingURL=ResolvedFinderPath.js.map
