package com.userinterface;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.mapbox.reactnativemapboxgl.ReactNativeMapboxGLPackage;//mapbox
import com.BV.LinearGradient.LinearGradientPackage;

import java.util.Arrays;
import java.util.List;

import com.microsoft.codepush.react.CodePush;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }


    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new CodePush("deployment-key-here", MainApplication.this, BuildConfig.DEBUG),
          new ReactNativeMapboxGLPackage(),
          new LinearGradientPackage()

      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }

}
