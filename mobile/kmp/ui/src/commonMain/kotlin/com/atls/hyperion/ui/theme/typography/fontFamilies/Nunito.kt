package com.atls.hyperion.ui.theme.typography.fontFamilies

import androidx.compose.runtime.Composable
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import com.atls.hyperion.ui.generated.resources.*
import org.jetbrains.compose.resources.Font

@Composable
fun NunitoSansFontFamily() = FontFamily( //TODO remove after components refactoring
    Font(Res.font.NunitoSans_300, weight = FontWeight.W300),
    Font(Res.font.NunitoSans_400, weight = FontWeight.W400),
    Font(Res.font.NunitoSans_500, weight = FontWeight.W500),
    Font(Res.font.NunitoSans_600, weight = FontWeight.W600)
)
