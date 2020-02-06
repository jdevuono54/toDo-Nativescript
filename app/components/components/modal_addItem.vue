<template>
    <stack-layout>
        <TextField v-model="itemVal" hint="Contenu" class="champs"/>
        <Button text="Ajouter" @tap="addItem" class="champs" :isEnabled="itemVal != null"/>
    </stack-layout>
</template>

<script>
    import item_todo from "../models/item_todo";

    export default {
        name: "modal_addItem",
        data: function () {
            return {
                itemVal:null
            }
        },
        methods:{
            addItem(){
                this.$bus.$emit('addItem',new item_todo(this.itemVal,false))
                this.$modal.close();
            }
        }
    }
</script>

<style scoped>
    .champs{
        width: 50%;
        margin: 10%;
    }
</style>
