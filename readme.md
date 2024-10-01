<img src="app-icon.png" width="300px" align="right">

# App Template for Angular Best Practices with DNN and 2sxc

| 2sxc                | ✅    | requires 2sxc v16.04
| Dnn                 | ✅    | For v9.6.1+
| Angular             | ✅    | For v18.0.0

## What is this?

If you wish to develop Angular within DNN, the initial setup can be challenging. This template App solves a bunch of problems for you, like:

1. develop on your local system with hot-reloading as you work
1. use DNN and 2sxc WebAPIs out-of-the box with all the right headers
1. multiple code editions, so you can test staging code on the production server, without interrupting users who see the live edition

## How to Install

The solution in as **2sxc App** and can be installed from 2sxc (inside DNN). Follow [these instructions](https://azing.org/2sxc/r/oCmPBI3p).

## Links

* App Tutorial Angular  [Github](https://github.com/2sic/app-template-angular) | [app catalog](https://2sxc.org/en/apps/app/tutorial-and-template-app-for-angular-11)
* Dnn-Sxc-Angular [npm](https://www.npmjs.com/package/@2sic.com/dnn-sxc-angular)
* Documentation [recipes & instructions on azing](https://azing.org/2sxc/l/VPE4Usua/angular-apps-development)

## History

* 2020-11-09
  * Updated shared code which extracts the generated index.html for DNN
* 2021-02-25
  * Improved razor code split
  * Using latest (v11) dnn-sxc-angular
  * Split examples into sub-module to make it easy to remove them
  * Extensive documentation of everything inside this
  * Edit-toolbars in the application
  * After edit a callback refreshes the data (instead of page reload)
  * Made data multi-language (English and German)
* 2022-07-08
  * Migration to Angular 14
  * dnn-sxc-angular replaced by new sxc-angular lib (v14.07.01)
  * Using latest (v14.07.03) 2sxc-typings
* v16.00.00 2023-10-04
  * Refactore Filename _
  * Migration to Angular 16
  * Update Readme
  * Refactore Name to Template-Angular
  * Update 2sxc v16 Standards Typed
* v17.00.00 2024-03-05
  * Migration to Angular 17
* v18.00.00 2024-10-01
  * Migration to Angular 18
