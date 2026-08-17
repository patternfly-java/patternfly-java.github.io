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

import elemental2.core.ArrayBuffer;
import elemental2.core.ArrayBufferView;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCDataChannel extends EventTarget {
  @JsFunction
  public interface OnbufferedamountlowFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OncloseFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnclosingFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnerrorFn {
    @Nullable Object onInvoke(RTCErrorEvent p0);
  }

  @JsFunction
  public interface OnmessageFn {
    @Nullable Object onInvoke(MessageEvent<@Nullable Object> p0);
  }

  @JsFunction
  public interface OnopenFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SendDataUnionType {
    @JsOverlay
    static RTCDataChannel.SendDataUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default Blob asBlob() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }

    @JsOverlay
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @Nullable Object close();

  @JsProperty
  String getBinaryType();

  @JsProperty
  int getBufferedAmount();

  @JsProperty
  double getBufferedAmountLowThreshold();

  @JsProperty
  @Nullable Double getId();

  @JsProperty
  String getLabel();

  @JsProperty
  @Nullable Double getMaxPacketLifeTime();

  @JsProperty
  @Nullable Double getMaxRetransmits();

  @JsProperty
  RTCDataChannel.@Nullable OnbufferedamountlowFn getOnbufferedamountlow();

  @JsProperty
  RTCDataChannel.@Nullable OncloseFn getOnclose();

  @JsProperty
  RTCDataChannel.@Nullable OnclosingFn getOnclosing();

  @JsProperty
  RTCDataChannel.@Nullable OnerrorFn getOnerror();

  @JsProperty
  RTCDataChannel.@Nullable OnmessageFn getOnmessage();

  @JsProperty
  RTCDataChannel.@Nullable OnopenFn getOnopen();

  @JsProperty
  String getProtocol();

  @JsProperty
  String getReadyState();

  @JsProperty
  boolean isNegotiated();

  @JsProperty
  boolean isOrdered();

  @JsProperty
  boolean isReliable();

  @JsOverlay
  default void send(ArrayBuffer data) {
    send(Js.<RTCDataChannel.SendDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  default void send(ArrayBufferView data) {
    send(Js.<RTCDataChannel.SendDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  default void send(Blob data) {
    send(Js.<RTCDataChannel.SendDataUnionType>uncheckedCast(data));
  }

  void send(RTCDataChannel.SendDataUnionType data);

  @JsOverlay
  default void send(String data) {
    send(Js.<RTCDataChannel.SendDataUnionType>uncheckedCast(data));
  }

  @JsProperty
  void setBinaryType(String binaryType);

  @JsProperty
  void setBufferedAmountLowThreshold(double bufferedAmountLowThreshold);

  @JsProperty
  void setOnbufferedamountlow(RTCDataChannel.@Nullable OnbufferedamountlowFn onbufferedamountlow);

  @JsProperty
  void setOnclose(RTCDataChannel.@Nullable OncloseFn onclose);

  @JsProperty
  void setOnclosing(RTCDataChannel.@Nullable OnclosingFn onclosing);

  @JsProperty
  void setOnerror(RTCDataChannel.@Nullable OnerrorFn onerror);

  @JsProperty
  void setOnmessage(RTCDataChannel.@Nullable OnmessageFn onmessage);

  @JsProperty
  void setOnopen(RTCDataChannel.@Nullable OnopenFn onopen);

  @JsProperty
  void setReadyState(String readyState);
}
