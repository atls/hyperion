package com.atls.hyperion.ui.components.bottomBar.model

import androidx.compose.ui.graphics.painter.Painter

data class BottomBarItem(
    val icon: Painter,
    val label: String? = null
)
