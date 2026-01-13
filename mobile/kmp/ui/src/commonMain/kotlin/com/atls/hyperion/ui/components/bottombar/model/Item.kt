package com.atls.hyperion.ui.components.bottombar.model

import androidx.compose.ui.graphics.painter.Painter

data class BottomBarItem(
    val icon: Painter,
    val label: String? = null
)
