package com.atls.hyperion.ui.components.card.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun CardShape.Companion.medium(): CardShape =
    CardShape(
        cornerRadius = CornerRadius.xl,
        padding = PaddingValues(Space.lg),
        borderWidth = BorderStroke.none
    )
