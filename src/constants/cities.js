const cities = [
	{
		'id': 290,
		'n': '北京',
		'count': 120,
		'pinyinShort': 'bj',
		'pinyinFull': 'Beijing'
	},
	{
		'id': 292,
		'n': '上海',
		'count': 119,
		'pinyinShort': 'sh',
		'pinyinFull': 'Shanghai'
	},
	{
		'id': 366,
		'n': '深圳',
		'count': 84,
		'pinyinShort': 'sz',
		'pinyinFull': 'Shenzhen'
	},
	{
		'id': 291,
		'n': '重庆',
		'count': 78,
		'pinyinShort': 'cq',
		'pinyinFull': 'Chongqing'
	},
	{
		'id': 880,
		'n': '成都',
		'count': 65,
		'pinyinShort': 'cd',
		'pinyinFull': 'Chengdu'
	},
	{
		'id': 365,
		'n': '广州',
		'count': 64,
		'pinyinShort': 'gz',
		'pinyinFull': 'Guangzhou'
	},
	{
		'id': 561,
		'n': '武汉',
		'count': 45,
		'pinyinShort': 'wh',
		'pinyinFull': 'Wuhan'
	},
	{
		'id': 371,
		'n': '东莞',
		'count': 45,
		'pinyinShort': 'dg',
		'pinyinFull': 'Dongguan'
	},
	{
		'id': 293,
		'n': '天津',
		'count': 44,
		'pinyinShort': 'tj',
		'pinyinFull': 'Tianjin'
	},
	{
		'id': 722,
		'n': '沈阳',
		'count': 40,
		'pinyinShort': 'sy',
		'pinyinFull': 'Shenyang'
	},
	{
		'id': 373,
		'n': '佛山',
		'count': 35,
		'pinyinShort': 'fs',
		'pinyinFull': 'Foshan'
	},
	{
		'id': 974,
		'n': '杭州',
		'count': 34,
		'pinyinShort': 'hz',
		'pinyinFull': 'Hangzhou'
	},
	{
		'id': 295,
		'n': '合肥',
		'count': 33,
		'pinyinShort': 'hf',
		'pinyinFull': 'Hefei'
	},
	{
		'id': 628,
		'n': '南京',
		'count': 32,
		'pinyinShort': 'nj',
		'pinyinFull': 'Nanjing'
	},
	{
		'id': 791,
		'n': '西安',
		'count': 30,
		'pinyinShort': 'xa',
		'pinyinFull': 'Xian'
	},
	{
		'id': 489,
		'n': '郑州',
		'count': 28,
		'pinyinShort': 'zz',
		'pinyinFull': 'Zhengzhou'
	},
	{
		'id': 598,
		'n': '长沙',
		'count': 28,
		'pinyinShort': 'cs',
		'pinyinFull': 'Changsha'
	},
	{
		'id': 992,
		'n': '宁波',
		'count': 27,
		'pinyinShort': 'nb',
		'pinyinFull': 'Ningbo'
	},
	{
		'id': 829,
		'n': '青岛',
		'count': 27,
		'pinyinShort': 'qd',
		'pinyinFull': 'QingDao'
	},
	{
		'id': 729,
		'n': '大连',
		'count': 26,
		'pinyinShort': 'dl',
		'pinyinFull': 'Dalian'
	},
	{
		'id': 323,
		'n': '厦门',
		'count': 23,
		'pinyinShort': 'xm',
		'pinyinFull': 'Xiamen'
	},
	{
		'id': 1001,
		'n': '温州',
		'count': 21,
		'pinyinShort': 'wz',
		'pinyinFull': 'Wenzhou'
	},
	{
		'id': 328,
		'n': '福州',
		'count': 20,
		'pinyinShort': 'fz',
		'pinyinFull': 'Fuzhou'
	},
	{
		'id': 662,
		'n': '无锡',
		'count': 20,
		'pinyinShort': 'wx',
		'pinyinFull': 'Wuxi'
	},
	{
		'id': 950,
		'n': '昆明',
		'count': 20,
		'pinyinShort': 'km',
		'pinyinFull': 'Kunming'
	},
	{
		'id': 1332,
		'n': '苏州',
		'count': 19,
		'pinyinShort': 'sz',
		'pinyinFull': 'Suzhou'
	},
	{
		'id': 453,
		'n': '石家庄',
		'count': 18,
		'pinyinShort': 'sjz',
		'pinyinFull': 'Shijiazhuang'
	},
	{
		'id': 805,
		'n': '济南',
		'count': 17,
		'pinyinShort': 'jn',
		'pinyinFull': 'Jinan'
	},
	{
		'id': 411,
		'n': '南宁',
		'count': 17,
		'pinyinShort': 'nn',
		'pinyinFull': 'Nanning'
	},
	{
		'id': 674,
		'n': '南昌',
		'count': 17,
		'pinyinShort': 'nc',
		'pinyinFull': 'Nanchang'
	},
	{
		'id': 630,
		'n': '常州',
		'count': 16,
		'pinyinShort': 'cz',
		'pinyinFull': 'Changzhou'
	},
	{
		'id': 379,
		'n': '惠州',
		'count': 16,
		'pinyinShort': 'hz',
		'pinyinFull': 'Huizhou'
	},
	{
		'id': 843,
		'n': '烟台',
		'count': 16,
		'pinyinShort': 'yt',
		'pinyinFull': 'Yantai'
	},
	{
		'id': 347,
		'n': '兰州',
		'count': 16,
		'pinyinShort': 'lz',
		'pinyinFull': 'Lanzhou'
	},
	{
		'id': 854,
		'n': '太原',
		'count': 16,
		'pinyinShort': 'ty',
		'pinyinFull': 'Taiyuan'
	},
	{
		'id': 433,
		'n': '贵阳',
		'count': 15,
		'pinyinShort': 'gy',
		'pinyinFull': 'Guiyang'
	},
	{
		'id': 1355,
		'n': '台州',
		'count': 15,
		'pinyinShort': 'tz',
		'pinyinFull': 'Taizhou'
	},
	{
		'id': 380,
		'n': '江门',
		'count': 14,
		'pinyinShort': 'jm',
		'pinyinFull': 'Jiangmen'
	},
	{
		'id': 409,
		'n': '中山',
		'count': 14,
		'pinyinShort': 'zs',
		'pinyinFull': 'Zhongshan'
	},
	{
		'id': 649,
		'n': '南通',
		'count': 14,
		'pinyinShort': 'nt',
		'pinyinFull': 'Nantong'
	},
	{
		'id': 693,
		'n': '长春',
		'count': 13,
		'pinyinShort': 'cc',
		'pinyinFull': 'Changchun'
	},
	{
		'id': 665,
		'n': '盐城',
		'count': 13,
		'pinyinShort': 'yc',
		'pinyinFull': 'Yancheng'
	},
	{
		'id': 777,
		'n': '银川',
		'count': 12,
		'pinyinShort': 'yc',
		'pinyinFull': 'Yinchuan'
	},
	{
		'id': 528,
		'n': '哈尔滨',
		'count': 12,
		'pinyinShort': 'heb',
		'pinyinFull': 'Harbin'
	},
	{
		'id': 636,
		'n': '淮安',
		'count': 12,
		'pinyinShort': 'ha',
		'pinyinFull': 'Huaian'
	},
	{
		'id': 839,
		'n': '潍坊',
		'count': 12,
		'pinyinShort': 'wf',
		'pinyinFull': 'Weifang'
	},
	{
		'id': 926,
		'n': '乌鲁木齐',
		'count': 12,
		'pinyinShort': 'wlmq',
		'pinyinFull': 'Wulumuqi'
	},
	{
		'id': 517,
		'n': '新乡',
		'count': 11,
		'pinyinShort': 'xx',
		'pinyinFull': 'Xinxiang'
	},
	{
		'id': 990,
		'n': '丽水',
		'count': 11,
		'pinyinShort': 'ls',
		'pinyinFull': 'Lishui'
	},
	{
		'id': 980,
		'n': '湖州',
		'count': 11,
		'pinyinShort': 'hz',
		'pinyinFull': 'Huzhou'
	},
	{
		'id': 677,
		'n': '赣州',
		'count': 11,
		'pinyinShort': 'gz',
		'pinyinFull': 'Ganzhou'
	},
	{
		'id': 503,
		'n': '洛阳',
		'count': 11,
		'pinyinShort': 'ly',
		'pinyinFull': 'Luoyang'
	},
	{
		'id': 994,
		'n': '衢州',
		'count': 11,
		'pinyinShort': 'qz',
		'pinyinFull': 'Quzhou'
	},
	{
		'id': 464,
		'n': '邯郸',
		'count': 11,
		'pinyinShort': 'hd',
		'pinyinFull': 'Handan'
	},
	{
		'id': 1763,
		'n': '榆林',
		'count': 11,
		'pinyinShort': 'yl',
		'pinyinFull': 'Yulin'
	},
	{
		'id': 602,
		'n': '衡阳',
		'count': 10,
		'pinyinShort': 'hy',
		'pinyinFull': 'Hengyang'
	},
	{
		'id': 313,
		'n': '马鞍山',
		'count': 10,
		'pinyinShort': 'mas',
		'pinyinFull': 'Maanshan'
	},
	{
		'id': 625,
		'n': '株洲',
		'count': 10,
		'pinyinShort': 'zz',
		'pinyinFull': 'Zhuzhou'
	},
	{
		'id': 851,
		'n': '淄博',
		'count': 10,
		'pinyinShort': 'zb',
		'pinyinFull': 'Zibo'
	},
	{
		'id': 878,
		'n': '运城',
		'count': 10,
		'pinyinShort': 'yc',
		'pinyinFull': 'Yuncheng'
	},
	{
		'id': 664,
		'n': '徐州',
		'count': 10,
		'pinyinShort': 'xz',
		'pinyinFull': 'Xuzhou'
	},
	{
		'id': 533,
		'n': '大庆',
		'count': 10,
		'pinyinShort': 'dq',
		'pinyinFull': 'Daqing'
	},
	{
		'id': 753,
		'n': '呼和浩特',
		'count': 9,
		'pinyinShort': 'hhht',
		'pinyinFull': 'Hohhot'
	},
	{
		'id': 338,
		'n': '泉州',
		'count': 9,
		'pinyinShort': 'qz',
		'pinyinFull': 'Quanzhou'
	},
	{
		'id': 1687,
		'n': '临沂',
		'count': 9,
		'pinyinShort': 'ly',
		'pinyinFull': 'Linyi'
	},
	{
		'id': 809,
		'n': '东营',
		'count': 9,
		'pinyinShort': 'dy',
		'pinyinFull': 'Dongying'
	},
	{
		'id': 320,
		'n': '芜湖',
		'count': 9,
		'pinyinShort': 'wh',
		'pinyinFull': 'Wuhu'
	},
	{
		'id': 645,
		'n': '昆山',
		'count': 9,
		'pinyinShort': 'ks',
		'pinyinFull': 'Kunshan'
	},
	{
		'id': 958,
		'n': '红河',
		'count': 9,
		'pinyinShort': 'hh',
		'pinyinFull': 'Honghe'
	},
	{
		'id': 840,
		'n': '威海',
		'count': 9,
		'pinyinShort': 'wh',
		'pinyinFull': 'Weihai'
	},
	{
		'id': 581,
		'n': '十堰',
		'count': 9,
		'pinyinShort': 'sy',
		'pinyinFull': 'Shiyan'
	},
	{
		'id': 997,
		'n': '绍兴',
		'count': 8,
		'pinyinShort': 'sx',
		'pinyinFull': 'Shaoxing'
	},
	{
		'id': 623,
		'n': '岳阳',
		'count': 8,
		'pinyinShort': 'yy',
		'pinyinFull': 'Yueyang'
	},
	{
		'id': 490,
		'n': '安阳',
		'count': 8,
		'pinyinShort': 'ay',
		'pinyinFull': 'Anyang'
	},
	{
		'id': 450,
		'n': '海口',
		'count': 8,
		'pinyinShort': 'hk',
		'pinyinFull': 'Haikou'
	},
	{
		'id': 688,
		'n': '上饶',
		'count': 8,
		'pinyinShort': 'sr',
		'pinyinFull': 'Shangrao'
	},
	{
		'id': 667,
		'n': '扬州',
		'count': 8,
		'pinyinShort': 'yz',
		'pinyinFull': 'Yangzhou'
	},
	{
		'id': 813,
		'n': '菏泽',
		'count': 8,
		'pinyinShort': 'hz',
		'pinyinFull': 'Heze'
	},
	{
		'id': 407,
		'n': '湛江',
		'count': 8,
		'pinyinShort': 'zj',
		'pinyinFull': 'Zhanjiang'
	},
	{
		'id': 485,
		'n': '张家口',
		'count': 8,
		'pinyinShort': 'zjk',
		'pinyinFull': 'Zhangjiakou'
	},
	{
		'id': 480,
		'n': '唐山',
		'count': 8,
		'pinyinShort': 'ts',
		'pinyinFull': 'Tangshan'
	},
	{
		'id': 981,
		'n': '嘉兴',
		'count': 8,
		'pinyinShort': 'jx',
		'pinyinFull': 'Jiaxing'
	},
	{
		'id': 689,
		'n': '新余',
		'count': 7,
		'pinyinShort': 'xy',
		'pinyinFull': 'Xinyu'
	},
	{
		'id': 837,
		'n': '泰安',
		'count': 7,
		'pinyinShort': 'ta',
		'pinyinFull': 'Taian'
	},
	{
		'id': 515,
		'n': '信阳',
		'count': 7,
		'pinyinShort': 'xy',
		'pinyinFull': 'Xinyang'
	},
	{
		'id': 1342,
		'n': '滨州',
		'count': 7,
		'pinyinShort': 'bz',
		'pinyinFull': 'Binzhou'
	},
	{
		'id': 671,
		'n': '镇江',
		'count': 7,
		'pinyinShort': 'zj',
		'pinyinFull': 'Zhenjiang'
	},
	{
		'id': 420,
		'n': '桂林',
		'count': 7,
		'pinyinShort': 'gl',
		'pinyinFull': 'Guilin'
	},
	{
		'id': 368,
		'n': '珠海',
		'count': 7,
		'pinyinShort': 'zh',
		'pinyinFull': 'Zhuhai'
	},
	{
		'id': 345,
		'n': '漳州',
		'count': 7,
		'pinyinShort': 'zz',
		'pinyinFull': 'Zhangzhou'
	},
	{
		'id': 618,
		'n': '湘潭',
		'count': 7,
		'pinyinShort': 'xt',
		'pinyinFull': 'Xiangtan'
	},
	{
		'id': 756,
		'n': '包头',
		'count': 7,
		'pinyinShort': 'bt',
		'pinyinFull': 'Baotou'
	},
	{
		'id': 901,
		'n': '绵阳',
		'count': 7,
		'pinyinShort': 'my',
		'pinyinFull': 'Mianyang'
	},
	{
		'id': 296,
		'n': '安庆',
		'count': 7,
		'pinyinShort': 'aq',
		'pinyinFull': 'Anqing'
	},
	{
		'id': 680,
		'n': '九江',
		'count': 7,
		'pinyinShort': 'jj',
		'pinyinFull': 'Jiujiang'
	},
	{
		'id': 1744,
		'n': '宜春',
		'count': 7,
		'pinyinShort': 'yc',
		'pinyinFull': 'Yichun'
	},
	{
		'id': 455,
		'n': '保定',
		'count': 7,
		'pinyinShort': 'bd',
		'pinyinFull': 'Baoding'
	},
	{
		'id': 573,
		'n': '黄石',
		'count': 6,
		'pinyinShort': 'hs',
		'pinyinFull': 'Huangshi'
	},
	{
		'id': 657,
		'n': '泰州',
		'count': 6,
		'pinyinShort': 'tz',
		'pinyinFull': 'Taizhou'
	},
	{
		'id': 818,
		'n': '济宁',
		'count': 6,
		'pinyinShort': 'jn',
		'pinyinFull': 'Jining'
	},
	{
		'id': 984,
		'n': '金华',
		'count': 6,
		'pinyinShort': 'jh',
		'pinyinFull': 'Jinhua'
	},
	{
		'id': 668,
		'n': '宜兴',
		'count': 6,
		'pinyinShort': 'yx',
		'pinyinFull': 'Yixing'
	},
	{
		'id': 833,
		'n': '日照',
		'count': 6,
		'pinyinShort': 'rz',
		'pinyinFull': 'Rizhao'
	},
	{
		'id': 654,
		'n': '宿迁',
		'count': 6,
		'pinyinShort': 'sq',
		'pinyinFull': 'Suqian'
	},
	{
		'id': 904,
		'n': '南充',
		'count': 6,
		'pinyinShort': 'nc',
		'pinyinFull': 'Nanchong'
	},
	{
		'id': 1005,
		'n': '余姚',
		'count': 6,
		'pinyinShort': 'yy',
		'pinyinFull': 'Yuyao'
	},
	{
		'id': 390,
		'n': '梅州',
		'count': 6,
		'pinyinShort': 'mz',
		'pinyinFull': 'Meizhou'
	},
	{
		'id': 408,
		'n': '肇庆',
		'count': 6,
		'pinyinShort': 'zq',
		'pinyinFull': 'Zhaoqing'
	},
	{
		'id': 587,
		'n': '咸宁',
		'count': 6,
		'pinyinShort': 'xn',
		'pinyinFull': 'Xianning'
	},
	{
		'id': 744,
		'n': '盘锦',
		'count': 6,
		'pinyinShort': 'pj',
		'pinyinFull': 'Panjin'
	},
	{
		'id': 300,
		'n': '滁州',
		'count': 6,
		'pinyinShort': 'cz',
		'pinyinFull': 'Chuzhou'
	},
	{
		'id': 975,
		'n': '慈溪',
		'count': 6,
		'pinyinShort': 'cx',
		'pinyinFull': 'Cixi'
	},
	{
		'id': 613,
		'n': '娄底',
		'count': 6,
		'pinyinShort': 'ld',
		'pinyinFull': 'Loudi'
	},
	{
		'id': 448,
		'n': '遵义',
		'count': 6,
		'pinyinShort': 'zy',
		'pinyinFull': 'Zunyi'
	},
	{
		'id': 898,
		'n': '乐山',
		'count': 6,
		'pinyinShort': 'ls',
		'pinyinFull': 'Leshan'
	},
	{
		'id': 823,
		'n': '聊城',
		'count': 6,
		'pinyinShort': 'lc',
		'pinyinFull': 'Liaocheng'
	},
	{
		'id': 367,
		'n': '汕头',
		'count': 6,
		'pinyinShort': 'st',
		'pinyinFull': 'Shantou'
	},
	{
		'id': 333,
		'n': '龙岩',
		'count': 6,
		'pinyinShort': 'ly',
		'pinyinFull': 'Longyan'
	},
	{
		'id': 600,
		'n': '常德',
		'count': 6,
		'pinyinShort': 'cd',
		'pinyinFull': 'Changde'
	},
	{
		'id': 339,
		'n': '三明',
		'count': 6,
		'pinyinShort': 'sm',
		'pinyinFull': 'Sanming'
	},
	{
		'id': 641,
		'n': '江阴',
		'count': 5,
		'pinyinShort': 'jy',
		'pinyinFull': 'Jiangyin'
	},
	{
		'id': 440,
		'n': '六盘水',
		'count': 5,
		'pinyinShort': 'lps',
		'pinyinFull': 'Liupanshui'
	},
	{
		'id': 836,
		'n': '寿光',
		'count': 5,
		'pinyinShort': 'sg',
		'pinyinFull': 'Shouguang'
	},
	{
		'id': 617,
		'n': '邵阳',
		'count': 5,
		'pinyinShort': 'sy',
		'pinyinFull': 'Shaoyang'
	},
	{
		'id': 511,
		'n': '商丘',
		'count': 5,
		'pinyinShort': 'sq',
		'pinyinFull': 'Shangqiu'
	},
	{
		'id': 590,
		'n': '宜昌',
		'count': 5,
		'pinyinShort': 'yc',
		'pinyinFull': 'Yichang'
	},
	{
		'id': 425,
		'n': '柳州',
		'count': 5,
		'pinyinShort': 'lz',
		'pinyinFull': 'Liuzhou'
	},
	{
		'id': 785,
		'n': '西宁',
		'count': 5,
		'pinyinShort': 'xn',
		'pinyinFull': 'Xining'
	},
	{
		'id': 499,
		'n': '开封',
		'count': 5,
		'pinyinShort': 'kf',
		'pinyinFull': 'Kaifeng'
	},
	{
		'id': 646,
		'n': '连云港',
		'count': 5,
		'pinyinShort': 'lyg',
		'pinyinFull': 'Lianyungang'
	},
	{
		'id': 312,
		'n': '六安',
		'count': 5,
		'pinyinShort': 'la',
		'pinyinFull': 'Liuan'
	},
	{
		'id': 612,
		'n': '浏阳',
		'count': 5,
		'pinyinShort': 'ly',
		'pinyinFull': 'Liuyang'
	},
	{
		'id': 389,
		'n': '茂名',
		'count': 5,
		'pinyinShort': 'mm',
		'pinyinFull': 'Maoming'
	},
	{
		'id': 801,
		'n': '咸阳',
		'count': 5,
		'pinyinShort': 'xy',
		'pinyinFull': 'Xianyang'
	},
	{
		'id': 575,
		'n': '荆州',
		'count': 5,
		'pinyinShort': 'jz',
		'pinyinFull': 'Jingzhou'
	},
	{
		'id': 574,
		'n': '荆门',
		'count': 5,
		'pinyinShort': 'jm',
		'pinyinFull': 'Jingmen'
	},
	{
		'id': 331,
		'n': '晋江',
		'count': 5,
		'pinyinShort': 'jj',
		'pinyinFull': 'Jinjiang'
	},
	{
		'id': 910,
		'n': '遂宁',
		'count': 5,
		'pinyinShort': 'sn',
		'pinyinFull': 'Suining'
	},
	{
		'id': 505,
		'n': '南阳',
		'count': 5,
		'pinyinShort': 'ny',
		'pinyinFull': 'Nanyang'
	},
	{
		'id': 629,
		'n': '常熟',
		'count': 5,
		'pinyinShort': 'cs',
		'pinyinFull': 'Changshu'
	},
	{
		'id': 525,
		'n': '周口',
		'count': 5,
		'pinyinShort': 'zk',
		'pinyinFull': 'Zhoukou'
	},
	{
		'id': 458,
		'n': '沧州',
		'count': 5,
		'pinyinShort': 'cz',
		'pinyinFull': 'Cangzhou'
	},
	{
		'id': 793,
		'n': '宝鸡',
		'count': 5,
		'pinyinShort': 'bj',
		'pinyinFull': 'Baoji'
	},
	{
		'id': 599,
		'n': '郴州',
		'count': 5,
		'pinyinShort': 'cz',
		'pinyinFull': 'Chenzhou'
	},
	{
		'id': 1003,
		'n': '义乌',
		'count': 5,
		'pinyinShort': 'yw',
		'pinyinFull': 'Yiwu'
	},
	{
		'id': 621,
		'n': '益阳',
		'count': 5,
		'pinyinShort': 'yy',
		'pinyinFull': 'Yiyang'
	},
	{
		'id': 857,
		'n': '大同',
		'count': 5,
		'pinyinShort': 'dt',
		'pinyinFull': 'Datong'
	},
	{
		'id': 847,
		'n': '枣庄',
		'count': 5,
		'pinyinShort': 'zz',
		'pinyinFull': 'Zaozhuang'
	},
	{
		'id': 724,
		'n': '鞍山',
		'count': 5,
		'pinyinShort': 'as',
		'pinyinFull': 'Anshan'
	},
	{
		'id': 735,
		'n': '抚顺',
		'count': 5,
		'pinyinShort': 'fs',
		'pinyinFull': 'Fushun'
	},
	{
		'id': 759,
		'n': '鄂尔多斯',
		'count': 4,
		'pinyinShort': 'eeds',
		'pinyinFull': 'Eerduosi'
	},
	{
		'id': 547,
		'n': '齐齐哈尔',
		'count': 4,
		'pinyinShort': 'qqhe',
		'pinyinFull': 'Qiqihar'
	},
	{
		'id': 567,
		'n': '恩施',
		'count': 4,
		'pinyinShort': 'es',
		'pinyinFull': 'Enshi'
	},
	{
		'id': 758,
		'n': '赤峰',
		'count': 4,
		'pinyinShort': 'cf',
		'pinyinFull': 'Chifeng'
	},
	{
		'id': 900,
		'n': '泸州',
		'count': 4,
		'pinyinShort': 'lz',
		'pinyinFull': 'Luzhou'
	},
	{
		'id': 995,
		'n': '瑞安',
		'count': 4,
		'pinyinShort': 'ra',
		'pinyinFull': 'Ruian'
	},
	{
		'id': 653,
		'n': '如皋',
		'count': 4,
		'pinyinShort': 'rg',
		'pinyinFull': 'Rugao'
	},
	{
		'id': 321,
		'n': '宣城',
		'count': 4,
		'pinyinShort': 'xc',
		'pinyinFull': 'Xuancheng'
	},
	{
		'id': 337,
		'n': '莆田',
		'count': 4,
		'pinyinShort': 'pt',
		'pinyinFull': 'Putian'
	},
	{
		'id': 635,
		'n': '海门',
		'count': 4,
		'pinyinShort': 'hm',
		'pinyinFull': 'Haimen'
	},
	{
		'id': 586,
		'n': '襄阳',
		'count': 4,
		'pinyinShort': 'xy',
		'pinyinFull': 'Xiangyang'
	},
	{
		'id': 1349,
		'n': '萍乡',
		'count': 4,
		'pinyinShort': 'px',
		'pinyinFull': 'Pingxiang'
	},
	{
		'id': 915,
		'n': '自贡',
		'count': 4,
		'pinyinShort': 'zg',
		'pinyinFull': 'Zigong'
	},
	{
		'id': 394,
		'n': '清远',
		'count': 4,
		'pinyinShort': 'qy',
		'pinyinFull': 'Qingyuan'
	},
	{
		'id': 498,
		'n': '济源',
		'count': 4,
		'pinyinShort': 'jy',
		'pinyinFull': 'Jiyuan'
	},
	{
		'id': 979,
		'n': '海宁',
		'count': 4,
		'pinyinShort': 'hn',
		'pinyinFull': 'Haining'
	},
	{
		'id': 655,
		'n': '太仓',
		'count': 4,
		'pinyinShort': 'tc',
		'pinyinFull': 'Taicang'
	},
	{
		'id': 377,
		'n': '河源',
		'count': 4,
		'pinyinShort': 'hy',
		'pinyinFull': 'Heyuan'
	},
	{
		'id': 1007,
		'n': '诸暨',
		'count': 4,
		'pinyinShort': 'zj',
		'pinyinFull': 'Zhuji'
	},
	{
		'id': 1006,
		'n': '舟山',
		'count': 4,
		'pinyinShort': 'zs',
		'pinyinFull': 'Zhoushan'
	},
	{
		'id': 396,
		'n': '韶关',
		'count': 4,
		'pinyinShort': 'sg',
		'pinyinFull': 'Shaoguan'
	},
	{
		'id': 660,
		'n': '吴江',
		'count': 4,
		'pinyinShort': 'wj',
		'pinyinFull': 'Wujiang'
	},
	{
		'id': 497,
		'n': '焦作',
		'count': 4,
		'pinyinShort': 'jz',
		'pinyinFull': 'Jiaozuo'
	},
	{
		'id': 999,
		'n': '桐乡',
		'count': 4,
		'pinyinShort': 'tx',
		'pinyinFull': 'Tongxiang'
	},
	{
		'id': 297,
		'n': '蚌埠',
		'count': 4,
		'pinyinShort': 'bb',
		'pinyinFull': 'Bengbu'
	},
	{
		'id': 413,
		'n': '北海',
		'count': 4,
		'pinyinShort': 'bh',
		'pinyinFull': 'Beihai'
	},
	{
		'id': 604,
		'n': '怀化',
		'count': 4,
		'pinyinShort': 'hh',
		'pinyinFull': 'Huaihua'
	},
	{
		'id': 764,
		'n': '呼伦贝尔',
		'count': 4,
		'pinyinShort': 'hlbe',
		'pinyinFull': 'Hulun Buir'
	},
	{
		'id': 381,
		'n': '揭阳',
		'count': 4,
		'pinyinShort': 'jy',
		'pinyinFull': 'Jieyang'
	},
	{
		'id': 369,
		'n': '潮州',
		'count': 4,
		'pinyinShort': 'cz',
		'pinyinFull': 'Chaozhou'
	},
	{
		'id': 703,
		'n': '吉林市',
		'count': 4,
		'pinyinShort': 'jls',
		'pinyinFull': 'Jilin'
	},
	{
		'id': 642,
		'n': '靖江',
		'count': 4,
		'pinyinShort': 'jj',
		'pinyinFull': 'Jingjiang'
	},
	{
		'id': 865,
		'n': '晋城',
		'count': 4,
		'pinyinShort': 'jc',
		'pinyinFull': 'Jincheng'
	},
	{
		'id': 757,
		'n': '巴彦淖尔',
		'count': 4,
		'pinyinShort': 'byze',
		'pinyinFull': 'Bayannaoer'
	},
	{
		'id': 800,
		'n': '渭南',
		'count': 3,
		'pinyinShort': 'wn',
		'pinyinFull': 'Weinan'
	},
	{
		'id': 964,
		'n': '曲靖',
		'count': 3,
		'pinyinShort': 'qj',
		'pinyinFull': 'Qujing'
	},
	{
		'id': 976,
		'n': '东阳',
		'count': 3,
		'pinyinShort': 'dy',
		'pinyinFull': 'Dongyang'
	},
	{
		'id': 808,
		'n': '德州',
		'count': 3,
		'pinyinShort': 'dz',
		'pinyinFull': 'Dezhou'
	},
	{
		'id': 670,
		'n': '张家港',
		'count': 3,
		'pinyinShort': 'zjg',
		'pinyinFull': 'Zhangjiagang'
	},
	{
		'id': 355,
		'n': '陇南',
		'count': 3,
		'pinyinShort': 'ln',
		'pinyinFull': 'Longnan'
	},
	{
		'id': 482,
		'n': '邢台',
		'count': 3,
		'pinyinShort': 'gt',
		'pinyinFull': 'Xingtai'
	},
	{
		'id': 716,
		'n': '通化',
		'count': 3,
		'pinyinShort': 'th',
		'pinyinFull': 'Tonghua'
	},
	{
		'id': 647,
		'n': '溧阳',
		'count': 3,
		'pinyinShort': 'ly',
		'pinyinFull': 'Liyang'
	},
	{
		'id': 903,
		'n': '眉山',
		'count': 3,
		'pinyinShort': 'ms',
		'pinyinFull': 'Meishan'
	},
	{
		'id': 971,
		'n': '玉溪',
		'count': 3,
		'pinyinShort': 'yx',
		'pinyinFull': 'Yuxi'
	},
	{
		'id': 886,
		'n': '德阳',
		'count': 3,
		'pinyinShort': 'dy',
		'pinyinFull': 'Deyang'
	},
	{
		'id': 426,
		'n': '钦州',
		'count': 3,
		'pinyinShort': 'qz',
		'pinyinFull': 'Qinzhou'
	},
	{
		'id': 475,
		'n': '秦皇岛',
		'count': 3,
		'pinyinShort': 'qhd',
		'pinyinFull': 'Qinhuangdao'
	},
	{
		'id': 474,
		'n': '迁安',
		'count': 3,
		'pinyinShort': 'qa',
		'pinyinFull': 'Qianan'
	},
	{
		'id': 996,
		'n': '上虞',
		'count': 3,
		'pinyinShort': 'sy',
		'pinyinFull': 'Shangyu'
	},
	{
		'id': 451,
		'n': '三亚',
		'count': 3,
		'pinyinShort': 'sy',
		'pinyinFull': 'Sanya'
	},
	{
		'id': 459,
		'n': '承德',
		'count': 3,
		'pinyinShort': 'cd',
		'pinyinFull': 'Chengde'
	},
	{
		'id': 954,
		'n': '大理',
		'count': 3,
		'pinyinShort': 'dl',
		'pinyinFull': 'Dali'
	},
	{
		'id': 507,
		'n': '濮阳',
		'count': 3,
		'pinyinShort': 'py',
		'pinyinFull': 'Puyang'
	},
	{
		'id': 506,
		'n': '平顶山',
		'count': 3,
		'pinyinShort': 'pds',
		'pinyinFull': 'Pingdingshan'
	},
	{
		'id': 906,
		'n': '攀枝花',
		'count': 3,
		'pinyinShort': 'pzh',
		'pinyinFull': 'Panzhihua'
	},
	{
		'id': 336,
		'n': '宁德',
		'count': 3,
		'pinyinShort': 'nd',
		'pinyinFull': 'Ningde'
	},
	{
		'id': 302,
		'n': '亳州',
		'count': 3,
		'pinyinShort': 'bz',
		'pinyinFull': 'Bozhou'
	},
	{
		'id': 553,
		'n': '绥化',
		'count': 3,
		'pinyinShort': 'sh',
		'pinyinFull': 'Suihua'
	},
	{
		'id': 656,
		'n': '泰兴',
		'count': 3,
		'pinyinShort': 'tx',
		'pinyinFull': 'Taixing'
	},
	{
		'id': 445,
		'n': '铜仁',
		'count': 3,
		'pinyinShort': 'tr',
		'pinyinFull': 'Tongren'
	},
	{
		'id': 1745,
		'n': '抚州',
		'count': 3,
		'pinyinShort': 'fz',
		'pinyinFull': 'Fuzhou'
	},
	{
		'id': 803,
		'n': '延安',
		'count': 3,
		'pinyinShort': 'ya',
		'pinyinFull': 'Yanan'
	},
	{
		'id': 669,
		'n': '仪征',
		'count': 3,
		'pinyinShort': 'yz',
		'pinyinFull': 'Yizheng'
	},
	{
		'id': 718,
		'n': '延边',
		'count': 3,
		'pinyinShort': 'yb',
		'pinyinFull': 'Yanbian'
	},
	{
		'id': 622,
		'n': '永州',
		'count': 3,
		'pinyinShort': 'yz',
		'pinyinFull': 'Yongzhou'
	},
	{
		'id': 304,
		'n': '淮南',
		'count': 3,
		'pinyinShort': 'hn',
		'pinyinFull': 'Huainan'
	},
	{
		'id': 796,
		'n': '汉中',
		'count': 3,
		'pinyinShort': 'hz',
		'pinyinFull': 'Hanzhong'
	},
	{
		'id': 607,
		'n': '耒阳',
		'count': 3,
		'pinyinShort': 'ly',
		'pinyinFull': 'Leiyang'
	},
	{
		'id': 750,
		'n': '营口',
		'count': 3,
		'pinyinShort': 'yk',
		'pinyinFull': 'Yingkou'
	},
	{
		'id': 914,
		'n': '宜宾',
		'count': 3,
		'pinyinShort': 'yb',
		'pinyinFull': 'Yibin'
	},
	{
		'id': 816,
		'n': '胶州',
		'count': 3,
		'pinyinShort': 'jz',
		'pinyinFull': 'Jiaozhou'
	},
	{
		'id': 820,
		'n': '莱芜',
		'count': 3,
		'pinyinShort': 'lw',
		'pinyinFull': 'Laiwu'
	},
	{
		'id': 4914,
		'n': '海盐',
		'count': 3,
		'pinyinShort': 'hy',
		'pinyinFull': 'Haiyan'
	},
	{
		'id': 572,
		'n': '黄冈',
		'count': 3,
		'pinyinShort': 'hg',
		'pinyinFull': 'Huanggang'
	},
	{
		'id': 739,
		'n': '葫芦岛',
		'count': 3,
		'pinyinShort': 'hld',
		'pinyinFull': 'Huludao'
	},
	{
		'id': 817,
		'n': '即墨',
		'count': 3,
		'pinyinShort': 'jm',
		'pinyinFull': 'Jimo'
	},
	{
		'id': 305,
		'n': '黄山',
		'count': 3,
		'pinyinShort': 'hs',
		'pinyinFull': 'Huangshan'
	},
	{
		'id': 681,
		'n': '景德镇',
		'count': 3,
		'pinyinShort': 'jdz',
		'pinyinFull': 'Jingdezhen'
	},
	{
		'id': 403,
		'n': '阳江',
		'count': 3,
		'pinyinShort': 'yj',
		'pinyinFull': 'Yangjiang'
	},
	{
		'id': 1344,
		'n': '海安',
		'count': 3,
		'pinyinShort': 'ha',
		'pinyinFull': 'Haian'
	},
	{
		'id': 643,
		'n': '金坛',
		'count': 2,
		'pinyinShort': 'jt',
		'pinyinFull': 'Jintan'
	},
	{
		'id': 563,
		'n': '赤壁',
		'count': 2,
		'pinyinShort': 'cb',
		'pinyinFull': 'Chibi'
	},
	{
		'id': 495,
		'n': '鹤壁',
		'count': 2,
		'pinyinShort': 'hb',
		'pinyinFull': 'Hebi'
	},
	{
		'id': 428,
		'n': '梧州',
		'count': 2,
		'pinyinShort': 'wz',
		'pinyinFull': 'Wuzhou'
	},
	{
		'id': 690,
		'n': '鹰潭',
		'count': 2,
		'pinyinShort': 'yt',
		'pinyinFull': 'Yingtan'
	},
	{
		'id': 644,
		'n': '句容',
		'count': 2,
		'pinyinShort': 'jr',
		'pinyinFull': 'Jurong'
	},
	{
		'id': 666,
		'n': '扬中',
		'count': 2,
		'pinyinShort': 'yz',
		'pinyinFull': 'Yangzhong'
	},
	{
		'id': 363,
		'n': '张掖',
		'count': 2,
		'pinyinShort': 'zy',
		'pinyinFull': 'Zhangye'
	},
	{
		'id': 830,
		'n': '青州',
		'count': 2,
		'pinyinShort': 'qz',
		'pinyinFull': 'Qingzhou'
	},
	{
		'id': 318,
		'n': '宿州',
		'count': 2,
		'pinyinShort': 'sz',
		'pinyinFull': 'Suzhou'
	},
	{
		'id': 1345,
		'n': '锦州',
		'count': 2,
		'pinyinShort': 'jz',
		'pinyinFull': 'Jinzhou'
	},
	{
		'id': 632,
		'n': '丹阳',
		'count': 2,
		'pinyinShort': 'dy',
		'pinyinFull': 'Danyang'
	},
	{
		'id': 343,
		'n': '永安',
		'count': 2,
		'pinyinShort': 'ya',
		'pinyinFull': 'Yongan'
	},
	{
		'id': 583,
		'n': '随州',
		'count': 2,
		'pinyinShort': 'sz',
		'pinyinFull': 'Suizhou'
	},
	{
		'id': 850,
		'n': '诸城',
		'count': 2,
		'pinyinShort': 'zc',
		'pinyinFull': 'Zhucheng'
	},
	{
		'id': 746,
		'n': '铁岭',
		'count': 2,
		'pinyinShort': 'tl',
		'pinyinFull': 'Tieling'
	},
	{
		'id': 639,
		'n': '江都',
		'count': 2,
		'pinyinShort': 'jd',
		'pinyinFull': 'Jiangdu'
	},
	{
		'id': 640,
		'n': '姜堰',
		'count': 2,
		'pinyinShort': 'jy',
		'pinyinFull': 'Jiangyan'
	},
	{
		'id': 303,
		'n': '淮北',
		'count': 2,
		'pinyinShort': 'hb',
		'pinyinFull': 'Huaibei'
	},
	{
		'id': 727,
		'n': '本溪',
		'count': 2,
		'pinyinShort': 'bx',
		'pinyinFull': 'Benxi'
	},
	{
		'id': 781,
		'n': '石嘴山',
		'count': 2,
		'pinyinShort': 'szs',
		'pinyinFull': 'Shizuishan'
	},
	{
		'id': 526,
		'n': '驻马店',
		'count': 2,
		'pinyinShort': 'zmd',
		'pinyinFull': 'Zhumadian'
	},
	{
		'id': 1000,
		'n': '温岭',
		'count': 2,
		'pinyinShort': 'wl',
		'pinyinFull': 'Wenling'
	},
	{
		'id': 713,
		'n': '四平',
		'count': 2,
		'pinyinShort': 'sp',
		'pinyinFull': 'Siping'
	},
	{
		'id': 936,
		'n': '伊犁',
		'count': 2,
		'pinyinShort': 'yl',
		'pinyinFull': 'Yili'
	},
	{
		'id': 862,
		'n': '侯马',
		'count': 2,
		'pinyinShort': 'hm',
		'pinyinFull': 'Houma'
	},
	{
		'id': 966,
		'n': '思茅',
		'count': 2,
		'pinyinShort': 'sm',
		'pinyinFull': 'Simao'
	},
	{
		'id': 844,
		'n': '兖州',
		'count': 2,
		'pinyinShort': 'yz',
		'pinyinFull': 'Yanzhou'
	},
	{
		'id': 478,
		'n': '沙河',
		'count': 2,
		'pinyinShort': 'sh',
		'pinyinFull': 'Shahe'
	},
	{
		'id': 510,
		'n': '三门峡',
		'count': 2,
		'pinyinShort': 'smx',
		'pinyinFull': 'Sanmenxia'
	},
	{
		'id': 422,
		'n': '贺州',
		'count': 2,
		'pinyinShort': 'hz',
		'pinyinFull': 'Hezhou'
	},
	{
		'id': 952,
		'n': '保山',
		'count': 2,
		'pinyinShort': 'bs',
		'pinyinFull': 'Baoshan'
	},
	{
		'id': 395,
		'n': '汕尾',
		'count': 2,
		'pinyinShort': 'sw',
		'pinyinFull': 'Shanwei'
	},
	{
		'id': 895,
		'n': '江油',
		'count': 2,
		'pinyinShort': 'jy',
		'pinyinFull': 'Jiangyou'
	},
	{
		'id': 352,
		'n': '嘉峪关',
		'count': 2,
		'pinyinShort': 'jyg',
		'pinyinFull': 'Jiayuguan'
	},
	{
		'id': 298,
		'n': '巢湖',
		'count': 2,
		'pinyinShort': 'ch',
		'pinyinFull': 'Chaohu'
	},
	{
		'id': 855,
		'n': '长治',
		'count': 2,
		'pinyinShort': 'cz',
		'pinyinFull': 'Changzhi'
	},
	{
		'id': 577,
		'n': '利川',
		'count': 2,
		'pinyinShort': 'lc',
		'pinyinFull': 'Lichuan'
	},
	{
		'id': 706,
		'n': '辽源',
		'count': 2,
		'pinyinShort': 'ly',
		'pinyinFull': 'Liaoyuan'
	},
	{
		'id': 838,
		'n': '滕州',
		'count': 2,
		'pinyinShort': 'tz',
		'pinyinFull': 'Tengzhou'
	},
	{
		'id': 317,
		'n': '铜陵',
		'count': 2,
		'pinyinShort': 'tl',
		'pinyinFull': 'Tongling'
	},
	{
		'id': 568,
		'n': '鄂州',
		'count': 2,
		'pinyinShort': 'ez',
		'pinyinFull': 'Ezhou'
	},
	{
		'id': 969,
		'n': '西双版纳',
		'count': 2,
		'pinyinShort': 'xsbn',
		'pinyinFull': 'Xishuangbanna'
	},
	{
		'id': 634,
		'n': '高邮',
		'count': 2,
		'pinyinShort': 'gy',
		'pinyinFull': 'Gaoyou'
	},
	{
		'id': 524,
		'n': '禹州',
		'count': 2,
		'pinyinShort': 'yz',
		'pinyinFull': 'Yuzhou'
	},
	{
		'id': 852,
		'n': '邹城',
		'count': 2,
		'pinyinShort': 'zc',
		'pinyinFull': 'Zoucheng'
	},
	{
		'id': 766,
		'n': '满洲里',
		'count': 2,
		'pinyinShort': 'mzl',
		'pinyinFull': 'Manzhouli'
	},
	{
		'id': 741,
		'n': '辽阳',
		'count': 2,
		'pinyinShort': 'ly',
		'pinyinFull': 'Liaoyang'
	},
	{
		'id': 663,
		'n': '兴化',
		'count': 2,
		'pinyinShort': 'xh',
		'pinyinFull': 'Xinghua'
	},
	{
		'id': 327,
		'n': '福清',
		'count': 2,
		'pinyinShort': 'fq',
		'pinyinFull': 'Fuqing'
	},
	{
		'id': 405,
		'n': '云浮',
		'count': 2,
		'pinyinShort': 'yf',
		'pinyinFull': 'Yunfu'
	},
	{
		'id': 977,
		'n': '奉化',
		'count': 2,
		'pinyinShort': 'fh',
		'pinyinFull': 'Fenghua'
	},
	{
		'id': 978,
		'n': '富阳',
		'count': 2,
		'pinyinShort': 'fy',
		'pinyinFull': 'Fuyang'
	},
	{
		'id': 301,
		'n': '阜阳',
		'count': 2,
		'pinyinShort': 'fy',
		'pinyinFull': 'Fuyang'
	},
	{
		'id': 988,
		'n': '临海',
		'count': 2,
		'pinyinShort': 'lh',
		'pinyinFull': 'Linhai'
	},
	{
		'id': 989,
		'n': '临安',
		'count': 2,
		'pinyinShort': 'la',
		'pinyinFull': 'Linan'
	},
	{
		'id': 810,
		'n': '肥城',
		'count': 2,
		'pinyinShort': 'fc',
		'pinyinFull': 'Feicheng'
	},
	{
		'id': 418,
		'n': '防城港',
		'count': 2,
		'pinyinShort': 'fcg',
		'pinyinFull': 'Fangchenggang'
	},
	{
		'id': 737,
		'n': '盖州',
		'count': 2,
		'pinyinShort': 'gz',
		'pinyinFull': 'Gaizhou'
	},
	{
		'id': 826,
		'n': '龙口',
		'count': 2,
		'pinyinShort': 'lk',
		'pinyinFull': 'Longkou'
	},
	{
		'id': 859,
		'n': '高平',
		'count': 2,
		'pinyinShort': 'gp',
		'pinyinFull': 'Gaoping'
	},
	{
		'id': 431,
		'n': '玉林',
		'count': 2,
		'pinyinShort': 'yl',
		'pinyinFull': 'Yulin'
	},
	{
		'id': 778,
		'n': '固原',
		'count': 2,
		'pinyinShort': 'gy',
		'pinyinFull': 'Guyuan'
	},
	{
		'id': 588,
		'n': '仙桃',
		'count': 2,
		'pinyinShort': 'xt',
		'pinyinFull': 'Xiantao'
	},
	{
		'id': 470,
		'n': '廊坊',
		'count': 2,
		'pinyinShort': 'lf',
		'pinyinFull': 'Langfang'
	},
	{
		'id': 1004,
		'n': '永康',
		'count': 2,
		'pinyinShort': 'yk',
		'pinyinFull': 'Yongkang'
	},
	{
		'id': 913,
		'n': '雅安',
		'count': 2,
		'pinyinShort': 'ya',
		'pinyinFull': 'Yaan'
	},
	{
		'id': 885,
		'n': '达州',
		'count': 2,
		'pinyinShort': 'dz',
		'pinyinFull': 'Dazhou'
	},
	{
		'id': 874,
		'n': '阳泉',
		'count': 2,
		'pinyinShort': 'yq',
		'pinyinFull': 'Yangquan'
	},
	{
		'id': 652,
		'n': '启东',
		'count': 2,
		'pinyinShort': 'qd',
		'pinyinFull': 'Qidong'
	},
	{
		'id': 434,
		'n': '安顺',
		'count': 2,
		'pinyinShort': 'as',
		'pinyinFull': 'Anshun'
	},
	{
		'id': 993,
		'n': '平湖',
		'count': 2,
		'pinyinShort': 'ph',
		'pinyinFull': 'Pinghu'
	},
	{
		'id': 821,
		'n': '莱阳',
		'count': 2,
		'pinyinShort': 'ly',
		'pinyinFull': 'Laiyang'
	},
	{
		'id': 767,
		'n': '通辽',
		'count': 2,
		'pinyinShort': 'tl',
		'pinyinFull': 'Tongliao'
	},
	{
		'id': 887,
		'n': '都江堰',
		'count': 2,
		'pinyinShort': 'djy',
		'pinyinFull': 'Dujiangyan'
	},
	{
		'id': 385,
		'n': '廉江',
		'count': 2,
		'pinyinShort': 'lj',
		'pinyinFull': 'Lianjiang'
	},
	{
		'id': 520,
		'n': '许昌',
		'count': 2,
		'pinyinShort': 'xc',
		'pinyinFull': 'Xuchang'
	},
	{
		'id': 916,
		'n': '资阳',
		'count': 2,
		'pinyinShort': 'zy',
		'pinyinFull': 'Ziyang'
	},
	{
		'id': 544,
		'n': '牡丹江',
		'count': 2,
		'pinyinShort': 'mdj',
		'pinyinFull': 'Mudanjiang'
	},
	{
		'id': 360,
		'n': '天水',
		'count': 2,
		'pinyinShort': 'ts',
		'pinyinFull': 'Tianshui'
	},
	{
		'id': 624,
		'n': '张家界',
		'count': 2,
		'pinyinShort': 'zgj',
		'pinyinFull': 'Zhangjiajie'
	},
	{
		'id': 589,
		'n': '孝感',
		'count': 2,
		'pinyinShort': 'xg',
		'pinyinFull': 'Xiaogan'
	},
	{
		'id': 905,
		'n': '内江',
		'count': 2,
		'pinyinShort': 'nj',
		'pinyinFull': 'Neijiang'
	},
	{
		'id': 335,
		'n': '南平',
		'count': 2,
		'pinyinShort': 'np',
		'pinyinFull': 'Nanping'
	},
	{
		'id': 734,
		'n': '东港',
		'count': 2,
		'pinyinShort': 'dg',
		'pinyinFull': 'Donggang'
	},
	{
		'id': 927,
		'n': '阿克苏',
		'count': 1,
		'pinyinShort': 'aks',
		'pinyinFull': 'Akesu'
	},
	{
		'id': 593,
		'n': '应城',
		'count': 1,
		'pinyinShort': 'yc',
		'pinyinFull': 'Yingcheng'
	},
	{
		'id': 486,
		'n': '涿州',
		'count': 1,
		'pinyinShort': 'zz',
		'pinyinFull': 'Zhuozhou'
	},
	{
		'id': 912,
		'n': '西昌',
		'count': 1,
		'pinyinShort': 'xc',
		'pinyinFull': 'Xichang'
	},
	{
		'id': 749,
		'n': '兴城',
		'count': 1,
		'pinyinShort': 'xc',
		'pinyinFull': 'Xingcheng'
	},
	{
		'id': 400,
		'n': '兴宁',
		'count': 1,
		'pinyinShort': 'xn',
		'pinyinFull': 'Xingning'
	},
	{
		'id': 620,
		'n': '湘乡',
		'count': 1,
		'pinyinShort': 'xx',
		'pinyinFull': 'Xiangxiang'
	},
	{
		'id': 344,
		'n': '漳平',
		'count': 1,
		'pinyinShort': 'zp',
		'pinyinFull': 'Zhangping'
	},
	{
		'id': 872,
		'n': '孝义',
		'count': 1,
		'pinyinShort': 'xy',
		'pinyinFull': 'Xiaoyi'
	},
	{
		'id': 5005,
		'n': '洋浦市',
		'count': 1,
		'pinyinShort': 'xps',
		'pinyinFull': 'yangpushi'
	},
	{
		'id': 592,
		'n': '宜都',
		'count': 1,
		'pinyinShort': 'yd',
		'pinyinFull': 'Yidu'
	},
	{
		'id': 404,
		'n': '英德',
		'count': 1,
		'pinyinShort': 'yd',
		'pinyinFull': 'Yingde'
	},
	{
		'id': 802,
		'n': '兴平',
		'count': 1,
		'pinyinShort': 'xp',
		'pinyinFull': 'Xingping'
	},
	{
		'id': 447,
		'n': '兴义',
		'count': 1,
		'pinyinShort': 'xy',
		'pinyinFull': 'Xingyi'
	},
	{
		'id': 970,
		'n': '宣威',
		'count': 1,
		'pinyinShort': 'xw',
		'pinyinFull': 'Xuanwei'
	},
	{
		'id': 768,
		'n': '乌海',
		'count': 1,
		'pinyinShort': 'wh',
		'pinyinFull': 'Wuhai'
	},
	{
		'id': 783,
		'n': '中卫',
		'count': 1,
		'pinyinShort': 'zw',
		'pinyinFull': 'Zhongwei'
	},
	{
		'id': 770,
		'n': '乌兰浩特',
		'count': 1,
		'pinyinShort': 'wlht',
		'pinyinFull': 'Wulanhot'
	},
	{
		'id': 747,
		'n': '瓦房店',
		'count': 1,
		'pinyinShort': 'wfd',
		'pinyinFull': 'Wafangdian'
	},
	{
		'id': 968,
		'n': '文山',
		'count': 1,
		'pinyinShort': 'ws',
		'pinyinFull': 'Wenshan'
	},
	{
		'id': 399,
		'n': '吴川',
		'count': 1,
		'pinyinShort': 'wc',
		'pinyinFull': 'Wuchuan'
	},
	{
		'id': 514,
		'n': '项城',
		'count': 1,
		'pinyinShort': 'xc',
		'pinyinFull': 'Xiangcheng'
	},
	{
		'id': 691,
		'n': '樟树',
		'count': 1,
		'pinyinShort': 'zs',
		'pinyinFull': 'Zhangshu'
	},
	{
		'id': 619,
		'n': '湘西',
		'count': 1,
		'pinyinShort': 'xx',
		'pinyinFull': 'Xiangxi'
	},
	{
		'id': 361,
		'n': '武威',
		'count': 1,
		'pinyinShort': 'ww',
		'pinyinFull': 'Wuwei'
	},
	{
		'id': 595,
		'n': '枝江',
		'count': 1,
		'pinyinShort': 'zj',
		'pinyinFull': 'Zhijiang'
	},
	{
		'id': 849,
		'n': '招远',
		'count': 1,
		'pinyinShort': 'zy',
		'pinyinFull': 'Zhaoyuan'
	},
	{
		'id': 799,
		'n': '铜川',
		'count': 1,
		'pinyinShort': 'tc',
		'pinyinFull': 'Tongchuan'
	},
	{
		'id': 679,
		'n': '贵溪',
		'count': 1,
		'pinyinShort': 'gx',
		'pinyinFull': 'Guixi'
	},
	{
		'id': 419,
		'n': '贵港',
		'count': 1,
		'pinyinShort': 'gg',
		'pinyinFull': 'Guigang'
	},
	{
		'id': 892,
		'n': '广汉',
		'count': 1,
		'pinyinShort': 'gh',
		'pinyinFull': 'Guanghan'
	},
	{
		'id': 795,
		'n': '韩城',
		'count': 1,
		'pinyinShort': 'hc',
		'pinyinFull': 'Hancheng'
	},
	{
		'id': 536,
		'n': '鹤岗',
		'count': 1,
		'pinyinShort': 'hg',
		'pinyinFull': 'Hegang'
	},
	{
		'id': 423,
		'n': '河池',
		'count': 1,
		'pinyinShort': 'hc',
		'pinyinFull': 'Hechi'
	},
	{
		'id': 570,
		'n': '汉川',
		'count': 1,
		'pinyinShort': 'hc',
		'pinyinFull': 'Hanchuan'
	},
	{
		'id': 676,
		'n': '丰城',
		'count': 1,
		'pinyinShort': 'fc',
		'pinyinFull': 'Fengcheng'
	},
	{
		'id': 888,
		'n': '峨眉山',
		'count': 1,
		'pinyinShort': 'ems',
		'pinyinFull': 'Emeishan'
	},
	{
		'id': 437,
		'n': '都匀',
		'count': 1,
		'pinyinShort': 'dy',
		'pinyinFull': 'Duyun'
	},
	{
		'id': 858,
		'n': '汾阳',
		'count': 1,
		'pinyinShort': 'fy',
		'pinyinFull': 'Fenyang'
	},
	{
		'id': 787,
		'n': '格尔木',
		'count': 1,
		'pinyinShort': 'gem',
		'pinyinFull': 'Geermu'
	},
	{
		'id': 678,
		'n': '高安',
		'count': 1,
		'pinyinShort': 'ga',
		'pinyinFull': 'Gaoan'
	},
	{
		'id': 736,
		'n': '阜新',
		'count': 1,
		'pinyinShort': 'fx',
		'pinyinFull': 'Fuxin'
	},
	{
		'id': 983,
		'n': '江山',
		'count': 1,
		'pinyinShort': 'js',
		'pinyinFull': 'Jiangshan'
	},
	{
		'id': 982,
		'n': '建德',
		'count': 1,
		'pinyinShort': 'jd',
		'pinyinFull': 'Jiande'
	},
	{
		'id': 682,
		'n': '吉安',
		'count': 1,
		'pinyinShort': 'ja',
		'pinyinFull': 'Jian'
	},
	{
		'id': 330,
		'n': '建阳',
		'count': 1,
		'pinyinShort': 'jy',
		'pinyinFull': 'Jianyang'
	},
	{
		'id': 354,
		'n': '酒泉',
		'count': 1,
		'pinyinShort': 'jq',
		'pinyinFull': 'Jiuquan'
	},
	{
		'id': 866,
		'n': '晋中',
		'count': 1,
		'pinyinShort': 'jz',
		'pinyinFull': 'Jinzhong'
	},
	{
		'id': 311,
		'n': '界首',
		'count': 1,
		'pinyinShort': 'js',
		'pinyinFull': 'Jieshou'
	},
	{
		'id': 571,
		'n': '洪湖',
		'count': 1,
		'pinyinShort': 'hh',
		'pinyinFull': 'Honghu'
	},
	{
		'id': 376,
		'n': '鹤山',
		'count': 1,
		'pinyinShort': 'hs',
		'pinyinFull': 'Heshan'
	},
	{
		'id': 466,
		'n': '衡水',
		'count': 1,
		'pinyinShort': 'hs',
		'pinyinFull': 'Hengshui'
	},
	{
		'id': 894,
		'n': '华蓥',
		'count': 1,
		'pinyinShort': 'hy',
		'pinyinFull': 'Huaying'
	},
	{
		'id': 540,
		'n': '佳木斯',
		'count': 1,
		'pinyinShort': 'jms',
		'pinyinFull': 'Jiamusi'
	},
	{
		'id': 539,
		'n': '虎林',
		'count': 1,
		'pinyinShort': 'hl',
		'pinyinFull': 'Hulin'
	},
	{
		'id': 378,
		'n': '化州',
		'count': 1,
		'pinyinShort': 'hz',
		'pinyinFull': 'Huazhou'
	},
	{
		'id': 348,
		'n': '敦煌',
		'count': 1,
		'pinyinShort': 'dh',
		'pinyinFull': 'Dunhuang'
	},
	{
		'id': 435,
		'n': '毕节',
		'count': 1,
		'pinyinShort': 'bj',
		'pinyinFull': 'Bijie'
	},
	{
		'id': 456,
		'n': '霸州',
		'count': 1,
		'pinyinShort': 'bz',
		'pinyinFull': 'Bazhou'
	},
	{
		'id': 882,
		'n': '巴中',
		'count': 1,
		'pinyinShort': 'bz',
		'pinyinFull': 'Bazhong'
	},
	{
		'id': 457,
		'n': '泊头',
		'count': 1,
		'pinyinShort': 'bt',
		'pinyinFull': 'Botou'
	},
	{
		'id': 324,
		'n': '长乐',
		'count': 1,
		'pinyinShort': 'cl',
		'pinyinFull': 'Changle'
	},
	{
		'id': 932,
		'n': '昌吉',
		'count': 1,
		'pinyinShort': 'cj',
		'pinyinFull': 'Changji'
	},
	{
		'id': 491,
		'n': '长葛',
		'count': 1,
		'pinyinShort': 'cg',
		'pinyinFull': 'Changge'
	},
	{
		'id': 562,
		'n': '安陆',
		'count': 1,
		'pinyinShort': 'al',
		'pinyinFull': 'Anlu'
	},
	{
		'id': 792,
		'n': '安康',
		'count': 1,
		'pinyinShort': 'ak',
		'pinyinFull': 'Ankang'
	},
	{
		'id': 530,
		'n': '安达',
		'count': 1,
		'pinyinShort': 'ad',
		'pinyinFull': 'Anda'
	},
	{
		'id': 951,
		'n': '安宁',
		'count': 1,
		'pinyinShort': 'an',
		'pinyinFull': 'Anning'
	},
	{
		'id': 349,
		'n': '白银',
		'count': 1,
		'pinyinShort': 'by',
		'pinyinFull': 'Baiyin'
	},
	{
		'id': 695,
		'n': '白山',
		'count': 1,
		'pinyinShort': 'bs',
		'pinyinFull': 'Baishan'
	},
	{
		'id': 412,
		'n': '百色',
		'count': 1,
		'pinyinShort': 'bs',
		'pinyinFull': 'Baise'
	},
	{
		'id': 731,
		'n': '大石桥',
		'count': 1,
		'pinyinShort': 'ddq',
		'pinyinFull': 'Dashiqiao'
	},
	{
		'id': 4732,
		'n': '儋州市',
		'count': 1,
		'pinyinShort': 'dz',
		'pinyinFull': 'danzhoush'
	},
	{
		'id': 564,
		'n': '丹江口',
		'count': 1,
		'pinyinShort': 'djk',
		'pinyinFull': 'Danjiangkou'
	},
	{
		'id': 492,
		'n': '登封',
		'count': 1,
		'pinyinShort': 'df',
		'pinyinFull': 'Dengfeng'
	},
	{
		'id': 633,
		'n': '东台',
		'count': 1,
		'pinyinShort': 'dt',
		'pinyinFull': 'Dongtai'
	},
	{
		'id': 956,
		'n': '迪庆',
		'count': 1,
		'pinyinShort': 'dq',
		'pinyinFull': 'Diqing'
	},
	{
		'id': 350,
		'n': '定西',
		'count': 1,
		'pinyinShort': 'dx',
		'pinyinFull': 'Dingxi'
	},
	{
		'id': 884,
		'n': '崇州',
		'count': 1,
		'pinyinShort': 'cz',
		'pinyinFull': 'Chongzhou'
	},
	{
		'id': 299,
		'n': '池州',
		'count': 1,
		'pinyinShort': 'cz',
		'pinyinFull': 'Chizhou'
	},
	{
		'id': 1755,
		'n': '澄迈县',
		'count': 1,
		'pinyinShort': 'cmx',
		'pinyinFull': 'Chengmaixian'
	},
	{
		'id': 953,
		'n': '楚雄',
		'count': 1,
		'pinyinShort': 'cx',
		'pinyinFull': 'Chuxiong'
	},
	{
		'id': 730,
		'n': '丹东',
		'count': 1,
		'pinyinShort': 'dd',
		'pinyinFull': 'Dandong'
	},
	{
		'id': 631,
		'n': '大丰',
		'count': 1,
		'pinyinShort': 'df',
		'pinyinFull': 'Dafeng'
	},
	{
		'id': 370,
		'n': '从化',
		'count': 1,
		'pinyinShort': 'ch',
		'pinyinFull': 'Conghua'
	},
	{
		'id': 541,
		'n': '鸡西',
		'count': 1,
		'pinyinShort': 'jx',
		'pinyinFull': 'Jixi'
	},
	{
		'id': 5018,
		'n': '上高市',
		'count': 1,
		'pinyinShort': 'sgs',
		'pinyinFull': 'Shanggaoshi'
	},
	{
		'id': 477,
		'n': '三河',
		'count': 1,
		'pinyinShort': 'sh',
		'pinyinFull': 'Sanhe'
	},
	{
		'id': 686,
		'n': '瑞昌',
		'count': 1,
		'pinyinShort': 'rc',
		'pinyinFull': 'Ruichang'
	},
	{
		'id': 798,
		'n': '商洛',
		'count': 1,
		'pinyinShort': 'sl',
		'pinyinFull': 'Shangluo'
	},
	{
		'id': 998,
		'n': '嵊州',
		'count': 1,
		'pinyinShort': 'sz',
		'pinyinFull': 'Shengzhou'
	},
	{
		'id': 340,
		'n': '邵武',
		'count': 1,
		'pinyinShort': 'sw',
		'pinyinFull': 'Shaowu'
	},
	{
		'id': 549,
		'n': '尚志',
		'count': 1,
		'pinyinShort': 'sz',
		'pinyinFull': 'Shangzhi'
	},
	{
		'id': 359,
		'n': '庆阳',
		'count': 1,
		'pinyinShort': 'qy',
		'pinyinFull': 'Qingyang'
	},
	{
		'id': 579,
		'n': '潜江',
		'count': 1,
		'pinyinShort': 'qj',
		'pinyinFull': 'Qianjiang'
	},
	{
		'id': 651,
		'n': '邳州',
		'count': 1,
		'pinyinShort': 'pz',
		'pinyinFull': 'Pizhou'
	},
	{
		'id': 1748,
		'n': '琼海',
		'count': 1,
		'pinyinShort': 'qh',
		'pinyinFull': 'Qionghai'
	},
	{
		'id': 444,
		'n': '仁怀',
		'count': 1,
		'pinyinShort': 'rh',
		'pinyinFull': 'Renhuai'
	},
	{
		'id': 832,
		'n': '曲阜',
		'count': 1,
		'pinyinShort': 'qf',
		'pinyinFull': 'Qufu'
	},
	{
		'id': 908,
		'n': '邛崃',
		'count': 1,
		'pinyinShort': 'ql',
		'pinyinFull': 'Qionglai'
	},
	{
		'id': 714,
		'n': '松原',
		'count': 1,
		'pinyinShort': 'sy',
		'pinyinFull': 'Songyuan'
	},
	{
		'id': 397,
		'n': '四会',
		'count': 1,
		'pinyinShort': 'sh',
		'pinyinFull': 'Sihui'
	},
	{
		'id': 871,
		'n': '朔州',
		'count': 1,
		'pinyinShort': 'sz',
		'pinyinFull': 'Shuozhou'
	},
	{
		'id': 582,
		'n': '松滋',
		'count': 1,
		'pinyinShort': 'sz',
		'pinyinFull': 'Songzi'
	},
	{
		'id': 316,
		'n': '桐城',
		'count': 1,
		'pinyinShort': 'tc',
		'pinyinFull': 'Tongcheng'
	},
	{
		'id': 554,
		'n': '铁力',
		'count': 1,
		'pinyinShort': 'tl',
		'pinyinFull': 'Tieli'
	},
	{
		'id': 584,
		'n': '天门',
		'count': 1,
		'pinyinShort': 'tm',
		'pinyinFull': 'Tianmen'
	},
	{
		'id': 909,
		'n': '什邡',
		'count': 1,
		'pinyinShort': 'sf',
		'pinyinFull': 'Shifang'
	},
	{
		'id': 4954,
		'n': '射阳',
		'count': 1,
		'pinyinShort': 'sys',
		'pinyinFull': 'Sheyangshi'
	},
	{
		'id': 1746,
		'n': '神农架',
		'count': 1,
		'pinyinShort': 'snjlo',
		'pinyinFull': 'Shennongjia'
	},
	{
		'id': 942,
		'n': '石河子',
		'count': 1,
		'pinyinShort': 'dhz',
		'pinyinFull': 'Shihezi'
	},
	{
		'id': 551,
		'n': '双鸭山',
		'count': 1,
		'pinyinShort': 'sys',
		'pinyinFull': 'Shuangyashan'
	},
	{
		'id': 550,
		'n': '双城',
		'count': 1,
		'pinyinShort': 'sc',
		'pinyinFull': 'Shuangcheng'
	},
	{
		'id': 341,
		'n': '石狮',
		'count': 1,
		'pinyinShort': 'ss',
		'pinyinFull': 'Shishi'
	},
	{
		'id': 358,
		'n': '平凉',
		'count': 1,
		'pinyinShort': 'pl',
		'pinyinFull': 'Pingliang'
	},
	{
		'id': 609,
		'n': '涟源',
		'count': 1,
		'pinyinShort': 'ly',
		'pinyinFull': 'Lianyuan'
	},
	{
		'id': 918,
		'n': '拉萨',
		'count': 1,
		'pinyinShort': 'ls',
		'pinyinFull': 'Lhasa'
	},
	{
		'id': 684,
		'n': '乐平',
		'count': 1,
		'pinyinShort': 'lp',
		'pinyinFull': 'Leping'
	},
	{
		'id': 961,
		'n': '丽江',
		'count': 1,
		'pinyinShort': 'lj',
		'pinyinFull': 'Lijiang'
	},
	{
		'id': 867,
		'n': '临汾',
		'count': 1,
		'pinyinShort': 'lf',
		'pinyinFull': 'Linfen'
	},
	{
		'id': 960,
		'n': '临沧',
		'count': 1,
		'pinyinShort': 'lc',
		'pinyinFull': 'Lincang'
	},
	{
		'id': 610,
		'n': '醴陵',
		'count': 1,
		'pinyinShort': 'll',
		'pinyinFull': 'Liling'
	},
	{
		'id': 740,
		'n': '开原',
		'count': 1,
		'pinyinShort': 'ky',
		'pinyinFull': 'Kaiyuan'
	},
	{
		'id': 382,
		'n': '开平',
		'count': 1,
		'pinyinShort': 'kp',
		'pinyinFull': 'Kaiping'
	},
	{
		'id': 439,
		'n': '凯里',
		'count': 1,
		'pinyinShort': 'kl',
		'pinyinFull': 'Kaili'
	},
	{
		'id': 938,
		'n': '喀什',
		'count': 1,
		'pinyinShort': 'ks',
		'pinyinFull': 'Kashgar'
	},
	{
		'id': 608,
		'n': '冷水江',
		'count': 1,
		'pinyinShort': 'lsj',
		'pinyinFull': 'Lengshuijiang'
	},
	{
		'id': 986,
		'n': '兰溪',
		'count': 1,
		'pinyinShort': 'lx',
		'pinyinFull': 'Lanxi'
	},
	{
		'id': 822,
		'n': '莱州',
		'count': 1,
		'pinyinShort': 'lz',
		'pinyinFull': 'Laizhou'
	},
	{
		'id': 334,
		'n': '南安',
		'count': 1,
		'pinyinShort': 'na',
		'pinyinFull': 'Nanan'
	},
	{
		'id': 902,
		'n': '绵竹',
		'count': 1,
		'pinyinShort': 'mz',
		'pinyinFull': 'Mianzhu'
	},
	{
		'id': 504,
		'n': '孟州',
		'count': 1,
		'pinyinShort': 'mz',
		'pinyinFull': 'Mengzhou'
	},
	{
		'id': 545,
		'n': '讷河',
		'count': 1,
		'pinyinShort': 'nh',
		'pinyinFull': 'Nehe'
	},
	{
		'id': 828,
		'n': '平度',
		'count': 1,
		'pinyinShort': 'pd',
		'pinyinFull': 'Pingdu'
	},
	{
		'id': 827,
		'n': '蓬莱',
		'count': 1,
		'pinyinShort': 'pl',
		'pinyinFull': 'Penglai'
	},
	{
		'id': 315,
		'n': '宁国',
		'count': 1,
		'pinyinShort': 'ng',
		'pinyinFull': 'Ningguo'
	},
	{
		'id': 502,
		'n': '漯河',
		'count': 1,
		'pinyinShort': 'lh',
		'pinyinFull': 'Luohe'
	},
	{
		'id': 991,
		'n': '龙泉',
		'count': 1,
		'pinyinShort': 'lq',
		'pinyinFull': 'Longquan'
	},
	{
		'id': 824,
		'n': '临清',
		'count': 1,
		'pinyinShort': 'lq',
		'pinyinFull': 'Linqing'
	},
	{
		'id': 869,
		'n': '吕梁',
		'count': 1,
		'pinyinShort': 'll',
		'pinyinFull': 'Lvliang'
	},
	{
		'id': 709,
		'n': '梅河口',
		'count': 1,
		'pinyinShort': 'mhk',
		'pinyinFull': 'Meihekou'
	},
	{
		'id': 4966,
		'n': '芒市',
		'count': 1,
		'pinyinShort': 'ms',
		'pinyinFull': 'Mangshi'
	},
	{
		'id': 578,
		'n': '麻城',
		'count': 1,
		'pinyinShort': 'mc',
		'pinyinFull': 'Macheng'
	}
];

let map = {};

for (let city of cities) {
	const fl = city.pinyinFull.slice(0, 1).toUpperCase();
	map[fl] = map[fl] ? [...map[fl], city] : [city];
}

let sortCities = [];
let cityIndexs = [];

Object.entries(map).map(([key, value]) => {
	sortCities.push({
		key,
		data: value
	});
	cityIndexs.push(key);
});

sortCities.sort((a, b) => {
	if (a.key > b.key) return 1;
	else if (a.key < b.key) return -1;
	else return 0;
});
cityIndexs.sort();
cityIndexs = ['定位', '最近', '最热', ...cityIndexs];

export default {
	indexs: cityIndexs,
	cities: sortCities,
	allcities: cities
};

// sortCities.map(item => console.log(item.key));
