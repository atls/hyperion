package com.atls.hyperion.ui.components.input.typed.phone

import com.bayocode.kphonenumber.KPhoneNumber
import com.bayocode.kphonenumber.PartialFormatter

private val phoneNumbers by lazy { KPhoneNumber() }

fun isValidPhoneNumber(value: String, region: String): Boolean =
    value.isEmpty() || phoneNumbers.isValidPhoneNumber(value, region.uppercase())

internal fun createPhoneNumberFormatter(region: String): PartialFormatter =
    phoneNumbers.partialFormatter(defaultRegion = region.uppercase())
