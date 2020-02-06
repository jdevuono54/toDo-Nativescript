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
                    new item_todo("1", true),
                    new item_todo("2", false),
                    new item_todo("3", false),
                    new item_todo("4", false),
                    new item_todo("5", false),
                    new item_todo("6", false),
                    new item_todo("7", false),
                    new item_todo("8", false),
                    new item_todo("9", false),
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
