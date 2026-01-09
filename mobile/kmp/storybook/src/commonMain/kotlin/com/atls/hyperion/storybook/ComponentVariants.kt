package com.atls.hyperion.storybook

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

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
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        Text(
            text = name,
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold
        )

        appearances.forEach { (appearanceName, appearanceProvider) ->
            Column(
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Text(
                    text = appearanceName,
                    fontSize = 20.sp,
                    fontWeight = FontWeight.SemiBold
                )

                shapes.forEach { (shapeName, shapeProvider) ->
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text(
                            text = shapeName,
                            fontSize = 16.sp,
                            modifier = Modifier.padding(top = 8.dp)
                        )
                        content(appearanceProvider(), shapeProvider())
                    }
                    Divider()
                }
            }
        }
    }
}
