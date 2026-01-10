package com.atls.hyperion.ui.primitives

import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow

@Composable
fun Text(
    modifier: Modifier = Modifier,
    text: String,
    color: Color,
    typography: TextStyle,
    maxLines: Int = Int.MAX_VALUE,
    overflow: TextOverflow = TextOverflow.Ellipsis,
    textAlign: TextAlign? = null
) {
    Text(
        modifier = modifier,
        text = text,
        color = color,
        style = typography,
        overflow = overflow,
        maxLines = maxLines,
        textAlign = textAlign
    )
}

@Composable
fun Text(
    modifier: Modifier = Modifier,
    text: AnnotatedString,
    color: Color,
    typography: TextStyle,
    maxLines: Int = Int.MAX_VALUE,
    overflow: TextOverflow = TextOverflow.Ellipsis,
    textAlign: TextAlign? = null
) {
    Text(
        modifier = modifier,
        text = text,
        color = color,
        style = typography,
        overflow = overflow,
        maxLines = maxLines,
        textAlign = textAlign
    )
}
