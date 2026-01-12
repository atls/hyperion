package com.atls.hyperion.ui.components.input.container

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.input.locals.LocalAppearance
import com.atls.hyperion.ui.components.input.locals.LocalState
import com.atls.hyperion.ui.components.input.state.InputState
import com.atls.hyperion.ui.components.input.style.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.style.appearance.blue
import com.atls.hyperion.ui.components.input.style.shape.InputShape
import com.atls.hyperion.ui.components.input.style.shape.normal
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager

@Composable
fun InputContainer(
    modifier: Modifier = Modifier,
    appearance: InputAppearance = InputAppearance.blue(),
    shape: InputShape = InputShape.normal(),
    state: InputState? = null,
    addons: AddonSlotManager = AddonSlotManager(),
    content: @Composable RowScope.(interactionSource: MutableInteractionSource) -> Unit
) {
    val interactionSource = remember { MutableInteractionSource() }
    val isFocused = interactionSource.collectIsFocusedAsState().value
    val isPressed = interactionSource.collectIsPressedAsState().value

    val resolvedState = state ?: when {
        isPressed -> InputState.Active
        isFocused -> InputState.Focused
        else -> InputState.Default
    }

    val colors = appearance.getColorsFromState(resolvedState)

    CompositionLocalProvider(
        LocalState provides resolvedState,
        LocalAppearance provides appearance
    ) {
        Row(
            modifier = modifier
                .border(
                    width = shape.borderStroke,
                    color = colors.borderColor,
                    shape = RoundedCornerShape(shape.cornerRadius)
                )
                .background(colors.backgroundColor, RoundedCornerShape(shape.cornerRadius))
                .padding(shape.paddings),
            verticalAlignment = Alignment.CenterVertically
        ) {
            addons.get(AddonPosition.Before).forEach {
                it.Content()
                it.Spacer()
            }

            content(interactionSource)

            addons.get(AddonPosition.After).forEach {
                it.Spacer()
                it.Content()
            }
        }
    }
}
