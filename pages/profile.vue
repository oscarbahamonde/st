<script>
export default {
    name: 'Profile',
    data() {
        return {
            user: "",
            photoURL:"https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=",
            wallpaperURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAMFBMVEXJycmamprMzMzFxcWdnZ2goKCjo6PCwsLHx8e7u7unp6e4uLiwsLCtra3AwMC1tbWpnO67AAABOUlEQVR4nO3Yy46DIBiA0YJ4qb3M+7/tiLbpjMByopOcs2hI3JAv+NdwuQAAAAAAAAAAAAAAAAAAAAAAAAAAAPAPxaajd3Y+49w3DNej93Y2cQgtKUxH7+5sUhq7qmkI49GbO5s+7c7Pe1hFsQr7WN38mlVilfax5mVWrQuxSrtYcUivwS5WaX+yrinc16ElVqkY8JfJgG/5xBpvvx6IVfrE6sPz5wOxSu9YcfkbTF1ejTczq+EVK96XVqnPyyGszcQqvWJdc6sU5hgfIQ35aIlV2mJ1aRPuudr68SBWaYs1hHet7fcpVk2OlV+9HbFqlljxq7zMmsWqyCerdp0lVkW/vHG1e3ixKvo0NK7g0/a9xceteQcfHkfv7Xymxh1851wBAAAAAAAAAAAAAAAAAAAAAAAAAMAf+wbOkwdCSXzOnAAAAABJRU5ErkJggg=="
        }
    },
    mounted: function () {
        if(!localStorage.getItem('user')){
      this.user = this.$route.query 
        localStorage.setItem('user', JSON.stringify(this.user)
        )         }
        else {
            this.user=JSON.parse(localStorage.getItem('user'))
        }          
    },
    methods: {
        logout: function () {
            localStorage.removeItem('user')
            this.$router.push('/')
        }
    }
}
</script>
<template>
 <div>
    <v-card class="mx-auto" max-width="1000" tile>
      <v-img height="200" :src="wallpaperURL"></v-img>
      <v-row style="margin:2.5%;position:absolute; top: 130px">

                  <v-list-item>
                   <v-list-item-avatar size="100">
                      <img
                        :src="photoURL"
                        :alt="user.username"
                      >
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="title" style="margin-top:20px;">{{user.username}}</v-list-item-title>
                      <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
    </v-row>
  </v-card>
  <Uploader />
 </div>
</template>
