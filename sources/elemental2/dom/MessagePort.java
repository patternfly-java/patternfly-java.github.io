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
import elemental2.core.Transferable;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MessagePort implements Transferable, EventTarget {
  @JsFunction
  public interface OnmessageFn {
    void onInvoke(MessageEvent<@Nullable Object> p0);
  }

  @JsFunction
  public interface OnmessageerrorFn {
    void onInvoke(MessageEvent<@Nullable Object> p0);
  }

  public MessagePort.@Nullable OnmessageFn onmessage;
  public MessagePort.@Nullable OnmessageerrorFn onmessageerror;

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native void close();

  public native boolean dispatchEvent(Event evt);

  public native void postMessage(
      @Nullable Object message, @Nullable JsArray<Transferable> transfer);

  @JsOverlay
  public final void postMessage(@Nullable Object message, Transferable @Nullable [] transfer) {
    postMessage(message, Js.<@Nullable JsArray<Transferable>>uncheckedCast(transfer));
  }

  public native void postMessage(@Nullable Object message);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native void start();
}
