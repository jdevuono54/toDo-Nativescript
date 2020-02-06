<template>
    <grid-layout rows="auto, *">
        <SegmentedBar v-model="filtre" @selectedIndexChange="reloadFiltre">
            <SegmentedBarItem title="all" />
            <SegmentedBarItem title="ok" />
            <SegmentedBarItem title="pasok" />
        </SegmentedBar>
        <ScrollView row="1">
            <StackLayout class="list_item" orientation="vertical">
                <item v-for="(item, index) in itemsFiltred" :value="item"></item>
            </StackLayout>
        </ScrollView>
        <fab row="1" icon="" rippleColor="#f1f1f1" class="fab-button" @tap="addItem"></fab>

    </grid-layout>
</template>

<script>
    import Item from "./Item";
    import item_todo from "../models/item_todo";
    import modal_addItem from "./modal_addItem";

    export default {
        name: "List_item",
        components: {Item},
        data: function () {
            return {
                filtre:null,
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
                ],
                itemsFiltred:[]
            }
        },
        created() {
            this.itemsFiltred = this.items
            this.$bus.$on('removeItem', (item) => {
                this.items.splice(this.items.indexOf(item), 1)
            })
            this.$bus.$on('addItem', (item) => {
                this.items.unshift(item)
                this.reloadFiltre()
            })
        },
        methods:{
            addItem(){
                this.$showModal(modal_addItem);
            },
            reloadFiltre(){
                switch (this.filtre) {
                    case 0:
                        this.itemsFiltred = this.items;
                        break;
                    case 1:
                        this.itemsFiltred = this._.filter(this.items,['done', true])
                        break;
                    case 2:
                        this.itemsFiltred = this._.filter(this.items,['done', false])
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .fab-button{
        height: 70;
        width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles
        margin: 15;
        background-color: #0f83dd;
        horizontal-align: right;
        vertical-align: bottom;
        color: white;
    }
    .list_item {
        padding: 20;

        .item {
            margin-top: 10;
        }
    }
</style>
