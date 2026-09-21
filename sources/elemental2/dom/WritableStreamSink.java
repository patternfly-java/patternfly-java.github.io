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
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface WritableStreamSink<VALUE extends @Nullable Object> {
  @JsFunction
  public interface AbortFn {
    IThenable<@Nullable Object> onInvoke(@Nullable Object p0);
  }

  @JsFunction
  public interface CloseFn {
    IThenable<@Nullable Object> onInvoke();
  }

  @JsFunction
  public interface StartFn {
    IThenable<@Nullable Object> onInvoke(WritableStreamDefaultController p0);
  }

  @JsFunction
  public interface WriteFn<VALUE extends @Nullable Object> {
    IThenable<@Nullable Object> onInvoke(VALUE p0, WritableStreamDefaultController p1);
  }

  @JsOverlay
  static <VALUE extends @Nullable Object> WritableStreamSink<VALUE> create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  WritableStreamSink.AbortFn getAbort();

  @JsProperty
  WritableStreamSink.CloseFn getClose();

  @JsProperty
  WritableStreamSink.StartFn getStart();

  @JsProperty
  WritableStreamSink.WriteFn<VALUE> getWrite();

  @JsProperty
  void setAbort(WritableStreamSink.AbortFn abort);

  @JsProperty
  void setClose(WritableStreamSink.CloseFn close);

  @JsProperty
  void setStart(WritableStreamSink.StartFn start);

  @JsProperty
  void setWrite(WritableStreamSink.WriteFn<? super VALUE> write);
}
