<template>
    <div class="reg-text">
        <div class="reg-label">{{regLabel}}</div>
        <div class="reg-cont">{{regCont}}</div>
    </div>
</template>
<script>
    export default {
        props:['reg-label','reg-cont']
    }
</script>