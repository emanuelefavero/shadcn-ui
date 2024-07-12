'use client'

import React, { createContext, useState } from 'react'

export const VisibilityContext = createContext({
  isMarketingSectionVisible: false,
  setIsMarketingSectionVisible: (isVisible: boolean) => {},
})

export function VisibilityProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMarketingSectionVisible, setIsMarketingSectionVisible] =
    useState(false)

  return (
    <VisibilityContext.Provider
      value={{
        isMarketingSectionVisible,
        setIsMarketingSectionVisible,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  )
}
