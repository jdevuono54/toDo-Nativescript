<template>
    <Page class="page">
        <ActionBar title="Details" class="action-bar" />
        <StackLayout>
            <Label :text="value.content"/>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        name: "Details_item",
        props: ['value'],
    }
</script>

<style scoped>

</style>
