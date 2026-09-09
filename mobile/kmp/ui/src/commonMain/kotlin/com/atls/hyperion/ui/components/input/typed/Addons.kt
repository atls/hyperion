package com.atls.hyperion.ui.components.input.typed

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.material.LocalContentColor
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import com.atls.hyperion.ui.components.input.styles.shape.InputShape
import com.atls.hyperion.ui.primitives.HorizontalSpacer
import com.atls.hyperion.ui.primitives.icon.Icon
import com.atls.hyperion.ui.shared.addon.Addon
import com.atls.hyperion.ui.shared.addon.AddonPosition
import com.atls.hyperion.ui.shared.addon.AddonSlotManager
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.painterResource

internal fun AddonSlotManager.withInputSlots(
    before: List<Addon>? = null,
    after: List<Addon>? = null
): AddonSlotManager = AddonSlotManager(
    addons = addons.toMutableMap().apply {
        before?.let { put(AddonPosition.Before, it) }
        after?.let { put(AddonPosition.After, it) }
    }
)

internal fun iconAddon(
    resource: DrawableResource,
    shape: InputShape
): Addon = object : Addon {
    @Composable
    override fun Content() {
        Icon(
            icon = painterResource(resource),
            color = LocalContentColor.current,
            size = shape.addonSize
        )
    }

    @Composable
    override fun Spacer() {
        HorizontalSpacer(shape.gap)
    }
}

internal fun actionAddon(
    resource: DrawableResource,
    label: String,
    enabled: Boolean,
    shape: InputShape,
    onClick: () -> Unit
): Addon = object : Addon {
    @Composable
    override fun Content() {
        Box(
            modifier = Modifier
                .size(shape.addonSize)
                .semantics { contentDescription = label }
                .clickable(
                    enabled = enabled,
                    role = Role.Button,
                    onClick = onClick
                ),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                icon = painterResource(resource),
                color = LocalContentColor.current,
                size = shape.addonSize
            )
        }
    }

    @Composable
    override fun Spacer() {
        HorizontalSpacer(shape.gap)
    }
}
