package com.atls.hyperion.ui.components.pagination.stories

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.pagination.Pagination
import com.atls.hyperion.ui.components.pagination.style.appearance.PaginationAppearance
import com.atls.hyperion.ui.components.pagination.style.appearance.default
import com.atls.hyperion.ui.components.pagination.style.shape.PaginationShape
import com.atls.hyperion.ui.components.pagination.style.shape.circle
import com.atls.hyperion.ui.components.pagination.style.shape.rectangle

@Composable
fun ClickablePaginationVariants() {
    var currentPage by remember { mutableStateOf(1) }

    ComponentVariants(
        name = "Pagination (Clickable)",
        appearances = listOf(
            "Default" to { PaginationAppearance.default() }
        ),
        shapes = listOf(
            "Circle" to { PaginationShape.circle() },
            "Rectangle" to { PaginationShape.rectangle() }
        )
    ) { appearance: PaginationAppearance, shape: PaginationShape ->
        Pagination(
            currentPage = currentPage,
            count = 5,
            appearance = appearance,
            shape = shape,
            onPageClick = { currentPage = it }
        )
    }
}
