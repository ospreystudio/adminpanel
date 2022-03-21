<template>
    <div class="container">
        <Header />
        <div class="content">
            <Sidebar />
            <Users />
        </div>
    </div>
</template>

<script>

import Header from "../ui/Header";
import Users from "./Users";
import Sidebar from "./Sidebar";
export default {
    name: "Dashboard",
    components: {
        Users,
        Sidebar,
        Header
    }
}
</script>

<style scoped>

</style>
