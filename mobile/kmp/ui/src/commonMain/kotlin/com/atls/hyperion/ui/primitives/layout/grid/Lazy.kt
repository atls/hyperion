package com.atls.hyperion.ui.primitives.layout.grid

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyGridScope
import androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp

@Composable
fun LazyGrid(
    columns: Int,
    orientation: GridOrientation,
    modifier: Modifier = Modifier,
    horizontalSpacing: Dp,
    verticalSpacing: Dp,
    content: LazyGridScope.() -> Unit
) {
    when (orientation) {
        GridOrientation.Vertical -> {
            LazyVerticalGrid(
                columns = GridCells.Fixed(columns),
                modifier = modifier,
                horizontalArrangement = Arrangement.spacedBy(horizontalSpacing),
                verticalArrangement = Arrangement.spacedBy(verticalSpacing),
                content = content
            )
        }

        GridOrientation.Horizontal -> {
            LazyHorizontalGrid(
                rows = GridCells.Fixed(columns),
                modifier = modifier,
                horizontalArrangement = Arrangement.spacedBy(horizontalSpacing),
                verticalArrangement = Arrangement.spacedBy(verticalSpacing),
                content = content
            )
        }
    }
}
