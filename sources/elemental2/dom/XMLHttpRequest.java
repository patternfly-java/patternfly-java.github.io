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
import elemental2.core.JsObject;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class XMLHttpRequest implements EventTarget {
  @JsFunction
  public interface OnabortFn {
    void onInvoke(ProgressEvent p0);
  }

  @JsFunction
  public interface OnerrorFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnloadFn {
    void onInvoke(ProgressEvent p0);
  }

  @JsFunction
  public interface OnloadendFn {
    void onInvoke(ProgressEvent p0);
  }

  @JsFunction
  public interface OnloadstartFn {
    void onInvoke(ProgressEvent p0);
  }

  @JsFunction
  public interface OnprogressFn {
    void onInvoke(ProgressEvent p0);
  }

  @JsFunction
  public interface OnreadystatechangeFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OntimeoutFn {
    void onInvoke(ProgressEvent p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface OpenUrlUnionType {
    @JsOverlay
    static XMLHttpRequest.OpenUrlUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default URL asURL() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isURL() {
      return (Object) this instanceof URL;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ResponseUnionType {
    @JsOverlay
    static XMLHttpRequest.@Nullable ResponseUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable JsObject asJsObject() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsObject() {
      return (Object) this instanceof JsObject;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SendDataUnionType {
    @JsOverlay
    static XMLHttpRequest.@Nullable SendDataUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable Blob asBlob() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable Document asDocument() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable FormData asFormData() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable String asString() {
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
    default boolean isDocument() {
      return (Object) this instanceof Document;
    }

    @JsOverlay
    default boolean isFormData() {
      return (Object) this instanceof FormData;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsOverlay public static final int DONE = XMLHttpRequest__Constants.DONE;
  @JsOverlay public static final int HEADERS_RECEIVED = XMLHttpRequest__Constants.HEADERS_RECEIVED;
  @JsOverlay public static final int LOADING = XMLHttpRequest__Constants.LOADING;
  @JsOverlay public static final int OPENED = XMLHttpRequest__Constants.OPENED;
  @JsOverlay public static final int UNSENT = XMLHttpRequest__Constants.UNSENT;
  public @Nullable ArrayBuffer mozResponseArrayBuffer;
  public XMLHttpRequest.@Nullable OnabortFn onabort;
  public XMLHttpRequest.@Nullable OnerrorFn onerror;
  public XMLHttpRequest.@Nullable OnloadFn onload;
  public XMLHttpRequest.@Nullable OnloadendFn onloadend;
  public XMLHttpRequest.@Nullable OnloadstartFn onloadstart;
  public XMLHttpRequest.@Nullable OnprogressFn onprogress;
  public XMLHttpRequest.@Nullable OnreadystatechangeFn onreadystatechange;
  public XMLHttpRequest.@Nullable OntimeoutFn ontimeout;
  public int readyState;
  public XMLHttpRequest.@Nullable ResponseUnionType response;
  public String responseText;
  public String responseType;
  public String responseURL;
  public @Nullable Document responseXML;
  public int status;
  public String statusText;
  public int timeout;
  public @Nullable XMLHttpRequestUpload upload;
  public boolean withCredentials;

  public native void abort();

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native boolean dispatchEvent(Event evt);

  public native String getAllResponseHeaders();

  public native @Nullable String getResponseHeader(String header);

  public native void open(
      String method,
      XMLHttpRequest.OpenUrlUnionType url,
      @Nullable Boolean async,
      @Nullable String user,
      @Nullable String password);

  public native void open(
      String method,
      XMLHttpRequest.OpenUrlUnionType url,
      @Nullable Boolean async,
      @Nullable String user);

  public native void open(
      String method, XMLHttpRequest.OpenUrlUnionType url, @Nullable Boolean async);

  public native void open(String method, XMLHttpRequest.OpenUrlUnionType url);

  @JsOverlay
  public final void open(
      String method,
      String url,
      @Nullable Boolean async,
      @Nullable String user,
      @Nullable String password) {
    open(method, Js.<XMLHttpRequest.OpenUrlUnionType>uncheckedCast(url), async, user, password);
  }

  @JsOverlay
  public final void open(
      String method, String url, @Nullable Boolean async, @Nullable String user) {
    open(method, Js.<XMLHttpRequest.OpenUrlUnionType>uncheckedCast(url), async, user);
  }

  @JsOverlay
  public final void open(String method, String url, @Nullable Boolean async) {
    open(method, Js.<XMLHttpRequest.OpenUrlUnionType>uncheckedCast(url), async);
  }

  @JsOverlay
  public final void open(String method, String url) {
    open(method, Js.<XMLHttpRequest.OpenUrlUnionType>uncheckedCast(url));
  }

  @JsOverlay
  public final void open(
      String method,
      URL url,
      @Nullable Boolean async,
      @Nullable String user,
      @Nullable String password) {
    open(method, Js.<XMLHttpRequest.OpenUrlUnionType>uncheckedCast(url), async, user, password);
  }

  @JsOverlay
  public final void open(String method, URL url, @Nullable Boolean async, @Nullable String user) {
    open(method, Js.<XMLHttpRequest.OpenUrlUnionType>uncheckedCast(url), async, user);
  }

  @JsOverlay
  public final void open(String method, URL url, @Nullable Boolean async) {
    open(method, Js.<XMLHttpRequest.OpenUrlUnionType>uncheckedCast(url), async);
  }

  @JsOverlay
  public final void open(String method, URL url) {
    open(method, Js.<XMLHttpRequest.OpenUrlUnionType>uncheckedCast(url));
  }

  public native void overrideMimeType(String mimeType);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native void send();

  @JsOverlay
  public final void send(ArrayBuffer data) {
    send(Js.<XMLHttpRequest.@Nullable SendDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  public final void send(ArrayBufferView data) {
    send(Js.<XMLHttpRequest.@Nullable SendDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  public final void send(Blob data) {
    send(Js.<XMLHttpRequest.@Nullable SendDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  public final void send(Document data) {
    send(Js.<XMLHttpRequest.@Nullable SendDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  public final void send(FormData data) {
    send(Js.<XMLHttpRequest.@Nullable SendDataUnionType>uncheckedCast(data));
  }

  public native void send(XMLHttpRequest.@Nullable SendDataUnionType data);

  @JsOverlay
  public final void send(String data) {
    send(Js.<XMLHttpRequest.@Nullable SendDataUnionType>uncheckedCast(data));
  }

  public native void setAttributionReporting();

  public native void setAttributionReporting(AttributionReportingRequestOptions options);

  public native void setRequestHeader(String header, String value);
}
