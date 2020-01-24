<template>
    <AbsoluteLayout class="item">
        <StackLayout orientation="vertical" v-bind:class="{'valid': this.value.done}" @tap="goTodetails" class="arrierePlan">
            <Label :text="value.content"/>
        </StackLayout>


        <Switch v-model="value.done" class="premierPlan"/>
    </AbsoluteLayout>

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

    .arrierePlan{
        height: 100%;
        width: 100%;
    }
    .premierPlan{
        left:50;
        top:50;
    }
</style>
