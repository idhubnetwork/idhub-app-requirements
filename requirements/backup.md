[ReadMe](../README.md) / [需求規格](../requirements.md) / [数字身分 Identity](identity.md) / 备份金钥 Backup

# 备份金钥 Backup

![备份金钥 Backup](screen-id-recovery-key.png)

* 需求

	* 提供用户导出

		* 应用自带地址1(Owner)、地址2(Recovery) 之助记词
		
		* 应用自带地址2(Recovery) 之私钥
	
	* 此任务非常重要，需在 UI 上强调，确保用户执行并完成该任务

* 栏位

	栏位 | 实例 | 初始值 | 类型 | 规则与描述
	------------- | ------------- | ------------- | ------------- | -------------
	Status bar | 身分金钥 | | |
	Content Title | 0x12345650425e4B11657f76FE87AE10731F8d3333 | | | identity 地址
	Content paragraph | 身分金钥为一组以太网路地址，如果您使用自动生成地址，请务必妥善保管您的金钥。您可以透过以下按钮导出註記詞與私鑰。 | | |
	Button | Export Mnemonic Phrase | | |
	Button paragraph | Export Private Key | | |


* [备份助记词与验证](phrase.md)
* [备份私钥与验证](private-key.md)

[ReadMe](../README.md) / [需求規格](../requirements.md) / [数字身分 Identity](identity.md) / 身分金钥