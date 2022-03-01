<template>
    <input class="border-gray-300 rounded-md shadow-sm dark:placeholder:text-white dark:border-gray-500 dark:bg-slate-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: ['modelValue'],

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.input.focus()
            }
        }
    })
</script>
