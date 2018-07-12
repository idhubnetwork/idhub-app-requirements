# 创建身分

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

需求:

* 引导用户执行任务交互，完成身分创建程序

方式:
* 自动生成地址 [v0.1]
* 导入自备地址 [v0.2]

## 啟動畫面

需求:

* 启动移动应用程序时显示的屏幕
* 引导用户执行任务交互

画面:

![The splash screen](/docs/assets/screen-splash.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
Logo |  |  | | 
Content title | 区块链数字身份 |  |  | 
Button |  | 开始 | | 

## 产生地址

需求:

* 提供无自备地址用户产生地址，取得 IDHub 数字身分

### 产生地址说明

画面:

![generated address](/docs/assets/screen-generated-ethereum-address.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
状态列 | 生成以太坊地址 | | |
Content title | 创建你的数字身份 | | |
Content paragraph | 你可以直接使用自动生成的以太坊地址或者导入已经拥有的以太坊地址！ | | |
Button | 生成 | | Buttin |

### 自动产生地址画面

![generated address](/docs/assets/screen-generated-ethereum-address-success.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
状态列 | 生成以太坊地址 | | |
Content title | 已自动生成以太坊地址 | | |
Content paragraph | 你可以直接使用已经自动生成的下列以太坊地址！ | | |
Owner ID | 0x12345…1111 | | |
Recovery ID | 0x12345…2222 | | |
Button | 下一步 | | Buttin |

### 身分合约画面

![generated address](/docs/assets/screen-create-contract.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
状态列 | 创建合约 | | |
Content title | 创建身份合约 | | |
Content paragraph | 即将根据你提供的数据创建一份属于你的数字身份智能合约！ | | |
Button | 下一步 | | Buttin |

### 创建用户名画面

![generated address](/docs/assets/screen-create-account-01.png)
![generated address](/docs/assets/screen-create-account-02.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
状态列 | 创建账户 | | |
Content title | 创建你的第一个区块链数字身份账户 | | |
Content paragraph | 轻松管理你的以太坊钱包和区块链数字身份！| | |
Input | 请输入你的昵称 | | Input | 验证格式
Button | 创建账户 | | Buttin | 符合格式 ? Enable : Disable

### 创建密码

需求:

* 提供用户创建密码

画面:

![Create password](/docs/assets/screen-creat-password.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
状态列 | 设置加密密码 | | |
Content title| 密码用于保护私钥和交易授权，强度对于你的数字身份非常重要！ | | |
Content paragraph | IDhub不存储密码也无法帮你找回，请务必牢记！ | | |
Input 1 | 请输入密码 | text | Input |
Input 2 | 请重复输入密码 | password | Input |
Input 3 | 密码提示信息 | text | Input |
Button | 下一步 | | Buttin |

### 输入提示

画面:

![Create password](/docs/assets/screen-creat-password--pw-tip.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
Tip | 至少8个字符，建议混合使用大小写字母，数字和特殊字符   | | |

### 密码提示

![Create password](/docs/assets/screen-creat-password--repeat-pw.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
切换密码显示/隐藏 | ![Icon](/docs/assets/icon-eye.png) | | Icon | 点击 Icon 切换
Button | 下一步 | | Buttin | 验证栏位符合 ? Enable : Disable

## 欢迎与感谢用户

需求: 

* 在用戶創建帳戶后，告知成功与感谢用户使用。
* 在用戶創建帳戶后，谢用户使用。

画面:

![generated address](/docs/assets/screen-welcome.png)

栏位:

栏位 | 实例 | 初始值 | 类型 | 规则与描述
------------- | ------------- | ------------- | ------------- | -------------
状态列 | 成功创建 |  | | 
Header | 恭喜 |  |  | 
Content | 现在你可以使用IDHub数字身份了！ |  |  | 
Button |  | 完成 | | 

## First Experience [V0.2]
