package com.atls.hyperion.ui.primitives

import androidx.compose.foundation.Image
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.ContentScale
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.painterResource

@Composable
fun Image(
    modifier: Modifier = Modifier,
    image: DrawableResource,
    contentScale: ContentScale = ContentScale.Fit,
    contentDescription: String? = null
) {
    Image(
        painter = painterResource(image),
        contentDescription = contentDescription,
        contentScale = contentScale,
        modifier = modifier
    )
}

@Composable
fun Image(
    modifier: Modifier = Modifier,
    image: ImageVector,
    contentScale: ContentScale = ContentScale.Fit,
    contentDescription: String? = null
) {
    Image(
        imageVector = image,
        contentDescription = contentDescription,
        contentScale = contentScale,
        modifier = modifier
    )
}

@Composable
fun Image(
    modifier: Modifier = Modifier,
    image: Painter,
    contentScale: ContentScale = ContentScale.Fit,
    contentDescription: String? = null
) {
    Image(
        painter = image,
        contentDescription = contentDescription,
        contentScale = contentScale,
        modifier = modifier
    )
}
