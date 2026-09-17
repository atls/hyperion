package com.atls.hyperion.ui.shared.addon

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Icon
import androidx.compose.material.LocalContentColor
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.painterResource

class IconAddon(
    private val icon: DrawableResource
) : Addon {
    @Composable
    override fun Content() {
        Icon(
            painter = painterResource(icon),
            contentDescription = null,
            modifier = Modifier.fillMaxSize(),
            tint = LocalContentColor.current
        )
    }

    @Composable
    override fun Spacer() = Unit
}
