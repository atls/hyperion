package com.atls.hyperion.ui.components.list.item.style.appearance

import com.atls.hyperion.ui.components.list.item.model.ListItemState

data class TextListItemAppearance(
    val selected: TextListItemAppearanceColors,
    val unselected: TextListItemAppearanceColors
) {
    companion object

    fun fromState(state: ListItemState) =
        when (state) {
            ListItemState.Selected -> this.selected
            ListItemState.Unselected -> this.unselected
        }
}
