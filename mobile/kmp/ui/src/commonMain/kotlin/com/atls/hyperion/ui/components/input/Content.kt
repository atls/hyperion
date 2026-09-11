package com.atls.hyperion.ui.components.input

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.components.input.locals.LocalState
import com.atls.hyperion.ui.components.input.styles.appearance.InputAppearance
import com.atls.hyperion.ui.components.input.styles.appearance.primary
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.components.input.styles.shape.md
import com.atls.hyperion.ui.shared.addon.Addon
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import com.atls.hyperion.ui.shared.addon.ActionAddon
import com.atls.hyperion.ui.shared.addon.action

private val MinimumTouchTargetSize = 48.dp

@Composable
internal fun InputContent(
    addons: AddonSlotManager,
    shape: InputShape,
    enabled: Boolean,
    content: @Composable RowScope.() -> Unit
) {
    Row(
        modifier = Modifier.padding(shape.paddings),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Addons(
            addons = addons.get(AddonPosition.Before),
            addonSize = shape.addonSize,
            gap = shape.gap,
            enabled = enabled,
            position = AddonPosition.Before
        )

        content()

        Addons(
            addons = addons.get(AddonPosition.After),
            addonSize = shape.addonSize,
            gap = shape.gap,
            enabled = enabled,
            position = AddonPosition.After
        )
    }
}

@Composable
private fun Addons(
    addons: List<Addon>,
    addonSize: Dp,
    gap: Dp,
    enabled: Boolean,
    position: AddonPosition
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        if (addons.isNotEmpty() && position == AddonPosition.After) {
            Spacer(modifier = Modifier.width(gap))
        }
        addons.forEachIndexed { index, addon ->
            if (index > 0) {
                Spacer(modifier = Modifier.width(gap))
            }
            val addonModifier = if (addon is ActionAddon) {
                Modifier
                    .widthIn(min = MinimumTouchTargetSize)
                    .height(addonSize)
            } else {
                Modifier.size(addonSize)
            }

            Box(
                modifier = addonModifier.action(addon, enabled),
                contentAlignment = Alignment.Center
            ) {
                Box(
                    modifier = Modifier.size(addonSize),
                    contentAlignment = Alignment.Center
                ) {
                    addon.Content()
                }
            }
        }
        if (addons.isNotEmpty() && position == AddonPosition.Before) {
            Spacer(modifier = Modifier.width(gap))
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
