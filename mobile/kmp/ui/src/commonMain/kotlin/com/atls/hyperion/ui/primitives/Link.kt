package com.atls.hyperion.ui.primitives

import androidx.compose.foundation.clickable
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.TextStyle

@Composable
fun Link(
    modifier: Modifier = Modifier,
    textDecoration: String,
    url: String,
    color: Color,
    typography: TextStyle
) {
    val uriHandler = LocalUriHandler.current

    Text(
        modifier = modifier.clickable { uriHandler.openUri(url) },
        text = textDecoration,
        color = color,
        typography = typography.copy(color = color)
    )
}

@Composable
fun Link(
    modifier: Modifier = Modifier,
    textDecoration: AnnotatedString,
    url: String,
    color: Color,
    typography: TextStyle
) {
    val uriHandler = LocalUriHandler.current

    Text(
        modifier = modifier.clickable { uriHandler.openUri(url) },
        text = textDecoration,
        color = color,
        typography = typography.copy(color = color)
    )
}
