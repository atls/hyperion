package com.atls.hyperion.ui.components.carousel.style.shape

import com.atls.hyperion.ui.theme.tokens.layout.Space

fun CarouselShape.Companion.default() =
    CarouselShape(
        itemSpacing = Space.lg,
        peekWidth = Space.zero,
        padding = Space.xl3
    )
