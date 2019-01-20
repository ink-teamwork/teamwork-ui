<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-container>
            <Sidebar/>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    import Header from '../components/Header';
    import Sidebar from '../components/Sidebar';

    export default {
        components: {
            Header,
            Sidebar,
        },
    }
</script>