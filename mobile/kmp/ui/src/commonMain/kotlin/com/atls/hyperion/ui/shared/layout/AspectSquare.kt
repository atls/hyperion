package com.atls.hyperion.ui.shared.layout

import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
fun Modifier.aspectSquare(): Modifier =
    this.aspectRatio(1f)
