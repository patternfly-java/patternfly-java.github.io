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
import elemental2.core.JsIteratorIterable;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class CustomStateSet {
  @JsFunction
  public interface ForEachCallbackFn {
    @Nullable Object onInvoke(String p0, String p1, @Nullable CustomStateSet p2);
  }

  public double size;

  public native void add(String value);

  public native void clear();

  public native boolean delete(String value);

  public native JsIteratorIterable<JsArray<String>, @Nullable Object, @Nullable Object> entries();

  public native @Nullable Object forEach(
      CustomStateSet.ForEachCallbackFn callback, CustomStateSet thisArg);

  public native @Nullable Object forEach(CustomStateSet.ForEachCallbackFn callback);

  public native boolean has(String value);

  public native JsIteratorIterable<String, @Nullable Object, @Nullable Object> keys();

  public native JsIteratorIterable<String, @Nullable Object, @Nullable Object> values();
}
