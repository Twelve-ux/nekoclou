/**
 * 外部配置文件
 * index.html 中可以搜索 EZ 将其替换为您的网站名称
 * logo 摆放位置为 images/logo.png
 */

window.EZ_CONFIG = {
    // 面板类型配置 - 请选择您使用的面板类型
    PANEL_TYPE: 'Xboard', // 可选值: 'V2board', 'Xiao-V2board' 或 'Xboard'
    // 说明:
    // 1. V2board: 标准V2board面板，使用默认请求格式
    // 2. Xiao-V2board: Xiao修改版面板，使用特殊格式的请求参数
    // 3. Xboard: Xboard面板

    // =======================================================

    // API配置
    // 可使用以下选项来配置API基础URL:
    // 1. 静态URL: 直接指定API基础URL 末尾要加 /api/v1 !!!!!!!!!!!!!!! 除非你自己改过路由要不然别不加
    // 2. 自动获取: 从当前域名自动生成API基础URL
    API_CONFIG: {
        // API URL获取方式: 'static'=使用静态URL, 'auto'=自动从当前域名获取
        urlMode: 'static',
      
        // 是否展示后端联通性检测
        showCheckBackend: false,
      
        // 静态URL模式下的基础URL (urlMode = 'static'时使用)
        // 支持字符串形式(单个API地址)或数组形式(多个备选API地址)
        // 多个地址时，会按顺序检测可用性，并使用第一个可用的地址
        staticBaseUrl: [
            'https://dy.nekocloud.top/api/v1',
            'https://dy.nekocloud.top/api/v1'
        ],
      
        // 自动获取模式配置 (urlMode = 'auto'时使用)
        autoConfig: {
            // 是否使用相同协议 (http/https)
            useSameProtocol: true,

            // 是否拼接API路径
            appendApiPath: true,

            // API路径
            apiPath: '/api/v1'
        }
    },

    // 是否启用中间件代理API请求
    // 设置为true时，所有API请求将通过中间件转发
    API_MIDDLEWARE_ENABLED: false,
  
    //=======================================================
    API_MIDDLEWARE_URL: 'https://baidu.com',
  
    API_MIDDLEWARE_KEY: '65364313241',
    //=======================================================

    // 中间件路由前缀 (与中间件服务器配置保持一致)
    API_MIDDLEWARE_PATH: '/ez/ez',

    //=======================================================

    // ====================  网站基础配置  ====================
    SITE_CONFIG: {
        siteName: 'Neko Cloud',
        siteDescription: 'EZ UI',
        // copyright会自动使用当前年份
        copyright: `© ${new Date().getFullYear()} Neko Cloud. All Rights Reserved.`,

        // 是否显示标题中的网站Logo (true=显示, false=隐藏)
        showLogo: true,

        // Landing页面多语言标语
        landingText: {
            'zh-CN': 'Neko Cloud',
            'vi-VN': 'Khám phá khả năng vô hạn của mạng toàn cầu',
            'en-US': 'Explore Unlimited Possibilities of Global Network',
            'zh-TW': '探索全球網絡無限可能',
            'ja-JP': 'グローバルネットワークの無限の可能性',
            'ko-KR': '글로벌 네트워크의 무한한 가능성을 탐색하세요',
            'ru-RU': 'Исследуйте безграничные возможности глобальной сети',
            'fa-IR': 'امکانات نامحدود شبکه جهانی را کاوش کنید'
        },

        // 自定义landing页面路径（相对于public目录
        // 例如：'testlandingpage.html'
        // 如果为空则不启用自定义landing页面
        customLandingPage: 'testlandingpage.html'
    },

    // 默认语言和主题配置
    DEFAULT_CONFIG: {
        // 默认语言 ('zh-CN' 或 'en-US')
        defaultLanguage: 'zh-CN',

        // 默认主题 ('light' 或 'dark')
        defaultTheme: 'light',

        // 主题色 (16进制颜色值)
        primaryColor: '#F0C6D0',

        // 是否启用落地页 (true=启用, false=禁用)
        enableLandingPage: true // 默认启用
    },

    // 认证页面功能配置
    AUTH_CONFIG: {
        // 是否自动勾选同意条款复选框 (true=自动勾选, false=默认不勾选)
        autoAgreeTerms: true,

        // 验证码相关配置
        verificationCode: {
            // 是否在发送验证码后显示检查垃圾邮件的提示 (true=显示, false=不显示)
            showCheckSpamTip: true,

            // 显示检查垃圾邮件提示的延迟时间(毫秒)
            checkSpamTipDelay: 1000
        },

        // 认证页面弹窗公告配置
        popup: {
            // 是否启用弹窗
            enabled: false,

            // 弹窗标题
            title: "用户须知 (可自定义开启)",

            // 弹窗内容 (支持HTML)
            content: "<p><strong>欢迎使用我们的服务！</strong></p><p>请注意以下事项：</p><ul><li>请妥善保管您的账号信息</li><li>如有问题请联系客服</li></ul>",

            // 冷却时间（小时），在此时间内不会再次显示弹窗
            cooldownHours: 0,

            // 等待时间（秒），用户需要等待多少秒才能关闭弹窗，设为0表示无需等待
            closeWaitSeconds: 3
        }
    },

    // 认证页面布局配置
    AUTH_LAYOUT_CONFIG: {
        // 布局类型: 'center' 为居中卡片布局, 'split' 为左右分栏布局
        layoutType: 'center',

        // 左右分栏布局配置 (仅当 layoutType 为 'split' 时生效)
        splitLayout: {
            // 左侧区域内容配置
            leftContent: {
                // 左侧背景图片URL或路径 (如不设置则不设置图片背景)
                backgroundImage: 'https://www.loliapi.com/acg',

                // 左上角网站名称配置
                siteName: {
                    // 是否显示网站名称
                    show: true,
                    // 文字颜色 (white或black)
                    color: 'white'
                },

                // 左下角问候语配置
                greeting: {
                    // 是否显示问候语
                    show: true,
                    // 文字颜色 (white或black)
                    color: 'white'
                }
            }
        }
    },

    // 商店页面配置
    SHOP_CONFIG: {
        // 是否在商店导航上显示热销标记
        showHotSaleBadge: true,

        // 是否显示套餐特性卡片 (true=显示, false=隐藏)
        showPlanFeatureCards: true, // 默认显示

        // 是否自动选择周期最大的标签，设为false则不会自动选择
        autoSelectMaxPeriod: false, // 默认关闭

        // 是否隐藏周期选择标签 (true=隐藏, false=显示)
        hidePeriodTabs: false, // 默认显示周期选择标签

        // 库存紧张的阈值（当库存数量小于等于此值且大于0时显示库存紧张）
        lowStockThreshold: 5,

        // 是否启用周期折扣计算显示 (true=启用, false=禁用)
        enableDiscountCalculation: true, // 默认启用

        // 价格周期的显示顺序（从大到小）
        periodOrder: [
            'three_year_price', // 三年
            'two_year_price',   // 两年
            'year_price',       // 一年
            'half_year_price',  // 半年
            'quarter_price',    // 季度
            'month_price',      // 月付
            'onetime_price'     // 一次性
        ],

        // 商店弹窗配置
        popup: {
            // 是否启用弹窗
            enabled: false,

            // 弹窗标题
            title: "用户须知",

            // 弹窗内容 (支持HTML)
            content: "<p><strong>常规套餐默认每月订单日重置流量，您当月未用使用完的流量，不会累积到下个月</strong></p>",

            // 冷却时间（小时），在此时间内不会再次显示弹窗
            cooldownHours: 0,

            // 等待时间（秒），用户需要等待多少秒才能关闭弹窗，设为0表示无需等待
            closeWaitSeconds: 0
        }
    },
    ORDER_CONFIG: {
        // 下单前二次确认
        confirmOrder: false,
        // 下单前二次确认内容
        confirmOrderContent: "<p><strong style='color: red'>无法提供相关教程和使用说明。</strong></p><p><strong style='color: red'>不会使用请勿购买，没有退款政策</strong></p>",

    },
    // 仪表盘页面配置
    DASHBOARD_CONFIG: {
        // 是否在欢迎卡片中显示用户邮箱 (true=显示, false=隐藏)
        showUserEmail: false,

        // 是否为导入订阅按钮添加高光效果和填充底色 (true=添加效果, false=不添加效果)
        importButtonHighlightBtnbgcolor: true,

        // ===============================

        // 是否启用重置流量功能 (true=启用, false=禁用)
        enableResetTraffic: true,

        // 重置流量按钮显示条件 ('always'=始终显示, 'low'=流量低于阈值时显示, 'depleted'=流量耗尽时显示)
        resetTrafficDisplayMode: 'always',

        // 低流量阈值百分比 (1-100)，当剩余流量百分比低于此值时触发低流量警告
        lowTrafficThreshold: 10,

        // ===============================

        // 是否启用续费套餐功能 (true=启用, false=禁用)
        enableRenewPlan: true,

        // 续费套餐按钮显示条件 ('always'=始终显示, 'expiring'=套餐即将过期时显示, 'expired'=套餐已过期时显示)
        renewPlanDisplayMode: 'always',

        // 即将过期的天数阈值 (1-30)，当剩余天数小于等于此值时触发即将过期警告
        expiringThresh
