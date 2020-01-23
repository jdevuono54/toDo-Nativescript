<template>
    <StackLayout orientation="vertical" class="item" v-bind:class="{'valid': this.value.done}" @tap="goTodetails">
        <Label :text="value.content"   />

        <Switch v-model="value.done" class="tttt"/>

    </StackLayout>
</template>

<script>
    import Details_item from "../views/Details_item";

    export default {
        name: "Item",
        props: ['value'],
        methods:{
            goTodetails(event) {
                this.$navigateTo(Details_item, {props: {value: this.value,}})
            }
        }
    }
</script>

<style scoped lang="scss">
    .item{
        border-radius: 10%;
        height: 200;
        border-color: black;
        border-width: 1;
        border-style: solid;
        background-color: white;

    }
    .valid{
        background-color: green;
    }
</style>
