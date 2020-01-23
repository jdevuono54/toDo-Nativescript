<template>
    <Page class="home">
        <ActionBar>
            <Label text="ToDo"></Label>
        </ActionBar>

        <List_item></List_item>
    </Page>
</template>

<script>
    import List_item from "../components/List_item";
    export default {
        components: {List_item},
        computed: {
        }
    };
</script>

<style scoped lang="scss">
    @import '../../../node_modules/@nativescript/theme/scss/variables/blue';

    .home{
        background-color: #d0d0d0;
    }

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
