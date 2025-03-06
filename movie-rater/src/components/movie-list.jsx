import React, { useState, useEffect } from "react";

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/movies/', {  // ✅ Ensure the trailing slash (Django prefers it)
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token 0dc37374dad67fac0e15240d038dbd24424cd2cf"
                    }
                });

                if (!response.ok) {  // ✅ Correct variable reference
                    throw new Error("Error fetching movies");
                }

                const result = await response.json();
                setMovies(result);
            } catch (err) {  // ✅ Added error parameter for debugging
                console.error("Fetch error:", err);
                setError("Error fetching movies");
            }
        };

        fetchMovies();
    }, []);

    if (error) return <h1>{error}</h1>;

    return (
        <div>
            <h1>Movie List</h1>
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <h2 key={movie.id}>{movie.title}</h2>
                ))
            ) : (
                <p>Loading...</p>  // ✅ Show a loading message if movies are empty
            )}
        </div>
    );
}
