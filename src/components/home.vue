<template>
    <div class="home">
        <!--<div class="nav">-->
            <!--<img class="icon-img" src="@/img/icon/logo.png" />-->
        <!--</div>-->
        <mu-appbar :z-depth="1" style="width: 100%;" color="grey800">
            <mu-button icon slot="left" @click="open = !open">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
            <!--Title-->
            <mu-button flat slot="right">
                <img class="icon-img" src="@/img/icon/logo.png" />
            </mu-button>
        </mu-appbar>
        <div class="banner">
            <!--
                <mu-carousel hide-controls height="290">
                    <mu-carousel-item>
                        <img class="banner-img" src="@/img/banner.jpg" />
                    </mu-carousel-item>
                    <mu-carousel-item>
                        <img class="banner-img" src="@/img/banner.jpg" />
                    </mu-carousel-item>
                </mu-carousel>
                -->
            <mu-card-media title="森莉美妆工作室" sub-title="Image Sub Title">
                <img src="@/img/banner.jpg">
            </mu-card-media>
        </div>

        <section class="home-section">
            <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
            <mu-card-text>
                散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                似乎在诉说着！
            </mu-card-text>
        </section>

        <section class="footer">
            <div class="_26ea0201">微信电话支持： 每天 8:00-22:00</div>
            <div class="_896feba4">400-885-1024</div>
            <div class="msg" >
                <mu-button color="#56B838" textColor="#fff" @click="modalShow = true"><mu-icon color="#fff" value="mail">email</mu-icon>与 森莉 聊天</mu-button>
            </div>
        </section>

        <mu-drawer :open.sync="open" :docked="docked">
            <mu-list>
                <mu-list-item to="/productionList" button>
                    <mu-list-item-title >
                        作品集
                    </mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Menu Item 2</mu-list-item-title>
                </mu-list-item>
                <mu-list-item  @click="open = false" button>
                    <mu-list-item-title>Close</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </mu-drawer>
        <modal :show="modalShow" v-on:close="modalShow = false">
            <div slot="header">您的私人美妆顾问</div>
            <div slot="content" class="modal-content">
                <img class="modal-img" src="https://www.tapole.cn/assets/images/qr_wechat@2x.png" alt="二维码">
                <mu-card-text>微信电话支持： 每天 8:00-22:00</mu-card-text>
                <p class="phone">400-885-1024</p>
            </div>
        </modal>
    </div>
</template>

<script>
    import modal from '@/base/modal';
    export default {
        name: "home",
        components:{
            modal
        },
        data () {
            return {
                docked: false,
                open: false,
                position: 'left',
                modalShow:false
            }
        },
        methods:{
            goProductionList() {
                console.log(1);
            },
            showModal(){
                console.log(222);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .home{
        background: #f6f6f6;
        overflow: hidden;
        .nav{
            width: 100%;
            height: 52px;
            background: #000;

        }
        .icon-img{
            width: 260px;
            height: 56px;
        }
        .banner{
            width: 100%;
            /*height: 290px;*/
            .banner-img{
                width: 100%;
                height: 190px;
            }
        }
        .footer{
            ._26ea0201 {
                color: #777;
                text-align: center;
                margin: 0 auto;
                padding-top: 30px;
            }
            ._896feba4 {
                text-align: center;
                margin-top: 10px;
                font-size: 230%;
                font-weight: 200;
            }
            .msg {
                margin-top: 10px;
                padding-bottom: 20px;
                text-align: center;
                .msg-text{
                    color: #fff;
                    margin-left: 5px;
                }
            }
        }

        .modal-content{
            text-align: center;
            .modal-img{

                width: 200px;
                height: 200px;
            }
            .phone{
                font-size: 30px;
                font-weight: 200;
            }
        }


    }

</style>
