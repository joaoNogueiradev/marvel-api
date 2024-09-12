'use client'

import React, { createContext, PropsWithChildren, useContext } from "react"
import { IMarvelService } from "@/models/IMarvelService"
import { MarvelService } from "@/services/marvelService"

const MarvelContext = createContext<IMarvelService | undefined>(undefined)

export const MarvelProvider = ({children}:PropsWithChildren) => {
    const marvelService = new MarvelService()

    return(
        <MarvelContext.Provider value={marvelService}>
            {children}
        </MarvelContext.Provider>
    )
}

export const useMarvelService = () => {
    const context = useContext(MarvelContext)
    if(!context) throw new Error('useMarvelService must be used within a MarvelProvider')
        
    return context
}