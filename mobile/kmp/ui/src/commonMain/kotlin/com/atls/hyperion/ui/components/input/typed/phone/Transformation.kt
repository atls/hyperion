package com.atls.hyperion.ui.components.input.typed.phone

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.input.OffsetMapping
import androidx.compose.ui.text.input.TransformedText
import androidx.compose.ui.text.input.VisualTransformation
import com.bayocode.kphonenumber.PartialFormatter

@Composable
internal fun rememberPhoneNumberVisualTransformation(region: String): VisualTransformation =
    remember(region) {
        PhoneNumberVisualTransformation(createPhoneNumberFormatter(region))
    }

internal class PhoneNumberVisualTransformation(
    private val formatter: PartialFormatter
) : VisualTransformation {
    override fun filter(text: AnnotatedString): TransformedText {
        val formatted = formatter.formatPartial(text.text)

        return TransformedText(
            text = AnnotatedString(formatted),
            offsetMapping = if (formatted == text.text) {
                OffsetMapping.Identity
            } else {
                PhoneNumberOffsetMapping(text.text, formatted)
            }
        )
    }
}

private class PhoneNumberOffsetMapping(
    private val original: String,
    private val transformed: String
) : OffsetMapping {
    override fun originalToTransformed(offset: Int): Int =
        transformed.offsetAfterPhoneCharacters(original.take(offset).countPhoneCharacters())

    override fun transformedToOriginal(offset: Int): Int =
        original.offsetAfterPhoneCharacters(transformed.take(offset).countPhoneCharacters())
}

private fun String.countPhoneCharacters(): Int = count(Char::isPhoneCharacter)

private fun String.offsetAfterPhoneCharacters(count: Int): Int {
    if (count == 0) {
        return 0
    }

    var seen = 0
    forEachIndexed { index, char ->
        if (char.isPhoneCharacter()) {
            seen += 1
        }
        if (seen == count) {
            return index + 1
        }
    }

    return length
}

private fun Char.isPhoneCharacter(): Boolean = isDigit() || this == '+'
