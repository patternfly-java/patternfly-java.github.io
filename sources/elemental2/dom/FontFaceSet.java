/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import elemental2.core.JsArray;
import elemental2.core.JsObject;
import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface FontFaceSet extends EventTarget {
  @JsFunction
  public interface ForEachCallbackFn {
    @Nullable Object onInvoke(FontFace p0, double p1, FontFaceSet p2);
  }

  @JsFunction
  public interface OnloadingFn {
    @Nullable Object onInvoke(@Nullable Event p0);
  }

  @JsFunction
  public interface OnloadingdoneFn {
    @Nullable Object onInvoke(@Nullable Event p0);
  }

  @JsFunction
  public interface OnloadingerrorFn {
    @Nullable Object onInvoke(@Nullable Event p0);
  }

  void add(FontFace value);

  boolean check(String font, String text);

  boolean check(String font);

  void clear();

  void delete(FontFace value);

  void forEach(FontFaceSet.ForEachCallbackFn callback, @Nullable JsObject selfObj);

  @JsOverlay
  default void forEach(FontFaceSet.ForEachCallbackFn callback, @Nullable Object selfObj) {
    forEach(callback, Js.<@Nullable JsObject>uncheckedCast(selfObj));
  }

  void forEach(FontFaceSet.ForEachCallbackFn callback);

  @JsProperty
  FontFaceSet.@Nullable OnloadingFn getOnloading();

  @JsProperty
  FontFaceSet.@Nullable OnloadingdoneFn getOnloadingdone();

  @JsProperty
  FontFaceSet.@Nullable OnloadingerrorFn getOnloadingerror();

  @JsProperty
  Promise<FontFaceSet> getReady();

  @JsProperty
  String getStatus();

  boolean has(FontFace font);

  Promise<JsArray<FontFace>> load(String font, String text);

  Promise<JsArray<FontFace>> load(String font);

  @JsProperty
  void setOnloading(FontFaceSet.@Nullable OnloadingFn onloading);

  @JsProperty
  void setOnloadingdone(FontFaceSet.@Nullable OnloadingdoneFn onloadingdone);

  @JsProperty
  void setOnloadingerror(FontFaceSet.@Nullable OnloadingerrorFn onloadingerror);

  @JsProperty
  void setReady(Promise<FontFaceSet> ready);

  @JsProperty
  void setStatus(String status);
}
