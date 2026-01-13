package com.atls.hyperion.ui.components.pagination.style.shape

import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.DpSize
import com.atls.hyperion.ui.components.pagination.style.PaginationItemSize
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun PaginationShape.Companion.circle(): PaginationShape =
    PaginationShape(
        activeSize = DpSize(PaginationItemSize.medium, PaginationItemSize.medium),
        disabledSize = DpSize(PaginationItemSize.small, PaginationItemSize.small),
        spacing = Space.lg,
        cornerRadius = CornerRadius.full
    )

@Composable
fun PaginationShape.Companion.rectangle(): PaginationShape =
    PaginationShape(
        activeSize = DpSize(PaginationItemSize.rectangleWidth, PaginationItemSize.rectangleHeight),
        disabledSize = DpSize(
            PaginationItemSize.rectangleWidth,
            PaginationItemSize.rectangleHeight
        ),
        spacing = Space.xs2,
        cornerRadius = CornerRadius.md
    )
