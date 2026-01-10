package com.atls.hyperion.ui.components.card.stories

import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.card.Card
import com.atls.hyperion.ui.components.card.style.appearance.CardAppearance
import com.atls.hyperion.ui.components.card.style.appearance.white
import com.atls.hyperion.ui.components.card.style.shape.CardShape
import com.atls.hyperion.ui.components.card.style.shape.medium

class CardStory : ComponentExample {

    override val name: String = "Card"

    @Composable
    override fun Content() {
        ComponentVariants(
            name = "Card",
            appearances = listOf(
                "White" to { CardAppearance.white() }
            ),
            shapes = listOf(
                "Medium" to { CardShape.medium() }
            )
        ) { appearance: CardAppearance, shape: CardShape ->
            Card(
                appearance = appearance,
                shape = shape
            ) {
                Text("Card Content")
            }
        }
    }
}
