package com.atls.hyperion.ui.components.list.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun ListShape.Companion.default(): ListShape =
    ListShape(
        paddings = PaddingValues(Space.zero),
        spacing = Space.zero
    )

@Composable
fun ListShape.Companion.flowRow(): ListShape =
    ListShape(
        paddings = PaddingValues(Space.zero),
        spacing = Space.sm
    )
