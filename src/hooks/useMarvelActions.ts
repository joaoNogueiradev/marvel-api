'use client'

import { useMarvelService } from "@/context/MarvelContext"
import { Hero } from "@/models/Hero"
import { useEffect, useState } from "react"

export const useMarvelActions = () => {
    const marvelService = useMarvelService()
    const [heroes, setHeroes] = useState<Hero[]>([])
    const isLoading = heroes.length <= 0

    const fetchHeroes = async () => {
        const results = await marvelService.fetchAllHeroes()
        setHeroes(results)
    }

    useEffect(() => {
        fetchHeroes()
    }, [])

    return {
        isLoading,
        heroes
    }
}