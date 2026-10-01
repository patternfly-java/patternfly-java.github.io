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
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class StylePropertyMapReadOnly {
  @JsFunction
  public interface ForEachCallbackFn {
    @JsOverlay
    default void onInvoke(CSSStyleValue[] p0, String p1, StylePropertyMapReadOnly p2) {
      onInvoke(Js.<JsArray<CSSStyleValue>>uncheckedCast(p0), p1, p2);
    }

    void onInvoke(JsArray<CSSStyleValue> p0, String p1, StylePropertyMapReadOnly p2);
  }

  public double size;

  public native @Nullable Object forEach(
      StylePropertyMapReadOnly.ForEachCallbackFn callbackfn, @Nullable Object thisArg);

  public native @Nullable Object forEach(StylePropertyMapReadOnly.ForEachCallbackFn callbackfn);

  public native @Nullable CSSStyleValue get(String property);

  public native JsArray<CSSStyleValue> getAll(String property);

  public native boolean has(String property);
}
