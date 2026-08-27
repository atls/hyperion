package com.atls.hyperion.ui.components.button

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.LocalContentAlpha
import androidx.compose.material.LocalContentColor
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.semantics.Role
import com.atls.hyperion.ui.components.button.styles.appearance.Colors
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.primitives.elevation
import com.atls.hyperion.ui.theme.tokens.elevation.Elevation

@Composable
internal fun ButtonContainer(
    modifier: Modifier,
    enabled: Boolean,
    interactionSource: MutableInteractionSource,
    colors: Colors,
    elevation: Elevation,
    shape: ButtonShape,
    onClick: () -> Unit,
    content: @Composable () -> Unit
) {
    val buttonShape = RoundedCornerShape(shape.cornerRadius)
    val containerModifier = when (colors) {
        is Colors.Solid -> modifier
            .heightIn(min = shape.minHeight)
            .elevation(
                elevation = elevation,
                backgroundColor = colors.background,
                shape = buttonShape
            )

        is Colors.Gradient -> modifier
            .heightIn(min = shape.minHeight)
            .elevation(
                elevation = elevation,
                backgroundBrush = colors.background,
                shape = buttonShape,
                backgroundAlpha = colors.backgroundAlpha
            )
    }

    Surface(
        shape = buttonShape,
        color = Color.Transparent,
        contentColor = colors.content,
        border = BorderStroke(shape.borderWidth, colors.border),
        modifier = containerModifier.clickable(
            interactionSource = interactionSource,
            indication = null,
            enabled = enabled,
            role = Role.Button,
            onClick = onClick
        )
    ) {
        CompositionLocalProvider(
            LocalContentColor provides colors.content,
            LocalContentAlpha provides 1f,
            content = content
        )
    }
}
