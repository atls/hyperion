package com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.DragHandleSize
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun DragHandleShape.Companion.default(): DragHandleShape =
    DragHandleShape(
        height = DragHandleSize.height,
        width = DragHandleSize.width,
        cornerRadius = CornerRadius.xl6,
        paddings = PaddingValues(top = Space.g8)
    )
