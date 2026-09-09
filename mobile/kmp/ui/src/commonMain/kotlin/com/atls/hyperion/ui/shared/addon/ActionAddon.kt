package com.atls.hyperion.ui.shared.addon

import androidx.compose.foundation.clickable
import androidx.compose.ui.Modifier
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics

class ActionAddon(
    addon: Addon,
    val contentDescription: String,
    val enabled: Boolean = true,
    val onClick: () -> Unit
) : Addon by addon

internal fun Modifier.action(addon: Addon): Modifier = if (addon is ActionAddon) {
    semantics { contentDescription = addon.contentDescription }
        .clickable(
            enabled = addon.enabled,
            role = Role.Button,
            onClick = addon.onClick
        )
} else {
    this
}
