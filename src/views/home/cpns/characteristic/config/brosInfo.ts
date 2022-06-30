import { getImgUrl } from '@/constant/imageBaseUrl';

// 0被动 1普攻 2主动 3大招
interface ISkillsDesc {
  title: string;
  type: 0 | 1 | 2 | 3;
  desc: string;
}

interface IInfo {
  // [key: string]: string;
  name: string;
  title: string;
  position: string;
  target: string;
  advantage: string;
  battlefield_desc: string;
  largeImageUrl: string;
  skillsUrl: string[];
  skillsDesc: ISkillsDesc[];
}

// interface IBro {
//   [bro: string]: IInfo;
// }

export const brosInfo: IInfo[] = [
  {
    name: '一娃',
    title: '近战输出 勇猛无双',
    position: '前排',
    target: '优先前排',
    advantage: '生命',
    battlefield_desc: '攻防一体，自身血量高，技能附带自身最大生命伤害',
    largeImageUrl: getImgUrl('/showRoles/broB1.png'),
    skillsUrl: [
      getImgUrl('/showRoles/skill_60011.png'),
      getImgUrl('/showRoles/skill_60012.png'),
      getImgUrl('/showRoles/skill_60013.png'),
      getImgUrl('/showRoles/skill_60014.png')
    ],
    skillsDesc: [
      {
        title: '普攻',
        type: 1,
        desc: '对个敌人造成单体伤害，额外造成自身最大生命百分比的伤害'
      },
      {
        title: '巨身术',
        type: 3,
        desc: '身躯巨大化，攻击提升,持续一段时间'
      },
      {
        title: '劈天裂地',
        type: 0,
        desc: '普通攻击时，随机对附近敌方造成溅射伤害，每隔一段时间触发一次'
      },
      {
        title: '力大无穷',
        type: 0,
        desc: '最大生命值按百分比提升'
      }
    ]
  },
  {
    name: '二娃',
    title: '远程群攻 输出稳定',
    position: '后排',
    target: '优先前排',
    advantage: '破击、命中',
    battlefield_desc: '稳定输出，无视格挡，降低敌人防御',
    largeImageUrl: getImgUrl('/showRoles/broB2.png'),
    skillsUrl: [
      getImgUrl('/showRoles/skill_60021.png'),
      getImgUrl('/showRoles/skill_60022.png'),
      getImgUrl('/showRoles/skill_60023.png'),
      getImgUrl('/showRoles/skill_60024.png')
    ],
    skillsDesc: [
      {
        title: '普攻',
        type: 1,
        desc: '普攻无视格挡，对敌人造成单体伤害，额外造成自身命中值百分比的伤害'
      },
      {
        title: '神光电眼',
        type: 3,
        desc: '技能破击率提升，对敌人造成群体伤害'
      },
      {
        title: '弱点击破',
        type: 0,
        desc: '技能无视格挡，对敌人造成单体伤害，并有一定概率降低目标防御值(概率受破几率影响），持续一段时间'
      },
      {
        title: '千里眼',
        type: 0,
        desc: '破击造成的伤害提升百分比'
      }
    ]
  },
  {
    name: '三娃',
    title: '近战肉盾 不倒守护',
    position: '前排',
    target: '优先前排',
    advantage: '防御、格挡',
    battlefield_desc: '近战肉盾，格挡反击，嘲讽控制',
    largeImageUrl: getImgUrl('/showRoles/broB3.png'),
    skillsUrl: [
      getImgUrl('/showRoles/skill_60031.png'),
      getImgUrl('/showRoles/skill_60032.png'),
      getImgUrl('/showRoles/skill_60033.png'),
      getImgUrl('/showRoles/skill_60034.png')
    ],
    skillsDesc: [
      {
        title: '普攻',
        type: 1,
        desc: '对敌人造成单体伤害，额外造成自身防御造成一定比例的伤害'
      },
      {
        title: '金刚不坏',
        type: 3,
        desc: '嘲讽所有目标，提升自身减伤率，持续一段时间'
      },
      {
        title: '刀枪不入',
        type: 0,
        desc: '增加自身格挡率,格挡成功触发反击，每隔一段时间触发一次'
      },
      {
        title: '铜头铁臂',
        type: 0,
        desc: '提升反击造成的伤害'
      }
    ]
  },
  {
    name: '四娃',
    title: '远程输出 无视防御',
    position: '后排',
    target: '优先前排',
    advantage: '暴击',
    battlefield_desc: '群体输出，附带燃烧伤害，无视防御',
    largeImageUrl: getImgUrl('/showRoles/broB4.png'),
    skillsUrl: [
      getImgUrl('/showRoles/skill_60041.png'),
      getImgUrl('/showRoles/skill_60042.png'),
      getImgUrl('/showRoles/skill_60043.png'),
      getImgUrl('/showRoles/skill_60044.png')
    ],
    skillsDesc: [
      {
        title: '普攻',
        type: 1,
        desc: '对多个敌人造成伤害'
      },
      {
        title: '火龙赤焰',
        type: 3,
        desc: '触发暴击时，附加燃烧，每秒持续造成伤害'
      },
      {
        title: '烈火轰雷',
        type: 2,
        desc: '对敌人造成伤害,并对异常状态的目标造成额外伤害'
      },
      {
        title: '三昧真火',
        type: 0,
        desc: '燃烧伤害提升'
      }
    ]
  },
  {
    name: '五娃',
    title: '远程治疗 妙手回春',
    position: '后排',
    target: '优先前排',
    advantage: '生命、治疗加成',
    battlefield_desc: '恢复急救，大大增加队伍的战斗续航',
    largeImageUrl: getImgUrl('/showRoles/broB5.png'),
    skillsUrl: [
      getImgUrl('/showRoles/skill_60051.png'),
      getImgUrl('/showRoles/skill_60052.png'),
      getImgUrl('/showRoles/skill_60053.png'),
      getImgUrl('/showRoles/skill_60054.png')
    ],
    skillsDesc: [
      {
        title: '普攻',
        type: 1,
        desc: '对敌人造成单体伤害，额外恢复血量最低的友方血量'
      },
      {
        title: '水龙怒涛',
        type: 3,
        desc: '恢复生命值最低的队友，并提升伤害，持续一段时间'
      },
      {
        title: '甘露之雨',
        type: 2,
        desc: '按照五娃最大生命值，治疗血量最低的1名队友，'
      },
      {
        title: '吞江吐海',
        type: 0,
        desc: '自身治疗效果永久提升'
      }
    ]
  },
  {
    name: '六娃',
    title: '近战爆发 后排切入',
    position: '前排',
    target: '优先后排',
    advantage: '暴击、闪避',
    battlefield_desc: '单体爆发，擅长切后排，打开战斗局面',
    largeImageUrl: getImgUrl('/showRoles/broB6.png'),
    skillsUrl: [
      getImgUrl('/showRoles/skill_60061.png'),
      getImgUrl('/showRoles/skill_60062.png'),
      getImgUrl('/showRoles/skill_60063.png'),
      getImgUrl('/showRoles/skill_60064.png')
    ],
    skillsDesc: [
      {
        title: '普攻',
        type: 1,
        desc: '对敌人造成单体伤害，额外造成自身闪避值一定比例的伤害，优先攻击后排目标'
      },
      {
        title: '随心如意',
        type: 3,
        desc: '提升暴击率，同时对1个敌人造成伤害，优先攻击后排目标'
      },
      {
        title: '无影无踪',
        type: 0,
        desc: '提升暴击率，触发暴击后伤害提升，持续一段时间'
      },
      {
        title: '隐身术',
        type: 0,
        desc: '暴击造成的伤害提升'
      }
    ]
  },
  {
    name: '七娃',
    title: '全能职业 攻守合一',
    position: '后排',
    target: '优先敌方攻击最高',
    advantage: '破击、降功',
    battlefield_desc: '群体爆发，拥有可以收集和释放能量的宝葫芦',
    largeImageUrl: getImgUrl('/showRoles/broB7.png'),
    skillsUrl: [
      getImgUrl('/showRoles/skill_60071.png'),
      getImgUrl('/showRoles/skill_60072.png'),
      getImgUrl('/showRoles/skill_60073.png'),
      getImgUrl('/showRoles/skill_60074.png')
    ],
    skillsDesc: [
      {
        title: '普攻',
        type: 1,
        desc: '对1个敌人造成单体伤害，优先攻击攻击最高的目标'
      },
      {
        title: '壶里乾坤',
        type: 3,
        desc: '对1个敌人造成伤害，并有概率缴械目标，降低目标攻击（概率受暴击率影响），持续一段时间.'
      },
      {
        title: '离心咒',
        type: 2,
        desc: '七娃的宝葫芦每秒会增加一定能量，当宝能量蓄满后，对敌人造成伤害'
      },
      {
        title: '宝葫芦',
        type: 0,
        desc: '宝葫芦能量每秒自动增加，同时七娃每击杀一名敌人，便将其吸入葫芦中增加能量'
      }
    ]
  }
];
