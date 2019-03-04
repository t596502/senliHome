<template>
    <mu-scale-transition>
    <div class="modal-wrapper" v-if="show" @click="closeModal">
        <div class="modal-tip flex-column" @click.stop>
            <div v-if="topImage" class="am-modal-image am-modal-image-topImageSize">
                <image :src="topImage" />
            </div>
            <div class="modal-header">
                <slot name="header" />
            </div>
            <slot name="content" />
            <!--<div class="footer" v-if="footer">-->
                <!--<slot name="footer"  />-->
            <!--</div>-->
            <div @click="closeModal" class="icon-cloose">
                <mu-icon value="highlight_off" size="40" color="#fff"></mu-icon>
            </div>
        </div>
    </div>
    </mu-scale-transition>
</template>

<script>
    export default {
        name: "modal",
        props:{
            show:{
                type:Boolean,
                default:true,
            },
            topImage:{
                type:String,
                default:'',
            }
        },
        methods:{
            closeModal() {
                this.$emit('close');
            }
        },
    }
</script>

<style lang="scss" scoped>
    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.65);
    }
    .modal-wrapper.no-bg{
        background: none;
    }
    .modal-wrapper .modal-tip {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 26px;
        width: 86%;
        background: white;
        border-radius: 15px;
        padding: 16px 20px;
        box-sizing: border-box;
    }
    .am-modal-image {
        display: flex;
        justify-content: center;
    }
    .am-modal-image-lg image {
        /* width: 270px;
        height: 156px; */
    }
    .am-modal-image-md image {
        width: 327px;
        height: 318px;
    }
    .modal-wrapper .modal-tip{
        top: 120px;
    }
    .modal-wrapper .modal-tip .modal-header{
        /* align-self: center; */
        text-align: center;
        color: #333333;
        margin: 0 0 20px 0;
        font-size:18px;
        color:rgba(51,51,51,1);
    }
    .modal-wrapper .modal-tip .footer{
        margin: 56px auto 0 auto;
    }
    .modal-wrapper .modal-tip .icon-cloose{
        position: absolute;
        bottom: -80px;
        left: 50%;
        transform: translate(-50%);
    }
</style>
