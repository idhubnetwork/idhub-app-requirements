[ReadMe](../README.md) / [需求規格](../requirements.md) / [Wallet 钱包](wallet.md) / 钱包清单

# <a name="wallet-list">钱包清单</a>

钱包清单画面

* 钱包资产清单画面

  ![钱包清单 Screenshot](/docs/assets/screen-wallet-list-item__assets-item-list.png)

* 钱包资产清单画面初始状态

  ![钱包清单 Screenshot](/docs/assets/screen-wallet-list-item__assets--default.png)

* 钱包资产历史清单画面初始状态

  ![钱包清单 Screenshot](/docs/assets/screen-wallet-list-item__history--empty.png)

* 需求
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

* 功能
  * 资产总览元件
  * 资产项目元件
  * 钱包历史
  * 二維碼掃描

## <a name="wallet-item">资产总览元件</a>

![资产总览元件 Screenshot](/docs/assets/wallet-item--eth.png)

* 栏位
  * 钱包名称，如: `JJ Hung`
  * 钱包地址，如: `0x71B…ddd6F`
  * 钱包馀额，如: `≈$170.00`

* 功能
  * 复制地址

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
钱包名称 | JJ Hung |  | 任意字元 | 
钱包地址 | 0x71B…ddd6F |  |  | `前 4 码` + `...` + `后 5 码`
钱包馀额 | 900.00 | 0 | 数字 | 取至小数点第 2 位
钱包单位 | ETH | 0 | 字元 | 
收帐按钮 | Receive | | 文字按钮 | 点击触发
转帐按钮 | Send| | 文字按钮 | 点击触发

## <a name="assets-item">资产项目元件</a>

![资产总览元件 Screenshot](/docs/assets/wallets__assets-item-eth--emtpy.png)

* 栏位
  * 资产
    * 资产图标
    * 资产识别名称
    * 资产发行组织
    * 资产馀额
    * 资产估值
* 功能
  * 点击资产项目元件，进入资产详情画面

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
资产图标 | ![icon](/docs/assets/icon-eth.png) |  | 图像 | 
资产名称 | ETH |  | 任意字元 | 
发行组织 | Ethereum Fundaction |  |  | 
资产馀额 | 900.00 | 0 | 数字 | 取至小数点第 2 位
资产估值 | ≈¥0 | 0 | 字元 | 

## [钱包历史](wallet_history.md#list-history)

## [二維碼掃描 QRCode Scan](qrcode.md)


[ReadMe](../README.md) / [需求規格](../requirements.md) / [Wallet 钱包](wallet.md) / 钱包清单