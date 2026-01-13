package com.atls.hyperion.ui.components.bottombar

import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.text.style.TextAlign
import com.atls.hyperion.ui.components.bottombar.styles.appearance.BottomBarAppearance
import com.atls.hyperion.ui.components.bottombar.styles.appearance.Colors
import com.atls.hyperion.ui.components.bottombar.styles.appearance.primary
import com.atls.hyperion.ui.components.bottombar.styles.shape.BottomBarShape

@Composable
fun BottomBarTab(
    icon: Painter,
    label: String?,
    selected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    appearance: BottomBarAppearance = BottomBarAppearance.primary(),
    shape: BottomBarShape,
) {
    val tabColors = appearance.colors.tabColors
    val iconColor = if (selected) tabColors.activeColor else tabColors.inactiveColor

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier.clickable(
            interactionSource = remember { MutableInteractionSource() },
            indication = null,
            onClick = onClick
        )
    ) {
        Icon(
            painter = icon,
            contentDescription = label ?: "",
            tint = iconColor,
            modifier = Modifier.size(
                when (shape) {
                    is BottomBarShape.WithLabel -> shape.iconSize
                    is BottomBarShape.WithoutLabel -> shape.iconSize
                }
            )
        )

        if (shape is BottomBarShape.WithLabel && label != null) {
            Spacer(modifier = Modifier.height(shape.labelPadding))

            val labelColor = when (val colors = tabColors) {
                is Colors.TabColors.WithLabel ->
                    if (selected) colors.activeLabelColor else colors.inactiveLabelColor

                is Colors.TabColors.WithoutLabel ->
                    iconColor
            }

            Text(
                text = label,
                color = labelColor,
                style = shape.labelTypography,
                textAlign = TextAlign.Center
            )
        }
    }
}
