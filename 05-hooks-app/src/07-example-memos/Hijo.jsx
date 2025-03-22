 import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="bg-blue-500 text-white py-2 px-4 m-2 rounded-sm"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
