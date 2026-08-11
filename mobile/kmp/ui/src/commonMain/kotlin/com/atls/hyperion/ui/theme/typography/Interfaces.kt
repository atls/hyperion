package com.atls.hyperion.ui.theme.typography

import androidx.compose.runtime.Immutable
import androidx.compose.ui.text.TextStyle

@Immutable
data class Display(
    val lg: TextStyle,
    val md: TextStyle,
    val sm: TextStyle
)

@Immutable
data class Heading(
    val lg: TextStyle,
    val md: TextStyle,
    val sm: TextStyle
)

@Immutable
data class Title(
    val lg: TextStyle,
    val md: TextStyle
)

@Immutable
data class Body(
    val lg: TextStyle,
    val md: TextStyle,
    val sm: TextStyle
)

@Immutable
data class Label(
    val lg: TextStyle,
    val md: TextStyle,
    val sm: TextStyle
)
