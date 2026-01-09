package com.atls.hyperion.ui.shared.stories

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.atls.hyperion.ui.theme.typography.FontSize

@Composable
fun <T, S> ComponentVariants(
    name: String,
    appearances: List<Pair<String, @Composable () -> T>>,
    shapes: List<Pair<String, @Composable () -> S>>,
    component: @Composable (appearance: T, shape: S) -> Unit
) {
    Column(modifier = Modifier.padding(16.dp)) {
        Text(
            text = name,
            fontSize = FontSize.large,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(bottom = 16.dp)
        )
        
        LazyColumn(verticalArrangement = Arrangement.spacedBy(24.dp)) {
            items(appearances) { (appearanceName, appearanceProvider) ->
                val appearance = appearanceProvider()
                Column {
                    Text(
                        text = "Appearance: $appearanceName",
                        fontWeight = FontWeight.SemiBold,
                        modifier = Modifier.padding(bottom = 8.dp)
                    )
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        shapes.forEach { (shapeName, shapeProvider) ->
                            val shape = shapeProvider()
                            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                component(appearance, shape)
                                Text(
                                    text = shapeName,
                                    fontSize = 12.sp,
                                    modifier = Modifier.padding(top = 4.dp)
                                )
                            }
                        }
                    }
                    Divider(modifier = Modifier.padding(top = 16.dp))
                }
            }
        }
    }
}
