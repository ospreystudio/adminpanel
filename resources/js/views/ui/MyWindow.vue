<template>
    <div class="popup">
        <div class="popup__header">
            <span style="color: #cccccc"><h2>Settings</h2></span>
            <span>
            <i class="material-icons" style="color: white; cursor: pointer" @click="close">close</i>
        </span>
        </div>
        <div class="popup__content">
            <slot></slot>
        </div>
        <div class="popup__footer">
            <my-button >Save</my-button>
            <my-button @click="close">Close</my-button>

        </div>
    </div>
</template>

<script>
export default {
    name: "my-window",
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped lang="scss">
.popup {
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 400px;
    background-color: #1a202c;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5), 0 5px 0 rgba(0, 0, 0, 0.2);

    &__header, &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__content {
        display: flex;
        justify-content: center;
        align-content: center;
    }

}

</style>
