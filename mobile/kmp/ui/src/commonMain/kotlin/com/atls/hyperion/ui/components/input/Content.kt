package com.atls.hyperion.ui.components.input

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.input.locals.LocalState
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.appearance.primary
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.styles.shape.md
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager

@Composable
internal fun InputContent(
    addons: AddonSlotManager,
    shape: InputShape,
    content: @Composable RowScope.() -> Unit
) {
    Row(
        modifier = Modifier.padding(shape.paddings),
        verticalAlignment = Alignment.CenterVertically
    ) {
        addons.get(AddonPosition.Before).forEach {
            it.Content()
            it.Spacer()
        }

        content()

        addons.get(AddonPosition.After).forEach {
            it.Spacer()
            it.Content()
        }
    }
}

@Composable
fun InputPlaceholder(
    modifier: Modifier = Modifier,
    text: String,
    appearance: InputAppearance = InputAppearance.primary(),
    shape: InputShape = InputShape.md()
) {
    Text(
        modifier = modifier,
        text = text,
        color = appearance.getColorsFromState(LocalState.current).textColor,
        style = shape.typography
    )
}
