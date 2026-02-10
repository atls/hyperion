package com.atls.hyperion.ui.components.pagination.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.runtime.Composable
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space

class PaginationStory : ComponentExample {
    override val name: String = "Pagination"

    @Composable
    override fun Content() {
        Column {
            ClickablePaginationVariants()

            VerticalSpacer(Space.xl3)

            CarouselPaginationVariants()
        }
    }
}
