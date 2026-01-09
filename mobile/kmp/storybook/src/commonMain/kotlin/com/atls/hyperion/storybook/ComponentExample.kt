package com.atls.hyperion.storybook

import androidx.compose.runtime.Composable

interface ComponentExample {
    val name: String
    @Composable
    fun Content()
}
