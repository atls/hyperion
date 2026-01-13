package com.atls.hyperion.ui.components.list.model

sealed interface SelectionState<T> {
    fun isSelected(item: T): Boolean

    data class Single<T>(val selectedItem: T) : SelectionState<T> {
        override fun isSelected(item: T) = item == selectedItem
    }

    data class Multiple<T>(val selectedItems: Set<T>) : SelectionState<T> {
        override fun isSelected(item: T) = selectedItems.contains(item)
    }
}
