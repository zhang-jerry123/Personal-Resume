<template>
    <div class="dropdown_content">
            <p class="content_e" @click="clickExp">{{$t('m.menuExperience')}}</p>
            <p class="content_a" @click="clickAb">{{$t('m.menuAbility')}}</p>
            <p class="content_p" @click="clickPro">{{$t('m.menuProject')}}</p>
            <p class="content_c" @click="clickCon">{{$t('m.menuContact')}}</p>
    </div>
</template>

<script>
export default {
    name:'dc',
    data(){
        return{
            page:true
        }
    },
    methods:{
        clickExp(){
            // this.page = 50
            // this.$emit('pagechange',this.page)
            this.page = false
            this.$emit('pagechange',this.page)
            document.documentElement.scrollTop=550
        },
        clickAb(){
            this.page = false
            this.$emit('pagechange',this.page)
            document.documentElement.scrollTop=1050
        },
        clickPro(){
            this.page = false
            this.$emit('pagechange',this.page)
            document.documentElement.scrollTop=1950
        },
        clickCon(){
            this.page = false
            this.$emit('pagechange',this.page)
            document.documentElement.scrollTop=2700
        }
    }
}
</script>

<style scoped>
.dropdown_content{top:200px;padding: 0 0;display:block;position: absolute;top:40px;background-color: #f9f9f9;min-width: 100px;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);padding: 12px 16px;}
p{padding: 5px 10px 10px ;}
</style>