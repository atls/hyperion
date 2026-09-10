package com.atls.hyperion.ui.components.switch

import androidx.compose.foundation.border
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.selection.toggleable
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.LocalContentAlpha
import androidx.compose.material.LocalContentColor
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.semantics.Role
import com.atls.hyperion.ui.components.switch.styles.shape.SwitchShape
import com.atls.hyperion.ui.primitives.elevation

@Composable
internal fun SwitchContainer(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    modifier: Modifier,
    enabled: Boolean,
    interactionSource: MutableInteractionSource,
    background: Color,
    border: Color,
    thumbColor: Color,
    shape: SwitchShape,
    content: @Composable () -> Unit,
) {
    val trackShape = RoundedCornerShape(shape.cornerRadius)

    Box(
        modifier = modifier
            .width(shape.width)
            .elevation(
                elevation = shape.elevation,
                backgroundColor = background,
                shape = trackShape
            )
            .border(
                width = shape.borderWidth,
                color = border,
                shape = trackShape
            )
            .toggleable(
                value = checked,
                enabled = enabled,
                role = Role.Switch,
                interactionSource = interactionSource,
                indication = null,
                onValueChange = onCheckedChange
            )
            .padding(shape.borderWidth)
            .padding(shape.paddings),
        contentAlignment = Alignment.CenterStart
    ) {
        CompositionLocalProvider(
            LocalContentColor provides thumbColor,
            LocalContentAlpha provides 1f,
            content = content
        )
    }
}
