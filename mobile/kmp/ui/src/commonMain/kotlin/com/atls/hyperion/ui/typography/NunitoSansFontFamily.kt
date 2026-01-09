package com.atls.hyperion.ui.typography

import androidx.compose.runtime.Composable
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import com.atls.hyperion.ui.generated.resources.NunitoSans_300
import com.atls.hyperion.ui.generated.resources.NunitoSans_400
import com.atls.hyperion.ui.generated.resources.NunitoSans_500
import com.atls.hyperion.ui.generated.resources.NunitoSans_600
import org.jetbrains.compose.resources.Font
import com.atls.hyperion.ui.generated.resources.Res

@Composable
fun NunitoSansFontFamily() = FontFamily(
    Font(Res.font.NunitoSans_300, weight = FontWeight.W300),
    Font(Res.font.NunitoSans_400, weight = FontWeight.W400),
    Font(Res.font.NunitoSans_500, weight = FontWeight.W500),
    Font(Res.font.NunitoSans_600, weight = FontWeight.W600)
)
