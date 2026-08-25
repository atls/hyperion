package com.atls.hyperion.ui.components.button

import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Dp
import com.atls.hyperion.ui.components.button.styles.shape.ButtonShape
import com.atls.hyperion.ui.shared.addon.Addon
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager

@Composable
internal fun ButtonContent(
    addons: AddonSlotManager,
    shape: ButtonShape,
    content: @Composable () -> Unit
) {
    val beforeAddons = addons.get(AddonPosition.Before)
    val afterAddons = addons.get(AddonPosition.After)

    BoxWithConstraints(modifier = Modifier.padding(shape.paddings)) {
        if (constraints.hasFixedWidth) {
            val sideWidth = (shape.addonSize + shape.gap) * maxOf(
                beforeAddons.size,
                afterAddons.size
            ).toFloat()

            Box(modifier = Modifier.fillMaxWidth()) {
                Addons(
                    addons = beforeAddons,
                    addonSize = shape.addonSize,
                    gap = shape.gap,
                    position = AddonPosition.Before,
                    modifier = Modifier.align(Alignment.CenterStart)
                )
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = sideWidth)
                        .align(Alignment.Center),
                    contentAlignment = Alignment.Center,
                    content = { content() }
                )
                Addons(
                    addons = afterAddons,
                    addonSize = shape.addonSize,
                    gap = shape.gap,
                    position = AddonPosition.After,
                    modifier = Modifier.align(Alignment.CenterEnd)
                )
            }
        } else {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Addons(
                    addons = beforeAddons,
                    addonSize = shape.addonSize,
                    gap = shape.gap,
                    position = AddonPosition.Before
                )
                Box(contentAlignment = Alignment.Center) {
                    content()
                }
                Addons(
                    addons = afterAddons,
                    addonSize = shape.addonSize,
                    gap = shape.gap,
                    position = AddonPosition.After
                )
            }
        }
    }
}

@Composable
private fun Addons(
    addons: List<Addon>,
    addonSize: Dp,
    gap: Dp,
    position: AddonPosition,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier,
        verticalAlignment = Alignment.CenterVertically
    ) {
        if (addons.isNotEmpty() && position == AddonPosition.After) {
            Spacer(modifier = Modifier.width(gap))
        }
        addons.forEachIndexed { index, addon ->
            if (index > 0) {
                Spacer(modifier = Modifier.width(gap))
            }
            Box(
                modifier = Modifier.size(addonSize),
                contentAlignment = Alignment.Center
            ) {
                addon.Content()
            }
        }
        if (addons.isNotEmpty() && position == AddonPosition.Before) {
            Spacer(modifier = Modifier.width(gap))
        }
    }
}
