<template>
<div class="m_home">
        <Header></Header>
        <Top></Top>
        <Experience id="experience"></Experience>
        <Ability></Ability>
        <Project></Project>
        <Contact></Contact>
</div>
</template>

<script>
import Header from "../components/cmobile/header.vue"
import Top from "../components/cmobile/top.vue"
import Experience from "../components/cmobile/experience.vue"
import Ability from "../components/cmobile/ability"
import Project from "../components/cmobile/project"
import Contact from "../components/cmobile/contact"
export default {
    name:'m-home',
    components:{
        Header,
        Top,
        Experience,
        Ability,
        Project,
        Contact
    },
}
</script>

<style scoped>


</style>