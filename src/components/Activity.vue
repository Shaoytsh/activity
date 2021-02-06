<template>
  <div class="">
    <div class="bg-box">
      <div class="bg bg-1"></div>
    </div>
    <div class="main">
      <h1 class="title">天龙活动大全</h1>
      <div class="description">
        <span
          >本活动大全收集了天龙八部最新活动领取方式！部分活动需要通过长按扫码的方式进入，每天都可领取，赶快点击右上角，收藏起来~</span
        >
        <p>
          <span
            >游戏内点开背包，右上角属性"其他"，设置生日，生日日期设置当天的时间，会得到邮件提示去苏州天师领取生日礼物，包含500元宝，500帮贡，紫色令牌，保星符！</span
          >
        </p>
      </div>
      <div class="other">
        <span class="say-some">
          {{ say }}
        </span>
        <img v-image-preview
          class="qr"
          src= "https://img-blog.csdnimg.cn/20210206132158531.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          alt="加微信入群"
        />
        <span class="say-some">
          {{ sayRemark }}
        </span>
      </div>
      <div class="activities">
        <div class="act" v-for="(item, index) in activited" :key="index">
          <h2 class="act-title">{{ index + 1 }}.{{ item.title }}</h2>
          <p v-if="item.time && item.time.length == 2">
            <span class="active-time"
              >活动时间：{{ item.time[0] }}——{{ item.time[1] }}</span
            >
          </p>
          <p>
            <span class="act-desc">{{ item.description }}</span>
          </p>
          <p class="go-get" v-if="item.href">
            <a target="_blank" :href="item.href">进入领取</a>
          </p>
          <div v-if="item.icon" class="icon-wrapper">
            <img v-image-preview class="icon" :src="item.icon" v-if="item.icon" alt="" />
            <span class="icon-desc">长按扫码领取</span>
          </div>
          
          <p class="go-get" v-if="item.remark">
            <span class="act-desc">{{ item.remark }}</span>
          </p>
          <div v-if="item.desc_img"  class="desc_img">
             <div >
            <img v-image-preview class="item-desc-img" :src="item.desc_img[0]" alt="" />
            </div>
              <div >
            <img v-image-preview class="item-desc-img" :src="item.desc_img[1]" alt="" />
              </div>
              <div >
            <img v-image-preview class="item-desc-img" :src="item.desc_img[2]"  alt="" />
              </div>
          </div>
        </div>
      </div>
      <div class="other">
        <span class="say-some">
          {{ say }}
        </span>
        <img v-image-preview
          class="qr"
          src= "https://img-blog.csdnimg.cn/20210206132158531.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          alt="加微信入群"
        />
        <span class="say-some">
          {{ sayRemark }}
        </span>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      activities: [
        {
          title: "每日登陆签到领积分",
          description: "一月签到1000积分，每日登陆即可签到领取,老区可领！",
           icon:
            "https://img-blog.csdnimg.cn/20210206133825646.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70",
          href: "",
        },
        {
          title: "冬日暖心欧皇",
          description: "奖励包含麒麟元神等",
          icon:
            "https://img-blog.csdnimg.cn/20210206133929452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
        },
        
        {
          title: "腾讯视频荣耀玩家活动",
          description: "进入后往下滑动,成为对应等级的荣耀玩家即可领取奖励,也可以组队好友获取荣耀积分！",
          href:
            "https://magic.iwan.qq.com/magic-act/110141/index.html?ovscroll=0&page=index&id=110141&actpayid=10002369&actadid=10002369110141&isGameZone=1&ADTAG2=txsp.grzx-2.jdyx-1&reportParams=iwan_personal_rpk&page_tag=hotgames&refer_page=hotgames&isDarkMode=0&uiType=REGULAR&url_from=share&second_share=0&share_from=wxf",
        },
        {
          title: "江湖周游记活动",
          description: "进入链接后往下滑动一下，登录游戏后当周的周日23:59前领取一次",
          href: "https://tlbb.qq.com/act/3732/a20200909tlbb/runOff.html",
        },
        {
          title: "天龙八部手游圈打卡",
          description: "每日都可以领取积分、洗练丹等，还包含累计打卡奖励。进入链接后，点击右边“打卡”两个小字领取",
          icon: "https://img-blog.csdnimg.cn/20210206134007278.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70",
        },
        {
          title: "周六福利日活动",
          description: "周六领取每周刷新"+"\n包含三级宝石*1+天灵丹*10+200积分",
          icon:
            "https://img-blog.csdnimg.cn/20210206134025955.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70",
        },
        {
          title: "爱玩荣耀用户签到活动",
          description:"每日领取荣耀用户"+
            "\n每日领取,需要是爱玩荣耀用户,具体规则看礼包介绍",
          href:
            "https://iwan.qq.com/m/login/login-qt.htm?ru=https%3A%2F%2Fiwan.qq.com%2Fhonour%2Fgrowsign%3FreportParams%3Diwan_activity_rpk%26page_tag%3Dgrowacts%26refer_page%3Dgrowacts%26isDarkMode%3D0%26uiType%3DREGULAR%26ADTAG%3Dtxsp.qdyy.ymfx%26url_from%3Dshare%26second_share%3D0%26share_from%3Dwxf&ADTAG2=txsp.qdyy.ymfx&reportParams=iwan_activity_rpk&page_tag=growacts&refer_page=growsign",
        },
        {
          title: "每日签到活动",
          description: "每日领取,新手礼包,签到礼包",
          href:"https://tlbb.qq.com/act/2923/a20200521xiaom/index.html",
        },
        {
          title: "爱玩链接活动",
          description: "包含每日、每周、新手、半周年庆等多个活动",
          href:"https://iwan.qq.com/auto/act.htm?id=1766&from=singlemessage&isappinstalled=0&isShare=true"
        },
        {
          title: "公众号每日签到活动",
          description: "每日领取,每日记得签到",
          href:
            "https://gzhcos.qq.com/awp-activity/common/?ADTAG=tlbb.198#/?id=198&game=tlbb",
        },
        {
          title: "微信公众号活动",
          description:
            "每日领取"+"\n每日都可以领的天龙八部手游公众号礼包",
          href:
            "https://game.weixin.qq.com/cgi-bin/h5/static/giftcenter_v2/game_gift.html?appid=wx44b60f3ea0534cd7#wechat_redirect",
        },
        {
          title: "爱玩公众号活动",
          description: "每日礼包每周礼包新人礼包"+"\n每日礼包、每周礼包、会员礼包、新人礼包、特权礼包",
          href:"https://iwan.qq.com/gamewx/giftcenter",
        },
        {
          title: "腾讯视频爱玩活动",
          description: "新人礼包每日礼包每周礼包"+"\n新人活动、每周活动、特权活动、每日活动",
          href: "https://iwan.qq.com/community/giftcenter?gameid=24161&ADTAG=txsp.qdyy.ymfx&ptag=4_7.2.5.22206_wxf&from=singlemessage",
        },
        {
          title: "wegame活动",
          description: "每日礼包每周礼包新手礼包"+"\n该礼包必须下载掌上WeGameAPP，包含每日、每周、新手、暑假等级等活动礼包",
          href:"https://m.wegame.qq.com/app/pointstore/community/index.html?share_tgp_id=2032829497&from_type=giftlist&game_id=0&gameid=609&from=timeline&isappinstalled=0",
        },
        {
          title: "新手福袋4",
          description: "新微信可领仅限一次"+"\n新微信可领：150绑元+三级宝石+英雄酒+巴天虎坐骑",
          icon: "https://img-blog.csdnimg.cn/20210206134119880.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70",
        },
        {
          title: "新手福袋3",
          description: "新微信可领仅限一次"+"\n新微信可领：150绑元+三级宝石+英雄酒+巴天虎坐骑",
          icon:
            "https://img-blog.csdnimg.cn/20210206134135640.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70",
        },
        {
          title: "新手福袋2",
          description: "新微信可领仅限一次"+"\n新微信可领：150绑元+三级宝石+英雄酒+巴天虎坐骑",
          icon:
            "https://img-blog.csdnimg.cn/20210206134155747.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70",
        },
        {
          title: "新手福袋1",
          description: "新微信可领仅限一次"+"\n新微信可领：150绑元+三级宝石+英雄酒+巴天虎坐骑",
          icon:
            "https://img-blog.csdnimg.cn/20210206134211469.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70",
        },
        {
          title: "腾讯新闻APP",
          description: "每日礼包"+"\n每日签到礼包，需跳转腾讯新闻进行领取",
          href:
            "https://n.ssp.qq.com/giftDetail?game_id=4663&pageType=gameHallGiftList&ishare=1&adShareFrom=wx&devid=20762a461bfb0274&qimei=a000007edde616&uid=100187431131&shareto=wx&from=singlemessage",
        },
        {
          title: "应用宝APP活动",
            description: "付费礼包"+"\n苹果用户不能领取,安卓用户需要30元开通!",
          href:
            "https://qzs.qq.com/open/mobile/mid-jump/index.html?dest=tmast%3A%2F%2Fwebview%3Fmode%3D0%26url%3Dhttps%253A%252F%252Fqzs.qq.com%252Fopen%252Fbaymax%252F11%252F12086_f17d9a62186ddb3dfe227c82b97ed031_0.html%253Ffrom%253Dgroupmessage%2526g_f%253D5758%2526srctype%253D62%2526ticket%253D&text=%E5%A4%A9%E9%BE%99%E5%85%AB%E9%83%A8%E9%9C%B8%E6%9C%8D%E6%9C%88%E5%8D%A1",
        },
        {
          title: "心悦俱乐部APP活动",
          description: "G分兑换每日礼包每周礼包每日抽奖"
          +"\r\n包含G分兑换、见面礼包、每周礼包、每月礼包、每日抽奖，需在心悦俱乐部APP中领取",
          href:"https://xinyue.qq.com/appshare/share.shtml?gid=1241&xylevel=4&ADTAG=tgi.wx.share.message",
        },
        {
          title: "掌上道聚城APP活动",
          description: "注册礼包每日签到等级礼包" 
          +"\n需下载掌上道具城，包含注册礼包、每日签到、等级礼包"
          +"\niPhone用户请在APP Store中下载",
            remark:"操作步骤："
          +"\n1、下载掌上道聚城APP"
          +"\n2、进入APP，选择首页->游戏礼包"
             +"\n3、点击导航栏手游，一直往下滑，直到找到（天龙八部手游），排名靠后，多滑一会儿"
          +"\n4、领取礼包"
          +"\n图片详情：",
          desc_img: ["https://img-blog.csdnimg.cn/20210206134356985.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          ,"https://img-blog.csdnimg.cn/20210206134411559.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          ,"https://img-blog.csdnimg.cn/20210206134425592.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"],
        },
        {
          title: "闪现一下APP活动",
          description: "积分兑换" 
          +"\n登录即会赠送积分，使用积分可兑换礼包" 
          +"\niPhone用户请到App Store中下载",
          remark:"操作步骤："
          +"\n1、下载闪现一下APP，并进入"
          +"\n2、选择天龙八部手游"
             +"\n3、点击礼包"
          +"\n4、兑换、领取礼包"
          +"\n图片详情：",
           desc_img: ["https://img-blog.csdnimg.cn/20210206134457420.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          ,"https://img-blog.csdnimg.cn/20210206134508486.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          ,"https://img-blog.csdnimg.cn/20210206134526269.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"],
        
        },
        {
          title: "腾讯爱玩APP活动",
          description: "仅限安卓每日礼包每周礼包新人礼包" 
          +"\n需下载腾讯爱玩APP领取，包含每日、每周、新人、特权礼包" 
          +"\n仅限安卓用户",
          remark:"操作步骤："
          +"\n1、下载APP"
          +"\n2、点击导航栏礼包"
             +"\n3、选择底部“天龙八部”"
          +"\n操作如图所示：",
           desc_img: ["https://img-blog.csdnimg.cn/20210206134547928.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          ,"https://img-blog.csdnimg.cn/20210206134600386.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          ,""],
        },
        {
          title: "QQ音乐活动",
          description:
            "注册礼包每日礼包每周礼包 注册礼包、每周签到、每日登录、绿钻专属、绿钻周礼包、绿钻日礼包",
          href:
            "https://y.qq.com/m/acclevel/lb_info.html?encrypt_uin=NeSA7eoPNeSF&gId=6&from=singlemessage",
        },
        {
          title: "腾讯视频积分兑换活动",
          description: "每周兑换积分兑换"
          +"\n每周可兑换一次,需要有腾讯视频的积分才能兑换，包含50积分、龙元晶珀 * 1、灵动海豚(30天) * 1",
          href:
            "https://film.qq.com/x/credit_mall/route/productDetail?productId=60000220&ptag=usercenter&url_from=share&second_share=0&share_from=wxf&from=singlemessage",
        },
        {
          title: "腾讯游戏管家APP",
          description:
            "每日签到"
          +"\n需下载腾讯游戏管家APP，包含洗练丹绑元、藏宝图等"
          +"\niPhone用户请到App Store中下载",
          remark:"操作步骤："
          +"\n1、下载腾讯游戏管家APP"
          +"\n2、进入APP，选择游戏中心"
          +"\n3、搜索天龙八部并选择"
          +"\n4、点击礼包进入领取"
          +"\n图片提示：",
             desc_img: ["https://img-blog.csdnimg.cn/20210206134625891.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          ,"https://img-blog.csdnimg.cn/20210206134638588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"
          ,"https://img-blog.csdnimg.cn/20210206134649647.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjQ5NA==,size_16,color_FFFFFF,t_70"],
        },
      ],
      say:
        "加我VX持续更新最新礼包，拉你进礼包分享群",
      sayRemark: "如果长按无法识别，请长按保存图片打开微信扫一扫，并且选择该图片",
    };
  },
  mounted () {
 
  },
  computed: {
    activited() {
      return this.activities.filter((act) => {
        if (
          !act.time ||
          act.time.length != 2 ||
          new Date(act.time[1]) >= Date.now()
        ) {
          return true;
        }
      });
    },
  },
  methods: {
   
  }
};
</script>

<style scoped>
.main {
  padding: 0 10px;
}

.title {
  text-align: center;
}

.go-get {
  text-align: center;
}

.go-get a {
  color: #f00;
}

.act {
  margin: 30px 0;
  display: block;
}

.act-desc {
  font-size: 14px;
  color: #333;
}

.act .icon {
  max-width: 100px;
  max-height: 100px;
  display: block;
  margin: 0 auto;
}

.icon-wrapper {
  text-align: center;
}

.icon-desc {
  font-size: 12px;
  color: #f00;
}

.active-time {
  font-size: 14px;
  color: #333;
}

.act .item-desc-img {
  max-width: 200px;
  max-height: 13rem;
  display: block;
  margin: 10 auto;
}

.other {
  margin-top: 50px;
}

.qr {
  width: 200px;
  height: 260px;
  display: block;
  margin: 20px auto;
}

.say-some {
    color: red;
  margin: 20px 0;
  font-size: 16px;
}

.bg {
  width: 100%;
  background-size: 360px;
}

.bg-1 {
  background-image: url(http://image.xingqingshe.com/image/www/0/750/2020/04/14/n5SONI6240068806-.jpg);
  height: 360px;
   width: 100%;
  background-repeat: no-repeat;
}

h1 {
  font-size: 22px;
}

h2 {
  font-size: 18px;
}

.activity_body {
  padding: 0;
  background-image: url(https://res.wx.qq.com/wechatgame/portal/tool/27672/587e08c5c5c7f98d51e9d861aed4bf25.jpg);
  width: 100%;
  margin: 0 auto;
}
.bg-box {
  position: relative !important;
}
.act .desc_img{
  display: flex;
  text-align:center;

}
</style>
