/*
 * @Description: 和测试相关的测试入口文件
 * @Author: liaoshanggang
 * @Date: 2019-08-18 18:25:33
 * @Last Modified by: liaoshanggang
 * @Last Modified time: 2019-08-18 18:26:50
 */

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
