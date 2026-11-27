import type { AutocompleteFilter } from './interfaces.js'
export const filterAutocompleteOptions: AutocompleteFilter = (options, inputValue) => {
  const query = inputValue.toLowerCase()
  return options.filter((option) => option.label.toLowerCase().includes(query))
}
