package com.atls.hyperion.ui.components.pagination

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.pagination.state.PaginationState
import com.atls.hyperion.ui.components.pagination.style.appearance.PaginationAppearance
import com.atls.hyperion.ui.components.pagination.style.shape.PaginationShape
import com.atls.hyperion.ui.components.pagination.ui.PaginationItem

@Composable
fun Pagination(
    currentPage: Int,
    count: Int,
    appearance: PaginationAppearance,
    shape: PaginationShape,
    modifier: Modifier = Modifier,
    onPageClick: ((Int) -> Unit)? = null
) {
    Row(
        horizontalArrangement = Arrangement.spacedBy(shape.spacing),
        verticalAlignment = Alignment.CenterVertically,
        modifier = modifier.background(appearance.backgroundColor)
    ) {
        for (index in 0 until count) {
            val state = when {
                index == currentPage -> PaginationState.Active
                else -> PaginationState.Disabled
            }
            val itemColor = appearance.fromState(state)
            val itemSize = shape.sizeFromState(state)

            PaginationItem(
                itemColor = itemColor,
                size = itemSize,
                cornerRadius = shape.cornerRadius,
                onClick = onPageClick?.let { { it(index) } }
            )
        }
    }
}
