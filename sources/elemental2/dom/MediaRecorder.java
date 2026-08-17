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

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MediaRecorder implements EventTarget {
  @JsFunction
  public interface OndataavailableFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnerrorFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnpauseFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnresumeFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnstartFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnstopFn {
    @Nullable Object onInvoke(Event p0);
  }

  public static native boolean isTypeSupported(String type);

  public int audioBitsPerSecond;
  public String mimeType;
  public MediaRecorder.OndataavailableFn ondataavailable;
  public MediaRecorder.OnerrorFn onerror;
  public MediaRecorder.OnpauseFn onpause;
  public MediaRecorder.OnresumeFn onresume;
  public MediaRecorder.OnstartFn onstart;
  public MediaRecorder.OnstopFn onstop;
  public String state;
  public MediaStream stream;
  public int videoBitsPerSecond;

  public MediaRecorder(MediaStream stream, @Nullable MediaRecorderOptions options) {}

  public MediaRecorder(MediaStream stream) {}

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType useCapture);

  public native void addEventListener(String type, EventListener listener);

  public native boolean dispatchEvent(Event evt);

  public native void pause();

  public native void removeEventListener(
      String type,
      EventListener listener,
      EventTarget.RemoveEventListenerOptionsUnionType useCapture);

  public native void removeEventListener(String type, EventListener listener);

  public native void requestData();

  public native void resume();

  public native @Nullable Object start();

  public native @Nullable Object start(int timeslice);

  public native void stop();
}
