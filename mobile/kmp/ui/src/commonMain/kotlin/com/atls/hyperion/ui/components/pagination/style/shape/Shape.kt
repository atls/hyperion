package com.atls.hyperion.ui.components.pagination.style.shape

import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpSize
import com.atls.hyperion.ui.components.pagination.state.PaginationState

class PaginationShape(
    val activeSize: DpSize,
    val disabledSize: DpSize,
    val spacing: Dp,
    val cornerRadius: Dp
) {
    companion object

    fun sizeFromState(state: PaginationState): DpSize =
        when (state) {
            PaginationState.Active -> activeSize
            PaginationState.Disabled -> disabledSize
        }
}

