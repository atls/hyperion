package com.atls.hyperion.ui.components.avatar

import androidx.compose.foundation.layout.BoxScope
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import coil3.compose.AsyncImage
import com.atls.hyperion.ui.components.avatar.styles.appearance.AvatarAppearance
import com.atls.hyperion.ui.components.avatar.styles.shape.AvatarShape
import com.atls.hyperion.ui.primitives.image.Image

@Composable
fun Avatar(
    modifier: Modifier = Modifier,
    appearance: AvatarAppearance,
    shape: AvatarShape,
    content: @Composable BoxScope.() -> Unit = {}
) {
    AvatarLayout(
        modifier = modifier,
        appearance = appearance,
        shape = shape,
        content = content
    )
}

@Composable
fun Avatar(
    modifier: Modifier = Modifier,
    image: Painter,
    appearance: AvatarAppearance,
    shape: AvatarShape,
    contentScale: ContentScale = ContentScale.Fit
) {
    AvatarLayout(
        modifier = modifier,
        appearance = appearance,
        shape = shape
    ) {
        Image(
            image = image,
            contentScale = contentScale
        )
    }
}

@Composable
fun Avatar(
    modifier: Modifier = Modifier,
    imageUrl: String,
    appearance: AvatarAppearance,
    shape: AvatarShape
) {
    AvatarLayout(
        modifier = modifier,
        appearance = appearance,
        shape = shape
    ) {
        AsyncImage(
            modifier = Modifier
                .matchParentSize(),
            model = imageUrl,
            contentScale = ContentScale.Crop,
            contentDescription = null
        )
    }
}
