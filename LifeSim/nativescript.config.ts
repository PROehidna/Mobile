import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'plg.lifesim.ru',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig
