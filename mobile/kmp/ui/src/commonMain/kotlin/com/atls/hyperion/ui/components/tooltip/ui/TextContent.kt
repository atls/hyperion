package com.atls.hyperion.ui.components.tooltip.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.primitives.Text
import com.atls.hyperion.ui.theme.tokens.colors.Colors
import com.atls.hyperion.ui.theme.tokens.layout.Weight
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.FontWeight

@Composable
fun TextTooltipContent(
    modifier: Modifier = Modifier,
    text: String,
    color: Color = Colors.Palette.black,
    typography: TextStyle = TextStyle(
        fontSize = FontSize.xs2,
        fontWeight = FontWeight.medium,
    ),
    onDismiss: () -> Unit
) {
    Box(
        modifier = modifier
            .clickable(onClick = onDismiss)
            .fillMaxWidth(Weight.large)
            .verticalScroll(rememberScrollState())
    ) {
        Text(
            text = text,
            color = color,
            typography = typography
        )
    }
}
