package com.atls.hyperion.ui.components.modal.bottom.dragHandle.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.colors.LegacyColors

@Composable
fun DragHandleAppearance.Companion.default(): DragHandleAppearance =
    DragHandleAppearance(
        backgroundColor = LegacyColors.Palette.gray
    )
