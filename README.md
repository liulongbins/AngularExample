
## 概要

1、前端框架简单搭建
##
2、根据demo实现页面展示
##

3、功能实现：搜索、重置、分页、菜单、下拉检索、面包屑导航
##

4、项目结构：
	数据类型的简单封装（class）、
	功能性组件封装（components）、
	展示组件封装(pages)、
	服务接口请求封装（services）并且进行了简单的错误处理以及信息展示、
	搭建memory服务拦截请求进行简单的mock数据测试（mock）、
	appmodule、routingmodule
##
5、问题：
###
	1、memory拦截请求模拟数据功能较为单一，测试实现较为片面
###

	2、接口错误处理未进行提取组件
###

	3、数据封装不够全面
###

	4、memory拦截请求将antd 静态资源请求拦截，menu 图标被拦截，不影响实际项目使用，仅对测试demo有影响。
##

# TestTianze

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
