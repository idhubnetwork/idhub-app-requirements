[ReadMe](../README.md) / [需求規格](../requirements.md) / [Wallet 钱包](wallet.md) / 转帐

# <a name="send">转帐</a>

* 画面：
	* 预设
	
	![转帐 Screenshot](../assets/screen-wallet-cryptocoin-send.png)
	
	* 模拟输入
	
	![转帐 Screenshot](../assets/screen-wallet-cryptocoin-send--keying.png)

* 需求
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
	* 用户可以[切换转出资产](wallet_select-asset.md)
	* 用户可以通过二維碼扫描转入信息

* 栏位

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
Assets | 10.00ETH | Select |  | 选择资产与显示馀额
Form | JJ Hung | JJ Hung #{地址} |  | 带入该资产钱包地址，如切换钱包，Assets 变更为 Select
To | 0x71BcF650425e4B11657f76FE87AE10731F8ddd6F | Enter(Paste) wallet address |  | 点击，触发取消扫描
Amount | 20.00 ETH | 0.00 #{ETH} | 文字按钮 | 点击，触发扫描
Mining | ![slider Screenshot](../assets/slider.png) |  | Slider | 系统带入建议值作为预设值，小于预设值 Slow 文字变为系统主色，大于预设值 Fast 文字变为系统主色

[ReadMe](../README.md) / [需求規格](../requirements.md) / [Wallet 钱包](wallet.md) / 转帐