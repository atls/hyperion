package com.atls.hyperion.ui.components.avatar

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import com.atls.hyperion.ui.components.avatar.styles.appearance.AvatarAppearance
import com.atls.hyperion.ui.components.avatar.styles.shape.AvatarShape

@Composable
fun AvatarLayout(
    modifier: Modifier = Modifier,
    appearance: AvatarAppearance,
    shape: AvatarShape,
    content: @Composable BoxScope.() -> Unit
) {
    Box(
        modifier = modifier
            .size(shape.size)
            .border(
                shape.borderStroke,
                appearance.borderColor
            )
            .clip(RoundedCornerShape(shape.cornerRadius))
            .background(appearance.backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        content()
    }
}
