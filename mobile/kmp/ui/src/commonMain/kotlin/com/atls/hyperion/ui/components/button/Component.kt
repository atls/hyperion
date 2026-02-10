package com.atls.hyperion.ui.components.button

import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import com.atls.hyperion.ui.components.button.locals.LocalState
import com.atls.hyperion.ui.components.button.styles.appearance.ButtonAppearance
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.shared.addon.AddonSlotManager

@Composable
fun Button(
    modifier: Modifier = Modifier,
    text: String,
    enabled: Boolean = true,
    appearance: ButtonAppearance,
    shape: ButtonShape,
    addons: AddonSlotManager = AddonSlotManager(),
    onClick: () -> Unit
) {
    ButtonLayout(
        modifier = modifier,
        enabled = enabled,
        appearance = appearance,
        shape = shape,
        addons = addons,
        onClick = onClick
    ) {
        Text(
            text = text,
            textAlign = TextAlign.Center,
            color = appearance.fromState(LocalState.current).textColor,
            style = shape.typography
        )
    }
}
