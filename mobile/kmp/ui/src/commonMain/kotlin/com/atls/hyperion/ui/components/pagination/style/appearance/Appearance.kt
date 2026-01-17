package com.atls.hyperion.ui.components.pagination.style.appearance

import androidx.compose.ui.graphics.Color
import com.atls.hyperion.ui.components.pagination.state.PaginationState

data class PaginationAppearance(
    val activeColor: Color,
    val disabledColor: Color,
    val backgroundColor: Color = Color.Transparent
) {
    companion object

    fun fromState(state: PaginationState): Color =
        when (state) {
            PaginationState.Active -> activeColor
            PaginationState.Disabled -> disabledColor
        }
}
