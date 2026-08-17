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
package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, name = "Set", namespace = JsPackage.GLOBAL)
public class JsSet<VALUE extends @Nullable Object>
    implements JsIterable<VALUE, @Nullable Object, @Nullable Object> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableUnionType<VALUE extends @Nullable Object> {
    @JsOverlay
    static <VALUE extends @Nullable Object> JsSet.@Nullable ConstructorIterableUnionType<VALUE> of(
        @Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable JsArray<VALUE> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable JsIterable<VALUE, @Nullable Object, @Nullable Object> asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }
  }

  @JsFunction
  public interface ForEachCallbackFn<VALUE extends @Nullable Object> {
    @Nullable Object onInvoke(VALUE p0, VALUE p1, JsSet<? extends VALUE> p2);
  }

  public int size;

  public JsSet() {}

  public JsSet(JsSet.@Nullable ConstructorIterableUnionType<VALUE> iterable) {}

  public JsSet(JsArray<VALUE> iterable) {}

  public JsSet(JsIterable<VALUE, @Nullable Object, @Nullable Object> iterable) {}

  public JsSet(VALUE[] iterable) {}

  public native JsSet<VALUE> add(VALUE value);

  public native void clear();

  public native boolean delete(VALUE value);

  public native JsIteratorIterable<JsArray<VALUE>, @Nullable Object, @Nullable Object> entries();

  public native <THIS extends @Nullable Object> @Nullable Object forEach(
      JsSet.ForEachCallbackFn<? super VALUE> callback, THIS thisArg);

  public native @Nullable Object forEach(JsSet.ForEachCallbackFn<? super VALUE> callback);

  public native boolean has(VALUE value);

  public native JsIteratorIterable<VALUE, @Nullable Object, @Nullable Object> keys();

  public native JsIteratorIterable<VALUE, @Nullable Object, @Nullable Object> values();
}
