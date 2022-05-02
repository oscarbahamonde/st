<template>
    <div class="mt-24">
        <dropzone id="foo" ref="foo" :options="options" :destroyDropzone="true"></dropzone>
    </div>
</template>
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
    components: {
        Dropzone
    },
    data() {
        return {
            options: {
                url: "http://httpbin.org/anything"
            }
        }
    },
    mounted() {
        const instance = this.$refs.foo.dropzone
    }
}
</script>
