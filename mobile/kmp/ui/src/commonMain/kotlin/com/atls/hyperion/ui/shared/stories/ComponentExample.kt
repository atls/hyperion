package com.atls.hyperion.ui.shared.stories

import androidx.compose.runtime.Composable

interface ComponentExample {
    val name: String
    @Composable
    fun Content()
}
