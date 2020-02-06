<template>
    <ScrollView>
        <StackLayout class="list_item" orientation="vertical">
            <item v-for="(item, index) in items" :value="item"></item>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import Item from "./Item";
    import item_todo from "../models/item_todo";
    export default {
        name: "List_item",
        components: {Item},
        data: function(){
            return {
                items: [
                    new item_todo("premier", true),
                    new item_todo("premier", false),
                    new item_todo("premier", false),
                    new item_todo("premier", false),
                    new item_todo("premier", false),
                    new item_todo("premier", false),
                    new item_todo("premier", false),
                    new item_todo("premier", false),
                    new item_todo("premier", false),
                ]
            }
        },
        created(){
            this.$bus.$on('removeItem',(item) => {
                this.items.splice(this.items.indexOf(item),1)
            })
        }
    }
</script>

<style scoped lang="scss">
    .list_item{
        padding: 20;

        .item{
            margin-top: 20;
        }
    }
</style>
