[ReadMe](../README.md) / [需求規格](../requirements.md) / [Wallet 钱包](wallet.md) / 收款

# <a name="receive">收帐</a>

* 收帐画面：

	![收款 Screenshot](../assets/screen-wallet-cryptocoin-receive.png)
	
	(Switch Assets 待移除)

* 需求
	* 提供用户收帐信息
		* 钱包名称显示
		* 钱包地址文字显示
		* 钱包地址文字复制
		* 钱包地址 QRcode 显示
		* 钱包地址 QRcode 画面截图
		* 金额
	* 用户可以[切换资产](wallet_select-asset.md)

* 栏位

	栏位 | 实例 | 初始值 | 类型 | 规则与描述
	------------- | ------------- | ------------- | ------------- | -------------
	资产所属钱包 QRCode | ![qrcode](../assets/wallet-qrcode.png) |  |  | 
	资产所属钱包名称 | JJ Hung |  | 字元 | 
	资产所属钱包地址 | 0x71BcF650425e4B11657f76FE87AE10731F8ddd6F |  | 字元 | 
	复制地址按钮 | ![qrcode](../assets/btn-copy-address.png) | Copy Address | 文字按钮 | 点击复制地址文字 
	导出地址按钮 | ![qrcode](../assets/icon-upload.png) |  | 按钮 | 点击导出截图，支持其他应用 
	金额 | 10.00 ETH | 0.00 ETH | | 填写完毕后重新生成 QRcode
	
[ReadMe](../README.md) / [需求規格](../requirements.md) / [Wallet 钱包](wallet.md) / 收款