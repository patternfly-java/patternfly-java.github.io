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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ReadonlyMap<K extends @Nullable Object, V extends @Nullable Object>
    extends JsIterable<
        JsArray<ReadonlyMap.JsIterableTypeParameterArrayUnionType<K, V>>,
        @Nullable Object,
        @Nullable Object> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EntriesJsIteratorIterableTypeParameterArrayUnionType<
      K extends @Nullable Object, V extends @Nullable Object> {
    @JsOverlay
    static <K extends @Nullable Object, V extends @Nullable Object>
        ReadonlyMap.EntriesJsIteratorIterableTypeParameterArrayUnionType<K, V> of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default K asK() {
      return Js.cast(this);
    }

    @JsOverlay
    default V asV() {
      return Js.cast(this);
    }
  }

  @JsFunction
  public interface ForEachCallbackFn<K extends @Nullable Object, V extends @Nullable Object> {
    @Nullable Object onInvoke(V p0, K p1);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface JsIterableTypeParameterArrayUnionType<
      K extends @Nullable Object, V extends @Nullable Object> {
    @JsOverlay
    static <K extends @Nullable Object, V extends @Nullable Object>
        ReadonlyMap.JsIterableTypeParameterArrayUnionType<K, V> of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default K asK() {
      return Js.cast(this);
    }

    @JsOverlay
    default V asV() {
      return Js.cast(this);
    }
  }

  JsIteratorIterable<
          JsArray<ReadonlyMap.EntriesJsIteratorIterableTypeParameterArrayUnionType<K, V>>,
          @Nullable Object,
          @Nullable Object>
      entries();

  <THIS extends @Nullable Object> void forEach(
      ReadonlyMap.ForEachCallbackFn<? super K, ? super V> callback, THIS thisArg);

  void forEach(ReadonlyMap.ForEachCallbackFn<? super K, ? super V> callback);

  V get(K key);

  @JsProperty
  double getSize();

  boolean has(K key);

  JsIteratorIterable<K, @Nullable Object, @Nullable Object> keys();

  JsIteratorIterable<V, @Nullable Object, @Nullable Object> values();
}
