package com.atls.hyperion.ui.components.input.typed.phone

import androidx.compose.ui.text.AnnotatedString
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class TransformationTest {
    @Test
    fun formatsInternationalNumberAndMapsEveryOffset() {
        val original = "+33689555555"
        val transformed = PhoneNumberVisualTransformation(
            createPhoneNumberFormatter("FR")
        ).filter(AnnotatedString(original))

        assertEquals("+33 6 89 55 55 55", transformed.text.text)

        (0..original.length).forEach { offset ->
            assertTrue(
                transformed.offsetMapping.originalToTransformed(offset) in
                    0..transformed.text.length
            )
        }
        (0..transformed.text.length).forEach { offset ->
            assertTrue(
                transformed.offsetMapping.transformedToOriginal(offset) in
                    0..original.length
            )
        }

        assertEquals(
            transformed.text.length,
            transformed.offsetMapping.originalToTransformed(original.length)
        )
        assertEquals(
            original.length,
            transformed.offsetMapping.transformedToOriginal(transformed.text.length)
        )
    }

    @Test
    fun keepsIdentityMappingWhenValueCannotBeFormatted() {
        val original = "not a phone"
        val transformed = PhoneNumberVisualTransformation(
            createPhoneNumberFormatter("US")
        ).filter(AnnotatedString(original))

        assertEquals(original, transformed.text.text)
        (0..original.length).forEach { offset ->
            assertEquals(offset, transformed.offsetMapping.originalToTransformed(offset))
            assertEquals(offset, transformed.offsetMapping.transformedToOriginal(offset))
        }
    }
}
