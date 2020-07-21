import React from 'react'
import { IRouteComponentProps } from 'umi'

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
    console.log(location, route, history, match)
    return (
        <div>
            <div>这里是头部</div>
            {children}
            <div>这里是下面----</div>
        </div>
    )
}