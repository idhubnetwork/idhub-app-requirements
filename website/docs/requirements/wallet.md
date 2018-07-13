# 钱包

## 资产清单

需求:

* 用户透过介面，可检视该钱包信息
  * 地址
  * 资产总额
  * 估值
* 用户透过介面，可检视该钱包下资产清单
* 用户透过介面，可检视该钱包下资产信息
  * 识别名称
  * 识别图标
  * 资产发行组织
  * 馀额
  * 估值
* 用户透过介面，可检视该资产详细信息
* 用户可管理资产清单
* 用户可快速进行收帐
* 用户可快速进行转帐
* 支持 二維碼掃描

画面:

![钱包清单 Screenshot](/docs/assets/screen-wallet-list-item__assets-item-list.png)

#### 资产清单画面初始状态

![钱包清单 Screenshot](/docs/assets/screen-wallet-list-item__assets--default.png)

#### 资产历史清单画面初始状态

![钱包清单 Screenshot](/docs/assets/screen-wallet-list-item__history--empty.png)


栏位:

* [资产总览元件](#资产总览元件)

  ![资产总览元件 Screenshot](/docs/assets/wallet-item--eth.png)

* [资产项目元件](#资产项目元件)

  ![资产项目 Screenshot](/docs/assets/wallets__assets-item-eth--emtpy.png)

* [钱包历史元件](#钱包历史元件)

  ![历史元件 Screenshot](/docs/assets/wallet-history.png)

* [二維碼掃描](#二維碼掃描)

### 资产总览元件

![资产总览元件 Screenshot](/docs/assets/wallet-item--eth.png)

功能:

* 复制地址

栏位:

* 钱包名称，如: `JJ Hung`
* 钱包地址，如: `0x71B…ddd6F`
* 钱包馀额，如: `≈$170.00`

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
钱包名称 | JJ Hung |  | 任意字元 | 
钱包地址 | 0x71B…ddd6F |  |  | `前 4 码` + `...` + `后 5 码`
钱包馀额 | 900.00 | 0 | 数字 | 取至小数点第 2 位
钱包单位 | ETH | 0 | 字元 | 

### 资产项目元件

![资产总览元件 Screenshot](/docs/assets/wallets__assets-item-eth--emtpy.png)

功能:

* 点击资产项目元件，进入资产详情画面

栏位:

* 资产
  * 资产图标
  * 资产识别名称
  * 资产发行组织
  * 资产馀额
  * 资产估值

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
资产图标 | ![icon](/docs/assets/icon-eth.png) |  | 图像 | 
资产名称 | ETH |  | 任意字元 | 
发行组织 | Ethereum Fundation |  |  | 
资产馀额 | 900.00 | 0 | 数字 | 取至小数点第 2 位
资产估值 | ≈¥0 | 0 | 字元 | 
Button | 转账 |  |  | 
Button | 收款 |  |  | 

## 资产项目

需求:

* 用户透过介面，可检视该资产信息
  * 资产所属钱包名称
  * 资产所属钱包地址
  * 资产所属钱包 QRCode
  * 资产识别名称
  * 资产识别图标
  * 资产发行组织
  * 资产馀额
  * 资产估值
  * 资产转出、入历史
    * 分类
      * 全部
      * 转出
      * 转入
    * 状态
      * Padding
      * Failed
* 用户可快速进行收帐
* 用户可快速进行转帐
* 支持 二維碼掃描

功能:

* 触发收帐任务
* 触发转帐任务
* 二維碼掃描

资产项目画面:

![资产项目 Screenshot](/docs/assets/screen-wallet-assets-item-idhub.png)

资产项目初始画面(空):

![资产项目 Screenshot](/docs/assets/screen-wallet-assets-item-idhub--emtpy.png)

### 资产所属钱包元件

![资产项目 Screenshot](/docs/assets/wallets__assets-item-qrcode.png)

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
资产所属钱包 QRCode | ![qrcode](/docs/assets/wallet-qrcode.png) |  |  | 
资产所属钱包名称 | JJ Hung |  | 字元 | 
资产所属钱包地址 | 0x71BcF650425e4B11657f76FE87AE10731F8ddd6F |  | 字元 | 
Button | 转账 |  |  | 
Button | 收款 |  |  | 

## 转帐

画面:

* 预设

  ![转帐 Screenshot](/docs/assets/screen-wallet-cryptocoin-send.png)

* 模拟输入

  ![转帐 Screenshot](/docs/assets/screen-wallet-cryptocoin-send--keying.png)

需求:

* 提供用户转出资产
  * 必要信息
    * 转出钱包名称
    * 转入钱包
      * 输入地址
      * 选择联络人地址
    * 金额
      * 填入金额
    * Mining
* 用户可以切换转出钱包 [Next Version]
* 用户可以[切换转出资产](wallet#选择资产)
* 用户可以通过二維碼扫描转入信息

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
资产类型 | 10.00ETH | Select |  | 选择资产与显示馀额
支付地址 | JJ Hung | JJ Hung #{地址} |  | 带入该资产钱包地址，如切换钱包，Assets 变更为 Select
收款人钱包地址 | 0x71BcF650425e4B11657f76FE87AE10731F8ddd6F | Enter(Paste) wallet address |  | 点击，触发取消扫描
转账金额 | 20.00 ETH | 0.00 #{ETH} | 文字按钮 | 点击，触发扫描
矿工费用 | ![slider Screenshot](/docs/assets/slider.png) |  | Slider | 系统带入建议值作为预设值，小于预设值 Slow 文字变为系统主色，大于预设值 Fast 文字变为系统主色

## 收帐

收帐画面:

![收款 Screenshot](/docs/assets/screen-wallet-cryptocoin-receive.png)

需求:

* 提供用户收帐信息
  * 钱包名称显示
  * 钱包地址文字显示
  * 钱包地址文字复制
  * 钱包地址 QRcode 显示
  * 钱包地址 QRcode 画面截图
  * 金额
* 用户可以[切换资产](wallet#选择资产)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
资产所属钱包 QRCode | ![qrcode](/docs/assets/wallet-qrcode.png) |  |  | 
资产所属钱包名称 | JJ Hung |  | 字元 | 
资产所属钱包地址 | 0x71BcF650425e4B11657f76FE87AE10731F8ddd6F |  | 字元 | 
复制地址按钮 | ![qrcode](/docs/assets/btn-copy-address.png) | 复制收款地址 | 文字按钮 | 点击复制地址文字 
导出地址按钮 | ![qrcode](/docs/assets/icon-upload.png) |  | 按钮 | 点击导出截图，支持其他应用 
金额 | 10.00 ETH | 0.00 ETH | | 填写完毕后重新生成 QRcode

## 资产管理

画面:

![资产管理 Screenshot](/docs/assets/screen-wallet-list-item__assets-manage-2.png)

需求:
* 资产清单
* 提交资产
* 操作
  * 多选

* 规则
...

## 选择资产

画面:

![资产管理 Screenshot](/docs/assets/screen-wallet-select-asset-eth.png)
![资产管理 Screenshot](/docs/assets/screen-wallet-select-asset-idhub.png)

需求:

* 可用资产清单
* 操作
  * 单选

规则:

## 历史

资产历史元件:

![历史元件 Screenshot](/docs/assets/wallet-history.png)

需求:

* 用户透过介面可查阅交易历史
* 分类:
  * 全部
  * 转出
    * 状态:
      * Padding
      * Failed
  * 转入
    * 状态:
      * Padding
      * Failed
* 信息:
  * 交易地址
  * 交易时间
  * 交易金额 
  * 交易单位

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
分类 | 全部、收入、支出 |  | Tab | 
交易地址 | 0x71B…ddd6F |  | 任意字元 | 
交易时间 | 2018/06/05 08:34:21 |  | yyyy/mm/dd HH:MM:SS | 
交易金额 | 900.00 | 0 | 数字 | 转出(-) 转入(+)
交易单位 | ETH | | | 

### 总览历史

  显示所有钱包所有资产，依时间排序

### 钱包历史

  显示该钱包所有资产，依时间排序

### 资产历史

  显示该资产，依时间排序

## [二維碼掃描 QRCode Scan](qrcode)
