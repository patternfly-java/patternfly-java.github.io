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
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Navigator implements NavigatorBadge, NavigatorStorage {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface RegisterProtocolHandlerUrlUnionType {
    @JsOverlay
    static Navigator.RegisterProtocolHandlerUrlUnionType of(Object o) {
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
  public interface UnregisterProtocolHandlerUrlUnionType {
    @JsOverlay
    static Navigator.UnregisterProtocolHandlerUrlUnionType of(Object o) {
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

  public String appCodeName;
  public String appName;
  public String appVersion;
  public Clipboard clipboard;
  public boolean cookieEnabled;
  public double deviceMemory;
  public @Nullable Geolocation geolocation;
  public int hardwareConcurrency;
  public String language;
  public JsArray<String> languages;
  public int maxTouchPoints;
  public MediaDevices mediaDevices;
  public MimeTypeArray mimeTypes;
  public boolean onLine;
  public boolean pdfViewerEnabled;
  public @Nullable Permissions permissions;
  public String platform;
  public PluginArray plugins;
  public boolean pointerEnabled;
  public String product;
  public ServiceWorkerContainer serviceWorker;
  public StorageManager storage;
  public @Nullable UserActivation userActivation;
  public String userAgent;
  public boolean webdriver;

  public native boolean canShare();

  public native boolean canShare(ShareData data);

  public native @Nullable Promise<Void> clearAppBadge();

  public native Promise<BatteryManager> getBattery();

  @JsProperty
  public native StorageManager getStorage();

  public native boolean javaEnabled();

  public native void registerContentHandler(String mimeType, String url, String title);

  public native void registerProtocolHandler(
      String scheme, Navigator.RegisterProtocolHandlerUrlUnionType url, String title);

  @JsOverlay
  public final void registerProtocolHandler(String scheme, String url, String title) {
    registerProtocolHandler(
        scheme, Js.<Navigator.RegisterProtocolHandlerUrlUnionType>uncheckedCast(url), title);
  }

  @JsOverlay
  public final void registerProtocolHandler(String scheme, URL url, String title) {
    registerProtocolHandler(
        scheme, Js.<Navigator.RegisterProtocolHandlerUrlUnionType>uncheckedCast(url), title);
  }

  public native Promise<MediaKeySystemAccess> requestMediaKeySystemAccess(
      String keySystem, JsArray<MediaKeySystemConfiguration> supportedConfigurations);

  @JsOverlay
  public final Promise<MediaKeySystemAccess> requestMediaKeySystemAccess(
      String keySystem, MediaKeySystemConfiguration[] supportedConfigurations) {
    return requestMediaKeySystemAccess(
        keySystem, Js.<JsArray<MediaKeySystemConfiguration>>uncheckedCast(supportedConfigurations));
  }

  public native @Nullable Promise<Void> setAppBadge();

  public native @Nullable Promise<Void> setAppBadge(double contents);

  @JsProperty
  public native void setStorage(StorageManager storage);

  public native Promise<Void> share();

  public native Promise<Void> share(ShareData data);

  public native boolean taintEnabled();

  public native void unregisterContentHandler(String mimeType, String url);

  @JsOverlay
  public final void unregisterProtocolHandler(String scheme, String url) {
    unregisterProtocolHandler(
        scheme, Js.<Navigator.UnregisterProtocolHandlerUrlUnionType>uncheckedCast(url));
  }

  @JsOverlay
  public final void unregisterProtocolHandler(String scheme, URL url) {
    unregisterProtocolHandler(
        scheme, Js.<Navigator.UnregisterProtocolHandlerUrlUnionType>uncheckedCast(url));
  }

  public native void unregisterProtocolHandler(
      String scheme, Navigator.UnregisterProtocolHandlerUrlUnionType url);
}
