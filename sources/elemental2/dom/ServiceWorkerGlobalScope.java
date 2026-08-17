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
public interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface NotificationFieldType {
    @JsOverlay
    static ServiceWorkerGlobalScope.NotificationFieldType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    double getMaxActions();

    @JsProperty
    String getPermission();

    @JsProperty
    void setMaxActions(double maxActions);

    @JsProperty
    void setPermission(String permission);
  }

  @JsFunction
  public interface OnactivateFn {
    @Nullable Object onInvoke(ExtendableEvent p0);
  }

  @JsFunction
  public interface OnbeforeevictedFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnevictedFn {
    @Nullable Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnfetchFn {
    @Nullable Object onInvoke(FetchEvent p0);
  }

  @JsFunction
  public interface OninstallFn {
    @Nullable Object onInvoke(InstallEvent p0);
  }

  @JsFunction
  public interface OnmessageFn {
    @Nullable Object onInvoke(MessageEvent p0);
  }

  @JsProperty
  CacheStorage getCaches();

  @JsProperty
  ServiceWorkerClients getClients();

  @JsProperty
  Console getConsole();

  @JsProperty(name = "Notification")
  ServiceWorkerGlobalScope.NotificationFieldType getNotification();

  @JsProperty
  ServiceWorkerGlobalScope.@Nullable OnactivateFn getOnactivate();

  @JsProperty
  ServiceWorkerGlobalScope.@Nullable OnbeforeevictedFn getOnbeforeevicted();

  @JsProperty
  ServiceWorkerGlobalScope.@Nullable OnevictedFn getOnevicted();

  @JsProperty
  ServiceWorkerGlobalScope.@Nullable OnfetchFn getOnfetch();

  @JsProperty
  ServiceWorkerGlobalScope.@Nullable OninstallFn getOninstall();

  @JsProperty
  ServiceWorkerGlobalScope.@Nullable OnmessageFn getOnmessage();

  @JsProperty
  ServiceWorkerRegistration getRegistration();

  @JsProperty
  String getScope();

  @JsProperty
  Cache getScriptCache();

  @JsProperty
  void setCaches(CacheStorage caches);

  @JsProperty
  void setClients(ServiceWorkerClients clients);

  @JsProperty
  void setConsole(Console console);

  @JsProperty(name = "Notification")
  void setNotification(ServiceWorkerGlobalScope.NotificationFieldType Notification);

  @JsProperty
  void setOnactivate(ServiceWorkerGlobalScope.@Nullable OnactivateFn onactivate);

  @JsProperty
  void setOnbeforeevicted(ServiceWorkerGlobalScope.@Nullable OnbeforeevictedFn onbeforeevicted);

  @JsProperty
  void setOnevicted(ServiceWorkerGlobalScope.@Nullable OnevictedFn onevicted);

  @JsProperty
  void setOnfetch(ServiceWorkerGlobalScope.@Nullable OnfetchFn onfetch);

  @JsProperty
  void setOninstall(ServiceWorkerGlobalScope.@Nullable OninstallFn oninstall);

  @JsProperty
  void setOnmessage(ServiceWorkerGlobalScope.@Nullable OnmessageFn onmessage);

  @JsProperty
  void setRegistration(ServiceWorkerRegistration registration);

  @JsProperty
  void setScope(String scope);

  @JsProperty
  void setScriptCache(Cache scriptCache);

  Promise<Void> skipWaiting();
}
