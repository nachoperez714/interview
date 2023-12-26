import { useState } from "react"

export const useListItem  = ()  => { 
    const [loading, setLoading] = useState(true);

    return {
        loading,
        setLoading
    }
}

