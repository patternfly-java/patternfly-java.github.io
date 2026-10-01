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

import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class AsyncDisposableStack {
  @JsFunction
  public interface AdoptOnDisposeFn<T extends @Nullable Object> {
    Promise<Void> onInvoke(T p0);
  }

  @JsFunction
  public interface DeferOnDisposeFn {
    Promise<Void> onInvoke();
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface UseDisposableUnionType {
    @JsOverlay
    static AsyncDisposableStack.@Nullable UseDisposableUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable AsyncDisposable asAsyncDisposable() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable Disposable asDisposable() {
      return Js.cast(this);
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface UseUnionType {
    @JsOverlay
    static AsyncDisposableStack.@Nullable UseUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable AsyncDisposable asAsyncDisposable() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable Disposable asDisposable() {
      return Js.cast(this);
    }
  }

  public boolean disposed;

  public native <T extends @Nullable Object> T adopt(
      T value, AsyncDisposableStack.AdoptOnDisposeFn<? super T> onDispose);

  public native void defer(AsyncDisposableStack.DeferOnDisposeFn onDispose);

  public native Promise<Void> disposeAsync();

  public native AsyncDisposableStack move();

  @JsOverlay
  public final AsyncDisposableStack.@Nullable UseUnionType use(AsyncDisposable disposable) {
    return use(Js.<AsyncDisposableStack.@Nullable UseDisposableUnionType>uncheckedCast(disposable));
  }

  @JsOverlay
  public final AsyncDisposableStack.@Nullable UseUnionType use(Disposable disposable) {
    return use(Js.<AsyncDisposableStack.@Nullable UseDisposableUnionType>uncheckedCast(disposable));
  }

  public native AsyncDisposableStack.@Nullable UseUnionType use(
      AsyncDisposableStack.@Nullable UseDisposableUnionType disposable);
}
