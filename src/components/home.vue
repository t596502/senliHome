<template>
    <div class="home">
        <div class="nav">
            <img class="icon-img" src="@/img/icon/logo.png" />
        </div>
        <div class="banner">
                <v-carousel hide-controls height="290">
                    <v-carousel-item>
                        <img class="banner-img" src="@/img/banner.jpg" />
                    </v-carousel-item>
                    <v-carousel-item>
                        <img class="banner-img" src="@/img/banner.jpg" />
                    </v-carousel-item>
                </v-carousel>
        </div>
        <section class="footer">
            <div class="_26ea0201">微信电话支持： 每天 8:00-22:00</div>
            <div class="_896feba4">400-885-1024</div>
            <div class="msg">
                <v-btn color="#56B838"><v-icon color="#fff">email</v-icon><span class="msg-text">与 森莉 聊天</span></v-btn>

            </div>
        </section>
    </div>
</template>


<script>
    export default {
        name: "home",
        data () {
            return {
                value:{
                left: true,
                right: true
            },
                items: [
                    {
                        src: '../img/banner.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        background: #f6f6f6;
        .nav{
            width: 100%;
            height: 52px;
            background: #000;
            .icon-img{
                width: 100%;
                height: 52px;
            }
        }
        .banner{
            width: 100%;
            height: 290px;
            .banner-img{
                width: 100%;
                height: 290px;
            }
        }
        section{
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
                text-align: center;
                .msg-text{
                    color: #fff;
                    margin-left: 5px;
                }
            }
        }
    }

</style>
