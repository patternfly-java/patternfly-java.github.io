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
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DisposableStack {
  @JsFunction
  public interface AdoptOnDisposeFn<T extends @Nullable Object> {
    @Nullable Object onInvoke(T p0);
  }

  @JsFunction
  public interface DeferOnDisposeFn {
    void onInvoke();
  }

  public boolean disposed;

  public native <T extends @Nullable Object> T adopt(
      T value, DisposableStack.AdoptOnDisposeFn<? super T> onDispose);

  public native void defer(DisposableStack.DeferOnDisposeFn onDispose);

  public native void dispose();

  public native DisposableStack move();

  public native @Nullable Disposable use(@Nullable Disposable disposable);
}
