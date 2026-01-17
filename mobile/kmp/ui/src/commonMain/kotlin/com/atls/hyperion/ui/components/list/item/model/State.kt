package com.atls.hyperion.ui.components.list.item.model

sealed interface ListItemState {
    data object Selected: ListItemState
    data object Unselected: ListItemState
}
