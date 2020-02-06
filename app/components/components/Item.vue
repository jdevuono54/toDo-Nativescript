<template>
    <AbsoluteLayout class="item">
        <StackLayout @tap="goTodetails" class="arrierePlan" orientation="vertical" v-bind:class="{'valid': this.value.done}">
            <Label :text="value.content"/>
        </StackLayout>


        <Switch class="premierPlan" v-model="value.done"/>

        <Button @tap="removeItem" text="Supprimer" v-if="value.done" />
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
            },
            removeItem(){
                confirm('Confirm').then(result => {
                    if(result ===true){
                        this.$bus.$emit('removeItem',this.value)
                    }});
            }
        }
    }
</script>

<style lang="scss" scoped>
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
