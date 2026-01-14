package com.atls.hyperion.ui.components.checkbox

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import com.atls.hyperion.ui.components.checkbox.locals.LocalState
import com.atls.hyperion.ui.components.checkbox.state.State
import com.atls.hyperion.ui.components.checkbox.styles.appearance.CheckboxAppearance
import com.atls.hyperion.ui.components.checkbox.styles.shape.CheckboxShape
import com.atls.hyperion.ui.primitives.icon.Icon
import com.atls.hyperion.ui.theme.tokens.layout.Weight

@Composable
fun Checkbox(
    modifier: Modifier = Modifier,
    state: State = State.Default,
    appearance: CheckboxAppearance,
    shape: CheckboxShape,
    icon: Painter? = null,
    onCheckedChange: ((Boolean) -> Unit)? = null
) {
    CompositionLocalProvider(LocalState provides state) {
        val state = LocalState.current
        val colors = appearance.fromState(state)

        Box(
            modifier = modifier
                .size(shape.size)
                .background(
                    color = colors.backgroundColor,
                    shape = RoundedCornerShape(shape.cornerRadius)
                )
                .border(
                    width = shape.borderStroke,
                    color = colors.borderColor,
                    shape = RoundedCornerShape(shape.cornerRadius)
                )
                .clickable {
                    onCheckedChange?.let { it(state != State.Checked) }
                },
            contentAlignment = Alignment.Center
        ) {
            if (state == State.Checked && icon != null) {
                Icon(
                    icon = icon,
                    color = colors.checkColor,
                    size = shape.size * Weight.large
                )
            } else if (state == State.Checked) {
                Box(
                    modifier = Modifier
                        .padding(shape.padding)
                        .matchParentSize()
                        .background(
                            color = colors.checkColor,
                            shape = RoundedCornerShape(shape.cornerRadius)
                        )
                )
            }
        }
    }
}
