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

import elemental2.promise.IThenable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ReadableStreamSource<VALUE extends @Nullable Object> {
  @JsFunction
  public interface CancelFn {
    Promise<Void> onInvoke(@Nullable Object p0);
  }

  @JsFunction
  public interface PullFn<VALUE extends @Nullable Object> {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface P0UnionType<VALUE extends @Nullable Object> {
      @JsOverlay
      static <VALUE extends @Nullable Object> ReadableStreamSource.PullFn.P0UnionType<VALUE> of(
          Object o) {
        return Js.cast(o);
      }

      @JsOverlay
      default ReadableByteStreamController asReadableByteStreamController() {
        return Js.cast(this);
      }

      @JsOverlay
      default ReadableStreamDefaultController<VALUE> asReadableStreamDefaultController() {
        return Js.cast(this);
      }
    }

    IThenable<@Nullable Object> onInvoke(ReadableStreamSource.PullFn.P0UnionType<VALUE> p0);

    @JsOverlay
    default IThenable<@Nullable Object> onInvoke(ReadableByteStreamController p0) {
      return onInvoke(Js.<ReadableStreamSource.PullFn.P0UnionType<VALUE>>uncheckedCast(p0));
    }

    @JsOverlay
    default IThenable<@Nullable Object> onInvoke(ReadableStreamDefaultController<VALUE> p0) {
      return onInvoke(Js.<ReadableStreamSource.PullFn.P0UnionType<VALUE>>uncheckedCast(p0));
    }
  }

  @JsFunction
  public interface StartFn<VALUE extends @Nullable Object> {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface P0UnionType<VALUE extends @Nullable Object> {
      @JsOverlay
      static <VALUE extends @Nullable Object> ReadableStreamSource.StartFn.P0UnionType<VALUE> of(
          Object o) {
        return Js.cast(o);
      }

      @JsOverlay
      default ReadableByteStreamController asReadableByteStreamController() {
        return Js.cast(this);
      }

      @JsOverlay
      default ReadableStreamDefaultController<VALUE> asReadableStreamDefaultController() {
        return Js.cast(this);
      }
    }

    IThenable<@Nullable Object> onInvoke(ReadableStreamSource.StartFn.P0UnionType<VALUE> p0);

    @JsOverlay
    default IThenable<@Nullable Object> onInvoke(ReadableByteStreamController p0) {
      return onInvoke(Js.<ReadableStreamSource.StartFn.P0UnionType<VALUE>>uncheckedCast(p0));
    }

    @JsOverlay
    default IThenable<@Nullable Object> onInvoke(ReadableStreamDefaultController<VALUE> p0) {
      return onInvoke(Js.<ReadableStreamSource.StartFn.P0UnionType<VALUE>>uncheckedCast(p0));
    }
  }

  @JsOverlay
  static <VALUE extends @Nullable Object> ReadableStreamSource<VALUE> create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  int getAutoAllocateChunkSize();

  @JsProperty
  ReadableStreamSource.CancelFn getCancel();

  @JsProperty
  ReadableStreamSource.PullFn<VALUE> getPull();

  @JsProperty
  ReadableStreamSource.StartFn<VALUE> getStart();

  @JsProperty
  String getType();

  @JsProperty
  void setAutoAllocateChunkSize(int autoAllocateChunkSize);

  @JsProperty
  void setCancel(ReadableStreamSource.CancelFn cancel);

  @JsProperty
  void setPull(ReadableStreamSource.PullFn<? super VALUE> pull);

  @JsProperty
  void setStart(ReadableStreamSource.StartFn<? super VALUE> start);

  @JsProperty
  void setType(String type);
}
