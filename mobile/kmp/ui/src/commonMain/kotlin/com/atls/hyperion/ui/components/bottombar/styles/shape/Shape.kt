package com.atls.hyperion.ui.components.bottombar.styles.shape

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp

sealed class BottomBarShape {

    abstract val height: Dp
    abstract val elevation: Dp
    abstract val cornerRadius: Dp
    abstract val dividerWidth: Dp
    abstract val tabSpacing: Dp
    abstract val iconSize: Dp
    abstract val shape: RoundedCornerShape

    data class WithLabel(
        override val height: Dp,
        override val elevation: Dp,
        override val cornerRadius: Dp,
        override val dividerWidth: Dp,
        override val tabSpacing: Dp,
        override val iconSize: Dp,
        val labelPadding: Dp,
        val labelTypography: TextStyle,
        override val shape: RoundedCornerShape = RoundedCornerShape(cornerRadius)
    ) : BottomBarShape() {
        companion object
    }

    data class WithoutLabel(
        override val height: Dp,
        override val elevation: Dp,
        override val cornerRadius: Dp,
        override val dividerWidth: Dp,
        override val tabSpacing: Dp,
        override val iconSize: Dp,
        override val shape: RoundedCornerShape = RoundedCornerShape(cornerRadius)
    ) : BottomBarShape() {
        companion object
    }
}
