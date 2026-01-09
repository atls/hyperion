package com.atls.hyperion.storybook.shared.model

import androidx.compose.runtime.Composable

interface ComponentExample {
    val name: String
    @Composable
    fun Content()
}
