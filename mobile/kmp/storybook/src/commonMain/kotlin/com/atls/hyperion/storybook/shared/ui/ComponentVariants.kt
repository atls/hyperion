package com.atls.hyperion.storybook.shared.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import com.atls.hyperion.storybook.shared.ui.theme.FontSize
import com.atls.hyperion.storybook.shared.ui.theme.Padding

@Composable
fun <A, S> ComponentVariants(
    name: String,
    appearances: List<Pair<String, @Composable () -> A>>,
    shapes: List<Pair<String, @Composable () -> S>>,
    content: @Composable (A, S) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(Padding.medium),
        verticalArrangement = Arrangement.spacedBy(Padding.large)
    ) {
        Text(
            text = name,
            fontSize = FontSize.large,
            fontWeight = FontWeight.Bold
        )

        appearances.forEach { (appearanceName, appearanceProvider) ->
            Column(
                verticalArrangement = Arrangement.spacedBy(Padding.medium),
            ) {
                Text(
                    text = appearanceName,
                    fontSize = FontSize.medium,
                    fontWeight = FontWeight.SemiBold
                )

                shapes.forEach { (shapeName, shapeProvider) ->
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text(
                            text = shapeName,
                            fontSize = FontSize.small,
                            modifier = Modifier.padding(top = Padding.tiny)
                        )
                        Spacer(Modifier.width(Padding.small))
                        content(appearanceProvider(), shapeProvider())
                    }
                    Divider()
                }
            }
        }
    }
}
