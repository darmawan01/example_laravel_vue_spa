<template>
    <div>
       {{ product.name }} | {{ product.price }} | user id : {{product.user_id}}
    </div>
</template>

<script>
    export default {
        props: ["product"]
    };
</script>