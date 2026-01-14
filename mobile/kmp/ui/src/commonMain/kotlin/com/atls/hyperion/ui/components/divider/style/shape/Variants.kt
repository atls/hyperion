package com.atls.hyperion.ui.components.divider.style.shape

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke

@Composable
fun DividerShape.Companion.default(): DividerShape =
    DividerShape(
        thickness = BorderStroke.tiny
    )
