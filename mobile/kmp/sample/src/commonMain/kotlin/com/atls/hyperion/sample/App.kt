package com.atls.hyperion.sample

import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import com.atls.hyperion.storybook.Storybook
import com.atls.hyperion.ui.components.button.stories.ButtonExample

@Composable
fun App() {
    MaterialTheme {
        Storybook(
            components = listOf(
                ButtonExample(),
                ButtonExample()
            )
        )
    }
}
