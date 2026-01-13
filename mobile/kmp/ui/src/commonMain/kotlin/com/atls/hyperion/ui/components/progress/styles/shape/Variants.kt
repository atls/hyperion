package com.atls.hyperion.ui.components.progress.styles.shape

import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius

fun ProgressShape.Companion.default(): ProgressShape =
    ProgressShape(
        cornerRadius = CornerRadius.full,
        strokeWidth = BorderStroke.medium,
        trailWidth = BorderStroke.medium
    )

fun ProgressShape.Companion.thick(): ProgressShape =
    ProgressShape(
        cornerRadius = CornerRadius.full,
        strokeWidth = BorderStroke.huge,
        trailWidth = BorderStroke.large
    )
