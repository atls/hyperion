package com.atls.hyperion.ui.components.pagination.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpSize

@Composable
fun PaginationItem(
    itemColor: Color,
    size: DpSize,
    cornerRadius: Dp,
    onClick: (() -> Unit)? = null
) {
    Box(
        modifier = Modifier
            .size(size)
            .background(
                color = itemColor,
                shape = RoundedCornerShape(cornerRadius)
            )
            .let {
                if (onClick != null) {
                    it.clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        onClick = onClick
                    )
                } else it
            }
    )
}
