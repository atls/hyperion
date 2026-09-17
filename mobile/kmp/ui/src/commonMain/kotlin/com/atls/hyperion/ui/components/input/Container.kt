package com.atls.hyperion.ui.components.input

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.components.input.styles.appearance.Colors
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.primitives.elevation
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation

@Composable
internal fun InputContainer(
    modifier: Modifier,
    colors: Colors,
    elevation: Elevation?,
    borderWidth: Dp,
    shape: InputShape,
    content: @Composable () -> Unit
) {
    val containerShape = RoundedCornerShape(shape.cornerRadius)
    val sizedModifier = modifier
        .widthIn(min = shape.minWidth)
        .heightIn(min = shape.minHeight)
    val styledModifier = if (elevation != null) {
        sizedModifier.elevation(
            elevation = elevation,
            backgroundColor = colors.backgroundColor,
            shape = containerShape
        )
    } else {
        sizedModifier.background(colors.backgroundColor, containerShape)
    }

    Box(
        modifier = styledModifier.border(
            width = borderWidth,
            color = colors.borderColor,
            shape = containerShape
        ),
        propagateMinConstraints = true,
        content = { content() }
    )
}
