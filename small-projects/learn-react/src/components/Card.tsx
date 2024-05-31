import React from 'react'

type Props = {
    children: React.ReactNode
    bg?: string
}

const Card = ({ children, bg = "bg-grey-100" }: Props) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`} >
            {children}
        </div >
    )
}


export default Card
