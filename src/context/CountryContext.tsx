import React, { createContext, useContext, useState } from 'react'

type Country = 'germany' | 'uk' | 'both'

interface CountryContextType {
  selectedCountry: Country
  setSelectedCountry: (country: Country) => void
  showWorkInGermany: boolean
}

const CountryContext = createContext<CountryContextType | undefined>(undefined)

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [selectedCountry, setSelectedCountry] = useState<Country>('both')
  
  const showWorkInGermany = selectedCountry === 'germany' || selectedCountry === 'both'

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry, showWorkInGermany }}>
      {children}
    </CountryContext.Provider>
  )
}

export function useCountry() {
  const context = useContext(CountryContext)
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider')
  }
  return context
}