package com.atls.hyperion.ui.theme.tokens.borders

import androidx.compose.ui.unit.dp

internal const val DASH_LENGTH_MULTIPLIER = 3f
internal const val DASH_GAP_MULTIPLIER = 2f

object BorderWidth {
    val none = 0.dp
    val xs = 0.7.dp
    val sm = 1.dp
    val md = 2.dp
}

object BorderStroke { //TODO remove after components refactoring
    val none = 0.dp
    val tiny = 1.dp
    val medium = 8.dp
    val large = 12.dp
    val huge = 16.dp
}
