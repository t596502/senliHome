<template>
    <div class="production-list">
        <mu-paper :z-depth="1" class="demo-list-wrap">
            <mu-list textline="two-line">
                <!--<mu-sub-header inset>Folders</mu-sub-header>-->
                <mu-list-item avatar button v-for="(item ,index) in 4" :key="index" :to="'/photosDetail?index='+index">
                    <mu-list-item-action>
                        <mu-avatar color="blue">
                            <mu-icon value="assignment"></mu-icon>
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>Photos</mu-list-item-title>
                        <mu-list-item-sub-title>Jan {{9+index}}, 2014</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-button icon>
                            <mu-icon value="info"></mu-icon>
                        </mu-button>
                    </mu-list-item-action>
                </mu-list-item>
            </mu-list>
            <!--<mu-divider inset></mu-divider>-->
        </mu-paper>
    </div>
</template>

<script>
    export default {
        name: "productionList"
    }
</script>

<style lang="scss" scoped>
    .production-list{
    }
    .demo-list-wrap {
        width: 100%;
        /*max-width: 360px;*/
        overflow: hidden;
    }
</style>
