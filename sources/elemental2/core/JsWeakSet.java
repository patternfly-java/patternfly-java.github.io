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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, name = "WeakSet", namespace = JsPackage.GLOBAL)
public class JsWeakSet<VALUE extends @Nullable Object> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableUnionType<VALUE extends @Nullable Object> {
    @JsOverlay
    static <VALUE extends @Nullable Object>
        JsWeakSet.@Nullable ConstructorIterableUnionType<VALUE> of(@Nullable Object o) {
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

  public JsWeakSet() {}

  public JsWeakSet(JsWeakSet.@Nullable ConstructorIterableUnionType<VALUE> iterable) {}

  public JsWeakSet(JsArray<VALUE> iterable) {}

  public JsWeakSet(JsIterable<VALUE, @Nullable Object, @Nullable Object> iterable) {}

  public JsWeakSet(VALUE[] iterable) {}

  public native JsWeakSet<VALUE> add(VALUE value);

  public native void clear();

  public native boolean delete(VALUE value);

  public native boolean has(VALUE value);
}
