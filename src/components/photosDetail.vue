<template>
    <div class="photos-list">
        <mu-flex justify-content="center">
            <mu-paper :z-depth="1">
                <mu-grid-list :cell-height="250" class="gridlist-demo">
                    <mu-sub-header>Title</mu-sub-header>
                    <mu-grid-tile v-for="(tile, index) in list" :key="index">
                        <img :src="tile.image" preview="index" preview-text="描述文字" class="list-img">
                        <span slot="title">{{tile.title}}</span>
                        <span slot="subTitle">by <b>{{tile.author}}</b></span>
                    </mu-grid-tile>
                </mu-grid-list>
            </mu-paper>
        </mu-flex>
    </div>

</template>

<script>
    import img1 from '@/img/1.jpg';
    import img2 from '@/img/2.jpg';
    import img3 from '@/img/3.jpg';
    import img4 from '@/img/4.jpg';
    import img5 from '@/img/5.jpg';
    import img6 from '@/img/6.jpg';
    import img7 from '@/img/7.jpg';
    import img8 from '@/img/8.jpg';

    export default {
        name: "photosDetail",
        data() {
            return {
                list: [{
                    image: img1,
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    image: img2,
                    title: 'Burger',
                    author: 'Linyu'
                },
                {
                    image: img3,
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    image: img4,
                    title: 'Burger',
                    author: 'Linyu'
                },
                {
                    image: img5,
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    image: img6,
                    title: 'Burger',
                    author: 'Linyu'
                },
                {
                    image: img7,
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    image: img8,
                    title: 'Burger',
                    author: 'Linyu'
                },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .photos-list {
        width: 100%;

        .list-img {
            width: 100%;
        }

        /*.gridlist-demo{*/
        /*width: 360px;*/
        /*height: 450px;*/
        /*overflow-y: auto;*/
        /*}*/
    }
</style>
