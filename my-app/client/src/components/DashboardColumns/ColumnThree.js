import React from 'react'
import RecentKarma from '../RecentKarma/RecentKarma'
import { ColumnContainer } from './ColumnThree.styled'

const data = [
{
    postAuthor: 'Mary',
    postValue: '100',
    karmaHelpers: [
        {
        helperUsername: 'Bob',
        }
    ]
},
{
    postAuthor: 'Bob',
    postValue: '200',
    karmaHelpers: [
        {
        helperUsername: 'Mary',
        }
    ]
}
]


export default function ColumnThree(){
    return(
        <ColumnContainer>
            <h3>Recent Karma</h3>

                    {data.map((recentPost) => 
                    <RecentKarma data={recentPost} />
                    )}
                    
        </ColumnContainer>
    )
}