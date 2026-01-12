package com.atls.hyperion.ui.primitives.layout.grid

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Weight

@Composable
fun Grid(
    items: List<@Composable () -> Unit>,
    columns: Int,
    orientation: GridOrientation,
    modifier: Modifier = Modifier,
    horizontalSpacing: Dp,
    verticalSpacing: Dp
) {
    when (orientation) {
        GridOrientation.Vertical -> {
            Column(modifier = modifier) {
                items.chunked(columns).forEach { rowItems ->
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(horizontalSpacing),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        rowItems.forEach { item ->
                            Box(modifier = Modifier.weight(Weight.full)) {
                                item()
                            }
                        }

                        if (rowItems.size < columns) {
                            repeat(columns - rowItems.size) {
                                Spacer(modifier = Modifier.weight(Weight.full))
                            }
                        }
                    }
                    VerticalSpacer(verticalSpacing)
                }
            }
        }

        GridOrientation.Horizontal -> {
            Row(modifier = modifier) {
                items.chunked(columns).forEach { columnItems ->
                    Column(
                        verticalArrangement = Arrangement.spacedBy(verticalSpacing),
                        modifier = Modifier.weight(Weight.full)
                    ) {
                        columnItems.forEach { item ->
                            item()
                        }

                        if (columnItems.size < columns) {
                            repeat(columns - columnItems.size) {
                                Spacer(modifier = Modifier.weight(Weight.full))
                            }
                        }
                    }
                }
            }
        }
    }
}
