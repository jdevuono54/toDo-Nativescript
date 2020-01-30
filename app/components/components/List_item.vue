<template>
    <ScrollView>
        <StackLayout class="list_item" orientation="vertical">
            <item v-for="(item, index) in items" :value="item"></item>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import Item from "./Item";
    export default {
        name: "List_item",
        components: {Item},
        data: function(){
            return {
                items: [
                    {"content" : "premier", "done" : true},
                    {"content" : "deuxieme", "done" : false},
                    {"content" : "troisieme", "done" : false},
                    {"content" : "premier", "done" : false},
                    {"content" : "deuxieme", "done" : false},
                    {"content" : "troisieme", "done" : false},
                    {"content" : "premier", "done" : false},
                    {"content" : "deuxieme", "done" : false},
                    {"content" : "troisieme", "done" : false},
                    {"content" : "premier", "done" : false},
                    {"content" : "deuxieme", "done" : false},
                    {"content" : "troisieme", "done" : false},
                    {"content" : "premier", "done" : false},
                    {"content" : "deuxieme", "done" : false},
                    {"content" : "troisieme", "done" : false}
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
