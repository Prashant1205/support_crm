<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white">
    <div class="navbar-wrapper">
        <div class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                    <li v-if="$auth.check()" class="nav-item">
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <!--<li v-if="!$auth.check()" class="pull-right">-->
                        <!--<router-link :to="{ name: 'login' }">Login</router-link>-->
                    <!--</li>-->
                    <!--<li v-if="$auth.check()" class="pull-right">-->
                        <!--<router-link :to="{ name: 'register' }">Register</router-link>-->
                    <!--</li>-->
                    <li v-if="$auth.check()" class="nav-item">
                        <router-link :to="{ name: 'listuser' }">User List</router-link>
                    </li>
                    <!--<li v-if="$auth.check()" class="pull-right">-->
                    <!--<router-link :to="{ name: 'create' }">Create Account</router-link>-->
                    <!--</li>-->
                    <li v-if="$auth.check()" class="nav-item">
                        <a href="#" @click.prevent="$auth.logout()">Logout</a>
                    </li>
                </ul>
        </div>
    </div>
    </nav>
        <div class="panel-body">
            <router-view></router-view>
        </div>
</div>
</template>
