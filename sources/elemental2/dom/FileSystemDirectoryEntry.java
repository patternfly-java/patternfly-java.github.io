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
public class FileSystemDirectoryEntry extends FileSystemEntry {
  @JsFunction
  public interface GetDirectoryErrorCallbackFn {
    @Nullable Object onInvoke(DOMException p0);
  }

  @JsFunction
  public interface GetDirectorySuccessCallbackFn {
    @Nullable Object onInvoke(FileSystemDirectoryEntry p0);
  }

  @JsFunction
  public interface GetFileErrorCallbackFn {
    @Nullable Object onInvoke(DOMException p0);
  }

  @JsFunction
  public interface GetFileSuccessCallbackFn {
    @Nullable Object onInvoke(FileSystemFileEntry p0);
  }

  public native FileSystemDirectoryReader createReader();

  public native void getDirectory();

  public native void getDirectory(
      @Nullable String path,
      FileSystemFlags options,
      FileSystemDirectoryEntry.GetDirectorySuccessCallbackFn successCallback,
      FileSystemDirectoryEntry.GetDirectoryErrorCallbackFn errorCallback);

  public native void getDirectory(
      @Nullable String path,
      FileSystemFlags options,
      FileSystemDirectoryEntry.GetDirectorySuccessCallbackFn successCallback);

  public native void getDirectory(@Nullable String path, FileSystemFlags options);

  public native void getDirectory(@Nullable String path);

  public native void getFile();

  public native void getFile(
      @Nullable String path,
      FileSystemFlags options,
      FileSystemDirectoryEntry.GetFileSuccessCallbackFn successCallback,
      FileSystemDirectoryEntry.GetFileErrorCallbackFn errorCallback);

  public native void getFile(
      @Nullable String path,
      FileSystemFlags options,
      FileSystemDirectoryEntry.GetFileSuccessCallbackFn successCallback);

  public native void getFile(@Nullable String path, FileSystemFlags options);

  public native void getFile(@Nullable String path);
}
