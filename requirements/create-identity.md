[ReadMe](../README.md) / [需求規格](../requirements.md) / 创建身分 Create Identity

# 创建身分 Create Identity

## <a name="create-id">身份创建</a>

身分为实体(用户)的一个密码身份标识和属性子集的组合。 
身份可能有多个密码身份标识，但其中一个必须是主密钥，与此身份标识相关联，并且不与其他身份标识相关联。
因此，标识可以表示为由其主要身份标识索引的数据库中的数据结构或记录。 每个实体必须至少有一个身份。 由于密码学，身份可以保密。 如果一个密码被多次使用，它本质上是一个假名，用于解决一个未知的身份（但可能与某些已知的属性）。 一次加密提供完全匿名，但可以有其他机制使用现代密码提供匿名。

IDHub 应提供创建帐号功能，称之 IDHub 帐号，作为后续服务扩展使用。
帐号必须取得用户部分信息，如用户如以太地址、行动电话、EMAIL、帐号名称或用户昵称，用以识别。
透过验证机制，初步确保 IDHub 帐号所有者为 IDHub 帐户创建者，如:使用行动电话与EMAIL验证。
使用 IDHub 帐号，通过应用可导入自备地址或使用应用创建一以太地址，作为创建身分使用，称为 IDHub 身分。
用户即可透利用该身分作与其他身分产生交互，其内容可能包含身分标示、证书、令牌、能力、行为、属性、信誉、生物识别...等。

身份创建  | 描述  | 必要
------------- | ------------- | -------------
创建  | <ol><li>调用 Identity Contract 布署 Proxy Contract</li><li>Proxy Contract Add 等于身分</li><li>Owner key 拥有此身分</li><li>Owner key 相当是一个密码</li> | <ul><li>OWNER KEY</li><li>RECOVRY KEY</li></ul>

用户需求:

* 需求:
	* 引导用户执行任务交互，完成身分创建程序
	* 任务:
		* 创建 ID
			* 方式
				* 自动生成地址
				* 导入自备地址

* 画面:
	* [Splash](splash.md)
	* [产生地址 Generted address](generted-address.md)
	* [创建密码 Create seed Password](create-password.md)
	* [欢迎与感谢用户 Welcome](welcome.md)
	* First Experience [Next Version]

[ReadMe](../README.md) / [需求規格](../requirements.md) / 创建身分 Create Identity