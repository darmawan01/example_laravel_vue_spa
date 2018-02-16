<template>
    <div>
        <div class="body">
            <div class="form-group">
                <input v-model="name" type="text" placeholder="Your Name" />
            </div>
            <div class="form-group">
                <input v-model="email" type="email" placeholder="Your Email" />
            </div>
            <div class="form-group">
                <input v-model="password" type="password" placeholder="Your Password"/>
            </div>
            <div class="form-group">
                <button type="submit">Register</button>
            </div>
        </div>

        <pre>
            {{$data}}
        </pre>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               name:'',
               email:'',
               password:''
           }
       } 
    }
</script>

<style >

</style>